import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const handleA = { left: 10 };

export function TextInputNode({ data, isConnectable }) {

  const {updateInputState} = data

  return (

    <div className="node">
        
      <div>
        <label htmlFor="text">Text Input</label>
        <input id="text" name="text" onChange={(evt) => updateInputState(evt.target.value) } className="nodrag" />
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleA}
        isConnectable={isConnectable}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
    />

    </div>
    
  )
}

