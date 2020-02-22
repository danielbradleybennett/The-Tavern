import React, { useContext } from "react"
import { BrewSpellsContext } from "./BrewSpellsDataProvider"
import BrewSpells from "./BrewSpells"
import "./BrewSpells.css"
import {Button} from "react-bootstrap"


export default (props) => {
  
  
  const { brewSpells } = useContext(BrewSpellsContext)
  const currentUserId = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserSpells = brewSpells.filter(spell => spell.userId === currentUserId)

  
    
    return (

      <>
        <Button className="newSpell__button btn btn-light btn-sm" onClick={
        () => props.history.push("/brewery/spellList/create")}>
        New Spell
        </Button>

        <div className="brewSpells__container">
          {
            currentUserSpells.map(brewSpell => {
              
              return <BrewSpells key={brewSpell.id} brewSpell={brewSpell} />
            })
          }
        </div>

      </>

    )
  

}