'use client'

import Select from 'react-select'
import Card from '@/components/ui/Card'
import React from 'react'
import InputGroup from '@/components/ui/InputGroup'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
//import bcrypt from 'bcrypt'

const divisi = [
  { value: 'umum', label: 'Umum' },
  { value: 'sdm', label: 'SDM' },
  { value: 'pendistribusian', label: 'Pendistribusian' },
  { value: 'penghimpunan', label: 'Penghimpunan' },
  { value: 'pendayagunaan', label: 'Pendayagunaan' },
  { value: 'keuangan', label: 'PKP' },
]

const userRole = [
  { value: 'sysadmin', label: 'System Administrator' },
  { value: 'operator', label: 'Operator' },
  { value: 'approval', label: 'Approval' },
  { value: 'pimpinan', label: 'Pimpinan' },
]

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
  }),
}

const addUserForm = () => {
  const route = useRouter()

  const [nama, setNama] = useState('')
  const [username, setUsername] = useState('')
  const [division, setDivision] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  //const hashedPassword = bcrypt.hash(password, 10)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3000/api/users', {
      nama: nama,
      username: username,
      divisi: division,
      password: password,
      role: role,
    })
    setNama('')
    setUsername('')
    setDivision('')
    setPassword('')
    setRole('')
    route.push('/user')
  }

  const handleSelect = (select) => {
    setDivision(select.value)
  }

  const handleSelectRole = (select) => {
    setRole(select.value)
  }

  return (
    <div className=' grid xl:grid-cols-2 gap-4'>
      <Card title='Tambah Data User'>
        <div className='space-y-4'>
          <InputGroup
            label='Nama'
            id='hi_Fullname'
            type='text'
            placeholder='Full name'
            horizontal
            prepend={<Icon icon='heroicons-outline:user' />}
            merged
            onChange={(e) => setNama(e.target.value)}
            value={nama}
          />
          <InputGroup
            label='Username'
            id='hi_email'
            type='text'
            placeholder='Type your username'
            prepend={<Icon icon='heroicons-outline:user' />}
            horizontal
            merged
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <div className='flex flex-row items-center justify-between'>
            <span className=' md:w-[100px] w-[60px] font-inter text-sm font-medium mr-6'>
              Divisi
            </span>
            <div className=' flex-auto'>
              <Select
                className='react-select'
                classNamePrefix='select'
                styles={styles}
                name='clear'
                options={divisi}
                isClearable
                id='hh2'
                onChange={handleSelect}
              />
            </div>
          </div>
          <InputGroup
            label='Password'
            id='hi_password'
            type='Password'
            placeholder=' Password User '
            prepend={<Icon icon='heroicons-outline:lock-closed' />}
            horizontal
            merged
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className='flex flex-row items-center justify-between'>
            <span className=' md:w-[100px] w-[60px] font-inter text-sm font-medium mr-6'>
              Role
            </span>
            <div className=' flex-auto'>
              <Select
                className='react-select'
                classNamePrefix='select'
                styles={styles}
                name='clear'
                options={userRole}
                isClearable
                id='hh2'
                onChange={handleSelectRole}
              />
            </div>
          </div>
          <div className='ml-[124px] space-y-4'>
            <Button
              text='Tambah User'
              className='btn-dark'
              onClick={handleSubmit}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default addUserForm
