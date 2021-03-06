import Header from '@/components/Header'
import Container from '@/components/layout/Container'
import Map from '@/components/canvas/Map'
import CanvasElement from '@/components/canvas/Canvas'
import { Sky } from '@react-three/drei'

export default function Home() {
	return (
		<>
			<main data-testid='index'>
				<Container>
					<CanvasElement>
						<Map />
						<Sky
							distance={450000}
							sunPosition={[0, 1, 0]}
							inclination={0}
							azimuth={0.25}
						/>
					</CanvasElement>
					<Header />
				</Container>
			</main>
		</>
	)
}
