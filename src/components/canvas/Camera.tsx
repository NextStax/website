import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'

import { a } from '@react-spring/three'
import { Scroll } from './Scroll'
import clamp from 'lodash/clamp'

export function Camera(props: any) {
	const [y] = Scroll([1, 400], { domTarget: window })

	const ref = useRef<any>()
	const set = useThree((state) => state.set)
	// Make the camera known to the system
	useEffect(() => {
		set({ camera: ref.current })
	}, [])
	// Update it every frame
	useFrame(() => {
		ref.current.lookAt(0, 0, 0)
		ref.current.updateMatrixWorld()
	})

	return (
		<a.perspectiveCamera
			ref={ref}
			aspect={window.innerWidth / window.innerHeight}
			{...props}
			//@ts-ignore
			position-y={y.to((y) => clamp(y, 1, 400))}
			position-x={0}
			position-z={10}
			onUpdate={(self: any) => self.updateProjectionMatrix()}
		/>
	)
}
