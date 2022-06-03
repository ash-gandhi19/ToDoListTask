import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Tasklist() {
  let [task, newTask] = useState("");
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [todo, setToDo] = useState([
    {
      work: "Create theme",
      status: false,
    },
    {
      work: "Work on wordpress",
      status: false,
    },
    {
      work: "Organize office main department",
      status: false,
    },
    {
      work: "Error solve in HTML template",
      status: false,
    },
  ]);

  let add = (e) => {
    e.preventDefault();
    if (task) {
      setToDo((prev) => [...prev, { work: task, status: false }]);
      newTask("");
    }
  };

  let [litype, setType] = useState("");

  const handleChange = (e) => {
    let update = [...todo];
    let item = e;
    item.status = !item.status;
    update.splice(update.indexOf(e), 1, item);
    setToDo(update);
  };

  return (
    <>
      <form onSubmit={add}>
        <input
          type="text"
          className="form-control add-task"
          placeholder="New Task..."
          onChange={(e) => {
            newTask(e.target.value);
          }}
        />
        <br />
      </form>
      {console.log(splitLocation[1])}
      <ul className="nav nav-pills todo-nav">
        <li
          role="presentation"
          className={splitLocation[1] === "" ? " nav-item active" : "nav-item"}
        >
          <Link to="/" className="nav-link" onClick={() => setType("all")}>
            All
          </Link>
        </li>

        <li
          role="presentation"
          className={
            splitLocation[1] === "active" ? " nav-item active" : "nav-item"
          }
        >
          <Link
            to="/active"
            className="nav-link"
            onClick={() => setType("active")}
          >
            Active
          </Link>
        </li>

        <li
          role="presentation"
          className={
            splitLocation[1] === "completed" ? " nav-item active" : "nav-item"
          }
        >
          <Link
            to="/completed"
            className="nav-link"
            onClick={() => setType("completed")}
          >
            Completed
          </Link>
        </li>
      </ul>

      <div className="todo-list">
        {todo.map((e, i) => {
          if (litype === "all" || litype === "") {
            return (
              <>
                <div className="todo-item pp" key={i}>
                  <div className="checker">
                    <span className="">
                      <input
                        type="checkbox"
                        checked={e.status}
                        onChange={() => handleChange(e)}
                      />
                    </span>
                  </div>
                  {e.status ? (
                    <span>
                      <s>{e.work}</s>
                    </span>
                  ) : (
                    <span>{e.work}</span>
                  )}
                </div>
              </>
            );
          } else if (litype === "active") {
            return (
              <>
                {e.status ? null : (
                  <div className="todo-item qqq" key={i}>
                    <div className="checker">
                      <span className="">
                        <input
                          type="checkbox"
                          checked={e.status}
                          onChange={() => handleChange(e)}
                        />
                      </span>
                    </div>
                    <span>{e.work}</span>
                  </div>
                )}
              </>
            );
          } else {
            return (
              <>
                {e.status ? (
                  <div className="todo-item www" key={i}>
                    <div className="checker">
                      <span className="">
                        <input
                          type="checkbox"
                          checked={e.status}
                          onChange={() => handleChange(e)}
                        />
                      </span>
                    </div>
                    <span>
                      <s>{e.work}</s>
                    </span>
                  </div>
                ) : null}
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Tasklist;
