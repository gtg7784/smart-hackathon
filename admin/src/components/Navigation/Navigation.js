import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/ic_logo.svg'
import './Navigation.scss'


class Navigation extends React.Component{
  render() {
    const { route } = this.props;
    return (
      <nav>
        <div>
          <Link to='/' >
            <img src={Logo} alt="" />
          </Link>
          <div>
            스마트클래스 관리자 페이지
          </div>
        </div>
        <div>
          {route.map((item, i) => (
            <div key={i}>
              <h2>{item.index}</h2>
              {item.items.map((items, j) => (
                <Link key={i + ',' + j} to={item.href[j]}>
                  {items}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </nav>
    );    
  }
}

export default Navigation;