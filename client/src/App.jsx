import React from 'react';
import './App.css';
import Column from './Components/ColumnComponent';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './InitialData';

const App = () => {
  let data = initialData;

  console.log(data.columnOrder);

  return (
    <div className="App">

        <DragDropContext>
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map(taskid => data.tasks[taskid])
            return <Column column={column} tasks={tasks} />
          })}
        </DragDropContext>
    </div>
  );
}

export default App;
