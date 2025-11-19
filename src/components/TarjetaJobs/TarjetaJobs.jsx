import React from 'react'

export const TarjetaJobs = ({img, titulo, texto}) => {
  return (
    <div>
        <div>
            <h5>{titulo}</h5>
            <h6>{texto}</h6>
        </div>
    </div>
  )
}
