import React from 'react'

const Card = ({title,details,desc,url}) => {
  return (
    <div className='card'>
        <div className="card-header">
            <div className="card-title">{title}</div>
            <div className="card-details">{details}</div>
        </div>
        <div className="card-description">
            <span>{desc}</span>
            <a href={url || "#"}>
            <div className="icon">                
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#00000"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Card