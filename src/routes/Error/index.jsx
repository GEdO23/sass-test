import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-container">
      <h1>ERROR - 404</h1>
      <h2>We couldn't find the page you're looking for...</h2>
      <Link to='/' className="turnback-link">Go back to Home</Link>
    </div>
  )
}
