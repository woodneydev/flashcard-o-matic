import React from "react";
import { Switch, Route } from "react-router";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Components/Home/index.js";
import ViewDeck from "../Components/ViewDeck/";
import NewDeck from "../Components/NewDeck/index.js"

function Layout() {

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path="/decks/new">
            <NewDeck />
          </Route>
          <Route path={`/decks/:deckId`}>
            <ViewDeck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
