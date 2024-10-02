import './chat.scss'

const chatArray = [
  { id: 1, 
    isSend: false, 
    imgSrc: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?s=2048x2048&w=is&k=20&c=dfjN29cr1CyEzhR0RgRjCWSNMpSrLAKsZzMn_K9Aalo=',
    message: 'Koi aur motive nhi he is genuinely helping as of now' },
  { id: 2, 
    isSend: false, 
    imgSrc: null,
    message: 'Clutch se lko ke firm dekhti' },
  { id: 3, 
    isSend: true, 
    imgSrc: null,
    message: 'hmm baby' },
  { id: 4, 
    isSend: true, 
    imgSrc: null,
    message: 'hmm baby' },
  { id: 5, 
    isSend: false, 
    imgSrc: null,
    message: 'Yrr inne aankhein khol di🥲' },
  { id: 6, 
    isSend: true, 
    imgSrc: null,
    message: 'koi na bebo' },
  { id: 7, 
    isSend: false, 
    imgSrc: null,
    message: 'Yrr Vishal koi aisa senior abhitak merko lgta nhi Amity me jo cv achi khasi banaya ho Gravit bhaiya ko chor ke Unse hi puch sakti buss' },
  { id: 8, 
    isSend: false, 
    imgSrc: null,
    message: 'Yrr Vishal koi aisa senior abhitak merko lgta nhi Amity me jo cv achi khasi banaya ho Gravit bhaiya ko chor ke Unse hi puch sakti buss' },
  { id: 9, 
    isSend: false, 
    imgSrc: null,
    message: 'Yrr Vishal koi aisa senior abhitak merko lgta nhi Amity me jo cv achi khasi banaya ho Gravit bhaiya ko chor ke Unse hi puch sakti buss' },
  { id: 10, 
    isSend: false, 
    imgSrc: null,
    message: 'Yrr Vishal koi aisa senior abhitak merko lgta nhi Amity me jo cv achi khasi banaya ho Gravit bhaiya ko chor ke Unse hi puch sakti buss' },
  { id: 11, 
    isSend: false, 
    imgSrc: null,
    message: 'Yrr Vishal koi aisa senior abhitak merko lgta nhi Amity me jo cv achi khasi banaya ho Gravit bhaiya ko chor ke Unse hi puch sakti buss' },
  // { id: 8, isSend: true, message: '' },
  // { id: 9, isSend: true, message: '' },
  // { id: 10, isSend: true, message: '' },
]


function Chat() {
  return (
    <div className="chat-container">
      <div className="header">
        <span className="material-icons back">arrow_back</span>
        <div className="name">
          <p>{'vishal'}</p>
        </div>
        <div className="call">
          <span className="video material-icons">video_call</span>
          <span className="voice material-icons">call</span>
        </div>
      </div>
      <div className="mssg-container">
        <div className="mssgs">
          {
            chatArray.map((mssg)=>{
              const { id, isSend, message, imgSrc} = mssg;
               return <div key={id} className='mssg-box' style={isSend? {justifyContent: 'end'} : {justifyContent: 'strat'}}>
                <div className='mssg'>
                  { imgSrc && <img src={imgSrc} alt="img" />}
                  <p style={{}}>{message}</p>
                </div>
              </div>
            })
          }


        </div>
      </div>
      <div className="type-container">
          <span className="material-icons add">add</span>
          <div className="input">
            <input type="text" name="" id="" placeholder='Type Message'/>
          </div>
          <div className="send">
            <span className="material-icons">send</span>
          </div>
        </div>
    </div>
  )
}

export default Chat