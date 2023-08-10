import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  const body = await req.json()

  const user = await prisma.users.findFirst({
    where: {
      username: body.username,
    },
  })
}
