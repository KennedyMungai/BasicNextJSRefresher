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
		<section>
			<h2>
				<Link href={'/'}>Back to Home</Link>
			</h2>
			<br />
			{users.map((user) => (
				<>
					<p key={user.id}>
						<Link href={`/users/${user.id}`}>{user.username}</Link>
					</p>
				</>
			))}
		</section>
	)

	return <div>{content}</div>
}

export default UsersPage
