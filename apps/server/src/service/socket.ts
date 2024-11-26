import {Server, Socket} from 'socket.io'

class SocketService  {
    private _io : Server;
    
    constructor (){
        console.log("Socket init");
     this._io = new Server({
        cors :{
            origin: '*',
            allowedHeaders: ['*'],
            methods: ['GET', 'POST'],
        }
     });
    }

    public initListners(){
        const io = this.io;
        io.on('connect', socket =>{
            console.log("new socket connected", socket.id);
            socket.on("event:message", async ({message}: {message:String})=>{
                console.log("new message recived", message);
            })
        })
    }

    get io(){
        return this._io;
    }
}


export default SocketService; 