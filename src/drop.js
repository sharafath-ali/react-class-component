import { render } from "@testing-library/react";
import { Children } from "react";
import './drop.css'
export default function Drop(prop){
    const{
        children
    }=prop
    
    
    return(
        <div className="list-header">
           <div>
            <select name="status">
                <option value='all'>ALL</option>
                <option value="active">Active</option>
                <option value='non-active'>non-Active</option>
            </select>
            </div>
            {children}
            <div className="list-footer">
                some info here
            </div> 
        </div>
    )
}