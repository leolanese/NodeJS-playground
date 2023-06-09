# NodeJS Playground

>  "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, as opposed to using different languages for the server versus client-side programming.

>  As a NodeJS developer, we're working with an event-driven, non-blocking I/O model, as the multithreading is abstracted away by libuv.

## NodeJS uses

NodeJS is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.


### Scrips

```js
/scripts/node <script-name>
```


### Full-Stack-JavaScript

0) 
```js
static/node app.js
static/node app2.js

// running app, no need for server
// Application started and Listening on port 3000
```


---

1) Zero-Dependency Service Mock

Our project folder should now contain the following:

```js
/server.js
/static/
   app.js
   index.html
```       

-> fetching API data from `http://localhost:3000`

Now let's open two terminal windows, both with the current working directory set to our project folder:

```js
// in the 1st terminal
node-test/node server.js

[
    {id: '1', name: 'Leo Lanese', rrp: '1', info: 'Coding all day'},
    {id: '2', name: 'Tom', rrp: '2', info: 'Fighting with Sam'},
    {id: '3', name: 'Sam', rrp: '3', info: 'Fighting with Tom'}
]
```

```js
// In the 2nd terminal window
node-test/serve -p 5050 static2

   ┌───────────────────────────────────────────┐
   │                                           │
   │   Serving!                                │
   │                                           │
   │   - Local:    http://localhost:5050       │
   │   - Network:  http://192.168.1.125:5050   │
   │                                           │
   │   Copied local address to clipboard!      │
   │                                           │
   └───────────────────────────────────────────┘
```