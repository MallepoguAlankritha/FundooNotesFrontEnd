import React from 'react'
import './NoteTwo.css'
function NoteTwo() {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const takeTitle = (event) => {
        setTitle(event.target.value)
    }
    const Description = (event) => {
        setDescription(event.target.value)
    }
    

    return (
        <div className="NotecontainerOne">
            <div className="NotecontainerTwo">
                <input type="text" placeholder="Title" className="Fields" onChange={takeTitle} />
            </div>
            <div className="NotecontainerThree">
                <input type="text" placeholder="take a notes" className="Fields" onChange={Description} />
            </div>
            <div className="NotecontainerFour">
                <div className='icons'>
                    <i class="material-icons">add</i>
                    <i class="material-icons">add_box</i>
                    <i class="material-icons">add_box</i>
                    <i class="material-icons">group_add</i>
                    <i class="material-icons">group_add</i>
                </div>
                <div className="CloseButton">
                    <button className="lastButton">Close</button>
                </div>
            </div>
        </div>
    )
}
export default NoteTwo