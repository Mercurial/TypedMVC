import * as express from 'express';

enum Permissions
{
    Public,
    Self,
    UserReadOnly,
    Moderator,
    Admin
}

interface RouteRoles
{
    Route: string;
    Permission: Permissions;
    Verb: string;
}

interface IController
{
    App: express.Application;
    BaseUrl: string;
    Prefix: string;
    RouteRoles: Array<RouteRoles>;
    Register():void;
}

export {Permissions, RouteRoles, IController}