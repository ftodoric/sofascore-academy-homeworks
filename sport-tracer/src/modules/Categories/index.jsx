import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { fetchCategories } from "../../api/sofascore";
import { getCategoryURL } from "../../utils/route-urls";

export function Categories(props) {
  // Props
  const sport = props.match.params.sport;
  const date = props.match.params.date;
  const offset = props.match.params.offset;

  // List of categories
  const [categories, setCategories] = useState([]);

  // Fetch categories
  useEffect(() => {
    fetchCategories(sport, date, offset, setCategories);
  }, [sport, date, offset]);

  // Print categories
  /* useEffect(() => {
    if (categories.length !== 0) console.log(categories);
  }, [categories]); */

  return (
    <div className="categories">
      <div className="list-title">CATEGORIES</div>
      <div className="list">
        {categories
          .sort((a, b) => b.category.priority - a.category.priority)
          .map(function (item) {
            return (
              <Link
                key={item.category.id}
                className="category-link"
                to={getCategoryURL(item.category.slug, item.category.id, date)}
              >
                {item.category.name} ({item.totalEvents})
              </Link>
            );
          })}
      </div>
    </div>
  );
}
