import React, { useEffect, useState } from 'react'
import './connect.scss'
import { json, useNavigate } from 'react-router-dom'

function Connect() {
  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [isPeerA, setIsPeerA] = useState(true)
  const [id1, setid1] = useState('abc12ciucgc')
  const [id2, setId2] = useState('')

  const submitForm = (e)=>{
    e.preventDefault()
  }
  
  function waitForSubmit(element, eventName) {
    return new Promise(resolve => {
      element.addEventListener(eventName, resolve, { once: true });
    });
  }


  const local = async ()=>{
    const localConnection = new RTCPeerConnection()
    localConnection.onicecandidate = () =>  {
      const localSDP =  JSON.stringify(localConnection.localDescription)
      setid1(localSDP)
    }
    const sendChannel = localConnection.createDataChannel("sendChannel");
    sendChannel.onmessage =e =>  console.log("messsage received!!!"  + e.data )
    sendChannel.onopen = e => console.log("open!!!!");
    sendChannel.onclose =e => console.log("closed!!!!!!");
    localConnection.createOffer().then(o => localConnection.setLocalDescription(o) )  

    const btn = document.getElementById('submit-btn')
    await waitForSubmit(btn, 'click')
    const ID_value = document.getElementById('friendId').value
    const ID2 = JSON.parse(ID_value)
    localConnection.setRemoteDescription(ID2).then(a=>console.log("done"))
  }

  const remote = async (offerSDP)=>{   
    const offer = JSON.parse(offerSDP)
    const remoteConnection = new RTCPeerConnection()
    let remoteSDP = ''
    remoteConnection.onicecandidate = () =>  {
      remoteSDP = JSON.stringify(remoteConnection.localDescription)      
    }
    remoteConnection.ondatachannel= (e) => {
      const receiveChannel = e.channel;
      receiveChannel.onmessage      =  (e) =>  console.log("messsage received!!!"  + e.data )
      receiveChannel.onopen         = () => console.log("open!!!!");
      receiveChannel.onclose        = () => console.log("closed!!!!!!");
      remoteConnection.channel      = receiveChannel;
    }

    remoteConnection.setRemoteDescription(offer).then(a=>console.log("done"))

    //create answer
    await remoteConnection.createAnswer().then(a => remoteConnection.setLocalDescription(a)).then(a=>{
      setid1(JSON.stringify(remoteConnection.localDescription))
      console.log(id1)
    })
    //send the anser to the client 
  }

  useEffect(() => {
    if(isPeerA){ 
      local()
    }
  }, [isPeerA, setIsPeerA])

  useEffect(() => {
    if(!isPeerA){ 
      remote(id2)
    }
  }, [isPeerA, setIsPeerA])
    
  const copy = async () => {
    await navigator.clipboard.writeText(id1);
    alert('Text copied');
  }

  return (
    <div className='connect-container'>
      <form onSubmit={submitForm}>
        <h1>Connect</h1>
        <div className='btn'>
          <p>{isPeerA? 'Send' : 'Receive'}</p>
          <input type="checkbox" id="peerA" value={isPeerA} onChange={()=>{setIsPeerA((prev)=> !prev)}}/>
          <label htmlFor="peerA">Toggle</label>
        </div>
        <div className='input'>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={fName} onChange={(e)=>{setfName(e.target.value)}}/>
        </div>
        <div className='input'>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lName} onChange={(e)=>{setlName(e.target.value)}}/>
        </div>
        <div className='input'>
          <label htmlFor="friendId">Friend's ID</label>
          <input type="text" value={id2} id="friendId" onChange={(e)=>{setId2(e.target.value)}}/>
        </div>
        <div className='input'>
          <label htmlFor="myId">
            My ID
            <span className="material-icons" onClick={copy}>content_copy</span>
          </label>
          <input type="text" name="" id="myId" value={id1} readOnly/>
        </div>
        <button type="submit" id='submit-btn'>Connect</button>
      </form>
    </div>
  )
}

export default Connect