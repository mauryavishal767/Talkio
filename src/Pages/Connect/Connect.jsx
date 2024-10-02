import React from 'react'
import './connect.scss'

function Connect() {

  const copy = async () => {
    await navigator.clipboard.writeText('text');
    alert('Text copied');
  }

  return (
    <div className='connect-container'>
      <form>
        <h1>Connect</h1>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="" id="lastName" />
        </div>
        <div>
          <label htmlFor="friendId">Friend's ID</label>
          <input type="text" name="" id="friendId" />
        </div>
        <div>
          <label htmlFor="myId">
            My ID
            <span className="material-icons">content_copy</span>
          </label>
          <input type="text" name="" id="myId" value={'wqfdcdjhbdcvqcjhqc'} readOnly/>
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>
  )
}

export default Connect