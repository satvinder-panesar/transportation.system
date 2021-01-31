import FindIcon from '../../common/icons/find.icon'
import './search.scss'
import {useState} from 'react'
import {handleChange, handleClick, handleKeyUp} from './search.helper'
import SearchResults from '../searchResults/searchResults'

function Search(){

    const [searchTerm, setSearchTerm] = useState()
    const [triggerSearch, setTriggerSearch] = useState(false)

    return(
        <div>
            <div id="search">
                <input type="text" placeholder="Enter any search term" 
                    onChange={(event)=>handleChange(event, setTriggerSearch, setSearchTerm)}
                    onKeyUp={(event)=>handleKeyUp(event, searchTerm, setTriggerSearch)}></input>
                <span onClick={()=>handleClick(searchTerm, setTriggerSearch)}>
                    <FindIcon></FindIcon>
                </span>
            </div>
            {triggerSearch && searchTerm.length > 0 && <SearchResults searchTerm={searchTerm}></SearchResults>}
        </div>
    )
}

export default Search