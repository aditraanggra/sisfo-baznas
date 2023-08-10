import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const users = await prisma.pendis.findMany()

  return NextResponse.json(users)
}
