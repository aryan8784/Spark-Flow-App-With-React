import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskdata, setTaskdata] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskdata.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    {
      if (taskdata.tags.some((item) => item === tag)) {
        const filterTag = taskdata.tags.filter((item) => item !== tag);
        setTaskdata((prev) => {
          return { ...prev, tags: filterTag };
        });
      } else {
        setTaskdata((prev) => {
          return { ...prev, tags: [...prev.tags, tag] };
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskdata);
    setTasks((prev) => {
      return [...prev, taskdata];
    });
    setTaskdata({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <>
      <header className="app-header">
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            value={taskdata.task}
            className="task-input"
            placeholder="Enter Your Task"
            onChange={handleChange}
          />
          <div className="task-form-bottom-line">
            <div>
              <Tag
                TagName="HTML"
                selectTag={selectTag}
                selected={checkTag("HTML")}
              />
              <Tag
                TagName="CSS"
                selectTag={selectTag}
                selected={checkTag("CSS")}
              />
              <Tag
                TagName="JavaScript"
                selectTag={selectTag}
                selected={checkTag("JavaScript")}
              />
              <Tag
                TagName="React"
                selectTag={selectTag}
                selected={checkTag("React")}
              />
            </div>
            <div>
              <select
                className="task-status"
                value={taskdata.status}
                name="status"
                onChange={handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button className="task-submit" type="submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
};

export default TaskForm;
