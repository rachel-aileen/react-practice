import React from 'react'

export default function Navbar({companyLogo}) {
  return (
    <div className='navbar'>
       <span className='companyLogo'>{companyLogo}</span>  
    </div>
  )
}
