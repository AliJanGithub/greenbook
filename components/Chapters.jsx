import React from 'react'
import '../src/App.css'

export default function Chapters({image}) {
  return (
    <div className='book-card book-cards'>
      <img src={image} alt="" />
    </div>
  )
}
