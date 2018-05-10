import * as express from 'express';
import {IController} from '../Interfaces/IController';
import {RouteRole, Permissions} from '../Interfaces/IController';
import {Logger} from '../Log/Logger';

export class BaseController implements IController
{
    App: express.Application;
    BaseUrl: string;
    Prefix: string;
    RouteRoles: Array<RouteRole>;

    constructor(app: express.Application)
    {
        this.App = app;
        this.BaseUrl = "";
        this.Prefix = "";
        this.RouteRoles = new Array<RouteRole>();
    }

    Register()
    {

    }

    protected RegisterRoute(method:string, url: string, role: number = Permissions.Public, ...callbacks: Function[])
    {
        let routeRole = <RouteRole>{
            Route: `${this.Prefix}${this.BaseUrl}${url}`,
            Permission: role,
            Verb: method
        };
        (this.App as any)[method](`${this.Prefix}${this.BaseUrl}${url}`, callbacks);
        this.RouteRoles.push(routeRole);
    }
}