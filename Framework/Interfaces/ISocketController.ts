import * as express from 'express';
import * as socketIo from 'socket.io';
import { SocketControllerManager } from '../Controllers/SocketControllerManager';

interface ISocketController
{
    AttachEvents(socket: SocketIO.Socket):void;
    Manager: SocketControllerManager;
    OnConnection(socket: SocketIO.Socket):void;
    OnDisconnection(socket: SocketIO.Socket):void;
}

export default ISocketController;