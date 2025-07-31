import express, { Request, Response } from 'express';
import http from 'http'
import { Server as IOServer, Socket } from 'socket.io'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new IOServer(server, {
    cors: {
        // adjust in prod to your client URL
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket: Socket) => {
    console.log(`🟢 Client connected: ${socket.id}`)

    // example: echo back incoming messages
    socket.on('message', (payload: string) => {
        console.log(`📥 message from ${socket.id}:`, payload)
        socket.emit('message', `Echo: ${payload}`)
    })

    socket.on('disconnect', (reason) => {
        console.log(`Client disconnected: ${socket.id} (${reason})`)
    })
})

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('Express + TypeScript backend is up!');
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})