'use client';
import React, { Children, useCallback, useContext, useEffect } from 'react'
import { io } from "socket.io-client";

interface SocketProviderProp {
    children: React.ReactNode;
}

interface ISocketContext {
    sendMessage: (msg: string) => any;
}
const SocketContext = React.createContext<ISocketContext | null>(null);

export const SocketProvider: React.FC<SocketProviderProp> = ({ children }) => {
    const sendMessage: ISocketContext['sendMessage'] = useCallback((msg) => {
        console.log("Send message", msg);
    }, []);

    useEffect(() => {
        const _socket = io('http://localhost:8000')

        return () => {
            _socket.disconnect();
        }
    }, [])
    return (
        <SocketContext.Provider value={{ sendMessage }}>
            {children}
        </SocketContext.Provider>
    )
}


// custom hook
export const useSocket = () => {
    const state = useContext(SocketContext);
    if (!state) throw new Error('state is undefine');

    return state;
}