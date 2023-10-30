export const getUserPosts = async (userId: string) => {
    const postData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { cache: 'force-cache' })

    if (!postData.ok) {
        throw new Error('Failed to get the post items')
    }

    return postData.json()
}