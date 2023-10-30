import React from 'react'
import type { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
	title: 'Users'
}

const UsersPage = (props: Props) => {
	const usersData: Promise<User[]> = getAllUsers()

	return <div>page</div>
}

export default UsersPage
