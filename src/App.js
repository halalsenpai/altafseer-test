import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import FormCard from "./components/FormCard/FormCard";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={FormCard} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
