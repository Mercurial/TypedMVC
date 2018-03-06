/// <reference types="express" />
import * as express from 'express';
import { IController } from '../Interfaces/IController';
import { RouteRoles } from '../Interfaces/IController';
export declare class BaseController implements IController {
    App: express.Application;
    BaseUrl: string;
    Prefix: string;
    RouteRoles: Array<RouteRoles>;
    constructor(app: express.Application);
    Register(): void;
    protected RegisterRoute(method: string, url: string, callback: any, role?: number): void;
}
