import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: { backgroundColor: 'grey' },
          content: { color: 'orange' },
        }}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>

        <button onClick={() => setModalIsOpen(false)}>close X</button>
      </Modal>
    </div>
  )
}

export default App
