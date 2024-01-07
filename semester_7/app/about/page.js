import { Dvr } from '@mui/icons-material'
import { PrismaClient } from '@prisma/client'

export default async function About() {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <td>Nama</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
            {users.map((item, i) => (
             // eslint-disable-next-line react/jsx-key
             <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
             </tr>
        ))}
        </tbody>
        </table>
        </>
    )
}