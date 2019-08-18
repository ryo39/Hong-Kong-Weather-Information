import { Route } from '.'
import { UserController } from '../controller/UserController'

export const UserRoute: Array<Route> = [{
  method: 'post',
  route: '/user/login',
  controller: UserController,
  action: 'login',
  isPrivate: false
}]
