import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';
import Logo from '../../Images/Logo.jpg';

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <a href="/" > <img style={{ width: '118px', borderRadius: '70px' }} className="ganofarimlogo" src={Logo} alt='' /></a>
                <a href="/" > <h1 className="navbar-logo">גן עופרים<i className="fab fa-react">
                </i></h1></a>
                <div className="manu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.utl}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <a href="/Login"> <Button>התחברות</Button></a>
            </nav >
        )
    }
}
export default Navbar