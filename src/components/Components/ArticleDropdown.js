import React from "react";

const ArticleDropdown = ({ setSort, sort_by }) => {
  return (
    <div className="articleSorterDropdown">
      <select onChange={setSort} value={sort_by}>
        <option value="created_at"> Date </option>
        <option value="votes"> Votes </option>
        <option value="comment_count"> Comments </option>
      </select>
    </div>
  );
};

export default ArticleDropdown;
