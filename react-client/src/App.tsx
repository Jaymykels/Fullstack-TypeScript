import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";
import Home from './pages/Home';

const history = createHistory();


const App: React.FC = () => {
  return (
    <div className="bg-white font-sans w-full min-h-screen m-0">
      <div className="container mx-auto px-4">
        <Router history={history}>
          {/* Header */}
          <div className="flex items-center justify-between py-4">
            <div></div>
            <div className="">
              <Link to="/" className="text-purple-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Home</Link>
            </div>
          </div>
          {/* Main */}
          <Route
            path="/"
            exact
            component={(props: any) => (
              <Home {...props}/>
            )}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;