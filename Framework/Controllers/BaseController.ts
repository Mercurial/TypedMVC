import * as express from 'express';
import {IController} from '../Interfaces/IController';
import {RouteRole, Permissions} from '../Interfaces/IController';

export class BaseController implements IController {

    App: express.Application;
    BaseUrl: string;
    Prefix: string;
    RouteRoles: Array<RouteRole>;

    constructor(app: express.Application) {
        this.App = app;
        this.BaseUrl = "";
        this.Prefix = "";
        this.RouteRoles = new Array<RouteRole>();
    }

    Register() {
    }

    protected RegisterRoute(method: string, url: string, role: number = Permissions.Public, ...callbacks: Function[]) {
        const routeRole = {
            Route: `${this.Prefix}${this.BaseUrl}${url}`,
            Permission: role,
            Verb: method
        } as RouteRole;
        (this.App as any)[method](`${this.Prefix}${this.BaseUrl}${url}`, callbacks);
        this.RouteRoles.push(routeRole);
    }
}