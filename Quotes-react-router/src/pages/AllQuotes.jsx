import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: "q1", author: "Mike", text: "My book" },
  { id: "q2", author: "Mikey", text: "My other book" },
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  );
};

export default AllQuotes;
