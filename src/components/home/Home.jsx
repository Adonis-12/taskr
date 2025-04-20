import React from 'react'
import {Button} from '../ui/button'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='w-full h-auto flex  justify-center items-center'>
    <Link to='/'><Button>Go home</Button></Link>
    </div>
  )
}

export default Home