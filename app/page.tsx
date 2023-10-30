import Link from 'next/link'

export default function Home() {
	return (
		<main className='h-screen w-screen p-10'>
			<h1>Hello World</h1>
			<p>
				<Link href='/about'>About Page</Link>
			</p>
		</main>
	)
}
