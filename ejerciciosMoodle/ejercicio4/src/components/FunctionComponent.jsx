import React from 'react'

function edad (años){
    return `Mi edad es ${años} años`
}

function FunctionComponent() {
  return (
    <h2>{edad(30)}</h2>
  )
}

export default FunctionComponent