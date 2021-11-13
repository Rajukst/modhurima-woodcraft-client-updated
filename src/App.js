import "./App.css";
import Header from "./WebPages/Headers-Main/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHome from "./WebPages/Home/Home-Main/MainHome";
import Footer from "./WebPages/Footer/Footer";
import Products from "./WebPages/Home/Products/Products";

import PlaceOrder from "./WebPages/PlaceOrder/PlaceOrder";
import DashBoard from "./WebPages/DashBoard/DashBoard";
import Login from "./WebPages/User-Empliment/Login/Login";
import Registration from "./WebPages/User-Empliment/Registration/Registration";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./WebPages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <MainHome></MainHome>
            </Route>
            <Route path="/home">
              <MainHome></MainHome>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/place-order/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
