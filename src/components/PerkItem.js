import React from 'react'
import "boxicons"

const PerkItem = ({content}) => {
  return (
    <div className='basis-full sm:basis-5/12 md:basis-3/12 text-center '>
      <box-icon name={content.icon} color='#ffff00' size="100px" ></box-icon>
      <p className=' font-bold mb-4'>{content.lead}</p>
      <p>{content.sub}</p>
    </div>
  )
}

export default PerkItem