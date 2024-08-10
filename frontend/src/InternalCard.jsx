import './InternalCard.css'

export default function InternalCard(){

    return(
        <>
            <div className="InternalCard_parent">
                <div className="InternalCard_img">
                    <div className="IMAGE">
                        
                    </div>
                </div>

                <div className='InternalCard_mid'>
                    <h3 className="InternalCard_name">Portable Projector</h3>
                    <span>Expirey Date</span>
                    <span>Number of items</span>
                    <button className='InternalCard_button'>New Stock</button>
                </div>

                <div className="InternalCard_TotalItems"> 
                    <p>Total No. Of Items</p>
                    <h2>50</h2>
                </div>
            </div>
        </>
    )
}