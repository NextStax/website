import Header from '@/components/Header'
import Container from '@/components/layout/Container'
import Map from '@/components/canvas/Map'
import CanvasElement from '@/components/canvas/Canvas'
import HtmlWrapper from '@/components/canvas/HtmlWrapper'

export default function Home() {
	return (
		<>
			<main data-testid='index'>
				<Container>
					<CanvasElement>
						<HtmlWrapper>
							<Header />
						</HtmlWrapper>
						<Map />
					</CanvasElement>
				</Container>
			</main>
		</>
	)
}
