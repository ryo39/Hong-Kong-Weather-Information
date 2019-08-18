import { Request } from 'express'
import { Response } from 'express-serve-static-core'
import { Params } from '../config/params'
import { TokenPayload } from '../type'
import { sign } from 'jsonwebtoken'

export class UserController {
  async login (req: Request, res: Response) {
    const expiresIn = 60 * 60
    const payload: TokenPayload = {
      userId: Params.allowedUserId,
      username: 'app it'
    }

    res.json({
      expiresIn,
      token: sign(payload, Params.jwtSecret, { expiresIn })
    })
  }
}
