import './InternalCard.css'

export default function InternalCard(){

    return(
        <>
            <div className="InternalCard_parent">
                <div className="InternalCard_img">
                    <img src="https://avatars.mds.yandex.net/i?id=c9bf0ff4f9986229f63ea4630d14afa50bb74c2d-12990625-images-thumbs&n=13" alt="#" />
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