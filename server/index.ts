import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server, LobbyRoom } from 'colyseus'
import { monitor } from '@colyseus/monitor'

//Colyseus is a powerful framework for building multiplayer games and real-time applications. The  class is typically used to create and manage a game server. It allows you to define game rooms, handle player connections, manage state synchronization, and more.

const port = Number(process.env.PORT || 2567)
const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)
// Create a Colyseus server and attach it to the HTTP server

const gameServer = new Server({
    server,
})
// this allows you to host both a regular web server (to serve HTML/CSS/JavaScript, for example) and a WebSocket server (for real-time communication) on the same underlying server.

// register room handlers


// register colyseus monitor AFTER registering your room handlers
app.use('/colyseus', monitor())

gameServer.listen(port)
console.log(`Listening on ws://localhost:${port}`)

