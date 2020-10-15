<h3 align="center">
    Hati AAC
    <br><br>
</h3>

<img src="https://i.imgur.com/sL2OeT7.png">


## 🔖 About
<strong>Haiti</strong> is a project for the purpose of studying Javascript.

- Express
- React
- Redux
- Cookie
- MySQL
- Axios
- Sequelize
- Bootstrap
- Bundle
- Sass
- Joi
- Crypto
- React e dependencies.

<p align="center">
  <img width="115" height="100%" src="https://swellcom.com/content/wp-content/uploads/2017/09/api.png" alt="API RESTful"></a>
</p>

<h3 align="center">API RESTful - MySQL - Sequelize</h3>

<div align="center">
  
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## Apresentação:

BackEnd Project: RESTful API following **MVC** concept using Stack **NodeJS**, standardizing the code with **Eslint** and **Prettier**.


Main packages: **Express** responsible for creating routes, Middleware **JWT** for token persistence for 30 minutes, maintaining the user's security and credibility, ORM **Sequelize** for connection to MySQL database (**Sequelize**) and finally, **Joi** to perform validations.

Routes mapped from Insomnia exported file: `Insomnia.json`

## Requirements

#### Sign up

- [x] This endpoint should receive a user with the following fields: account name, email, password

```java
{
  "name": "string",
  "email": "string",
  "password": "password",
}
```

- [x] Use status codes accordingly
- [x] In case of success a user will return the fields

