import ISocketController from '../Interfaces/ISocketController';
import { SocketControllerManager } from './SocketControllerManager';
import { Logger } from '../TypedMVC';

export class BaseSocketController implements ISocketController
{
    Manager: SocketControllerManager = {} as SocketControllerManager;

    constructor()
    {
    }



    AttachEvents(socket: SocketIO.Socket)
    {
        if (process.env.NODE_ENV != 'production')
            Logger.Log(`Chat Socket Events Attached`);
    }

    OnConnection(socket: SocketIO.Socket):void
    {

    }

    OnDisconnection(socket: SocketIO.Socket):void
    {

    }
}