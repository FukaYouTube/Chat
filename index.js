const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 3000 })

server.on('connection', app => {
    app.on('message', msg => {
        if(msg === 'exit'){
            app.close()
        }else{
            server.clients.forEach(client => {
                if(client.readyState === WebSocket.OPEN){
                    client.send(msg)
                }
            })
        }
    })
    
    app.send('Welcome to Chat!')
})