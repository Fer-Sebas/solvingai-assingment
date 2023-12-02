import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';


export function TextDisplayNode({ data, isConnectable }) {

  return (
    <div className="node">
        <Handle
            type='target'
            position={Position.Left}
            id="a"
            isConnectable={isConnectable}
        />

        <div>
            <label htmlFor="text">Text Display</label>
            <input type='text' placeholder={data.textToDisplay} disabled />
        </div>

    </div>
  )
}

