import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

class Header extends Component {
    render () {
        return (
            <div className='header' style={{backgroundColor: '#e3f2fd'}}>
                <div className='flex-container'>
                    <h2 id='main-title'>Mood Journal</h2>
                    <nav id='navbar' className='navbar navbar-light'>
                        <div className='flex-container' style={{width: '100%'}}>
                            <div className='navChild'><NavLink className='btn btn-outline-primary btn-lg' to='/'>Home</NavLink></div>
                            <div className='navChild'><NavLink className='btn btn-outline-primary btn-lg' to='/entryform'>Create</NavLink></div>
                            <div className='navChild'><NavLink className='btn btn-outline-primary btn-lg' to='/qotd'>QOTD</NavLink></div>
                        </div>
                    </nav>
                    <form id='search-form' className='flex-container' method='get' >
                        <input className='form-control' type='search' placeholder='Search' aria-label='Search'></input>
                        <button className='btn btn-outline-primary my-2 my-sm-0' type='submit'>Search</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Header;