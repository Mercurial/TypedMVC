import * as express from 'express';

enum Permissions
{
    Public,
    Self,
    UserReadOnly,
    Moderator,
    Admin
}

interface RouteRole
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
    RouteRoles: Array<RouteRole>;
    Register():void;
}

export {Permissions, RouteRole, IController}