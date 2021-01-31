import FindIcon from '../../common/icons/find.icon'
import './search.scss'

function Search(){
    return(
        <div>
            <div id="search">
                <input type="text" placeholder="Enter any search term"></input>
                <span>
                    <FindIcon></FindIcon>
                </span>
            </div>
        </div>
    )
}

export default Search