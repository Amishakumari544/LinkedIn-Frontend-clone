import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
function SearchButton(props) {
  return (
    <div>
      <ul className="search_list">
        <li>
          <Link to={props.link1} className="search_button">
            {props.title1} <IoIosArrowForward color="#2977c9" />
          </Link>{" "}
        </li>
        <li>
          <Link to={props.link2} className="search_button">
            {props.title2} <IoIosArrowForward color="#2977c9" />
          </Link>{" "}
        </li>
        <li>
          <Link to={props.link3} className="search_button">
            {props.title3} <IoIosArrowForward color="#2977c9" />
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default SearchButton;
