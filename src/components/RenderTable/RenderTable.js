import React from 'react';
import './RenderTable.css';

const table = (props) => {
    return (
        <div>
            <table className="Table">
                <tr>
                    <th>Otsikko 1</th>
                    <th>Otsikko 2</th>
                    <th>Otsikko 3</th>
                </tr>
                <tr>
                    <th>Sisältö 1</th>
                    <th>
                    { props.timerOn ?
                    
                    <button onClick={props.stopTimer}>STOP</button>
                        :
                    <button onClick={props.startTimer}>ALOITA</button>
                    }
                    </th>
                    <th>{props.timerTime}</th>
                </tr>
            </table>
        </div>
    );
};

export default table;