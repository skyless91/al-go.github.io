"use client"

import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import type * as THREE from "three"

// Extend Three Fiber with the GLTFLoader
extend({ GLTFLoader })

function Model({ url }: { url: string }) {
  const [error, setError] = useState<string | null>(null)
  const modelRef = useRef<THREE.Group>(null)
  const gltf = useLoader(GLTFLoader, url, undefined, (error) => {
    console.error("Error loading model:", error)
    setError("Failed to load 3D model")
  })

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
    }
  })

  if (error) {
    return null // The error will be displayed by the parent component
  }

  return <primitive object={gltf.scene} ref={modelRef} scale={[0.5, 0.5, 0.5]} />
}

export default function InteractiveModel({ modelUrl }: { modelUrl: string }) {
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="w-full h-[400px] bg-gray-800 rounded-lg overflow-hidden">
      {error ? (
        <div className="flex items-center justify-center h-full text-red-500">{error}</div>
      ) : (
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null}>
            <Model url={modelUrl} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      )}
    </div>
  )
}

