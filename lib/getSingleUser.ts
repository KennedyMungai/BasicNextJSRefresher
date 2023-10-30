export const getSingleUser = async (id: string) => {
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!userData.ok) {
        return undefined
    }

    const user = await userData.json()

    return user
}