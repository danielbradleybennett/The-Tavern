import React from "react"
import { Route } from "react-router-dom"
import { BrewSpellsProvider } from "./brewSpells/BrewSpellsDataProvider"
import BrewSpellsList from "./brewSpells/BrewSpellsList"
import { BrewMonstersProvider } from "./brewMonsters/BrewMonstersDataProvider"
import BrewMonstersList from "./brewMonsters/BrewMonstersList"
import BrewSpellsDetails from "./brewSpells/BrewSpellsDetails"
import BrewMonstersDetails from "./brewMonsters/BrewMonstersDetails"
import BrewSpellsForm from "./brewSpells/BrewSpellsForm"
import BrewMonstersForm from "./brewMonsters/BrewMonstersForm"
import { NotesProvider } from "./notes/NotesDataProvider"
import { TheWorldProvider } from "./world/TheWorldDataProvider"
import NotesDetails from "./notes/NotesDetails"
import NotesList from "./notes/NotesList"
import NotesForm from "./notes/NotesForm"
import TheWorldDetails from "./world/TheWorldDetails"
import TheWorldList from "./world/TheWorldList"
import TheWorldForm from "./world/TheWorldForm"
import { SpellTypeProvider } from "./brewSpells/SpellTypeProvider"
import { SpellSpellCasterProvider } from "./brewSpells/SpellSpellCasterProvider"
import { SpellCasterProvider } from "./brewSpells/SpellCasterProvider"
import { BrewWeaponsProvider } from "./weapons/BrewWeaponsDataProvider"
import BrewWeaponsDetails from "./weapons/BrewWeaponsDetails"
import BrewWeaponsList from "./weapons/BrewWeaponsList"
import BrewWeaponsForm from "./weapons/BrewWeaponsForm"
import BrewItemsDetails from "./items/BrewItemsDetails"
import BrewItemsList from "./items/BrewItemsList"
import BrewItemsForm from "./items/BrewItemsForm"
import { BrewItemsProvider } from "./items/BrewItemsDataProvider"
import BrewArmorDetails from "./armor/BrewArmorDetails"
import BrewArmorList from "./armor/BrewArmorList"
import BrewArmorForm from "./armor/BrewArmorForm"
import { BrewArmorProvider } from "./armor/BrewArmorDataProvider"



