import React, {Fragment} from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
} from "reactstrap";
import { NavLink as RouterNavLink } from 'react-router-dom';
import {apiURL} from "../../../constants";
import './Toolbar.css'

const logOut = () => {
    localStorage.clear();
    window.location.reload();
}

const Toolbar = ({user}) => {
    let avatar;
    if (user && user.avatar) {
        avatar = apiURL + '/uploads/' + user.avatar;
    }
    return (
        <div>
            <Navbar color='light' light expand='md'>
                <NavbarBrand tag={RouterNavLink} to='/'>Photo Gallery</NavbarBrand>
                <Nav className='ml-auto'>
                    {user ? (
                        <Fragment>
                            <NavItem className='username'>
                                { avatar && <img src={avatar} style={{width: '25px', height: '25px'}} className="img-thumbnail" alt="user"/> }
                                Hi, <RouterNavLink to={'/users/' + user._id}>{user.username}</RouterNavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={()=>logOut()}>Log out</NavLink>
                            </NavItem>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/register" exact>Sign up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/login" exact>Login</NavLink>
                            </NavItem>
                        </Fragment>
                    )}
                </Nav>
            </Navbar>
        </div>
    );
};

export default Toolbar;