import React from 'react'
import { Button, Input } from '../globals';

export const Newsletter = () => {
  return (
    <form>
      <Input placeholder="email@test.com" 
      />
      <Button>Suscríbete</Button>
    </form>
  )
}

export default Newsletter;