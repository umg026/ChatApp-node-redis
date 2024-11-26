import http from 'http'
import SocketService from './service/socket';

async function init() {
    const httpServer = http.createServer();
    const socketService = new SocketService(); // create new socket service;

     socketService.io.attach(httpServer); // attch our socket service to the http server.
    const PORT = process.env.PORT ? process.env.PORT : 8000;

    httpServer.listen(PORT, ()=>{
        console.log(`Server started at : http://localhost:${PORT}`)
    })
    socketService.initListners(); // listen the init store 
}

init()