import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow'

import { TextInputNode } from './nodes/TextInputNode'
import { TextDisplayNode } from './nodes/TextDisplayNode';
 
import 'reactflow/dist/style.css'
import './app.css'

const nodeTypes = { textInput: TextInputNode, textDisplay: TextDisplayNode }
 
export default function App() {

  const [nodes, setNodes] = useNodesState([])
  const [edges, setEdges] = useEdgesState([])

  const [inputState, setInputState] = useState('')
  const [displayState, setDisplayState] = useState('')

  const updateInputState = (newState) => { setInputState(newState) }

  function handleRun() {
    setDisplayState(inputState)
  }

  useEffect(() => {
    
    setNodes([
      { id: 'n1', type: 'textInput', position: { x: 500, y: 300 }, data: { updateInputState } },
      { id: 'n2', type: 'textDisplay', position: { x: 800, y: 500 }, data: { textToDisplay: displayState } },
      { id: 'n3', type: 'textDisplay', position: { x: 800, y: 400 }, data: { textToDisplay: displayState } },
    ])
  
    setEdges([
      { id: 'e1', source: 'n1', target: 'n2', sourceHandle: 'a' }, 
      { id: 'e2', source: 'n1', target: 'n3', sourceHandle: 'b' }
    ])

  }, [displayState]);

  
 
  const onNodesChange = useCallback( (changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes] )
  const onEdgesChange = useCallback( (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges] )
  const onConnect = useCallback( (connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges] )
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      
      <button onClick={() => handleRun()}>RUN</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >        
      </ReactFlow>
      
    </div>
  );
}


