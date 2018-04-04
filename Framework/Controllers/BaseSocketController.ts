import * as express from 'express';
import * as socketIo from 'socket.io';
import ISocketController from '../Interfaces/ISocketController';
import { Logger } from '../../typings/TypedMVC';
import { SocketControllerManager } from './SocketControllerManager';

export class BaseSocketController implements ISocketController
{
    Manager: SocketControllerManager = {} as SocketControllerManager;

    constructor()
    {
    }



    AttachEvents(socket: SocketIO.Socket)
    {
        Logger.Log(`Chat Socket Events Attached`);
    }

    OnConnection(socket: SocketIO.Socket):void
    {

    }

    OnDisconnection(socket: SocketIO.Socket):void
    {

    }
}