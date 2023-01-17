import React from 'react'

export default function ComponenteUno({telefono}) {
    let objeto = {
        username: "Eduard",
        email : "eduard@ed.es"
    }
  return (
        <>
        <h3>El username es {objeto.username}, el email es {objeto.email} y el telefono es {telefono}</h3>
        </>
  )
}
