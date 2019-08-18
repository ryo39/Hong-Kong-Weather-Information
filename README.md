# Hong-Kong-Weather-Information
This is a simple [Node.js](https://nodejs.org/en/) with [Typescript](https://www.typescriptlang.org/) API to get the weather inforamtion of Hong Kong using [OpenWeatherMap](https://openweathermap.org/).

### Prerequisites
Make sure you have a MySQL database running at port _3306_.

### Installation
Install the dependencies
```
npm install
```
Create a weather table
```
npm run migration
```

### Quick Start
Start the server
```
npm start
```
The application will run at: [http://localhost:3000](http://localhost:3000)

Get a bearer access token at: POST /user/login  
Example response: 
```
{
    "expiresIn": 3600,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU2Nzg5LCJ1c2VybmFtZSI6ImFwcCBpdCIsImlhdCI6MTU2NjEwNjQyMCwiZXhwIjoxNTY2MTEwMDIwfQ.mWMtSEBXZvBqxXwMRwnqhHS87GW8cuhhbMgL4GIqR8E"
}
```

Get the Hong Kong weather inforamtion at: Get / weather. Make sure you are using the bearer token to make the request  
> Authorization: Bearer <token>  
Example response:
```
{
    "coord": {
        "lon": 114.16,
        "lat": 22.29
    },
    "weather": [
        {
            "id": 521,
            "main": "Rain",
            "description": "shower rain",
            "icon": "09d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 301.12,
        "pressure": 1004,
        "humidity": 83,
        "temp_min": 300.15,
        "temp_max": 302.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 10.8,
        "deg": 230
    },
    "clouds": {
        "all": 40
    },
    "dt": 1566106831,
    "sys": {
        "type": 1,
        "id": 9154,
        "message": 0.0089,
        "country": "HK",
        "sunrise": 1566079295,
        "sunset": 1566125608
    },
    "timezone": 28800,
    "id": 1819729,
    "name": "Hong Kong",
    "cod": 200
}
```

### Lint
[Standard.js](https://standardjs.com/) with parser _@typescript-eslint/parser_ and plugin _@typescript-eslint/eslint-plugin_ are used to lint the application.

Try the following command to do the auto-fix. Please note that there might be some warnings.
```
npm run standard:fix
```
