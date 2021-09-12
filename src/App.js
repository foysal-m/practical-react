import React, { forwardRef } from 'react'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ColoredToolTip = () => {
  return <span style={{ color: 'yellow' }}>Colored Component</span>
}

const CustomComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <p>First line</p>
      <p>Second line</p>
    </div>
  )
})

function App() {
  return (
    <div className="App">
      <div style={{ paddingbottom: '20px' }}>
        <Tippy
          placement={'right'}
          content="Say Hello to Gias"
          arrow={false}
          delay={1000}
        >
          <button>Hover</button>
        </Tippy>
        <div style={{ paddingbottom: '20px' }}>
          <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
            <button>Hover</button>
          </Tippy>
        </div>
        <div style={{ paddingbottom: '20px' }}>
          <Tippy content={ColoredToolTip()}>
            <button>Hover</button>
          </Tippy>
        </div>
        <div style={{ paddingbottom: '20px' }}>
          <Tippy content={ColoredToolTip()}>
            <CustomComponent />
          </Tippy>
        </div>
      </div>
    </div>
  )
}

export default App
