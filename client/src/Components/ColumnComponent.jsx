import React from 'react';
import "./../Styles/Column.css";
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Card from "./CardComponent";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    min-width: 20%;
    height: fit-content;
`
const Title = styled.h3`
  padding: 8px;
`;
const CardList = styled.div`
  padding: 8px;
`;

const Column = ({ id, column, tasks }) => {
    return (
        <Container key={id}>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {provided => (
                    <CardList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => {
                            console.log(column.id, task);
                            return <Card key={index} task={task} index={index} />
                        })}
                        {provided.placeholder}
                    </CardList>
                )}
            </Droppable>
        </Container>

        // <div className="container">
        //     <div className="column column__blue" onDropOver={onDropFunction} onDrop={onDropFunction}>
        //         <div className="column__header">
        //             Backlog
        //         </div>
        //         <Card value="Hello there"/>
        //         <Card value="Okay"/>
        //     </div>

        //     <div className="column column__pink" onDropOver={onDropFunction} onDrop={onDropFunction}>
        //         <label>To-Do</label>
        //     </div>

        //     <div className="column column__yellow">
        //         <label>Doing</label>
        //     </div>

        //     <div className="column column__green">
        //         <label>Done</label>
        //     </div>
        // </div>
    );
};

export default Column;