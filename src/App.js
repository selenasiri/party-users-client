import React, { Fragment, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/users/?name=${name}`)

      const parseResponse = await response.json()

      console.log(parseResponse)
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <Fragment>
      <div className='container text-center'>
        <h1 className='my-5'>Party List</h1>
        <form className='d-flex' onSubmit={onSubmitForm}>
          <input
            type='text'
            name='name'
            placeholder='Enter User'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </Fragment>
  )
}

export default App
