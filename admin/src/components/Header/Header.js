import React from 'react';
import './Header.scss'

import ic_search from '../../assets/ic-search.svg';

class Header extends React.Component{
  render() {
    const { electric } = this.props;
    return (
      <div className='Header'>
        <div>
          <div className="oval" style={{
            backgroundColor: electric ? '#04a9f5' : '#ff4f8a'
          }} />
          <div>
            {electric ? '전력 공급중' : '전력 차단중'}
          </div>
        </div>
        <div>
          <img src={ic_search} alt=""/>
          <input type="text" placeholder="SEARCH"/> 
        </div>
      </div>
    )
  }
}

export default Header;