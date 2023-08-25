import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const users = await prisma.pendis.findMany({
    select: {
      id: true,
      status: true,
      no_register: true,
      tgl_Register: true,
      nama_pemohon: true,
      alamat_pemohon: true,
      kecamatan: true,
      desa: true,
      asnaf: true,
      program: true,
      jml_penerima_manfaat: true,
      besar_permohonan: true,
      besar_realisasi: true,
      tgl_realisasi: true,
      ket_disposisi: true,
      uploadData: true,
    },
  })

  return NextResponse.json(users)
}
