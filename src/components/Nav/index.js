// NAVIGATION

import React, {useEffect} from 'react';
import {capitalizeFirstLetter} from "../../utils/helpers";

// props are passed in from App.js which define the state of category
function Nav(props) {
    // initilize category state with new array of objects
    // (categories[0]) is setter for useState
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    // [currentCategory] directs useEffect Hook to rerender the component on changes to the value of this state
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

      return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        // short circuit if currentCategory.name === category.name is true, navActive will be returned
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => { setCurrentCategory(category)}}>
                              {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}


export default Nav;