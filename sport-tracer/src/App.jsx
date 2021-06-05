import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./modules/Header";
import { Navbar } from "./modules/Navbar";
import { Home } from "./modules/Home";
import { Categories } from "./modules/Categories";
import { Category } from "./modules/Category";
import { Event } from "./modules/Event";
import { Footer } from "./modules/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="toplevel-container">
        <div className="content-wrap">
          <Header />
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/categories/:sport/:date/:offset"
                component={Categories}
              />
              <Route path="/category/:slug/:id/:date" component={Category} />
              <Route path="/event/:id" component={Event} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
