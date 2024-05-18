import React from 'react'
import './noteboard.css'
import ypin from '../../assets/thumb.png'


String.prototype.capitalaze = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}
const Noteboard = ({ notes, setNotes }) => {
  const deleteNote = (ID) => {
    let confirmation = confirm('Do you want to delete all Notes ?')
    if (confirmation) {
      setNotes(prevNote => prevNote.filter((note) => note.id !== ID))
    }
  }
  window.localStorage.setItem('notes', JSON.stringify(notes))

  return (
    <div className='board'>
      {/*                 board cornners           */}

      <span className="ltop mark">\</span>
      <span className="lbtm mark">/</span>
      <span className="rtop mark">/</span>
      <span className="rbtm mark">\</span>

      {/*                 note board content           */}

      <div className="board-wraper">
        {notes?.map((note) => (
          <div className="note" key={note.id}
            style={{
              backgroundColor: note.bg, margin: note.margin, transform: note.degree
            }}>
            <h1 className='title'>{note.title} </h1>

            <div className="text-container">
              <p className='content'>{note.text} </p>
            </div>
            <button className="single-del" onClick={() => deleteNote(note.id)}>Delete Note</button>
            <img className='boardpin' src={ypin} alt="pin" style={note.position} />
            <div className="datetime">
              <span>{note.date} </span>
              <span>{note.time} </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Noteboard;