import React from 'react'
import Home from '../home/Home'

function NotFound() {
  return (
    <>
        <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 shadow-2xl shadow-gray rounded-xl grid grid-cols-1 place-content-center place-items-center gap-5">
          <p className="text-5xl font-goth">404 NOT FOUND !</p>
          <p className="text-slate-600 font-bold">😶OOPS! The page you are looking for is not available at the moment</p>
          <Home />
      </div>
      </div>
    </>
  )
}

export default NotFound