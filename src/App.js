import React from 'react';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import 'moment/locale/es';

import { DateRangePicker, isInclusivelyBeforeDay } from 'react-dates';
import Chart from './components/Chart';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      fetchInfo: null,
    };

    moment.locale('es');
  }

  componentDidMount() {
    const today = moment();
    const todayStr = `${today.year()}/${today.month()}/dias/${today.date()}`;
    fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/${todayStr}?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`)
    .then(data => data.json())
    .then(data => {
      const formatData = data.Dolares.map(date => {
        let formatValor = date.Valor.split(',').join('.')
        return {
          label: date.Fecha,
          y: Number(formatValor),
        }
      })
      this.setState({
        ...this.state,
        fetchInfo: formatData,
      })
    })
    .catch(console.log)
  }

  getDollarInfo = () => {
    if (this.state.startDate && this.state.endDate) {
      const formatTimeSpan = `${this.state.startDate.year()}/${this.state.startDate.month()+1}/dias_i/${this.state.startDate.date()}/${this.state.endDate.year()}/${this.state.endDate.month()+1}/dias_f/${this.state.endDate.date()}`;
      fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${formatTimeSpan}?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`)
        .then(data => data.json())
        .then(data => {
          const formatData = data.Dolares.map(date => {
            let formatValor = date.Valor.split(',').join('.')
            return {
              label: date.Fecha,
              y: Number(formatValor),
            }
          })
          this.setState({
            ...this.state,
            fetchInfo: formatData,
          })
        })
        .catch(console.log)

    }
  }


  render() {
    return (
      <div className="App">
        <header><div className="line-across line-1"></div>Valor Dolar<div className="line-across line-2"></div></header>
        <div className="picker-div">
          <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
            isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
            startDatePlaceholderText="Desde"
            endDatePlaceholderText="Hasta"
          />
          <div className="get-stats-btn" onClick={this.getDollarInfo}>Graficar</div>
        </div>
        <Chart
        dataPoints={this.state.fetchInfo}
        />
      </div>
    );
  }
}

export default App;

