import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { extend, ThreeEvent } from '@react-three/fiber'

import { shaderMaterial } from '@react-three/drei'
import guid from 'short-uuid'
//@ts-ignore
import vertex from './glsl/shader.vert'
//@ts-ignore
import fragment from './glsl/shader.frag'
import { MeshPhongMaterial } from 'three'

const HighlightMaterial = shaderMaterial(
	{
		color: new THREE.Color(0.8, 0.8, 0.8),
	},
	vertex,
	fragment
)
// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
HighlightMaterial.key = guid.generate()
extend({ HighlightMaterial })

export default function Building({ ...props }: JSX.IntrinsicElements['mesh']) {
	const colorRef = useRef<MeshPhongMaterial>()
	const [hovered, setHovered] = useState(false)
	const [selected, setSelected] = useState(false)

	const handleHoverOver = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation()
		setHovered(true)
		console.log('hover over')
	}

	const handleHoverOut = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation()
		setHovered(false)
		console.log(colorRef.current)
	}

	const handleClick = useCallback(
		(e: ThreeEvent<MouseEvent>) => {
			e.stopPropagation()
			setSelected(!selected)
		},
		[selected]
	)

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto'
		if (!colorRef.current) return
		if (selected) {
			colorRef.current.color.set(0x8a2be2)
		} else if (hovered) {
			colorRef.current.color.set(0x9370db)
		} else {
			colorRef.current.color.set(0xffffff)
			// colorRef.current.emissive.set(0xa9a9a9)
		}
	}, [hovered, selected])

	return (
		<mesh
			onPointerOver={handleHoverOver}
			onPointerOut={handleHoverOut}
			onClick={handleClick}
			castShadow
			receiveShadow
			{...props}
		>
			<boxBufferGeometry args={[4, 12, 4]} />
			<meshPhongMaterial ref={colorRef} />
		</mesh>
	)
}
