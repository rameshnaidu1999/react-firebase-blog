import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Addproduct from "./admin/Addproduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);

  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <SignIn />
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createblog" component={Addproduct} />
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
