import React from 'react';
import { Outlet } from 'react-router-dom';
import YuGiOh from '../data/YuGiOh.svg';


class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div id="Header">
          <h1 id="Header-Headline">YuGiOh Helper</h1>
          <img id="Header-logo" src={YuGiOh} />
        </div>
        <Outlet />
      </div>
    );
  }
}

export default Homepage;
