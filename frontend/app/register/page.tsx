import React from 'react'

const Page = () => {
  return (
    <div className='text-black h-[100vh] flex justify-center items-center bg-cover'>
    <div>
      <div>
        <h1 className='text-4xl'>Register</h1>
          <form>
            <div>
              <input type='text' />
              <label htmlFor='email'>Your Email</label>
            </div>

            <div>
              <input type='password' />
              <label htmlFor='password'>Your Password</label>
            </div>

            <div>
              <input type='text' />
              <label htmlFor='firstName'>First Name</label>
            </div>

            <div>
              <input type='text' />
              <label htmlFor='lastName'>Last Name</label>
            </div>

            <div>
              <input type='number' />
              <label htmlFor='phone'>Phone Number</label>
            </div>

            <button type='submit'>Login</button>


          </form>
      </div>
    </div>
  </div>
  )
}

export default Page