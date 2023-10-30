export const getSingleUser = async (id: number) => {
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!userData.ok) {
        throw new Error(`Failed to get the user of id ${id}`)
    }

    const user = await userData.json()

    return user
}