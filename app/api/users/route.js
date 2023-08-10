import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const users = await prisma.users.findMany({
    select: {
      id: true,
      nama: true,
      divisi: true,
      email: true,
    },
  })

  return NextResponse.json(users)
}

export async function POST(request) {
  const body = await request.json()

  const user = await prisma.users.create({
    data: {
      nama: body.nama,
      email: body.email,
      divisi: body.divisi,
      password: body.password,
    },
  })

  return NextResponse.json(user)
}
