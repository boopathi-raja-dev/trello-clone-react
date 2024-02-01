import React, { useContext } from 'react'
import './navbar.scss'
import { ReactComponent as SearchIcon } from '../../../assets/searchIcon.svg'
import { ReactComponent as BellIcon } from '../../../assets/bell.svg'
import { ReactComponent as QuestionIcon } from '../../../assets/question.svg'
import { ReactComponent as AppIcon } from '../../../assets/app.svg'

const NavBar = () => {

  return (
    <nav className="navbar">
      <ul>
        <li> <AppIcon /></li>
        <img className="static" src="https://trello.com/assets/87e1af770a49ce8e84e3.gif" /><img className="active" src="https://trello.com/assets/d947df93bc055849898e.gif" />
        <div className='container-items'>
          <button className='dropdown' >Workspaces</button>
          <button className='dropdown'>Recent</button>
          <button className='dropdown'>Starred</button>
          <button className='dropdown'>Templates</button>
          <button className='create-btn'>Create</button>
        </div>
        <div className="search">
          <span className='fa fa search'></span>
          <input type="text" name="search" id="search" placeholder="Search" className='search-hover' />
        </div>
        <SearchIcon />
        <BellIcon />
        <QuestionIcon />
        <span className='id_icon'>BR</span>
      </ul>
    </nav>
  )
}


export default NavBar