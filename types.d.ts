type User = {
    id: number
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

type Address = {
    street: string
    suite: string
    city: string
    zipCode: string
    geo: GeoData
}

type GeoData = {
    lat: string
    lon: string
}

type Company = {
    name: string
    catchPhrase: string
    bs: string
}

type Post = {
    userId: number
    id: number
    title: string
    body: string
}