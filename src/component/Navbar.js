import React from 'react'
import Nav from 'react-bootstrap/Nav';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Zina Sondes</a>
      <Nav className="justify-content-end">
            <Nav.Link href="#Definition">Definition</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#ContactMe">ContactMe</Nav.Link>
      </Nav>
    </div>
    </nav>
  )
}

export default Navbar