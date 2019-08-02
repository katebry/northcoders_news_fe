import React from "react";

const ArticleDropdown = ({ setSort }) => {
  return (
    <div className="articleSorterDropdown">
      <select onChange={setSort}>
        <option value="created_at"> Date </option>
        <option value="votes"> Votes </option>
        <option value="comment_count"> Comments </option>
      </select>
    </div>
  );
};

export default ArticleDropdown;
