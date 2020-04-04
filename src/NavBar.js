/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react';
import {Link} from '@reach/router';
import {css, keyframes} from '@emotion/core';
import colors from './colors'

const spin = keyframes`
    to{
        transform: rotate(360deg)
    }
`;


const NavBar =  () =>{
    const [padding] = useState(15);
   // eslint-disable-next-line jsx-a11y/no-static-element-interactions
   return (<header
    css={
        css`
        background-color: ${colors.secondary};
        padding:${padding}px;
        `
    }>
        <Link to="/">Adopt Me!</Link>
        <span 
        css={ css`
        font-size: 60px;
        display: inline-block;
        animation: 1s ${spin} linear infinite;
        &:hover{
            animation: 1s ${spin} linear infinite reverse;
            text-decoration: underline;
        }`
    }
        role="img" aria-label="logo"> 🐶</span>
    </header>
)};
export default NavBar;