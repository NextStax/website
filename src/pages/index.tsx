import Header from '@/components/Header'
import Container from '@/components/layout/Container'
import Map from '@/components/Map'
import SubHeader from '@/components/SubHeader'

export default function Home() {
	return (
		<>
			<main data-testid='index'>
				<Container>
					<Header />
					<SubHeader />
					<Map />
				</Container>
			</main>
		</>
	)
}
