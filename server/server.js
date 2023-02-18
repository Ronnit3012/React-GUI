import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Server } from 'socket.io';
import fs from 'fs';

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

let data;
try {
    const bufferData = fs.readFileSync('./good.csv')
    data = bufferData.toString();
} catch (error) {
    console.log(error)
}

data = data.split('\r\n');
data.shift();

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    }
});

io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`);
    let interval;
    socket.on('click', (command) => {
        if(command === 'start') {
            console.log(command)
            let cntr = -1;
            interval = setInterval(() => {
                cntr++;
                if(cntr >= data.length-1) {
                    clearInterval(interval);
                }

                const row = data[cntr].split(',');
                const obj = {
                    teamId : row[0],
                    missionTime : row[1],
                    packetCount : Number(row[2]),
                    mode : row[3],
                    state : row[4],
                    altitude : Number(row[5]).toFixed(1),
                    hsDeployed : row[6],
                    pcDeployed : row[7],
                    mastRaised : row[8],
                    temperature : Number(row[9]).toFixed(1),
                    voltage : Number(row[10]).toFixed(1),
                    pressure : Number(row[11]).toFixed(1),
                    gpsTime : row[12],
                    gpsAltitude : Number(row[13]).toFixed(1),
                    gpsLatitude : Number(row[14]).toFixed(4),
                    gpsLongitude : Number(row[15]).toFixed(4),
                    gpsSats : Number(row[16]),
                    tiltX : Number(row[17]).toFixed(2),
                    tiltY : Number(row[18]).toFixed(2),        
                    cmdEcho : row[19]
                }

                socket.emit('data', obj);
            }, 1000);
        } else if(command === 'stop') {
            clearInterval(interval);
        }
        socket.on('disconnect', () => {
            console.log(`Disconnected: ${socket.id}`)
        });
    })
})