import React from 'react'

type Props = {
	posts: Post[]
}

const UserPosts = ({ posts }: Props) => {
	const content = posts.map((post) => {
		return (
			<article key={post.id} className='bg-zinc-800 rounded-sm p-5 m-5'>
				<h2 className='text-zinc-400 uppercase text-xl underline'>
					{post.title}
				</h2>
				<p>{post.body}</p>
			</article>
		)
	})

	return content
}

export default UserPosts
