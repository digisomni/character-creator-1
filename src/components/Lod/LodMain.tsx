import { render } from 'react-dom'
import React from 'react'
import { Canvas, Scene, useFrame} from '@react-three/fiber'
import { Detailed } from '@react-three/drei'
import LodControl from "."; 
import './styles.scss'

function Dolly() {
  useFrame((state) => {
    state.camera.position.z = 50 + Math.sin(state.clock.getElapsedTime()) * 30
    state.camera.updateProjectionMatrix()
  })
  return null
}

function LodControl() {
  return (
    <Canvas dpr={[1, 2]}>
      <Detailed distances={[0, 30, 60]}>
        <Scene/>
      </Detailed>
      <Dolly />
    </Canvas>
  )
}

export default LodControl;