import React from 'react'
import { HEADER_IMG_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className="py-2 px-6 absolute z-10 bg-gradient-to-b from-black w-full">
      <img className="w-44"
      src={HEADER_IMG_URL}/>
    </div>
  )
}

export default Header