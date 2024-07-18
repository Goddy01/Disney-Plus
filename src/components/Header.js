import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" alt='home-icon'/>
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" alt='search-icon' />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" alt='watchlist-icon' />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" alt='original-icon' />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" alt='movie-icon' />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" alt='series-icon' />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src="/images/bruce-wayne.jpg" alt='profile-picture' />
    </Nav>
  )
}

export default Header

const Nav = styled.div`
    height: 80px;
    width: 100%;
    background-color: #090b13;
    display: flex;
    ${'' /* position: fixed; */}
    top: 0;
    align-items: center;
    padding: 0 33px;
    overflow-x: hidden;
    z-index: 1000;
    padding: 0 33px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    ${'' /* align-items: center; */}
    flex:1;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 18px;
        cursor: pointer;

        img {
            height: 22px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after {
                content: "";
                height: 3px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
        
    }

`
const UserImg = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    cursor: pointer;
`