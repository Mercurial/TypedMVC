/// <reference types="express" />
import * as express from 'express';
declare enum Permissions {
    Public = 0,
    Self = 1,
    UserReadOnly = 2,
    Moderator = 3,
    Admin = 4,
}
interface RouteRoles {
    Route: string;
    Permission: Permissions;
    Verb: string;
}
interface IController {
    App: express.Application;
    BaseUrl: string;
    Prefix: string;
    RouteRoles: Array<RouteRoles>;
    Register(): void;
}
export { Permissions, RouteRoles, IController };
