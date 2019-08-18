import { Route } from '.'
import { WeatherController } from '../controller/WeatherController'

export const WeatherRoute: Array<Route> = [{
  method: 'get',
  route: '/weather',
  controller: WeatherController,
  action: 'get',
  isPrivate: true
}]
