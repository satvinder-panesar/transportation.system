import useHttpClient from '../../common/http/useHttpClient'
import handleHttpStatus from '../../common/http/handleHttpStatus'
import './searchResults.scss'
import {displayResults} from './searchResults.helper'

function SearchResults(props){

    let { data, status } = useHttpClient({url: `https://api.tfl.gov.uk/BikePoint/Search?query=${props.searchTerm}`, cacheKey: props.searchTerm})

    let retVal = handleHttpStatus(status)

    if(retVal){
        return retVal 
    }

    return (
        <div id="searchResults">
            {data && displayResults(props.searchTerm, data)}
        </div>
    )
}

export default SearchResults