'use client'

import React, { useEffect, useMemo, useState } from 'react'
import DataTable from '@/components/partials/table/DataTable'
import Icon from '@/components/ui/Icon'
import Tooltip from '@/components/ui/Tooltip'

const userTable = () => {
  const [dataUsers, setDataUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((res) => res.json())
      .then((data) => setDataUsers(data))
  }, [])

  const columns = [
    {
      Header: 'Nama',
      accessor: 'nama',
    },
    {
      Header: 'Username',
      accessor: 'username',
    },
    {
      Header: 'Divisi',
      accessor: 'divisi',
    },
    {
      Header: 'Password',
      accessor: 'password',
    },
    {
      Header: 'Role',
      accessor: 'role',
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
  ]

  return (
    <>
      <DataTable
        rowData={dataUsers}
        columnHeader={columns}
        tableTitle='Data User'
        addDataRoute='/add-user'
      />
    </>
  )
}

export default userTable
