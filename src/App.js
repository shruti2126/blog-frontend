/** @format */
import React from "react";

import Blog from "./Components/Blog";
import BlogPage from "./Components/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Switch>
          {/* Define your routes here */}
          <Route exact path="/" component={Blog} />
          <Route path="/blog/:id" component={BlogPage} />
        </Switch>
      </Routes>
    </Router>
  );
}

export default App;
