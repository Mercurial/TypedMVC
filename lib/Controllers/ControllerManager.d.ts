/// <reference types="express" />
import * as express from 'express';
import { IController } from '../Interfaces/IController';
export declare class ControllerManager {
    private _App;
    private _controllers;
    constructor(app: express.Application);
    Register(controller: any, prefix?: string): void;
    getControllers(): IController[];
}
