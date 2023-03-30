import react from 'react'
import './List.css'
function List(para)
{   const style1=para.isActive?{backgroundColor: '#0000FF'} : {backgroundColor: '#FF0000'};
    return(
        <div className='list-item'>
           <hr/>
           <div className='list-title'>
             <h4>{para.title}</h4>
           </div>
           <div className='list-descr'>
             {para.descr}
           </div>
           <div className='list-label'>
             <span onClick={()=>{console.log('parent clicked')}} className='spanstyle' style={style1}>{para.isActive?'Active':'Non Active'}</span>
            
           </div>
           <hr/>
        </div>
    );
}
export default List;














 {/* cpy near span <span  style={{ paddingLeft: '10px', backgroundColor: '#1a1afb' ,marginLeft:'20px' }}> TRUE=BLUE </span>
             <span  style={{  backgroundColor: '#a600fa'}}>  &  </span>
    <span  style={{ paddingLeft: '10px', backgroundColor: '#e10000',paddingRight:'10px' }}>FALSE=RED</span>*/}