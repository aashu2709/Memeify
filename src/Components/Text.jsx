import React, { useState } from 'react'
import {DraggableCore, Draggable} from 'react-draggable' 


function Text() {

  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");

  return (
    
      <Draggable>
        {editMode ? (
          <input 
          onDoubleClick={(e) => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)} 
          />

        ) : (
          <h1 onDoubleClick={(e) => setEditMode(true)}>{val}</h1>
        )}
         
      
      </Draggable>
  
  )
}

export default Text
