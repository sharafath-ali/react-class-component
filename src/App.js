import List from "./list.com/Listtem";
import Drop from "./drop";
import { useState } from "react";

const obj=
  [
  {
  title:'Apointment for October',
  descr:'The patient is rescheduled to October',
  isActive: true
 },
 {
  title:'Apointment for October',
  descr:'The patient is rescheduled to October',
  isActive: false
 },
 {
  title:'Apointment for October',
  descr:'The patient is rescheduled to October',
  isActive: true
 }      
 ]


function App() {

  var list=obj.map((obj)=> {
    return <List key={obj.title} title={obj.title} isActive={obj.isActive} descr={obj.descr} />
  });
 
   const [data,setdata]=useState()

  function Change(eve){
    const value=eve.target.value;
    const newlist=list.filter(element => {
        if(value==='all'){
            return true;
        }
        if(value==='active'){
            return element.isActive === true
        }
        if(value==='non-active')
        {
            return element.isActive === false

        }
        return false;
    });
}
  return (
    <div>
       <Drop onActon={Change}>
         {list}
       </Drop>
    </div>
  );
}
export default App;
