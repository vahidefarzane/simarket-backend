const jsonServer = require('json-server')
const auth = require('json-server-auth')
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
app.db = router.db

app.use(middlewares)
app.use(auth)
app.use(router)
app.listen(4000)




// var jsonServer = require('json-server')
// var server = jsonServer.create()
// var router = jsonServer.router('db.json')
// var middlewares = jsonServer.defaults()

// function simpleAuth(req, res, next) {

//   if (req.headers.authorization) {

//     // user and password are stored in the authorization header
//     // do whatever you want with them
//     var user_and_password = new Buffer(req.headers.authorization.split(" ")[1], 'base64').toString();

//     // for example, get the username
//     var user_only = user_and_password.split(':')[0];


//     /*
//      *  I am not sure if you want to only send the user as a simple confirmation
//      *  or you want to apply your own logic, like, really authenticate/validate
//      *  the user against users database, static users .. etc
//      *
//      *  in production, it is recommended to validate the user by somehow.
//      */

    
//     // and save it in the request for later use in the `router.render` method
//     req.user = user_only;

//     // continue doing json-server magic
//     next();

//   } else {
//     // it is not recommended in REST APIs to throw errors,
//     // instead, we send 401 response with whatever erros
//     // we want to expose to the client
//     res.status(401).send({error: 'unauthorized'})
//   }
// }

// // this method overwrites the original json-server's way of response
// // with your custom logic, here we will add the user to the response
// router.render = function (req, res) {

//   // manually wrap any response send by json-server into an object
//   // this is something like `res.send()`, but it is cleaner and meaningful
//   // as we're sending json object not normal text/response
//   res.json({
//     user: req.user, // the user we stored previously in `simpleAuth` function
//     body: res.locals.data // the original server-json response is stored in `req.locals.data`
//   })
// }

// // start setting up json-server middlewares
// server.use(middlewares)

// // before proceeding with any request, run `simpleAuth` function
// // which should check for basic authentication header .. etc
// server.use(simpleAuth);

// // continue doing json-server magic
// server.use(router);

// // start listening to port 3000
// server.listen(3000, function () {
//   console.log('JSON Server is running on port 3000');
// })