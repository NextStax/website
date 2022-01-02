import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
	Environment,
	Html,
	Instance,
	Instances,
	OrbitControls,
} from '@react-three/drei'
import { Ground } from './Ground'
import { Building } from './Building'
import { Lights } from './Lights'
import { Suspense } from 'react'

export default function CanvasElement({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div data-testid='map' className='h-full pb-10 px-20 bg-transparent'>
			<Canvas
				camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 30, 20] }}
				shadows
				gl={{ alpha: false }}
				onCreated={({ gl }) => {
					// gl.toneMapping = THREE.ACESFilmicToneMapping
					// gl.outputEncoding = THREE.sRGBEncoding
				}}
			>
				<Controls />
				<Suspense fallback={<Loader />}>{children}</Suspense>
			</Canvas>
		</div>
	)
}

function Controls() {
	return (
		<OrbitControls
			addEventListener={undefined}
			hasEventListener={undefined}
			removeEventListener={undefined}
			dispatchEvent={undefined}
			panSpeed={0}
			maxPolarAngle={Math.PI / 4}
			minPolarAngle={0}
			maxZoom={20}
			// maxAzimuthAngle={Math.PI / 4}
			// minAzimuthAngle={-Math.PI / 4}
			// enableZoom={false}
		/>
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
