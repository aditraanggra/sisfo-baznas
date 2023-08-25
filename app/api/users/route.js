import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      username: true,
      password: true,
      image: true,
      divisi: true,
      role: true,
    },
  })

  return NextResponse.json(users)
}

export async function POST(request) {
  const body = await request.json()

  const user = await prisma.user.create({
    data: {
      name: body.name,
      username: body.username,
      password: await bcrypt.hash(body.password, 10),
      image: body.image,
      divisi: body.divisi,
      role: body.role,
    },
  })

  return NextResponse.json(user)
}
