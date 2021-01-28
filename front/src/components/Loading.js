import React from "react";
import Loader from "react-loader-spinner";
const Loading = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <Loader
          type="Puff"
          color="#476a2e"
          height={100}
          width={100}
          timeout={9000}
        />
      </div>
    </section>
  );
};

export default Loading;
