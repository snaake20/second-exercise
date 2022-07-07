import { useState } from 'react'

export const Login= () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e) => {

    e.preventDefault()
    const res = {
      identifier: username,
      password: password,
    }
    const data = JSON.stringify(res)

    fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('jwt', data.jwt)
      })
      .catch((err) => console.log(err))
      
    setUsername('')
    setPassword('')

  }
  return (
    <>
      <form
        className='flex flex-col gap-2 justify-center items-center '
        onSubmit={onSubmitHandler}
      >
        <div className='flex flex-row gap-1 justify-center items-center'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            className='border-2'
            id='username'
            placeholder='Enter username'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className='flex flex-row gap-1 justify-center items-center'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            className='border-2'
            id='password'
            placeholder='Password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit' className='border-4 rounded border-red-500 bg-red-500 text-white'>
          Login
        </button>
      </form>
    </>
  )
}
