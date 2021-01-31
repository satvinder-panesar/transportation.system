import './content.scss'
import context from '../../common/store/context'
import {useContext} from 'react'

function Content(){

    const contxt = useContext(context)

    return (
        <div id="content">
            {console.log(contxt.contextState.selectedService)}
        </div>       
    )
}

export default Content