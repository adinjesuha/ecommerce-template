import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { Button, Input } from '../globals';
import { Modal, Spinner } from './styles'

export const Newsletter = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const result = await addToMailchimp(email)
    setLoading(false)
    setResult(result)
    setModalOpen(true)
    setEmail('')
  }
  console.log(email)
  return (
    <>
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="email@email.com"
        type="email"
        name="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <Button disabled={loading}>
      {loading ? (
        <Spinner>
          <div className="dbl-spinner" />
          <div className="dbl-spinner dbl-spinner--2" />
        </Spinner>
      ) : (
        <span>Suscribete</span>  
      )}
      </Button>
    </form>
    <Modal modalOpen={modalOpen}>
      <div className="dialog">
        <button onClick={() => setModalOpen(false)} className="btn btn--close">
          <span />
          <span />
        </button>
        <div className="container">
          {result.result === 'success' && (
            <>
              <p>¡Gracias por suscribirte!</p>
              <div className="btn__wrap">
                <Button
                  onClick={() => setModalOpen(false)}
                >
                  Regresar
                </Button>
              </div>
            </>
          )}
          {result.result === 'error' && (
            <>
              <p>Encontramos un problema... es probable que ya estes suscrit@ o hayas ingresado una dirección de correo no válida </p>
              <div className="btn__wrap">
                <Button 
                  onClick={() => setModalOpen(false)}
                >
                  Intentalo de nuevo
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
    </>
  )
}

export default Newsletter;