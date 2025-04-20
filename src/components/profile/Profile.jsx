import React from 'react'

function Profile({name}) {
  return (
    <div>
    <img src={`https://robohash.org/${name}?set=set4`} className='rounded-full'></img>
    </div>
  )
}

export default Profile