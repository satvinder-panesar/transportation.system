import SearchResultItem from '../searchResultItem/searchResultItem'

export function displayResults(searchTerm, data){
    if(data.length === 0){
        return <div className="message">{`No bike points found for '${searchTerm}'`}</div>
    }else{
        return data.map((x,index) => <SearchResultItem key={`searchResultItem${index}`}resultItem={x}></SearchResultItem>)
    }
}