import React from 'react'
import RenderHTML from './RenderHTML'

function About({html}:{
    html:string}) {
  return (
      <div><h2 className='text-primary/90 text-2xl mb-2 font-semibold'>About</h2>
          <RenderHTML className="max-h-[180px]  overflow-y-scroll flex flex-col gap-3 text-white/80 mb-3 px-3 " html={html} />
      
      </div>
  )
}

export default About