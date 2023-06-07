import React from 'react'
import '../component/about.css'
import Nav from '../component/nav'

export default props => {
  return (
    <div>
      <Nav />
      <div className='body'>

        <h1 className='p'>Somos uma  a melhor empresa de hardware</h1>
        <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi reprehenderit mollitia magni, aperiam obcaecati! Fuga ratione non dolorem enim eveniet voluptates illo tempore qui, sapiente aspernatur fugiat saepe exercitationem!</p>
        <div className='img'>
          <img url="../../public/img/quality.png" />
        </div>
      </div>
    </div>

  )
}