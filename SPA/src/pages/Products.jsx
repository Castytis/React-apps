import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A car</Link>
        </li>
        <li>
          <Link to="/products/p3">A cat</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
