import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Mike", text: "My book" },
  { id: "q2", author: "Mikey", text: "My other book" },
];

const QuoteDetail = () => {
  let quoteDetail = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteDetail.quoteId)

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quoteDetail.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
