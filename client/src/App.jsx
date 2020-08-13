import React from 'react';
import './App.css';
import Column from './Components/ColumnComponent';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './InitialData';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flexDirection: row;
  justify-content: center;
`

const Title = styled.div`
  text-align: center
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
        const newData = this.state.data;
        const [sourceTasks] = newData.columns[sourceColumn].taskIds.splice(result.source.index, 1);
        newData.columns[destinationColumn].taskIds.splice(result.destination.index, 0, sourceTasks);
        this.setState({
            data: newData
        });
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Title>{this.state.data.projectName}</Title>
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
