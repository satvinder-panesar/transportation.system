import './services.scss'
import useHttpClient from '../../common/http/useHttpClient'
import {services} from '../../common/constants'
import handleHttpStatus from '../../common/http/handleHttpStatus'

function Services(){

    let { data, status } = useHttpClient({url: services.URL})

    let retVal = handleHttpStatus(status)
    if(retVal){
        return retVal
    }

    return (
        <div id="services">
            {data && data.map(x=><div>1</div>)}
        </div>
    )
}

export default Services