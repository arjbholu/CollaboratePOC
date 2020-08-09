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

const onDragEnd = (result) => {
    if (!result.destination) {
        return;
    }
}

const App = () => {
    const [data, setData] = useState(initialData);

    console.log(data.columnOrder);

    return (
        <div className="App">
            <Container>
                <DragDropContext onDragEnd={onDragEnd}>
                    {data.columnOrder.map((columnId) => {
                        const column = data.columns[columnId];
                        const tasks = column.taskIds.map(taskid => data.tasks[taskid])
                        return <Column column={column} tasks={tasks} />
                    })}
                </DragDropContext>
            </Container>
        </div>
    );
}

export default App;
