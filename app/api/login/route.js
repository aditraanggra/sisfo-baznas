import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req) {
  const body = await req.json()

  const user = await prisma.users.findFirst({
    where: {
      username: body.username,
    },
  })

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user
    return new Response(JSON.stringify(userWithoutPass))
  } else return new Response(JSON.stringify(null))
}
