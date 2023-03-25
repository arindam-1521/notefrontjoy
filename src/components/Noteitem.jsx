import React, { useContext } from 'react'
import NoteContext from "../context/Notes/NoteContext"


const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <>
            <div className="card mx-2 my-2" style={{ width: "18rem", border: "none", boxShadow: "1px 1px 19px rgb(0 0 0 / 24%)" }}>
                {/* <img src={`https://source.unsplash.com/random/600x300?sig=${Math.floor(Math.random() * 120)}`} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h4 className="card-title">{note.title}</h4>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text">Created On : {(new Date(note.date)).toLocaleDateString("en-US")}</p>
                    <span className={`position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary`} style={{ fontSize: "15px" }}>
                        {note.tag}
                    </span>
                    <button href="#" className="btn btn-success btn-sm mx-2" onClick={() => { updateNote(note) }}><i className="fa-solid fa-user-pen fa-bounce"></i></button>
                    <button className="btn btn-danger btn-sm mx-2" onClick={() => { deleteNote(note._id) }}><i className="fa-solid fa-trash fa-bounce" ></i></button>
                </div>
            </div>
        </>
    )
}

export default Noteitem
