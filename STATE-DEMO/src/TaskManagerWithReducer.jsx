import { useReducer } from "react";
import { useState } from "react";
const initialState = {
  tasks: [],
  totalTasks: 0,
  completedTasks: 0,
};

const STATUS = {
  Completed: "Completed",
  Pending: "Pending",
};

const PRIORITY = {
  High: "High",
  Medium: "Medium",
  Low: "Low",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const existingTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );

      let updatedTasks;
      if (existingTaskIndex >= 0) {
        return state;
      } else {
        updatedTasks = [
          ...state.tasks,
          {
            ...action.payload,
          },
        ];
      }
      return {
        ...state,
        tasks: updatedTasks,
        totalTasks: updatedTasks.length,
        completedTasks: updatedTasks.reduce(
          (total, task) => total + (task.status === STATUS.Completed ? 1 : 0),
          0,
        ),
      };
    }
    case "TOGGLE_STATUS": {
      const updatedToggleStatus = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task,
      );
      return {
        ...state,
        tasks: updatedToggleStatus,
        totalTasks: updatedToggleStatus.length,
        completedTasks: updatedToggleStatus.reduce(
          (total, task) => total + (task.status === STATUS.Completed ? 1 : 0),
          0,
        ),
      };
    }
    case "TOGGLE_PRIORITY": {
      const updatedTogglePriority = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, priority: action.payload.priority }
          : task,
      );
      return {
        ...state,
        tasks: updatedTogglePriority,
        totalTasks: updatedTogglePriority.length,
        completedTasks: updatedTogglePriority.reduce(
          (total, task) => total + (task.status === STATUS.Completed ? 1 : 0),
          0,
        ),
      };
    }
    case "REMOVE_TASK": {
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id,
      );
      return {
        ...state,
        tasks: updatedTasks,
        totalTasks: updatedTasks.length,
        completedTasks: updatedTasks.reduce(
          (total, task) => total + (task.status === STATUS.Completed ? 1 : 0),
          0,
        ),
      };
    }
    case "CLEAR": {
      return initialState;
    }
    default:
      return state;
  }
};

export const TaskManagerWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
        

      <button
        onClick={() => {
          if (!input.trim()) return;

          dispatch({
            type: "ADD_TASK",
            payload: {
              id: Date.now(),
              title: input,
              status: STATUS.Pending,
              priority: PRIORITY.Low,
            },
          });

          setInput("");
        }}
      >
        Add Task
      </button>
      <div>
        <h3>Task List</h3>

        {state.tasks.length === 0 ? (
          <p>No Task Added Currently</p>
        ) : (
          <div>
            {state.tasks.map((task) => (
              <div key={task.id}>
                <p>
                  {task.title} - {task.status} - {task.priority}
                </p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_STATUS",
                      payload: {
                        id: task.id,
                        status:
                          task.status === STATUS.Completed
                            ? STATUS.Pending
                            : STATUS.Completed,
                      },
                    })
                  }
                >
                  Toggle Status
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_PRIORITY",
                      payload: {
                        id: task.id,
                        priority:
                          task.priority === PRIORITY.High
                            ? PRIORITY.Medium
                            : task.priority === PRIORITY.Medium
                              ? PRIORITY.Low
                              : PRIORITY.High,
                      },
                    })
                  }
                >
                  Toggle Priority
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_TASK",
                      payload: { id: task.id },
                    })
                  }
                >
                  Remove Task
                </button>
              </div>
            ))}
          </div>
        )}
        <h5>Total Tasks: {state.totalTasks}</h5>
        <h5>Completed Tasks: {state.completedTasks}</h5>
        {state.tasks.length > 0 && (
          <button onClick={() => dispatch({ type: "CLEAR" })}>Clear All</button>
        )}
      </div>
    </div>
  );
};
