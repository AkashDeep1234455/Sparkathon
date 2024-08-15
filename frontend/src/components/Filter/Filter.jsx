import './Filter.css'

export default function Filter({opacity}){
    console.log(opacity);
    return(
        <div className="Filter" style={{opacity : opacity}}>
            <label> <input type="checkbox"/> : Expiry Date</label>
        </div>
    )
}