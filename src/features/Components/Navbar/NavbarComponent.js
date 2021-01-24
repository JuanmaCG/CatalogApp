import React from 'react'
import { Link } from 'react-router-dom'


export const NavbarComponent = () => {
  return (
    <nav>
      <section>
        <h1>Catalog app</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Commits</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}