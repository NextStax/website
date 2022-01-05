import { OrbitControls } from '@react-three/drei'

export function Controls() {
	return (
		<OrbitControls
			addEventListener={undefined}
			hasEventListener={undefined}
			removeEventListener={undefined}
			dispatchEvent={undefined}
			panSpeed={0}
			maxPolarAngle={Math.PI / 2 - 0.1}
			minPolarAngle={0}
			maxZoom={20}
			// maxAzimuthAngle={Math.PI / 4}
			// minAzimuthAngle={-Math.PI / 4}
			// enableZoom={false}
		/>
	)
}
