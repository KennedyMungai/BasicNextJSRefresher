import UserPosts from '@/components/UserPosts'
import { getSingleUser } from '@/lib/getSingleUser'
import { getUserPosts } from '@/lib/getUserPosts'
import React, { Suspense } from 'react'

type Props = {
	params: {
		userId: string
	}
}

const SingleUserPage = async ({ params: { userId } }: Props) => {
	const userData: Promise<User> = await getSingleUser(userId)
	const userPostsData: Promise<Post[]> = await getUserPosts(userId)

	const user = await userData
	const userPosts = await userPostsData

	return (
		<>
			<h2 className='text-center uppercase bg-orange-500 p-5 rounded-sm'>
				{user.username}
			</h2>
			<br />
			<Suspense fallback={<h2>Loading...</h2>}>
				<UserPosts posts={await userPosts} />
			</Suspense>
		</>
	)
}

export default SingleUserPage
