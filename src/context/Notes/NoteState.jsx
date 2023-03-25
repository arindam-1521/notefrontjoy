import react, { useState } from "react"
import NoteContext from "./NoteContext"

const NoteState = (props) => {
    const host = "https://backbackend.onrender.com"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    //? Get all notes
    const getAllNote = async () => {
        //TODO api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU5NDFhYmY0YzJhMDQ2OWIzMzJiIn0sImlhdCI6MTY3OTUxNDUzOX0.5hfV9fToqLzVAhsZgdfRFeM5HdJ0tOvye-grULmU6yk"
            },
            // body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }




    //Add a Note
    const addNote = async (title, description, tag) => {
        //TODO api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU5NDFhYmY0YzJhMDQ2OWIzMzJiIn0sImlhdCI6MTY3OTUxNDUzOX0.5hfV9fToqLzVAhsZgdfRFeM5HdJ0tOvye-grULmU6yk"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json()

        let note = {
            "_id": "641bd4332795f0acd72cedf6",
            "user": "641b5941abf4c2a0469b332b",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-03-23T04:23:15.633Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = async (id) => {
        // console.log("Working" + id)
        //* API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU5NDFhYmY0YzJhMDQ2OWIzMzJiIn0sImlhdCI6MTY3OTUxNDUzOX0.5hfV9fToqLzVAhsZgdfRFeM5HdJ0tOvye-grULmU6yk"
            }
        });
        const json = await response.json()
        setNotes(json)
        let newNotes = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNotes)
    }

    //Update a Note
    const editNote = async (id, title, description, tag) => {
        //API call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU5NDFhYmY0YzJhMDQ2OWIzMzJiIn0sImlhdCI6MTY3OTUxNDUzOX0.5hfV9fToqLzVAhsZgdfRFeM5HdJ0tOvye-grULmU6yk"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json()

        const newNote = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
        setNotes(newNote)
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState