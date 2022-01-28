import React from 'react'
import './NoteTwo.css'
import {noteAdd} from '../../Services/dataService'
function NoteTwo() {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const takeTitle = (event) => {
        setTitle(event.target.value)
    }
    const Description = (event) => {
        setDescription(event.target.value)
    }
    const noteAdded = () => {
    //     const data= new FormData()
    //     data.append('title',title)
    //     data.append('description',description)
    //     noteAdd(data).then((res) => {
    //     console.log(res)
    //     }).catch((error) =>{
    //         console.log(error)
    //     })

    // }
    
        console.log(title, description);
        let obj = {
            "title": title,
            "description": description
        }
        noteAdd(obj).then((res) => {
            console.log(res)
            console.log(res.data.data)
            localStorage.setItem("Token",res.data.data)
        }).catch((err) => {
            console.log(err)
        })
        console.log(obj);
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
                    <i class="material-icons">notifications</i>
                    <i class="material-icons">person_add</i>
                    <i class="material-icons">palette</i>
                    <i class="material-icons">photo</i>
                    <i class="material-icons">vertical_align_bottom</i>
                </div>
                <div className="CloseButton">
                    <button className="lastButton" onClick={noteAdded}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default NoteTwo