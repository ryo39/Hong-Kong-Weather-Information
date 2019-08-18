import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Coord, WeatherField, Main, Wind, Clouds, Sys, WeatherData } from '../type'

@Entity({ name: 'weather' })
export class Weather {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column('simple-json', { name: 'coord', default: null })
  coord: Coord

  @Column('simple-json', { name: 'weather', default: null })
  weather: Array<WeatherField>

  @Column('varchar', { name: 'base', default: null })
  base: string

  @Column('simple-json', { name: 'main', default: null })
  main: Main

  @Column('int', { name: 'visibility', default: null })
  visibility: number

  @Column('simple-json', { name: 'wind', default: null })
  wind: Wind

  @Column('simple-json', { name: 'clouds', default: null })
  clouds: Clouds

  @Column('int', { name: 'dt', default: null })
  dt: number

  @Column('simple-json', { name: 'sys', default: null })
  sys: Sys

  @Column('int', { name: 'timezone', default: null })
  timezone: number

  @Column('int', { name: 'country_id', default: null })
  countryId: number

  @Column('varchar', { name: 'name', default: null })
  name: string

  @Column('int', { name: 'cod', default: null })
  cod: number

  public toJson (): WeatherData {
    return {
      coord: this.getCoord(),
      weather: this.getWeather(),
      base: this.getBase(),
      main: this.getMain(),
      visibility: this.getVisibility(),
      wind: this.getWind(),
      clouds: this.getClouds(),
      dt: this.getDt(),
      sys: this.getSys(),
      timezone: this.getTimezone(),
      id: this.getCountryId(),
      name: this.getName(),
      cod: this.getCod()
    }
  }

  public getId (): number {
    return this.id
  }

  public setId (id: number): void {
    this.id = id
  }

  public getCoord (): Coord {
    return this.coord
  }

  public setCoord (coord: Coord): void {
    this.coord = coord
  }

  public getWeather (): Array<WeatherField> {
    return this.weather
  }

  public setWeather (weather: Array<WeatherField>): void {
    this.weather = weather
  }

  public getBase (): string {
    return this.base
  }

  public setBase (base: string): void {
    this.base = base
  }

  public getMain (): Main {
    return this.main
  }

  public setMain (main: Main): void {
    this.main = main
  }

  public getVisibility (): number {
    return this.visibility
  }

  public setVisibility (visibility: number): void {
    this.visibility = visibility
  }

  public getWind (): Wind {
    return this.wind
  }

  public setWind (wind: Wind): void {
    this.wind = wind
  }

  public getClouds (): Clouds {
    return this.clouds
  }

  public setClouds (clouds: Clouds): void {
    this.clouds = clouds
  }

  public getDt (): number {
    return this.dt
  }

  public setDt (dt: number): void {
    this.dt = dt
  }

  public getSys (): Sys {
    return this.sys
  }

  public setSys (sys: Sys): void {
    this.sys = sys
  }

  public getTimezone (): number {
    return this.timezone
  }

  public setTimezone (timezone: number): void {
    this.timezone = timezone
  }

  public getCountryId (): number {
    return this.countryId
  }

  public setCountryId (countryId: number): void {
    this.countryId = countryId
  }

  public getName (): string {
    return this.name
  }

  public setName (name: string): void {
    this.name = name
  }

  public getCod (): number {
    return this.cod
  }

  public setCod (cod: number): void {
    this.cod = cod
  }
}
