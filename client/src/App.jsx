import React, { useState } from 'react';
import './App.css';
import Column from './Components/ColumnComponent';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './InitialData';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flexDirection: row;
`

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: initialData
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    onDragEnd(result) {
        if (!result.destination) {
            return;
        }


        const sourceColumn = result.source.droppableId;
        const destinationColumn = result.destination.droppableId;
        const sourceTask =  this.state.data.columns[sourceColumn].taskIds[result.source.index];
        const newData = this.state.data;
        const [sourceTasks] = newData.columns[sourceColumn].taskIds.splice(result.source.index, 1);
        newData.columns[destinationColumn].taskIds.splice(result.destination.index, 0, sourceTasks);
        // console.log(destinationTasks);
        // data.columns[sourceColumn].taskIds = sourceTasks;
        // newData.columns[destinationColumn].taskIds = [...this.state.data.columns[destinationColumn].taskIds, sourceTask];
        // newData = data.columns[destinationColumn].taskIds[result.destination.index];
        // // console.log(data
        this.setState({
            data: newData
        });
        // console.log(sourceColumn, sourceTaskId, destinationColumn, destinationTaskId);

        // if (result.destination.droppableId != result.source.droppableId) {
        //     data = data.
        // }

        console.log(result);
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Container>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        {this.state.data.columnOrder.map((columnId, index) => {
                            const column = this.state.data.columns[columnId];
                            const tasks = column.taskIds.map(taskid => this.state.data.tasks[taskid])
                            return <Column key={index} id={column.Id} column={column} tasks={tasks} />
                        })}
                    </DragDropContext>
                </Container>
            </div>
        )
    }
}
