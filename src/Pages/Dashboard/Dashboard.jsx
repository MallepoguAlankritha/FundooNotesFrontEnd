import React from 'react'
import Header from '../../components/Header/Header'
// import sideNav from '../../components/sideNav'
import '../Dashboard/Dashboard.css'
import TakeNoteOne from '../../components/Takenoteone/NoteOne'
import TakeNoteTwo from '../../components/Takenotetwo/NoteTwo'
import { getNote } from '../../Services/dataService'
import MiniDrawer from '../../components/sideNav/sideNav'
import { deleteNote } from '../../Services/dataService'
import { updateNote } from '../../Services/dataService'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    p: 4,
    height: 200,
    backgroundColor: "white",

};


function Dashboard() {
    const [display, setDisplay] = React.useState(true)
    const [notes, setNotes] = React.useState([])
    const [openNavBar, setOpenNavBar] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [editNoteObj, setEditNoteObj] = React.useState({ title: "", desc: "", id: "" })
    const handleOpen = (note) => {
        setEditNoteObj({ ...editNoteObj, title: note.title, desc: note.description, id: note._id })
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
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
    const listenToProps = () => {
        setOpenNavBar(!openNavBar)
    }
    React.useEffect(() => {
        getNotesFromServer()
    }, [])
    const deleteNoteOne = (event) => {
        deleteNote(event.target.id).then((response) => {
            console.log(response)
            getNotesFromServer()
        }).catch((error) => {
            console.log(error)
        })

    }
    const listenToNoteTwo = () => {
        console.log("executed")
        getNotesFromServer()
        setDisplay(true)
    }

    const editDesc = (e) => {
        setEditNoteObj({ ...editNoteObj, desc: e.target.value })
    }


    const editTitle = (e) => {
        setEditNoteObj({ ...editNoteObj, title: e.target.value })
    }

    const updateNoteOne = () => {
        let obj = {
            title: editNoteObj.title,
            description: editNoteObj.description
        }
        console.log(editNoteObj.title, editNoteObj.desc)
        updateNote(obj, editNoteObj.id).then((response) => {
            console.log(response)
            getNotesFromServer()
            handleClose()
        }).catch((error) => {
            console.log(error)
        })




    }
    return (
        <div>
            <Header listenToProps={listenToProps} />
            <MiniDrawer openNav={openNavBar} />
            {/* <NoteOne />
            <NoteTwo />   */}
            <div className='notesContainer'>
                {display ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} /> : <TakeNoteTwo listenToNoteTwo={listenToNoteTwo} />}
            </div>
            <div className='notes-container'>
                {
                    notes.map((note) => (
                        <div className="note-box" onClick={() => handleOpen(note)}>
                            {
                                <div className="note" key={note._id}>
                                    <div className='Title'>{note.title}</div>
                                    <div className='Description'>{note.description}</div>
                                </div>
                            }
                            <div className="containerNoteFour">
                                <div className='iconHolder'>
                                    <i class="material-icons">add_box</i>
                                    <i class="material-icons">group_add</i>
                                    <i class="material-icons">mms</i>
                                    <i class="material-icons">palette</i>
                                    <i class="material-icons" onClick={deleteNoteOne} id={note._id}>delete</i>
                                </div>
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <div className="container" style={style}>
                                        <div className="updateTitle">
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                className="fields"
                                                defaultValue={editNoteObj.title}
                                                onChange={editTitle}
                                            />
                                        </div>

                                        <div className="updateDescription">
                                            <input
                                                type="text"
                                                placeholder="Take a note..."
                                                className="inputFields"
                                                defaultValue={editNoteObj.desc}
                                                onChange={editDesc}
                                            />
                                        </div>
                                        <div className="containerNoteFour">
                                            <div className='iconHolder'>
                                                <i class="material-icons">add_box</i>
                                                <i class="material-icons">group_add</i>
                                                <i class="material-icons">mms</i>
                                                <i class="material-icons">palette</i>
                                                <i class="material-icons" >delete</i>
                                            </div>
                                        </div>
                                        <div className="close">
                                            <button
                                                className="close1"
                                                onClick={updateNoteOne}
                                            >
                                                Close
                                            </button>
                                        </div>
                                        {/* <button onClick={updateNoteOne}>closes</button> */}
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
export default Dashboard