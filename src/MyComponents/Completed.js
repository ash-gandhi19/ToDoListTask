import React from 'react'
import Tasklist from './Tasklist';
function Completed() {
  return (
    <>
    <div className="container">
     <div className="row">
       <div className="col-md-12">
         <div className="card card-white">
           <div className="card-body">
             
                 <Tasklist/>
               
           </div>
         </div>
       </div> 
     </div>
   </div>
 </>
  )
}

export default Completed
