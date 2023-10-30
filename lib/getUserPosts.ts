export const getUserPosts = async (userId: string) => {
    const postData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    if (!postData.ok) {
        throw new Error('Failed to get the post items')
    }

    return postData.json()
}