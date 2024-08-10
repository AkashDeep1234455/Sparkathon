import categoryData from "./Category"
import ExternalCard from "./ExternalCard"
import "./Home.css"

function Home() {
  return (
    <div className="wrapper">
      <div className="category-heading">
        <h2>Categories</h2>
      </div>
        <div className="category-box">
            {categoryData.map((category) => (
                <ExternalCard key={category.id} category={category.category} image={category.category_image} />
            ))}
        </div>
  
    </div>
  )
}

export default Home