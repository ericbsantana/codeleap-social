import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <div className="flex justify-center min-h-screen h-full bg-gray-300">
            <Dashboard />
          </div>
        </Route>
        <Route path="/">
          <div className="flex justify-center h-screen bg-gray-300">
            <Signup />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
