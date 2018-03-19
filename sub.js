const Room = require('ipfs-pubsub-room')
const IPFS = require('ipfs')
const ipfs = new IPFS({
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'
      ]
    }
  }
})

// IPFS node is ready, so we can start using ipfs-pubsub-room
ipfs.on('ready', () => {
  const room = Room(ipfs, 'we-dont-make-holograms')
  room.on('message', (message) => console.log('got message from ' + message.from + ': ' + message.data.toString()))
})
