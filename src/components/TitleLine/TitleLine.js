import React from 'react';
import { Link } from 'react-router-dom';
import './TitleLine.scss';

const TitleLine = () => {
  return (
    <div className="title-line">
      <div className="title-one">
        <Link to="/">
          <img className="logo" alt="logo" src="/images/main/logo.png" />
        </Link>
        <input className="search-bar" />
        <div className="title-right">
          <button className="to-wishlist" />
          <button className="to-cart" />
        </div>
      </div>
      <div className="title-nav">
        <button className="menus" />
        <div className="카테고리">카테고리</div>
      </div>
    </div>
  );
};
export default TitleLine;
