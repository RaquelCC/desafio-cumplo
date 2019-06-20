import React from 'react';
import './InfoTable.css';

export default class InfoTable extends React.Component {

    render() {
        return (
            <div className="table-container">
                <div className="table-row">
                    <div className="table-title">Valor Promedio</div>
                    <div className="table-info">{this.props.promedio}</div>
                </div>
                <div className="table-row">
                    <div className="table-title">Valor Máximo</div>
                    <div className="table-info">{this.props.maximo}</div>
                </div>
                <div className="table-row">
                    <div className="table-title">Valor Mínimo</div>
                    <div className="table-info">{this.props.minimo}</div>
                </div>
            </div>
        )
    }

}