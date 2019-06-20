import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import './Chart.css';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Chart extends React.Component {
        render() {
            
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Variación del Dolar"
			},
			axisX:{
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				includeZero: false,
				valueFormatString: "$##0.00",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: (e) => {
						return "$" + CanvasJS.formatNumber(e.value, "##0.00");
					}
				}
			},
			data: [{
				type: "area",
				yValueFormatString: "$##0.00",
				dataPoints: this.props.dataPoints,
			}]
		}

         return (
            <div className="chart-canvas">
              <CanvasJSChart options = {options}
              />
            </div>
          );
        }
}