* **id**: user id (can be the one generated by the bank, but it would be interesting
   if it was a GUID
* **created_date*: account creation date
* **updatedAt**: date of the account's last update, this column is generated by the sequelize itself.
* **last login**: date of the last login (in the case of creation, it will be the same as the
   creation)
* **token**: API access token (a JWT)

- [x] If the email already exists, you should return an error with the message "Email already
       existing".
- [x] Token must be persisted together with the user, using refresh token.

#### Sign in

- [x] This endpoint will receive an object with a name and password.
- [x] If the e-mail exists and the password is the same as the persisted password, return
       same as the `sign_up` endpoint.
- [x] If the email does not exist, return an error with the appropriate status plus the message
       "Invalid username and / or password"
- [x] If the email exists but the password does not match, return the appropriate status 401
       plus the message "Invalid username and / or password"

#### Buscar usuário

- [x] Calls to this endpoint must contain a header in the request for
       Authentication with the value "Bearer {token}" where {token} is the token value
       passed in the creation or sign in of a user.
- [x] If the token does not exist, return an error with the appropriate status with the message
       "Not authorized".
- [x] If the token exists, search for the user by the id passed in the path and compare
       if the token in the model is the same as the token passed in the header.
- [x] If not the same token, return error with appropriate status and message
       "Not authorized"
- [x] If it is the same token, check if the last login was LESS than 30
       minutes ago.
- [x] If not LESS than 30 minutes ago, return error with status
       appropriate with "Invalid session" message.
- [x] If everything is ok, return the user.

## Installation(building):

- Environment variable `.env.example`:

```java
SECRET_JWT=XXX
DB_CONN=
```

- Install dependencies: `yarn install` or` npm install`
- Deploy of the application: `yarn start or npm start`

## Routes - Account

**POST** `localhost:3001/account/sign-up`

```java
{
   "name": "123456",
   "email": "emailvalid@gmail.com",
   "password": "hatipassword",
}
```

**POST** `localhost:3001/account/sign-in`

```java
{
   "name": "123456",
   "password": "hatipassword"
}
```

## Routes - Players

**GET** `localhost:3001/player/characters`

notes: if you are not logged in, you will receive a token error, example: { "message": "Invalid token" }

```java
{
    "id": 1,
    "name": "123456",
    "email": "pedro@msn.com",
    "secret": "0",
    "type": 1,
    "premdays": 0,
    "lastday": 0,
    "creation": 0,
    "page_access": 0,
    "jwtVersion": 0,
    "createdAt": "2020-08-30T19:38:53.000Z",
    "updatedAt": "2020-08-30T19:38:53.000Z"
  },
  "metadata": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyNzI5MDY3LCJleHAiOjE2MDI3MzA4Njd9.1bcQTwQWxkApoxTN4C6mSM9tHIcMjI7tG3sWd1bcRUw",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidmVyc2lvbiI6MCwiaWF0IjoxNjAyNzI5MDY3LCJleHAiOjE2MDUzMjEwNjd9.RdKYU5m_rd_Y_gKe7oj5YaYl-qHYPrSsZRDjKm_jSg4"
        },
```

**GET** `localhost:3001/player/character/:name`

```java
{
    "count": 1,
    "rows": [
      {
        "id": 1,
        "name": "Pedro",
        "sex": 0,
        "vocation": 0,
        "town_id": 7,
        "level": 1,
        "health": 185,
        "healthmax": 185,
        "mana": 35,
        "manamax": 35,
        "soul": 100,
        "stamina": 0,
        "maglevel": 0,
        "lastlogin": 0,
        "skill_fist": 10,
        "skill_club": 10,
        "skill_sword": 10,
        "skill_axe": 10,
        "skill_dist": 10,
        "skill_shielding": 10,
        "skill_fishing": 10,
        "lookbody": 0,
        "lookfeet": 0,
        "lookhead": 0,
        "looklegs": 0,
        "looktype": 128,
        "lookaddons": 0,
        "player_deaths": []
      }
    ]
  }
```

**GET** `ocalhost:3001/player/highscores?vocation=all&skill=level&page=0`

```java
 {
      "id": 1,
      "name": "Pedro",
      "group_id": 1,
      "level": 1,
      "vocation": 0,
      "health": 185,
      "healthmax": 185,
      "experience": 4200,
      "lookbody": 0,
      "lookfeet": 0,
      "lookhead": 0,
      "looklegs": 0,
      "looktype": 128,
      "lookaddons": 0,
      "maglevel": 0,
      "mana": 35,
      "manamax": 35,
      "manaspent": 0,
      "soul": 100,
      "town_id": 7,
      "posx": 157,
      "posy": 54,
      "posz": 7,
      "conditions": {
        "type": "Buffer",
        "data": [
          48
        ]
      },
      "cap": 930,
      "sex": 0,
      "lastlogin": 0,
      "lastip": 0,
      "save": 1,
      "skull": false,
      "skulltime": 0,
      "lastlogout": 0,
      "blessings": 0,
      "onlinetime": 0,
      "deletion": 0,
      "balance": 0,
      "offlinetraining_time": 0,
      "offlinetraining_skill": 0,
      "stamina": 0,
      "skill_axe": 10,
      "skill_axe_tries": 0,
      "skill_sword": 10,
      "skill_sword_tries": 0,
      "skill_club": 10,
      "skill_club_tries": 0,
      "skill_fist": 10,
      "skill_fist_tries": 0,
      "skill_shielding": 10,
      "skill_shielding_tries": 0,
      "skill_dist": 10,
      "skill_dist_tries": 0,
      "skill_fishing": 10,
      "skill_fishing_tries": 0,
      "comment": "0",
      "signature": "0",
      "createdAt": "2020-10-15T02:42:14.000Z",
      "updatedAt": "2020-10-15T02:42:14.000Z",
      "account_id": 1
    }
```

**GET** `localhost:3001/player/` ? maybe refactor the names later, add a create, etc.

**Input**
```java
 {
 "name": "Github",
 "sex": 1
 }
 ```

**Output**
```java
 {
  "message": "Requisição bem sucedida.",
  "data": {
     "id": 2,
    "name": "Github",
    "sex": 1,
    "group_id": 1,
    "level": 1,
    "vocation": 0,
    "account_id": 1,
    "health": 185,
    "healthmax": 185,
    "experience": 4200,
    "lookbody": 0,
    "lookfeet": 0,
    "lookhead": 0,
    "looklegs": 0,
    "looktype": 128,
    "lookaddons": 0,
    "maglevel": 0,
    "mana": 35,
    "manamax": 35,
    "manaspent": 0,
    "soul": 100,
    "town_id": 7,
    "posx": 157,
    "posy": 54,
    "posz": 7,
    "conditions": 0,
    "cap": 930,
    "lastlogin": 0,
    "lastip": 0,
    "save": 1,
    "skull": false,
    "skulltime": 0,
    "lastlogout": 0,
    "blessings": 0,
    "onlinetime": 0,
    "deletion": 0,
    "balance": 0,
    "offlinetraining_time": 0,
    "offlinetraining_skill": 0,
    "stamina": 0,
    "skill_axe": 10,
    "skill_axe_tries": 0,
    "skill_sword": 10,
    "skill_sword_tries": 0,
    "skill_club": 10,
    "skill_club_tries": 0,
    "skill_fist": 10,
    "skill_fist_tries": 0,
    "skill_shielding": 10,
    "skill_shielding_tries": 0,
    "skill_dist": 10,
    "skill_dist_tries": 0,
    "skill_fishing": 10,
    "skill_fishing_tries": 0,
    "comment": 0,
    "signature": 0,
    "updatedAt": "2020-10-15T02:59:23.801Z",
    "createdAt": "2020-10-15T02:59:23.801Z"
  },
```




Important note: some routes `/ account /` it is necessary to pass in the ** header ** the parameter ** authentication ** containing the Token Bearer collected in the route `sigin-in`

## Test


```

## Contact

- [LinkedIn](https://www.linkedin.com/in/pedrogiampietro/)
- pedrogiampietro@hotmail.com

<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/pedrogiampietro" target="_blank">Pedro Giampietro</a>
</h4>
