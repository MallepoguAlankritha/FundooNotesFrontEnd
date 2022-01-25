import React from 'react'
import './NoteOne.css'

function NoteOne(props) {

    const Click = () => {
        props.listenToTakeNoteOne("Hello")
    }

    return (
        <div>
            <div className='notes'>
                <input type="text" className="Field" placeholder="Take a note here...." onClick={Click} />
            </div>
        </div>
    )
}

export default NoteOne