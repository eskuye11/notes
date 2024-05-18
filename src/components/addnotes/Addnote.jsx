import React, { useEffect, useRef, useState } from 'react'
import './addnote.css'


const Addnote = ({ setOpenadd, setNotes }) => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [times, setTimes] = useState('')


  String.prototype.capitalaze = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  }
  const titleRef = useRef(null)

  const handleAdd = () => {
    if (title === '' || text === '') {
      alert("'You need to write your note or Click on the 'X' to exit")
      return
    }

    let RANDPOS = Math.floor(Math.random() * 6)
    const POSITIONS = [
      ['9deg', '-5px', { left: '0.4rem' }],
      ['6deg', '1px', { left: '3.5rem' }],
      ['2deg', '3px', { left: '5.5' }],
      ['-2deg', '8px', { right: '5.5rem' }],
      ['-6deg', '12px', { right: '3.5rem' }],
      ['-9deg', '16px', { right: '-0.8rem' }]
    ]
    let RANDCOLOR = Math.floor(Math.random() * 13)
    const COLOR = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328', '#7afcff', '#fff740', '#85e0a3', '#ffaf00', '#04e040']

    let CURINFO = POSITIONS[RANDPOS]
    let degrees = CURINFO[0]
    let margins = CURINFO[1]
    let positions = CURINFO[2]
    let colors = COLOR[RANDCOLOR]
    let res = new Date()

    let ID = res.getTime()
    let date = res.toDateString()
    let times = res.toLocaleTimeString()

    let newNote = {
      title: title.capitalaze(), text: text, degree: `rotate(${degrees})`, margin: margins,
      position: positions, bg: colors, id: ID, date: date, time: times
    }

    setNotes(prev => [...prev, newNote])
    setTitle('')
    setText('')
    titleRef.current.focus()
  }

  return (
    <div className='addnote-wraper'>
      <div className="addnote-inner">
        <button className='close' onClick={() => setOpenadd(false)}>X</button>

        <div className="addnote">
          <input type="text" placeholder='Note title . . .' ref={titleRef} maxLength={15}
            value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
          <textarea className='contents' name="contents" placeholder='Write your note . . .' maxLength={75}
            value={text} onChange={(e) => setText(e.target.value)}></textarea>
          <button className="addnote-btn" onClick={handleAdd}>Add note</button>
        </div>
        <p className="maxchartext">Maximum Character is 75 </p>
        <div className="maxchar">{text.length} </div>
      </div>

    </div>
  )
}

export default Addnote;