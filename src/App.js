import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AgendaProvider } from "./context/AgendaContext";
import Home from "./components/Home";
import Error from "./components/Error";

function App() {
  return (
    <AgendaProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Router>
    </AgendaProvider>
  );
}

export default App;
