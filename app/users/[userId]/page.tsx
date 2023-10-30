import UserPosts from '@/components/UserPosts'
import { getAllUsers } from '@/lib/getAllUsers'
import { getSingleUser } from '@/lib/getSingleUser'
import { getUserPosts } from '@/lib/getUserPosts'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type Props = {
	params: {
		userId: string
	}
}

export async function generateMetadata({
	params: { userId }
}: Props): Promise<Metadata> {
	const userData: Promise<User> = getSingleUser(userId)
	const user: User = await userData

	if (!user.username) {
		return {
			title: 'User not found'
		}
	}

	return {
		title: user.username,
		description: `This is ${user.username}'s blog page`
	}
}

const SingleUserPage = async ({ params: { userId } }: Props) => {
	const userData: Promise<User> = await getSingleUser(userId)
	const userPostsData: Promise<Post[]> = await getUserPosts(userId)

	const user = await userData
	const userPosts = await userPostsData

	if (!user.username) {
		return notFound()
	}

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

export async function generateStaticParams() {
	const usersData: Promise<User[]> = await getAllUsers()
	const users: User[] = await usersData

	return users.map((user) => ({ userId: user.id.toString() }))
}
