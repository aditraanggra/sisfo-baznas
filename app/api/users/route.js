import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function GET() {
  const users = await prisma.users.findMany({
    select: {
      nama: true,
      username: true,
      divisi: true,
      password: true,
      role: true,
    },
  })

  return NextResponse.json(users)
}

export async function POST(request) {
  const body = await request.json()

  const user = await prisma.users.create({
    data: {
      nama: body.nama,
      username: body.username,
      divisi: body.divisi,
      password: await bcrypt.hash(body.password, 10),
      role: body.role,
    },
  })

  return NextResponse.json(user)
}
