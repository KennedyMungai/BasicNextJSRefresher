import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllUsers } from '@/lib/getAllUsers'

type Props = {}

export const metadata: Metadata = {
	title: 'Users'
}

const UsersPage = async (props: Props) => {
	const usersData: Promise<User[]> = getAllUsers()

	const users = await usersData

	const content = (
		<section className='h-full bg-zinc-700 p-5 m-5 flex flex-col items-center justify-center'>
			<h2>
				<Link href={'/'}>Back to Home</Link>
			</h2>
			<br />
			<div className=''>
				{users.map((user) => (
					<>
						<p
							key={user.id}
							className='bg-zinc-800 m-2 p-2 rounded-sm border-2 border-white hover:bg-zinc-700 transition hover:border-zinc-900 hover:border-2'
						>
							<Link href={`/users/${user.id}`}>
								{user.username}
							</Link>
						</p>
					</>
				))}
			</div>
		</section>
	)

	return <div>{content}</div>
}

export default UsersPage
