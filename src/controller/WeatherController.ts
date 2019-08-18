import { Request, Response } from 'express'
import axios from 'axios'
import { Params } from '../config/params'
import { getManager, getRepository } from 'typeorm'
import { Weather } from '../entity/Weather'
import { WeatherData } from '../type'

export class WeatherController {
  async get (req: Request, res: Response) {
    try {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=1819729&appid=${Params.openweatherApiKey}`)

      if (result.status !== 200) {
        throw new Error(`Open weather returned error status: ${result.status}`)
      }

      const weatherData: WeatherData = result.data
      const weather = new Weather()
      weather.setCoord(weatherData.coord)
      weather.setWeather(weatherData.weather)
      weather.setBase(weatherData.base)
      weather.setMain(weatherData.main)
      weather.setVisibility(weatherData.visibility)
      weather.setWind(weatherData.wind)
      weather.setClouds(weatherData.clouds)
      weather.setDt(weatherData.dt)
      weather.setSys(weatherData.sys)
      weather.setTimezone(weatherData.timezone)
      weather.setCountryId(weatherData.id)
      weather.setName(weatherData.name)
      weather.setCod(weatherData.cod)
      await getManager().save(weather)
      res.json(weather.toJson())
    } catch (error) {
      console.log(error.message)

      const weatherRepository = getRepository<Weather>(Weather)
      const weather = await weatherRepository.findOne({
        order: {
          id: 'DESC'
        }
      })

      res.json(weather.toJson())
    }
  }
}
