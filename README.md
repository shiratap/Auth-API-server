![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Auth-API Server

### Spencer Hirata

### Links and Resources
* [PR](https://github.com/shiratap/Auth-API-server/pull/1)
[![Build Status](https://travis-ci.com/shiratap/Auth-API-server.svg?branch=master)](https://travis-ci.com/shiratap/Auth-API-server)
* [back-end](https://arcane-scrubland-65783.herokuapp.com/)

#### Documentation
* [jsdoc](https://arcane-scrubland-65783.herokuapp.com/docs)

### Setup
#### `.env` requirements
MONGODB_URI=mongodb://localhost:27017/lab15
PORT=3000
SECRET=abcdefghijklmnop

#### Running the app
* `npm i`
* Populate .env
* `nodemon` or `npm start`
* Postman steps:
  1. signup with POST method to http://localhost:3000/signup with either methods
    a. the body contains `username:__username__` and `password:__password__`
    b. Basic authorization
  2. Take the token that was sent back and put it in as your bearer token. You're only a user when you sign up (not a admin or a editor, you can change your role in your mongoDB under the lab15 users tab. 'admin', 'editor')
  3. If an admin, you can go to the API routes:
    a. get ( /api/v1/:model ) model:['teams','players','categories']
    b. post ( /api/v1/:model ) model:['teams','players','categories']
    c. get ( /api/v1/:model/:id ) model:['teams','players','categories'], id[the id of any previous created models]
    d. put ( /api/v1/:model/:id ) model:['teams','players','categories'], id[the id of any previous created models]
    e. delete ( /api/v1/:model/:id ) model:['teams','players','categories'], id[the id of any previous created models]
  
#### Tests
* `npm run test`
* Testing:
  a. Authorization works
  b. Signin/signup routing works
  c. API routes work
