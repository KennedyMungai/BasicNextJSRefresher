import { getSingleUser } from '@/lib/getSingleUser'
import { getUserPosts } from '@/lib/getUserPosts'
import React from 'react'

type Props = {
	params: {
		userId: string
	}
}

const SingleUserPage = async ({ params: { userId } }: Props) => {
	const user: Promise<User> = await getSingleUser(userId)
	const userPosts: Promise<Post[]> = await getUserPosts(userId)

	return <div>SingleUserPage</div>
}

export default SingleUserPage
