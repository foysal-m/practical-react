import React, { useState } from 'react'

import { SketchPicker } from 'react-color'

function App() {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)
  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? 'close color picker' : 'pick a color'}
      </button>
      {showColorPicker && (
        <SketchPicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}

      <h2>You picked {color}</h2>
    </div>
  )
}

export default App
