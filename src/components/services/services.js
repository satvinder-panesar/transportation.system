import './services.scss'
import useHttpClient from '../../common/http/useHttpClient'
import {services} from '../../common/constants'
import handleHttpStatus from '../../common/http/handleHttpStatus'
import {sortServices} from './service.helper'
import ServiceItem from '../serviceItem/serviceItem'

function Services(){

    let { data, status } = useHttpClient({url: services.URL})

    let retVal = handleHttpStatus(status)
    if(retVal){
        return <div id="services">
            {retVal}
        </div>
    }

    return (
        <div id="services">
            {data && sortServices(data).map((service, index)=>
                <div key={`service${index}`} id={`service${index}`}>
                    <ServiceItem key={`serviceItem${index}`} service={service}></ServiceItem>
                </div>
            )}
        </div>
    )
}

export default Services