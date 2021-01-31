import './content.scss'
import context from '../../common/store/context'
import {useContext} from 'react'
import {displayContent} from './content.helper' 

function Content(){

    const contxt = useContext(context)

    return (
        <div id="content">
            {displayContent(contxt.contextState.selectedService)}
        </div>       
    )
}

export default Content