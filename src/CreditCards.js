import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

function CreditCards() {
  const [person, setPerson] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  })

  //   const handleInputFocus = (e) => {
  //     setPerson({ focus: e.target.name })
  //   }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setPerson({ ...person, [name]: value })
  }

  return (
    <div>
      <Cards
        number={person.number}
        name={person.name}
        expiry={person.expiry}
        cvc={person.cvc}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={person.number}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={person.name}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={person.expiry}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={person.cvc}
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default CreditCards
