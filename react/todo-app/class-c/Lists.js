import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function List({ todoDate, setTodoDate }) {
  const handleClick = (id) => {
    // data.id와 버튼의 id가 같은건 지우고 다른것만 출력한다.
    let newTodoData = todoDate.filter((data) => data.id !== id);
    setTodoDate(newTodoData);
  };

  const handleCompleChange = (id) => {
    let newTodoData = todoDate.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoDate(newTodoData);
  };

  const handleEnd = (result) => {
    console.log("result", result);

    if (!result.destination) return;

    // 새로운 todoData생성 - 불변성을 지켜주기 위해
    const newToddData = todoDate;

    const [reorderedItem] = newToddData.splice(result.source.index, 1);

    newToddData.splice(result.destination.index, 0, reorderedItem);
    setTodoDate(newToddData);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoDate.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      className={`${
                        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
                    >
                      <div className="items-center">
                        <input
                          type="checkbox"
                          onChange={() => handleCompleChange(data.id)}
                          defaultChecked={false}
                        />
                        <span
                          className={`${
                            data.completed ? "line-throughs" : undefined
                          } pl-2`}
                        >
                          {data.title}
                        </span>
                      </div>
                      <div className="items-center">
                        <button
                          className="px-4 py-2 float-right"
                          // data.id : 버튼이 여러개니깐 어떤 버튼을 클릭했는 지알려줘야 함
                          onClick={() => handleClick(data.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
