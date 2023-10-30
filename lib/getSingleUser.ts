export const getSingleUser = async (id: string) => {
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    const user = await userData.json()

    return user
}