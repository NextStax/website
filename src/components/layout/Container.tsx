export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<section className='h-screen flex flex-col justify-center align-middle text-center bg-transparent text-white'>
			{children}
		</section>
	)
}
