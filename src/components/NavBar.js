import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import UsedApiLink from '../components/UsedApiNavbar'
import {Link} from 'react-router-dom';
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Trending from '../components/Trending';
// import NowPlaying from '../components/NowPlaying';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    // <BrowserRouter>
    <div>

      {/* <Switch> */}
      {/* <Route exact path="/trending" component={Trending}/> */}
      {/* <Route exact path="/nowPlaying" component={NowPlaying}/> */}
      
      <Navbar color="dark" dark expand="md">

        <div className="container-fluid">
        <NavbarBrand href="/">MOVIEDB</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to= {`/trending`}>Trendings</Link> </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink>Now Playing</NavLink> */}
              <NavLink> <Link to= {`/nowPlaying`}>Now Playing</Link> </NavLink>

            </NavItem>
            <NavItem>
              <NavLink>Genres</NavLink>
            </NavItem>
          </Nav>
          <UsedApiLink/>
          {/* <NavbarText>APIS USED</NavbarText> */}
        </Collapse>
        </div>
      </Navbar>
      {/* </Switch>  */}

    </div>
    // </BrowserRouter>
  );
}

export default NavBar;