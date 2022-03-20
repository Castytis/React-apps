import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
  let quoteDetail = useParams();

  return (
    <div>
      <h1>Quote detail</h1>
      <p>{quoteDetail.quoteId}</p>
      <Route path={`/quotes/${quoteDetail.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
