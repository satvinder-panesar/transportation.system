import './searchResultItem.scss'

function SearchResultItem(props){

    const bikePoint = props.resultItem.id.split("_")[1]
    const item = props.resultItem

    return (
        <div id="searchResultItem">{`${bikePoint} ${item.commonName} (${item.lat}, ${item.lon})`}</div>
    )
}

export default SearchResultItem