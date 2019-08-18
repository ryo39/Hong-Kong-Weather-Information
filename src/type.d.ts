export interface WeatherData {
    coord: Coord
    weather: Array<WeatherField>
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
  }

export interface Coord {
  lon: number
  lat: number
}

export interface WeatherField {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  pressure: number
  humidity: number
  temp_min: number
  temp_max: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}

export interface TokenPayload {
  userId: number,
  username: string
}
  