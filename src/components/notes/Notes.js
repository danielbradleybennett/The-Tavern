import React from "react"
import "./Notes.css"
import { Link } from "react-router-dom"

export default ({ note }) => (
    <section className="notes__list">
        <h3 className="notesList__name">
            <Link className="brewNotes__link"to={`/vyasa/notesList/${note.id}`}>
                { note.name }
            </Link>
            
        </h3>
        
    </section>
)