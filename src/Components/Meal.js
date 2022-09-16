import React, { useState } from "react";
import Mealitem from "./MealItem";
import "./style.css";
import Nav from "./Nav"; 

const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    if (evt.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
          setSearch("");
        });
    }
  };

  return (
    <>
        <Nav />
      <div className="main">
            <div className="searchBox">
                <input
                    type="search"
                    className="search-bar"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    onKeyPress={searchMeal}
                />
            </div>
            <div className="container">
                {Mymeal == null ? (
                    <p className="notSearch"></p>
                ) : (
                    Mymeal.map((res) => {
                    return <Mealitem data={res} />;
                    })
                )}
                {/* <Mealitem res={getMeal} /> */}
            </div>
      </div>
    </>
  );
};
export default Meal;
