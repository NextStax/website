export default function Header() {
	return (
		<div className='w-screen'>
			<h1
				data-testid='header'
				className='text-6xl leading-normal bg-clip-text font-extrabold'
			>
				Futura City
			</h1>
			<h2 data-testid='subheader' className='text-2xl pb-8 max-w-md mx-auto'>
				Select your land
			</h2>
		</div>
	)
}
