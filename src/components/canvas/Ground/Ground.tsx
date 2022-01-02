import * as THREE from 'three'
import { extend } from '@react-three/fiber'

import { shaderMaterial } from '@react-three/drei'
import guid from 'short-uuid'
//@ts-ignore
import vertex from './glsl/shader.vert'
//@ts-ignore
import fragment from './glsl/shader.frag'

const GroundMaterial = shaderMaterial(
	{
		time: 0,
		color: new THREE.Color(0.8, 0.8, 0.8),
		color2: new THREE.Color(0.2, 0.2, 0.2),
	},
	vertex,
	fragment
)
// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
GroundMaterial.key = guid.generate()
extend({ GroundMaterial })

export default function Ground() {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
			<planeBufferGeometry args={[1000, 1000]} />
			<meshStandardMaterial color='lightgrey' />
			{/* @ts-ignore */}
			{/* <groundMaterial key={GroundMaterial.key} /> */}
		</mesh>
	)
}
