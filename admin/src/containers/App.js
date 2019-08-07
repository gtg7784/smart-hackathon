import React from 'react';

import {
  Switch,
  Route
} from 'react-router-dom'

import Navigation from '../components/Navigation/Navigation'
import Header from '../components/Header/Header'

import Class from '../containers/Class/Class'
import Module from '../containers/Module/Module'
import Electric from '../containers/Electric/Electric'
import Air from '../containers/Air/Air'
import Calendar from '../containers/Calendar/Calendar'
import Time from '../containers/Time/Time'
import Check from '../containers/Check/Check'

import './App.scss';

class App extends React.Component{
  state = {
    electric: false,
    route: [
      {
        index: '대시보드',
        items: ['교실 정보', '모듈 관리', '전력 관리', '공기환경 관리'],
        href: ['/class', '/module', '/electric', '/air'],
        container: [Class, Module, Electric, Air]
      },
      {
        index: '학사 관리',
        items: ['학사 일정', '시간표 관리', '출석 관리',],
        href: ['/calendar', '/time', '/check'],
        container: [Calendar, Time, Check]
      }
    ]
  }

  render() {
    const { electric, route } = this.state;
    return (
      <div className="App">
        <Navigation route={route} />
        <Header electric={electric} />
        <div className="main">
          <Switch>
            {route.map((item) => (
              item.href.map((items, i) => (
                <Route path={items} exact component={item.container[i]}/>
              ))
            ))}
            <Route path='/' exact component={Electric}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
