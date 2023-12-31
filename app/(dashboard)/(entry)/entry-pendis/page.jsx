'use client'

import React, { useEffect, useState } from 'react'
import Icon from '@/components/ui/Icon'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/partials/table/DataTable'

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const entryPendis = () => {
  const [dataPendis, setDataPendis] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/pendis')
      .then((res) => res.json())
      .then((data) => setDataPendis(data))
  }, [])

  const columns = [
    {
      Header: 'Id',
      accessor: 'id',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'action',
      accessor: 'action',
      Cell: (row) => {
        return (
          <div className='flex space-x-3 rtl:space-x-reverse'>
            <Tooltip
              content='View'
              placement='top'
              arrow
              animation='shift-away'
            >
              <button className='action-btn' type='button'>
                <Icon icon='heroicons:eye' />
              </button>
            </Tooltip>
            <Tooltip
              content='Edit'
              placement='top'
              arrow
              animation='shift-away'
            >
              <button className='action-btn' type='button'>
                <Icon icon='heroicons:pencil-square' />
              </button>
            </Tooltip>
            <Tooltip
              content='Delete'
              placement='top'
              arrow
              animation='shift-away'
              theme='danger'
            >
              <button className='action-btn' type='button'>
                <Icon icon='heroicons:trash' />
              </button>
            </Tooltip>
          </div>
        )
      },
    },
    {
      Header: 'status',
      accessor: 'status',
      Cell: (row) => {
        return (
          <span className='block w-full'>
            <span
              className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
                row?.cell?.value === 'Diproses'
                  ? ' text-warning-500 bg-warning-500 font-medium'
                  : ''
              } 
            ${
              row?.cell?.value === 'Ditolak'
                ? 'text-danger-500 bg-danger-500 font-medium'
                : ''
            }
            ${
              row?.cell?.value === 'Selesai'
                ? 'text-success-500 bg-success-500 font-medium'
                : ''
            }
            
             `}
            >
              {row?.cell?.value}
            </span>
          </span>
        )
      },
    },
    {
      Header: 'no register',
      accessor: 'no_register',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'tanggal register',
      accessor: 'tgl_Register',
      Cell: (row) => {
        return <span>{formatDate(row?.cell?.value)}</span>
      },
    },
    {
      Header: 'nama pemohon',
      accessor: 'nama_pemohon',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'alamat pemohon',
      accessor: 'alamat_pemohon',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'kecamatan',
      accessor: 'kecamatan',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'desa',
      accessor: 'desa',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'asnaf',
      accessor: 'asnaf',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'program',
      accessor: 'program',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'Jml Penerima Manfaat',
      accessor: 'jml_penerima_manfaat',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'besar permohonan',
      accessor: 'besar_permohonan',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'besar realisasi',
      accessor: 'besar_realisasi',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'tanggal realisasi',
      accessor: 'tgl_realisasi',
      Cell: (row) => {
        return <span>{formatDate(row?.cell?.value)}</span>
      },
    },
    {
      Header: 'disposisi',
      accessor: 'ket_disposisi',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
    {
      Header: 'upload',
      accessor: 'uploadData ',
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>
      },
    },
  ]
  return (
    <>
      <DataTable
        rowData={dataPendis}
        columnHeader={columns}
        tableTitle='Data Pendistribusian'
        addDataRoute='/pendis-add'
      />
    </>
  )
}

export default entryPendis
