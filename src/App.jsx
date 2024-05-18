import React, { useState } from 'react'
import Noteboard from './components/home/Noteboard'
import Navbar from './components/navbar/Navbar'
import Addnote from './components/addnotes/Addnote'

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(window.localStorage.getItem('notes')) || [])
  const [openAdd, setOpenadd] = useState(false)

  return (
    <div className='app'>
      <Navbar notes={notes} setOpenadd={setOpenadd} setNotes={setNotes} />
      <Noteboard notes={notes} setNotes={setNotes} />
      {openAdd && <Addnote setOpenadd={setOpenadd} setNotes={setNotes} />}
    </div>
  )
}

export default App