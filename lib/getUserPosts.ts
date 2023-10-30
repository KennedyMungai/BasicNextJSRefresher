export const getUserPosts = async () => {
    const postData = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!postData.ok) {
        throw new Error('Failed to get the post items')
    }

    return postData.json()
}