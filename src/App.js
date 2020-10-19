import React from "react";
import Header from "./Header";
import "./App.css";
import Scrolling from "./Scrolling";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Review";
import Booking from "./Booking";
import { useStateValue } from "./StateProvider";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import AdminBooking from "./AdminBooking";
import Footer from "./Footer";
import AdminReview from "./AdminReview";
import Pdfprint from "./Pdfprint";

function App() {
  const [{ user, id }] = useStateValue();

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
            {id ? (
              <>
              <Header />
              <Pdfprint />
              <Footer />
              </>
            ) : (
              <>
                <Header />
                <Booking />
                <Footer />
              </>
            )}
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

          <Route path="/adminreview">
            {user ? (
              <>
                <AdminReview />
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
