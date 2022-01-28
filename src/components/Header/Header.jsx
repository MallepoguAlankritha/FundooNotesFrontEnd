import React from "react";
import '../Header/Header.css'
import download from '../../image/googlekeepimg.jpg'
// import view_headline from '@mui/material-icons/view_headline';

function Header(props) {
  function onClicked()
  {
    props.listenToProps()
  }
  return (
    <div>
      <div className="header">
     
      <i onClick={onClicked}className="material-icons" >view_headline</i>
        <div className="img">
        <img src={download} alt="Img" style={{ width: "34px" }} />
        </div>
        <div>
          <span className="title">Keep</span>
        </div>

        <div className="searchbar">
          <div className="searching">
            <form>
              <button type="submit">Search</button>
              <input type="search" placeholder="Search..." />
            </form>
          </div>
        </div>
        <div className="btn1">
        <i className="material-icons btn space">rotate_right</i>
        <i className="material-icons btn space">view_agenda</i>
        <i className="material-icons btn space">settings</i>
          </div>
      </div>
    </div>
  );
}

export default Header;