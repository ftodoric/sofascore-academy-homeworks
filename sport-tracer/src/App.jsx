import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./modules/Home";
import { Category } from "./modules/Category";
import { Event } from "./modules/Event";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:id" component={Category} />
          <Route path="/event/:id" component={Event} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
