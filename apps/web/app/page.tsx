'use client';

import { useSocket } from "../context/SocketProvider";


export default function Page() {
  const { sendMessage } = useSocket()
  return (
    <div>
      <div>
        <h1>All messages appreas here</h1>
      </div>
      <div>
        <input type="text" placeholder="Type ypur message...." />
        <button>Send</button>
      </div>
    </div>

  )
}