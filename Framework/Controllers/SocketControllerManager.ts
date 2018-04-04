import * as express from 'express';
import * as socketIo from 'socket.io';
import ISocketController from '../Interfaces/ISocketController';
import { Logger } from '../../typings/TypedMVC';
import { CommonSocketEvents } from '../Events/CommonSocketEvents';

export class SocketControllerManager
{

    App: express.Application;
    Io: SocketIO.Server;
    SocketControllers: ISocketController[];
    Sockets: SocketIO.Socket[];

    constructor(app: express.Application, io: SocketIO.Server)
    {
        this.App = app;
        this.Io = io;
        this.SocketControllers = new Array<ISocketController>();
        this.Sockets = new Array<SocketIO.Socket>();
        this.Io.on(CommonSocketEvents.CONNECTED, (s: SocketIO.Socket)=> { this.OnConnection(s) });
    }

    private OnConnection(socket: SocketIO.Socket) : void
    {
        Logger.Log(`A User has connected: ${socket.client.id}`);
        this.Sockets.push(socket);
        this.SocketControllers.map((controller, idx)=>
        {
            //Attach Controller Events
            controller.AttachEvents(socket);
            //Trigger Per Controller Connection Handler
            controller.OnConnection(socket);
        });
        //Add Disconnect handler
        socket.on(CommonSocketEvents.DISCONNECTED, () => { this.OnDisconnection(socket); });
    }

    private OnDisconnection = (socket: SocketIO.Socket) : void =>
    {
        Logger.Log(`A User has disconnected: ${socket.client.id}`);
        this.Sockets.splice(this.Sockets.indexOf(socket), 1);

        this.SocketControllers.map((controller, idx)=>
        {
            //Trigger Per Controller Disconnection Handler
            controller.OnDisconnection(socket);
        });
    }

    Register(controller: ISocketController)
    {
        controller.Manager = this;
        this.SocketControllers.push(controller);
    }

}