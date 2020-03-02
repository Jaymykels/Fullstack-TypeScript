import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";
import Home from './pages/Home';
import Details from './pages/Details';
import SearchResult from './pages/SearchResult';

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
          <Switch>
            <Route
              path="/"
              exact
              component={(props: any) => (
                <Home {...props}/>
              )}
            />
            <Route
              path="/details/:companyId"
              exact
              component={(props: any) => (
                <Details {...props}/>
              )}
            />
            <Route
              path="/results/:keyword"
              exact
              component={(props: any) => (
                <SearchResult {...props}/>
              )}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;