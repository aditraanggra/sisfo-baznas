import React, { useState } from 'react'
import Textinput from '@/components/ui/Textinput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
// import { useSelector, useDispatch } from 'react-redux'
// import { handleLogin } from './store'
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'

const schema = yup
  .object({
    username: yup.string().required('Username is Required'),
    password: yup.string().required('Password is Required'),
  })
  .required()

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // const dispatch = useDispatch()
  // const { users } = useSelector((state) => state.auth)
  const {
    register,
    formState: { errors },
    // handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: 'all',
  })
  const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    })
    if (res?.error) {
      setError(res.error)
    } else {
      router.push('/banking')
      toast.success('User logged in successfully', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
    /* const user = users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    )
    if (user) {
      dispatch(handleLogin(true))
      setTimeout(() => {
        router.push('/banking')
      }, 1000)
    } else {
      toast.error('Invalid credentials', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } */
  }

  return (
    <>
      <form onSubmit={onSubmit} className='space-y-4 '>
        {!!error && <p className=' text-red-500 font-inter text-sm'>{error}</p>}
        <Textinput
          name='username'
          label='Username'
          type='text'
          register={register}
          error={errors?.username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Masukan Username...'
        />
        <Textinput
          name='password'
          label='password'
          type='password'
          register={register}
          error={errors.password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Masukan Password...'
        />
        <div className='flex justify-between'>
          <Link
            href='/forgot-password'
            className='text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium'
          >
            Lupa Password?{' '}
          </Link>
        </div>

        <button className='btn btn-primary block w-full text-center'>
          Sign in
        </button>
      </form>
    </>
  )
}

export default LoginForm
