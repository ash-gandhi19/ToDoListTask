import React from 'react'
import {useState,useEffect} from 'react';
import {Link,useLocation } from 'react-router-dom';

function Tasklist() {
    let [task, newTask] = useState("");
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    // console.log(litype)

    let [todo, setToDo] = useState([
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

    let add = () => {
      if (task) {
        let newArr = [...todo];
        newArr.push({
          work: task,
          status: false,
        });
        setToDo(newArr);
      }
    };

    let [litype, setType] = useState("");

    const handleChange = (e) => {
      let update = [...todo];
      console.log(update);
      let item = e;
      item.status = !item.status;
      update.splice(update.indexOf(e), 1, item);
      setToDo(update);
    };
      
    
    
  return (
    <>
    
         <form action="javascript:void(0);"> 
                  <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e)=>{newTask(e.tarcdget.value)}}   onKeyDown={(e)=>{
                    if(e.key ==="Enter"){
                      add()
                    }
                  }}
                  />
                  <br/>
                  {/* <button className="btn btn-success" onClick={()=>add()}>Create</button> */}
                </form>
                {
                    console.log(splitLocation[1])
                }
                <ul className="nav nav-pills todo-nav">
                  <li role="presentation"  className={splitLocation[1] === "" ? " nav-item active" : "nav-item"}>
                    <Link to="/" className=""  onClick={()=>setType("all")}>
                    <a
              class="nav-link"
              href="#"
            > All </a>
                    </Link>                  
                  </li>
                 
                  <li role="presentation"  className={splitLocation[1] === "active" ? " nav-item active" : "nav-item"}>
                   <Link to="/active" className=""  onClick={()=>setType('active')}>
                   <a
              class="nav-link"
              href="#"
            > Active </a>
                        </Link>
                  </li>
                
                  <li role="presentation"  className={splitLocation[1] === "completed" ? " nav-item active" : "nav-item"}>
                    <Link to="/completed" className="" onClick={()=>setType("completed")}   >
                    <a
              class="nav-link"
              href="#"
            > Completed </a>
                    </Link>
                  </li>
                </ul>
                 
        <div className="todo-list">
                   
                  {
                      todo.map((e,i)=>{
                      console.log(e.status);

                      console.log(litype + '123');
                      
                           
                            if(litype ==="all" || litype === "")
                            { 
                              return <>
                            <div className="todo-item pp" key={i}>
                            <div className="checker"> <span className=""><input type="checkbox" onChange={()=>handleChange(e)} /></span></div>
                           {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}
                            </div>
                            </>
                           }else if(litype === 'active' && e.status !== 'true') { 
                            return <>
                            <div className="todo-item qqq" key={i}>
                                <div className="checker"> <span className=""><input type="checkbox"  onChange={()=>handleChange(e)} /></span></div>
                                {e.status? "":<span>{e.work}</span>}
                            </div>
                            </>

                            }
                            else{
                              return <>
                            <div className="todo-item www" key={i}>
                                <div className="checker"> <span className=""><input type="checkbox"  onChange={()=>handleChange(e)} /></span></div>
                               {e.status?<span><s>{e.work}</s></span>:""}
                            </div>
                            </>
                            }
                           
                        

                       
                    })
                  }
              </div>
    </>
  )
}

export default Tasklist
