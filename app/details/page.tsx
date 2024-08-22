import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

 
const UserData = async () =>{
    const user = await client.user.findFirst({})

    return {
        email : user?.email
    }
}

export default async function User () {
    const FetchedData = await UserData() 

    return <div>
        {FetchedData.email}
    </div>
}