import "./App.css";
import Header from "./WebPages/Headers-Main/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHome from "./WebPages/Home/Home-Main/MainHome";
import Footer from "./WebPages/Footer/Footer";
import Products from "./WebPages/Home/Products/Products";
import { Placeholder } from "react-bootstrap";
import PlaceOrder from "./WebPages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <MainHome></MainHome>
          </Route>
          <Route path="/home">
            <MainHome></MainHome>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/place-order">
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
