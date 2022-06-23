/** @format */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homejs/Home";
import Skills from "./components/Skills/Skills";
import Socials from "./components/Socials/Socials";
import Projects from "./components/Projectss/Projects";
import Articles from "./components/Articles/Articles";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
            <Socials />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/articles">
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
