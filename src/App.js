import React from "react";
import Header from "./Header";
import "./App.css";
import Scrolling from "./Scrolling";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Review";
import About from "./About";
import Booking from "./Booking";
import { useStateValue } from "./StateProvider";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import AdminBooking from "./AdminBooking";
import Footer from "./Footer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/menu">
            <Header />
            <Menu />
            <Footer />
          </Route>
          
          <Route path="/review">
            <Header />
            <Review />
            <Footer />
          </Route>

          <Route path="/booking">
            <Header />
            <Booking />
            <Footer />
          </Route>

          <Route path="/signup">
            {user ? (
              <>
                <SignUp />
              </>
            ) : (
              <>
                <Header />
                <Scrolling />
              </>
            )}
          </Route>

          <Route path="/admin">{!user ? <Login /> : <AdminBooking />}</Route>

          <Route path="/">
            <Header />
            <Scrolling />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
