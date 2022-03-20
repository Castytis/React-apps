import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Mike", text: "My book" },
  { id: "q2", author: "Mikey", text: "My other book" },
];

const QuoteDetail = () => {
  const match = useRouteMatch()
  const  quoteDetail = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteDetail.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.url}/comments`}
          >
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
