import React from 'react'
import Header from '../../components/Header/Header'
import '../Dashboard/Dashboard.css'
import TakeNoteOne from '../../components/Takenoteone/NoteOne'
import TakeNoteTwo from '../../components/Takenotetwo/NoteTwo'
function Dashboard() {
    const [display, setDisplay] = React.useState(true)
    const listenToTakeNoteOne = (data) => {
        setDisplay(false)
    }
    return (
        <div>
            <Header />
              {/* <NoteOne />
            <NoteTwo />   */}
            <div className='notesContainer'>
                {display ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne}/> : <TakeNoteTwo />}
            </div>
        </div>
    )
}
export default Dashboard