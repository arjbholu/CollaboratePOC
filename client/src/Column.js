import React from 'react';
import "./Column.css";
import Card from "./Card";


const Column = () => {
    return (
        <div className="container">
            <div className="column column__blue">
                <label>Backlog</label>
                <Card value="Hello there"/>
            </div>

            <div className="column column__pink">
                <label>To-Do</label>
            </div>

            <div className="column column__yellow">
                <label>Doing</label>
            </div>

            <div className="column column__green">
                <label>Done</label>
            </div>
        </div>
    );
};

export default Column;