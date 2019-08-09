import React from "react";
import loading from "../Media/loading.gif";

const Loading = () => {
  return (
    <div className="loadingGif">
      <img
        src={loading}
        alt="loading gif"
        style={{ width: "5em", height: "5em" }}
      />
    </div>
  );
};

export default Loading;
