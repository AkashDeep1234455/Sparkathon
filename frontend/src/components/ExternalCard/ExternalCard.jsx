import { Link } from "react-router-dom"
import "./ExternalCard.css"

function ExternalCard({category, image}) {
    // const category = this.props.category;
    // const image = this.props.image;
  return (
    <Link to={"/internal"}>
    <div className="external-card">
        <div className="category-image">
            <img src={image} alt={category} />
        </div>
        <div className="category-name">
            <h3>{category}</h3>
        </div>
    </div>
    </Link>
  )
}

export default ExternalCard