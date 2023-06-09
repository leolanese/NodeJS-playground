1) With mock json data

```js
node server.js
```


---

2) fetching API data from `http://localhost:3000`

Now let's open two terminal windows, both with the current working directory set to our project folder. In the first terminal window, we'll start our server like so:

```js
// in the forst terminal
node server2.js

[{"id":"A1","name":"Vacuum Cleaner","rrp":"99.99","info":"The suckiest vacuum in the world."},{"id":"A2","name":"Leaf Blower","rrp":"303.33","info":"This product will blow your socks off."},{"id":"B1","name":"Chocolate Bar","rrp":"22.40","info":"Delicious overpriced chocolate."}]
```

```js
// In the second terminal window
serve -p 5050 static

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