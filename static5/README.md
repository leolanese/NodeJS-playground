# ES6+ features playground in NodeJS

> Modules in JavaScript help you separate your code into logical parts.

To use JavaScript ES6 modules in a local development environment, you need a server because most modern browsers block module loading from local file due to CORS policy.

One easy solution is to use a live server package, which you can set up with Node.js and npm. Here are the steps to do this:

Install Node.js and npm: You can download Node.js and npm from this link https://nodejs.org/. npm (Node package manager) comes bundled with Node.js.

## Install live-server: 
Once you have Node.js and npm installed, you can install live-server, which is a little development server with live reload capability. Use the following command to install live-server globally:

```js
npm install -g live-server
```

Set up your project: Create your project directory, and inside that directory, create your index.html, main.js, and mathModule.js files.

Run live-server: Navigate to your project directory in the command line, and run the following command:

```js
live-server
```

Your application will now be served at http://localhost:8080 or another available port. You can open this URL in a browser, and your JavaScript modules will load correctly.

> TIP: Remember that in your HTML file, you need to include the type="module" attribute in your script tag. To tells the browser that your script should be treated as an ES6 module.

```js
<script type="module" src="main.js"></script>
```