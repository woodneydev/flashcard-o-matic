import React, { useEffect, useState } from "react"
import { useRouteMatch, useParams, Route, Switch } from "react-router-dom"
import { readDeck } from "../../utils/api/index"
import DeckDisplay from "./DeckDisplay"
import Card from "./Card"
import EditDeck from "../EditDeck"
import AddCard from "../AddCard"
import EditCard from "../EditCard"
import BreadCrumbDeckDisplay from "./BreadCrumbDeckDisplay"
import BreadCrumbEditDeck from "../EditDeck/BreadCrumbEditDeck"
import BreadCrumbAddCard from "../AddCard/BreadCrumbAddCard"
import Study from "../Study/index"

function ViewDeck() {
    const { path } = useRouteMatch()
    const [deck, setDeck] = useState(null)
    const { deckId } = useParams()

    useEffect(() => {
        async function loadDeck() {
            const deckFromApi = await readDeck(deckId)
            setDeck(deckFromApi)
        }
        loadDeck()
    }, [deckId])

    if (deck) {
        const cardList = deck.cards.map((card, index) => {
            return (
                <div key={index}>
                    <Card card={card} deck={deck} />
                </div>
            )
        })

        return (
            <Switch>
                <Route exact path={path}>
                    <BreadCrumbDeckDisplay deck={deck} />
                    <DeckDisplay deck={deck} />
                    <h2>Cards</h2>
                    {deck.cards.length === 0 ? <p>No cards in this deck to study</p> : false}
                    {cardList}
                </Route>
                <Route exact path={`${path}/edit`}>
                    <BreadCrumbEditDeck deck={deck} />
                    <EditDeck deck={deck} />
                </Route>
                <Route exact path={`${path}/study`}>
                    <Study deck={deck} />
                </Route>
                <Route exact path={`${path}/cards/new`}>
                    <BreadCrumbAddCard deck={deck} />
                    <AddCard />
                </Route>
                <Route path={`${path}/cards/:cardId/edit`}>
                    <EditCard deck={deck} />
                </Route>
            </Switch>
        )
    }
    return <h2>Loading...</h2>
}

export default ViewDeck