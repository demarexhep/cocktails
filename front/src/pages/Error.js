import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <Loader
          type="Oval"
          color="#476a2e"
          height={100}
          width={100}
          timeout={9000}
        />
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
