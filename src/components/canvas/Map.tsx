import * as THREE from 'three'
import { Environment, Instance, Instances } from '@react-three/drei'
import { Ground } from './Ground'
import { Building } from './Building'
import { Lights } from './Lights'

type Building = {
	id: string
	position: any
}

let data = [] as Building[]
const buildingCount = 2500
for (let i = 0; i < buildingCount; i++) {
	const xMultiplier = Math.random() > 0.5 ? 500 : -500
	const zMultiplier = Math.random() > 0.5 ? 500 : -500
	const yMultiplier = Math.random() * 6
	data.push({
		id: `${i}`,
		position: new THREE.Vector3(
			Math.random() * xMultiplier,
			// Math.random() * yMulitplier,
			yMultiplier,
			Math.random() * zMultiplier
		),
	})
}

export default function Map() {
	return (
		<>
			<Lights />
			<Ground />
			{data.map(({ id, position }) => (
				<Building key={id} position={position} />
			))}
			{/* <Building position={[0, 2, 0]} /> */}
			{/* <Environment files={'adams_place_bridge_16k.hdr'} /> */}
		</>
	)
}
