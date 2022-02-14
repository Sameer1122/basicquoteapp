import React, { useEffect } from "react";
import QuotemForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const Newqueots = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") {
      history.push("/quetos");
    }
  }, [status, history]);
  const onAddQuote = (item) => {
    sendRequest(item);
  };
  return (
    <div>
      <QuotemForm isLoading={status === "pending"} onAddQuote={onAddQuote} />
    </div>
  );
};

export default Newqueots;
