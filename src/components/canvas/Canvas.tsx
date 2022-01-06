import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { Suspense } from 'react'
import { Controls } from './Controls'
import { Camera } from './Camera'

export default function CanvasElement({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div data-testid='map' className='h-full bg-transparent'>
			<Canvas
				// camera={{ fov: 75, near: 0.1, far: 1500, position: [0, 100, 20] }}
				shadows
				gl={{ alpha: false }}
				onCreated={({ gl }) => {
					// gl.toneMapping = THREE.ACESFilmicToneMapping
					// gl.outputEncoding = THREE.sRGBEncoding
				}}
			>
				<fog attach='fog' args={['rgb(60,50,80)', 0.002, 1000]} />
				<Camera fov={75} near={0.1} far={1500} position={[0, 200, 40]} />
				<Controls />
				<Suspense fallback={<Loader />}>{children}</Suspense>
			</Canvas>
		</div>
	)
}

function Loader() {
	return (
		<Html fullscreen>
			<div className='h-full bg-gray-100'>
				<div className='h-full flex items-center justify-center space-x-2 animate-bounce'>
					<div className='w-8 h-8 bg-blue-400 rounded-full'></div>
				</div>
			</div>
		</Html>
	)
}
