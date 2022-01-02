import Header from '@/components/Header'
import Container from '@/components/layout/Container'
import Map from '@/components/canvas/Map'
import SubHeader from '@/components/SubHeader'
import CanvasElement from '@/components/canvas/Canvas'

export default function Home() {
	return (
		<>
			<main data-testid='index'>
				<Container>
					<Header />
					<SubHeader />
					<CanvasElement>
						<Map />
					</CanvasElement>
				</Container>
			</main>
		</>
	)
}
