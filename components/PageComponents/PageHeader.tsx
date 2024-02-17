import React from 'react'

function PageHeader({title}:{title:String}) {
  return (
      <h1  className='text-3xl font-bold text-primary text-center'>
        {title}
    </h1>
  )
}

export default PageHeader