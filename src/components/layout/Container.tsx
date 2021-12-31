export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<section className='h-screen flex flex-col justify-center align-middle text-center bg-gradient-to-br from-orange-400 to-violet-500 text-white'>
			{children}
		</section>
	)
}
