import React, { useState, useContext } from "react";
import MovieContext from "./movieContext"

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name }, { price, price }]);
  };
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" onChange={updateName} /> <br />
      <input type="text" name="price" onChange={updatePrice} /> <br />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;