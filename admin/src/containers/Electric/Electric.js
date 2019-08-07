import React from 'react'
import moment from "moment";
import { Line } from 'react-chartjs-2';

import ic_arrow from '../../assets/path-4.svg'
import ic_arrow_fill from '../../assets/path-4-fill.svg'

import './Electric.scss'

const now = moment("24:00:00", "HH:mm:ss")
  .subtract(moment().format("HH"), "hours")
  .subtract(moment().format("mm"), "minutes")
  .subtract(moment().format("ss"), "seconds")
  .format("HH:mm:ss");

  function datefunc(max, i, arr) {
    if (i > max) return arr;
    const date = moment().subtract(i, 'minutes').format("LT")
    arr.push(date);
  
    return datefunc(max, i + 30, arr);
  }
  
class Electric extends React.Component{
  constructor(props){
    super(props);

    this.onTimeChange = this.onTimeChange.bind(this)
  }
  state = {
    date: now,
    data: {
      labels: datefunc(200, 0, []),
      datasets: [
        {
          label: 'Electrics',
          borderColor: '#a389d4',
          backgroundColor: 'rgba(255, 255, 255, 0)',
          data: [32, 11, 35, 50, 45, 30, 60],
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          hoverBackgroundColor: '#3f3f3f',
          hoverBorderColor: '#a389d4',
        },
      ]
    },
    classes: 32,
    options: {
      scaleShowGridLines: false,
      bezierCurve: true,
      bezierCurveTension: 0.4,
      pointDot: false,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: false,
      scaleShowHorizontalLines: false,
      scaleShowVerticalLines: false,
    },
    classlist: [
      '1학년 2반',
      '1학년 3반',
      '1학년 4반',
      '1학년 5반',
      '1학년 6반',
      '1학년 7반',
      '1학년 8반',
      '1학년 9반',
      '2학년 1반',
      '2학년 2반',
      '2학년 3반',
      '2학년 4반',
      '2학년 5반',
      '2학년 6반',
      '2학년 7반',
      '2학년 8반',
      '2학년 9반',
      '3학년 1반',
      '3학년 2반',
      '3학년 3반',
      '3학년 4반',
      '3학년 5반',
      '3학년 6반',
      '3학년 7반',
      '3학년 8반',
      '3학년 9반'
    ],
    dataselected: undefined,
    timeset: undefined,
    supply: false
  };

  onTimeChange = (text) => {
    var timeset = moment({
      hour: Math.floor(Math.random() * 12),
      minute: Math.floor(Math.random() * 59),
      second: Math.floor(Math.random() * 59)
    }).format('HH:mm:ss')

    this.setState({
      dataselected: text,
      timeset: timeset,
      supply: true
    });
  }

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          date: moment("24:00:00", "HH:mm:ss")
            .subtract(moment().format("HH"), "hours")
            .subtract(moment().format("mm"), "minutes")
            .subtract(moment().format("ss"), "seconds")
            .format("HH:mm:ss")
        }),
      1000
    );
  }

  render() {
    const { classes, options, data, classlist, timeset, supply, dataselected } = this.state;
    return (
      <div className='Electric'>
        <h1>전력 관리</h1>
        <div className="gragh-component">
          <div>
            <h2>전력이 공급되는 학급 수</h2>
            <div>
              <img src={classes >= 0 ? ic_arrow : ic_arrow_fill} alt="" />
              <div>{classes}</div>
            </div>
            <div>실시간 관리 모니터링</div>
          </div>
          <div>
            <Line
              data={data}
              options={options}
              width={830}
              height={330}
            />
          </div>
        </div>
        <h1>학급별 전력 관리</h1>
        <div className="classes">
          <div>
            <div>
              <h2>전력 공급/차단</h2>
              <div>
                <input list="classes" onChange={(text) => this.onTimeChange(text)}/>
                <datalist id="classes">
                  {classlist.map((item, key) =>
                    <option key={key} value={item} />
                  )}
                </datalist>
              </div>
            </div>
            <div>
              <div />
              <div>
                <img src={dataselected !== undefined ? supply ? ic_arrow : ic_arrow_fill : null} alt="" />
                <div>{timeset}</div>
              </div>
            </div>
            <div>
              <div/>
              <div>
                공급/차단
                {supply
                  ? <div onClick={() => this.setState({
                    supply: !supply,
                    timeset: moment({ hour: 0, minute: 0, second: 0 }).format('HH:mm:ss')
                  })} className="sup" style={{ backgroundColor: '#04a9f5' }}><div className='sup_oval' style={{ marginLeft: 1 }}/><div/></div>
                  : <div onClick={() => this.setState({
                    supply: !supply,
                    timeset:  moment({
                      hour: Math.floor(Math.random() * 12),
                      minute: Math.floor(Math.random() * 59),
                      second: Math.floor(Math.random() * 59)
                    }).format('HH:mm:ss')
                  })} className="sup" style={{ backgroundColor: '#ff4f8a' }}><div /><div className='sup_oval' style={{ marginRight: 1 }}/></div>
                }
              </div>
            </div>
          </div>
          <div classNam="">
            <h2>전력공급 조정</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Electric;
