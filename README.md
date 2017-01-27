# ifttt-blink1-maker-server
Server written in Node.js for connecting the [Blink(1)](https://github.com/todbot/blink1) with the Maker IFTTT channel.

There is an official IFTTT channel for the Blink(1), but it's client is Windows only. This is an alternative that can run on any system.

## Configuration and setup
The server runs locally at 127.0.0.1 on port 8080 by default, although this can be changed by editing the hostname and port in `simplerequestserver.js`.

The way I have connected this to IFTTT is through the [free ngrok service](https://ngrok.com/), which allows you to expose a local server to the Internet through a secure tunnel. This means that you can use the public link ngrok gives you in an IFTTT Maker recipe.

## Dependencies
This is project requires Node.js, which can be downloaded from [here](https://nodejs.org/en/download/).

## Run
Run using `node simplerequestserver.js`
