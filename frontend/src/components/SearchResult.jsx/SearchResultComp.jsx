import { useSearchData } from "../context";

function SearchResultComp() {
    const searchData = useSearchData();
    console.log("helloe",searchData);

    return (
        <div>
            {/* Render your search results here */}
        </div>
    );
}

export default SearchResultComp;