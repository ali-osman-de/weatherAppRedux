import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar
        className='my-5 shadow-lg rounded-pill'
        color="dark"
        dark
      >
        <NavbarBrand
          className='fs-3 mx-auto'
          href='/'
        >
          Check Weather
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Header