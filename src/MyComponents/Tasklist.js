import React from 'react'
import {useState,useEffect} from 'react';
import {Link,useLocation } from 'react-router-dom';

function Tasklist(props) {
    let [task,newTask]=useState("");
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    
       // console.log(litype)
   
    let [todo,setToDo]=useState([
            {
            work:"Create theme",
            status:false
            },
            {
            work:"Work on wordpress",
            status:false
            },
            {
            work:"Organize office main department",
            status:false
            },
            {
            work:"Error solve in HTML template",
            status:false
            }
        ]
    );

    let add=()=>{
        if(task){
         let newArr=[...todo];
         newArr.push({
           work:task,
           status:false
         })
         setToDo(newArr);
       }
      }

        let [litype, setType]= useState("");  
        
        useEffect(() => {
        
            console.log(litype)
            
            },[litype]);
     

      let addtype=(litype) => {
       
           // console.log(e);
           setType(litype);
           
        };
  
     
    
    let handleChange=(e)=>{
    
        let update = [...todo];
        console.log(update);
        let item= e;
        item.status=!item.status;
        update.splice(update.indexOf(e),1,item);
        setToDo(update);
        
      }
      
    
    
  return (
    <>
    
         <form action="javascript:void(0);"> 
                  <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e)=>{newTask(e.target.value)}}   onKeyDown={(e)=>{
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
                  <a className='nav-item'>   <Link to="/" className="nav-link"  onClick={(e)=>addtype("all")}>
                        All
                    </Link>     </a>              
                  </li>
                 
                  <li role="presentation"  className={splitLocation[1] === "active" ? " nav-item active" : "nav-item"}>
                  <a className='nav-item'> <Link to="/active" className="nav-link"  onClick={(e)=>addtype('active')}>
                        Active
                        </Link></a>
                  </li>
                
                  <li role="presentation"  className={splitLocation[1] === "completed" ? " nav-item active" : "nav-item"}>
                   <a className='nav-item'> <Link to="/completed" className="nav-link" onClick={(e)=>addtype("completed")}  >
                      Completed
                    </Link></a>
                  </li>
                </ul>
                 
        <div className="todo-list">
                   
                  {
                     
                     
                      todo.map((e,i)=>{
                       console.log(litype);
                       return <>
                      
                        {
                           
                             (litype ==="all" || litype == "")? 
                            <div className="todo-item" key={i}>
                            <div className="checker"> <span className=""><input type="checkbox" onChange={()=>handleChange(e)} /></span></div>
                           {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}
                            </div>:
                            (litype === 'completed' && e.status == 'true') ? 
                            <div className="todo-item" key={i}>
                                <div className="checker"> <span className=""><input type="checkbox"  onChange={()=>handleChange(e)} /></span></div>
                                {e.status?<span><s>{e.work}</s></span>:<span></span>}
                            </div>:
                            <div className="todo-item" key={i}>
                                <div className="checker"> <span className=""><input type="checkbox"  onChange={()=>handleChange(e)} /></span></div>
                            {e.status?<span><s></s></span>:<span>{e.work}</span>}
                            </div>
                        }
                       
                       </>
                    })
                  }
              </div>
    </>
  )
}

export default Tasklist
