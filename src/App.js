import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <ReactPlayer
        width="480px"
        height="280px"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        controls
        onReady={() => console.log('ready')}
        onPlay={() => console.log('started')}
        onPause={() => console.log('paused')}
        onEnded={() => console.log('Ended')}
        onError={() => console.log('error')}
      />
    </div>
  )
}

export default App
