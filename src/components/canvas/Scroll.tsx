import { useSpring, config } from '@react-spring/core'
import { useGesture } from 'react-use-gesture'
import { useCallback, useEffect } from 'react'
import clamp from 'lodash/clamp'

export function Scroll(bounds: [number, number], props: { domTarget: any }) {
	const [{ y }, set] = useSpring(() => ({ y: 50, config: config.default }))
	const fn = useCallback(
		({ xy: [, cy], previous: [, py], memo = y.get() }) => {
			const newY = clamp(memo + cy - py, ...bounds)
			set({ y: newY })
			return newY
		},
		[bounds, y, set]
	)
	const bind = useGesture({ onWheel: fn }, props)
	useEffect(() => props && props.domTarget && bind(), [props, bind])
	return [y, bind]
}
