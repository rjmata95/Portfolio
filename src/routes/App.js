import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Projects from "../containers/Projects";
import About from "../containers/About";
import Fullstack from "../containers/Fullstack";
import Frontend from "../containers/Frontend";
import Backend from "../containers/Backend";
import Notfound from "../containers/Notfound";
import Layout from "../components/Layout";
import Contact from "../containers/Contact";
import "../App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/fullstack" component={Fullstack} />
          <Route exact path="/projects/frontend" component={Frontend} />
          <Route exact path="/projects/backend" component={Backend} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
