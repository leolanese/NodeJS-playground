# NodeJS Playground

> `"JS everywhere" paradigm`, unifying web-application development around a single programming language, as opposed to using different languages for the server versus client-side programming.

> As a NodeJS developer, we're working with an event-driven, non-blocking I/O model, as the multithreading is abstracted away by libuv.

## What is NodeJS

> NodeJS is a `event-driven` `runtime` that provides a `single-threaded non-blocking asynchronous I/O model`

- `event-driven`: The flow is determninated by events

- `runtime`: (environment) where to run JS: browser, server, terminal, etc

- `single-threaded non-blocking asynchronous I/O model`: Node is single-thread but JS execution do NOT stop/block while waiting for I/O operation to complete. Allow us to handle tasks concurrently. NodeJS uses `LibUV` under the hood that provides `non-blocking I/O`, which indeed uses a `thread pool to perform asynchronous I/O operations`. This is a key aspect of the non-blocking I/O model in NodeJS

## NodeJS uses

NodeJS is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.

> This NodeJS playground is divided into 3 main uses of NodeJS: `Scripts`, `Mocking HTTP Services`, `WebSockets`

---

### Scripts

```js
/scripts/node <script-name>
```


### Full-Stack-JavaScript

1) 
```js
static/node app.js
static/node app2.js

// running app, no need for server
// Application started and Listening on port 3000
```

---

## Mocking HTTP services

2) Zero-Dependency Service Mock

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
// 1 terminal
> node-test/node server.js

[
    {id: '1', name: 'Leo Lanese', rrp: '1', info: 'Coding all day'},
    {id: '2', name: 'Tom', rrp: '2', info: 'Fighting with Sam'},
    {id: '3', name: 'Sam', rrp: '3', info: 'Fighting with Tom'}
]
```

```js
// 2 terminal
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

---

## Mocking GET/POST Routes

```js
// removing server.js
node -e "fs.unlinkSync('server.js')"
```


### Fastify Service

Now, We're going to generate a Fastify service. Fastify is a highly efficient, lightweight web framework for Node.js. It is designed to be as fast as possible while still providing a robust set of features and an easy-to-use, developer-friendly API.

why using Fastify?

- Performance: Fastify is designed for high performance. It has a minimalistic, lightweight design that aims to be as efficient as possible. It is often touted as one of the fastest web frameworks available for Node.js.

- Typescript Support: Fastify has good support for TypeScript, which can be a key factor for teams that prefer static typing for improved code reliability and developer productivity.

- Schema-Based: Fastify uses JSON Schema for validating routes and serializing outputs. This reduces overhead, increases the efficiency of your applications, and provides automated documentation.

Extendability: Fastify's robust and flexible plugin architecture allows developers to extend its core functionalities as per their requirements. This provides a combination of a lightweight core with the potential to scale up complexity when necessary.

```js
// static3
node -e "fs.mkdirSync('mock-server')"
cd mock-server
npm init fastify
npm i
npm i @fastify/cors
```

## Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)
This project was bootstrapped with Fastify-CLI.

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm start`

For production mode

#### `npm run test`

Run the test cases.

### Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).


## Back to the routes creation

we'll create the `two routes` (routes1, routes2). To create a route we can create a folder with an `index.js` file inside the routes folder.

```js
cd routes
node -e "fs.mkdirSync('routes1')"
node -e "fs.mkdirSync('routes2')"
cd ..
```

```js
// 1 terminal
node-test/static3/serve -p 5050

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

```js
// 2 terminal
node-test/static3/mock-server/npm run dev


[13:30:06.891] INFO (17231): incoming request
    reqId: "req-2"
    req: {
      "method": "GET",
      "url": "/routes1",
      "hostname": "localhost:3000",
      "remoteAddress": "::1",
      "remotePort": 53204
    }
[13:30:06.892] INFO (17231): request completed
```

### Conclusion:

The first `GET` is when we first selected "Option1" from the category selector. The OPTIONS request is triggered by the native fetch function before performing a `POST` request which happens directly after. The second `GET` request is after a page refresh and re-select of the "Option2" category.



---
### :100: <i>Thanks!</i>
#### Now, don't be an stranger. Let's stay in touch!

##### :radio_button: linkedin: <a href="https://www.linkedin.com/in/leolanese/" target="_blank">@LeoLanese</a>
##### :radio_button: Twitter: <a href="https://twitter.com/LeoLanese" target="_blank">@LeoLanese</a>
##### :radio_button: Portfolio: <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### :radio_button: DEV.to: <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### :radio_button: Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### :radio_button: Questions / Suggestion / Recommendation: developer@leolanese.com

