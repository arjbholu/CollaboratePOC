import React from 'react';
import './../Styles/Card.css'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
`

const Card = ({ task, index }) => (
    <Draggable key={task.id} draggableId={task.id} index={index}>
        {provided => (
            <Container
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {task.content}
            </Container>
        )}
    </Draggable>
)

export default Card;