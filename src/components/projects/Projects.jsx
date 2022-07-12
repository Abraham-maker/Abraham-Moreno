import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className="flex-container">
      <h1 className='project__title'>Projects</h1>
      <div className='flex'>
        <div className="flex-child image__1">
          <div className="media">
            <div className="overlay"></div>
            <div className="image-details">
              <a className='website'>Visit Website</a>
            </div>
          </div>

        </div>
        <div className="flex-child image__2">
          <div className="media">
            <div className="overlay"></div>
            <div className="image-details">
              <a className='website'>Visit Website</a>
            </div>
          </div>
        </div>

        <div className="flex-child image__3">
          <div className="media">
            <div className="overlay"></div>
            <div className="image-details">
              <a className='website'>Visit Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects