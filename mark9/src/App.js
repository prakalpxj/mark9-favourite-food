import React, { useState } from "react";
import "./styles.css";
const foods = {
  Indian: [
    {
      src:
        "https://www.whiskaffair.com/wp-content/uploads/2020/09/Matar-Paneer-2-3.jpg",
      food: "Matar Panner"
    },
    {
      src: "https://static.toiimg.com/thumb/53097626.cms?width=1200&height=900",
      food: "Dal Makhani"
    },
    {
      src:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg",
      food: "Aloo Paratha"
    }
  ],
  Chinise: [
    {
      src:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
      food: "Noodles"
    },
    {
      src: "https://i.ytimg.com/vi/xkMbJCtaaqA/maxresdefault.jpg",
      food: "Manchurian"
    }
  ],
  Italian: [
    {
      src: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
      food: "Pizza"
    },
    {
      src:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/masala-pasta.jpg",
      food: "Pasta"
    }
  ]
};
export default function App() {
  const [foodDetails, setFoodDetails] = useState("Indian");
  //const [ratingDetails, setRatingDetails] = useState([]);

  const clickbtn = (event) => {
    let genre = event.target.innerText;
    setFoodDetails(genre);
  };

  return (
    <div className="App">
      <header>
        <h1>Favourite Food</h1>
        <p>Checkout my favorite food. Select a genre </p>
      </header>
      <div>
        <button
          onClick={clickbtn}
          value="Indian"
          style={{ marginRight: "10px", fontSize: "20px" }}
        >
          Indian
        </button>
        <button
          onClick={clickbtn}
          value="Chinese"
          style={{ marginRight: "10px", fontSize: "20px" }}
        >
          Chinese
        </button>
        <button
          onClick={clickbtn}
          value="Italian"
          style={{ marginRight: "10px", fontSize: "20px" }}
        >
          Italian
        </button>
      </div>
      <hr />

      <div>
        {foods[foodDetails].map((item) => {
          return (
            <div className="box">
              <div>
                <span>
                  <img className="img" src={item.src} alt="" />
                </span>
              </div>
              <div className="heading">
                <span>{item.food}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
