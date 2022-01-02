import { Color } from 'three'

export function Lights() {
	return (
		<>
			{/* <ambientLight intensity={0.05} /> */}
			{/* <pointLight
				intensity={1}
				position={[-5, 20, 10]}
				castShadow
				shadow-mapSize-width={8192}
				shadow-mapSize-height={8192}
				shadow-camera-left={-100}
				shadow-camera-right={100}
				shadow-camera-top={100}
				shadow-camera-bottom={-100}
				// shadow-camera-fov={50}
			/> */}
			<directionalLight
				intensity={0.8}
				position={[-4, 10, 8]}
				rotation={[Math.PI / 2, 0, 0]}
				castShadow
				shadow-mapSize-width={8192}
				shadow-mapSize-height={8192}
				shadow-camera-left={-100}
				shadow-camera-right={100}
				shadow-camera-top={100}
				shadow-camera-bottom={-100}
			/>
			<hemisphereLight
				intensity={0.6}
				color={new Color('0#fa913d')}
				groundColor={new Color('#7c3aeb')}
			/>
		</>
	)
}
