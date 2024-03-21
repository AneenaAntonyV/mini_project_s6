import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {

  const [categories, setCategoryList] = useState([])
  useEffect(() => {
    // API Call via bnodejs to DB to fetch the list of categories
    // eslint-disable-next-line
    const a = fetch("http://localhost:5000/categories").then(res => res.json()).then(
      data => {
        setCategoryList(data);
      }
    )
  }, [])
  //console.log(categories)
  return (
    <div>
      <h1 id='hheading'>Home Page</h1>
        {categories.map((category) => (
          <Link to ={category.category_url}>
            <button className='hbutton'>{category.categories_name}</button>
          </Link>
          ))}
    </div>
  );
}
export default Home;