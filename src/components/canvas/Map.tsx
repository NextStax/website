import * as THREE from 'three'
import { Environment, Instance, Instances } from '@react-three/drei'
import { Ground } from './Ground'
import { Building } from './Building'
import { Lights } from './Lights'

const buildingData = [
	{
		id: '1',
		position: new THREE.Vector3(0, 2, 0),
	},
	{
		id: '2',
		position: new THREE.Vector3(5, 2, 0),
	},
	{
		id: '3',
		position: new THREE.Vector3(-5, 2, 0),
	},
	{
		id: '4',
		position: new THREE.Vector3(10, 2, 0),
	},
	{
		id: '5',
		position: new THREE.Vector3(0, 2, -5),
	},
	{
		id: '6',
		position: new THREE.Vector3(5, 2, -5),
	},
	{
		id: '7',
		position: new THREE.Vector3(-5, 2, -5),
	},
	{
		id: '8',
		position: new THREE.Vector3(10, 2, -5),
	},
]

export default function Map() {
	return (
		<>
			<Lights />
			<Ground />
			{buildingData.map(({ id, position }) => (
				<Building key={id} position={position} />
			))}
			{/* <Building position={[0, 2, 0]} /> */}
			{/* <Environment files={'adams_place_bridge_16k.hdr'} /> */}
		</>
	)
}
