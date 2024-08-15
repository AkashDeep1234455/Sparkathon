import { useState } from 'react'
import './Filter.css'

export default function Filter(){
    const [checkStatus,setCheckStatus] = useState(false);
    const checkBoxChangeHandler = ()=>{
        setCheckStatus(!checkStatus);
        console.log(checkStatus);
    }


    return(
        <div className="Filter">
            <label> <input type="checkbox" onChange={checkBoxChangeHandler}/> : Expiry Date</label>
        </div>
    )
}