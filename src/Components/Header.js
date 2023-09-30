import React from 'react'
import './Header.css';
import { HeaderData } from './HeaderData';

function Header() {
  return (
    <div className='Header'>
        <ul className='Headerlist'>{HeaderData.map((val, key) => {
            return (
                <li key={key}
                className='Headeritem'>
                    <div onClick={()=>window.location.pathname = val.link} className='Logo'>
                      {val.logo}
                      </div>{""}
                </li>
            )
        })}

        </ul>
    </div>
  )
}

export default Header