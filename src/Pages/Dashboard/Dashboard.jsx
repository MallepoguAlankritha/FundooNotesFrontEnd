import React from 'react'
import Header from '../../components/Header/Header'
// import sideNav from '../../components/sideNav
import '../Dashboard/Dashboard.css'
import TakeNoteOne from '../../components/Takenoteone/NoteOne'
import TakeNoteTwo from '../../components/Takenotetwo/NoteTwo'
import { getNote } from '../../Services/dataService'
import MiniDrawer from '../../components/sideNav/sideNav'
function Dashboard() {
    const [display, setDisplay] = React.useState(true)
    const [notes, setNotes] = React.useState([])
    const[openNavBar,setOpenNavBar]=React.useState(false)
    const listenToTakeNoteOne = (data) => {
        setDisplay(false)
    }
    const getNotesFromServer = () => {
        getNote().then((response) => {
            console.log(response)
            setNotes(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }
     const listenToProps=()=>{
         setOpenNavBar(!openNavBar)
     }
    React.useEffect(() => {
        getNotesFromServer()
    }, [])
    return (
        <div>
            <Header  listenToProps={listenToProps} />
            <MiniDrawer  openNav={openNavBar}/>
            {/* <NoteOne />
            <NoteTwo />   */}
            <div className='notesContainer'>
                {display ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} /> : <TakeNoteTwo />}
            </div>
            <div className='notes-container'>
                {
                    notes.map((note) => (
                        <div className="note-box">
                            {
                                <div className="note" key={note._id}>
                                    <li>{note.title}</li>
                                    <li>{note.description}</li>
                                </div>
                            }
                            <div className="containerNoteFour">
                                <div className='iconHolder'>
                                    <i class="material-icons">add_box</i>
                                    <i class="material-icons">group_add</i>
                                    <i class="material-icons">mms</i>
                                    <i class="material-icons">palette</i>
                                    <i class="material-icons">delete</i>
                                </div>
                                </div>
                            </div>
                ))
               }
                        </div> 
             </div>
       
    )
}
export default Dashboard