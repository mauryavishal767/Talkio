const localConnection = new RTCPeerConnection()

// get own SDP info
let SDP = ''
localConnection.onicecandidate = e =>  {
    SDP =  JSON.stringify(localConnection.localDescription)
}

const sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onmessage   = e => console.log("messsage received!!!"  + e.data )
sendChannel.onopen      = () => console.log("open!!!!");
sendChannel.onclose     = () => console.log("closed!!!!!!");

// create off to connect
localConnection.createOffer().then(o => localConnection.setLocalDescription(o) )