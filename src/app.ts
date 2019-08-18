import "reflect-metadata"
import { createConnection, Connection } from "typeorm"
import * as express from "express"
import { Request, Response } from "express"
import { Routes } from "./route/Route"
import passport = require("passport");
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { Params } from './config/params'

export class App {
  public app: express.Application

  constructor() {
    this.setApp(express())
    this.createConnection()
    this.initPassport()
    this.initializeController()
    this.listen()
  }

  private getApp(): express.Application {
      return this.app
  }

  private setApp(app: express.Application): void {
      this.app = app
  }

  private async createConnection(): Promise<Connection> {
    return await createConnection()
  }

  private initPassport (): void {
    const opts = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Params.jwtSecret
    }

    passport.use(new JWTStrategy(opts, (jwtPayload, done) => {
      if (jwtPayload.userId !== Params.allowedUserId) {
        done('user not found')
      }

      if (jwtPayload.exp < Math.round(+new Date()/1000)) {
        done('token expired')
      }
      
      done(null, jwtPayload.userId)
    }))
  }

  private initializeController(): void {
    Routes.forEach(route => {
      (this.getApp() as any)[route.method](route.route, route.isPrivate ? passport.authenticate('jwt', { session: false }) : [], (request: Request, response: Response, next: Function) => {
        return (new (route.controller as any))[route.action](request, response, next)
      })
    })
  }

  private listen(): void {
    this.getApp().listen(Params.port)
  }
  
}