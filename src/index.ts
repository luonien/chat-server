import Koa from 'koa'
import { createServer } from 'http'
import { Server } from 'socket.io'
const app = new Koa()
app.use(async (ctx) => {
  ctx.body = 'Hello World'
})
const httpServer = createServer(app.callback())
const io = new Server(httpServer)

io.on('connection', (socket) => {
  socket.on('message',data=>{
    console.log(data)
      // 广播消息
  socket.broadcast.emit('message',data)
  })

  socket.on('user',data=>{
  socket.broadcast.emit('user',{'stat':1,'name':data.name})
  })

})
httpServer.listen(4012,()=>{console.log('4012');
})
