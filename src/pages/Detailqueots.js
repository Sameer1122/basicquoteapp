import React, { useEffect } from "react";
import { useParams, Route } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuote from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Detailqueots = () => {
  const param = useParams();
  const match = useRouteMatch();
  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(param.quetosId);
  }, [sendRequest, param.quetosId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }
  if (!data.text) {
    return <NoQuote />;
  }
  return (
    <div>
      <HighlightedQuote text={data.text} author={data.author} />

      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comment
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default Detailqueots;
