import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'

import { a } from '@react-spring/three'
import { Scroll } from './Scroll'

export function Camera(props: any) {
	const [y] = Scroll([10, 300], { domTarget: window })

	const ref = useRef<any>()
	const set = useThree((state) => state.set)
	// Make the camera known to the system
	useEffect(() => {
		set({ camera: ref.current })
	}, [])
	// Update it every frame
	useFrame(() => {
		ref.current.updateMatrixWorld()
	})

	return (
		<a.perspectiveCamera
			ref={ref}
			aspect={window.innerWidth / window.innerHeight}
			{...props}
			//@ts-ignore
			position-y={y.to((y) => y)}
			onUpdate={(self: any) => self.updateProjectionMatrix()}
		/>
	)
}
