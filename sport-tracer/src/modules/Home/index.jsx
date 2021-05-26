import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Category } from "../Category";

export function Home() {
  const [categories, setCategories] = useState([]);

  // Categories Fetch
  useEffect(() => {
    // Get today's date
    var today = new Date().toJSON().slice(0, 10);
    today = String(today);

    // Fetch
    const fetchCategories = async () => {
      const response = await fetch(
        "https://master.dev.sofascore.com/api/v1/sport/football/" +
          today +
          "/7200/categories"
      );
      const { categories } = await response.json();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  function getCategoryLink(cat) {
    return "/category/" + JSON.stringify(cat);
  }

  return (
    <>
      {categories.map(function (item) {
        return (
          <div key={item.category.id}>
            <Link to={() => getCategoryLink(item.category)}>
              {item.category.name}
            </Link>
            <Route path="/category/:id" component={Category} />
          </div>
        );
      })}
    </>
  );
}
