export default function Header() {
	return (
		<div
			className='absolute top-0 w-screen'
			style={{
				background:
					'linear-gradient(180deg, rgba(0,0,0,80%) 0%, rgba(0,0,0,0) 100%)',
			}}
		>
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
