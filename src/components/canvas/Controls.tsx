import React, { useRef } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'

import { MapControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ MapControls })

export function Controls(props: any) {
	const controls = useRef<any>()
	const { camera, gl } = useThree()
	useFrame(() => {
		controls.current?.update()
	})
	return (
		//@ts-ignore
		<mapControls
			ref={controls}
			args={[camera, gl.domElement]}
			enableDamping={true}
			dampingFactor={0.05}
			minDistance={10}
			maxDistance={300}
			maxPolarAngle={Math.PI / 2 - 0.1}
			enableZoom={window.innerWidth >= 768 ? false : true}
			{...props}
		/>
	)
}
