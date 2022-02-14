import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const isSortingAsc = queryParam.get("sort") === "acc";
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);
  const sortAcc = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAsc ? "desc" : "acc"}`,
    });
    // history.push(`${location.pathname}?sort=${isSortingAsc ? "desc" : "acc"}`);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortAcc}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
