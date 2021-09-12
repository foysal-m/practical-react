import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function IdleTimerContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const idleTimerRef = useRef(null)
  const sessionTimeoutRef = useRef(null)
  const onIdle = () => {
    console.log('the user is idle')
    setModalIsOpen(true)
    sessionTimeoutRef.current = setTimeout(logOut, 5000)
  }

  const stayActive = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
  }

  const logOut = () => {
    setModalIsOpen(false)
    setIsLoggedIn(false)
    clearTimeout(sessionTimeoutRef.current)
  }
  return (
    <div>
      {isLoggedIn ? <h1>hello Foysal</h1> : <h2>Hello Guest</h2>}
      <Modal isOpen={modalIsOpen}>
        <h2>You've been away for a while!</h2>
        <p>You will be logged out soon!</p>
        <button onClick={logOut}>Log me out</button>
        <button onClick={stayActive}>Keep me signed</button>
      </Modal>
      <IdleTimer ref={idleTimerRef} timeout={5000} onIdle={onIdle}></IdleTimer>
    </div>
  )
}

export default IdleTimerContainer
