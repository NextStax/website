export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<section className='h-screen flex flex-col justify-center align-middle text-center bg-gradient-to-tl to-orange-400 from-violet-600 text-white'>
			{children}
		</section>
	)
}
