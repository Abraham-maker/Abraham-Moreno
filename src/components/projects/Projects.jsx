import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className="flex-container">
      <div className="flex-child image__1">
        <div class="media">
          <div class="overlay"></div>
          <div class="image-details">
            <a className='website'>Visit Website</a>
          </div>
        </div>

      </div>
      <div className="flex-child image__2">
        <div class="media">
          <div class="overlay"></div>
          <div class="image-details">
            <a className='website'>Visit Website</a>
          </div>
        </div>
      </div>

      <div className="flex-child image__3">
        <div class="media">
          <div class="overlay"></div>
          <div class="image-details">
            <a className='website'>Visit Website</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects