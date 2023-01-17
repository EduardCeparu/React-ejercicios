import React from 'react'

export default function ComponenteDos({telefono}) {
    let objeto = {
        username: "Pedro",
        email: "pedro@es.es"
    }
  return (
    
        <h3>El username es {objeto.username}, el mail es {objeto.email} y el telefono es {telefono}</h3>
    
  )
}
