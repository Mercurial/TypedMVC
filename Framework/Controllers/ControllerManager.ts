import * as express from 'express';
import {IController} from '../Interfaces/IController';

export class ControllerManager {

    private _App: express.Application;
    private _controllers: IController[];

    constructor(app: express.Application) {
        this._App = app;
        this._controllers = new Array<IController>();
    }

    public Register(controller: any, prefix?: string) {
        this._controllers.push(controller);

        if (prefix) {
            controller.Prefix = prefix;
        }

        controller.Register();
    }

    public getControllers() {
        return this._controllers;
    }
}