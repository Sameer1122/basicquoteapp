import { Route, Switch, Redirect } from "react-router";

import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

import Layout from "./components/layout/Layout";

const Newqueots = React.lazy(() => import("./pages/Newqueots"));
const Detailqueots = React.lazy(() => import("./pages/Detailqueots"));
const Allqueots = React.lazy(() => import("./pages/Allqueots"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quetos"></Redirect>
          </Route>
          <Route path="/quetos" exact>
            <Allqueots />
          </Route>
          <Route path="/new-quetos">
            <Newqueots />
          </Route>
          <Route path="/quetos/:quetosId">
            <Detailqueots />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
