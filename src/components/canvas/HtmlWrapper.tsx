import { Html } from '@react-three/drei'

export default function HtmlWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Html
			style={{
				transform: 'translate(-50vw, -50vh)',
				background:
					'linear-gradient(180deg, rgba(0,0,0,80%) 0%, rgba(0,0,0,0) 100%)',
			}}
		>
			{children}
		</Html>
	)
}
