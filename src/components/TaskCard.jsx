import React from "react";
import "./Taskcard.css";
import Tag from "./Tag";
import deleteicon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <>
      <article className="task_card">
        <p className="task-text">{title}</p>
        <div className="task_card_Bottom_line">
          <div className="task_card_tags">
            {tags.map((tag, index) => (
              <Tag key={index} TagName={tag} selected />
            ))}
          </div>
          <div className="task_delete" onClick={() => handleDelete(index)}>
            <img src={deleteicon} className="delete-Icon" alt="" />
          </div>
        </div>
      </article>
    </>
  );
};

export default TaskCard;
