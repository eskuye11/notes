import React from 'react'
import './navbar.css'

const Navbar = ({ setOpenadd, setNotes, notes }) => {

  const handleDeleteAll = () => {
    if (notes.length < 1) {
      alert('You have NO NOTE to delete !')
      return
    }
    let confirmation = confirm('Do you want to delete all Notes ?')
    if (confirmation) {
      setNotes([])
    }

  }

  return (
    <nav className='navbar'>
      <button className="addnot" onClick={() => setOpenadd(true)}>Create Note</button>
      <h1>Sticky Notes</h1>
      <button className="deleteall" onClick={handleDeleteAll}>Delete All {(notes.length > 0) && notes.length} Notes</button>
    </nav>
  )
}

export default Navbar