export default (props) => {
    return (
        <>


            <SpellCasterProvider>
                <SpellSpellCasterProvider>
                    <BrewMonstersProvider>
                        <BrewSpellsProvider>
                            <TheWorldProvider>
                                <NotesProvider>
                                    <SpellTypeProvider>
                                        <BrewWeaponsProvider>
                                            <BrewItemsProvider>
                                                <BrewArmorProvider>

                                                    <Route path="/vyasa">
                                                        <div>
                                                            <button onClick={() => props.history.push("/vyasa/notesList")}>
                                                                Notes
                                                        </button>
                                                        </div>
                                                    </Route>
                                                    <Route path="/vyasa">
                                                        <div>
                                                            <button onClick={() => props.history.push("/vyasa/worldList")}>
                                                                The World
                                                        </button>
                                                        </div>
                                                    </Route>
                                                    <Route path="/brewery">
                                                        <div>
                                                            <button onClick={() => props.history.push("/brewery/spellList")}>
                                                                Spells
                                                        </button>
                                                        </div>
                                                    </Route>
                                                    <Route path="/brewery">
                                                        <div>
                                                            <button onClick={() => props.history.push("/brewery/monsterList")}>
                                                                Monsters
                                                        </button>
                                                        </div>
                                                    </Route>
                                                    <Route path="/brewery">
                                                        <div>
                                                            <button onClick={() => props.history.push("/brewery/weaponList")}>
                                                                Weapons
                                                        </button>
                                                        </div>
                                                    </Route>
                                                    <Route path="/brewery">
                                                        <div>
                                                            <button onClick={() => props.history.push("/brewery/itemList")}>
                                                                Items
                                                        </button>
                                                        </div>
                                                    </Route>
                                                    <Route path="/brewery">
                                                        <div>
                                                            <button onClick={() => props.history.push("/brewery/armorList")}>
                                                                Armor
                                                        </button>
                                                        </div>
                                                    </Route>
                                                    {/* <Route path="/spellList">
                                                    <div>
                                                        <button onClick={() => props.history.push("/monsterList")}>
                                                            Monsters
                                                        </button>
                                                    </div>
                                                </Route> */}



                                                    {/* The Spells Routes */}
                                                    <Route exact path="/brewery/spellList/:brewSpellsId(\d+)" render={
                                                        props => <BrewSpellsDetails {...props} />
                                                    } />


                                                    <Route exact path="/brewery/spellList/create" render={
                                                        props => <BrewSpellsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/spellList/create" render={
                                                        props => <BrewSpellsList {...props} />
                                                    } />

                                                    <Route path="/brewery/spellList/edit/:brewSpellsId(\d+)" render={
                                                        props => <BrewSpellsForm {...props} />
                                                    } />


                                                    <Route exact path="/brewery/spellList/" render={
                                                        props => <BrewSpellsList {...props} />
                                                    } />
                                                    {/* The Monsters Routes */}
                                                    <Route exact path="/brewery/monsterList/:brewMonstersId(\d+)" render={
                                                        props => <BrewMonstersDetails {...props} />
                                                    } />

                                                    <Route exact path="/brewery/monsterList/" render={
                                                        props => <BrewMonstersList {...props} />
                                                    } />

                                                    <Route exact path="/brewery/monsterList/create" render={
                                                        props => <BrewMonstersForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/monsterList/edit/:brewMonstersId(\d+)" render={
                                                        props => <BrewMonstersForm {...props} />
                                                    } />
                                                    {/* The Notes Routes */}
                                                    <Route exact path="/vyasa/notesList/edit/:notesId(\d+)" render={
                                                        props => <NotesForm {...props} />
                                                    } />

                                                    <Route exact path="/vyasa/notesList/create" render={
                                                        props => <NotesForm {...props} />
                                                    } />

                                                    <Route exact path="/vyasa/notesList/" render={
                                                        props => <NotesList {...props} />
                                                    } />

                                                    <Route exact path="/vyasa/notesList/:notesId(\d+)" render={
                                                        props => <NotesDetails {...props} />
                                                    } />
                                                    {/* The World Routes */}
                                                    <Route exact path="/vyasa/worldList/edit/:theWorldId(\d+)" render={
                                                        props => <TheWorldForm {...props} />
                                                    } />

                                                    <Route exact path="/vyasa/worldList/create" render={
                                                        props => <TheWorldForm {...props} />
                                                    } />

                                                    <Route exact path="/vyasa/worldList/" render={
                                                        props => <TheWorldList {...props} />
                                                    } />

                                                    <Route exact path="/vyasa/worldList/:theWorldId(\d+)" render={
                                                        props => <TheWorldDetails {...props} />
                                                    } />
                                                    {/* Weapons Routes */}
                                                    <Route exact path="/brewery/weaponList/edit/:brewWeaponsId(\d+)" render={
                                                        props => <BrewWeaponsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/weaponList/create" render={
                                                        props => <BrewWeaponsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/weaponList/" render={
                                                        props => <BrewWeaponsList {...props} />
                                                    } />

                                                    <Route exact path="/brewery/weaponList/:brewWeaponsId(\d+)" render={
                                                        props => <BrewWeaponsDetails {...props} />
                                                    } />
                                                    {/* Item Routes */}
                                                    <Route exact path="/brewery/itemList/edit/:brewItemsId(\d+)" render={
                                                        props => <BrewItemsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/itemList/create" render={
                                                        props => <BrewItemsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/itemList/" render={
                                                        props => <BrewItemsList {...props} />
                                                    } />

                                                    <Route exact path="/brewery/itemList/:brewItemsId(\d+)" render={
                                                        props => <BrewItemsDetails {...props} />
                                                    } />

                                                    {/* Armor Routes */}
                                                    <Route exact path="/brewery/armorList/edit/:brewArmorId(\d+)" render={
                                                        props => <BrewArmorForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/armorList/create" render={
                                                        props => <BrewArmorForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/armorList/" render={
                                                        props => <BrewArmorList {...props} />
                                                    } />

                                                    <Route exact path="/brewery/armorList/:brewArmorId(\d+)" render={
                                                        props => <BrewArmorDetails {...props} />
                                                    } />


                                                </BrewArmorProvider>
                                            </BrewItemsProvider>
                                        </BrewWeaponsProvider>
                                    </SpellTypeProvider>
                                </NotesProvider>
                            </TheWorldProvider>
                        </BrewSpellsProvider>
                    </BrewMonstersProvider>
                </SpellSpellCasterProvider>
            </SpellCasterProvider>













        </>
    )
}