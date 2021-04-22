import React from 'react';
// render will render the React component
// cleanup will remove components from the DOM
import {render, cleanup} from'@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import About from "..";
// after each test there won't be any leftover memory data 
afterEach(cleanup);
// describe function declare the component we are testing
describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () =>{
        // this will return a snapshot of the About component
        const {asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
  })