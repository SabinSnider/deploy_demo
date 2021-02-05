import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const UsedApiLink = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Used APIs
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><a href="https://developers.themoviedb.org/3/discover/movie-discover" target="_blank" rel="noreferrer" >Discover</a></DropdownItem>
          <DropdownItem><a href="https://developers.themoviedb.org/3/movies/get-movie-details" target="_blank" rel="noreferrer">Movies </a></DropdownItem>
       
          <DropdownItem><a href="https://developers.themoviedb.org/3/genres/get-movie-list" target="_blank" rel="noreferrer"> Genre</a></DropdownItem>
          <DropdownItem><a href="https://developers.themoviedb.org/3/trending/get-trending" target="_blank" rel="noreferrer"> Trending</a></DropdownItem>
          <DropdownItem></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  
  export default UsedApiLink;