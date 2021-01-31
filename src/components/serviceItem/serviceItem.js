import './serviceItem.scss'
import {operatesInEvening, hasServiceDisruptions, handleServiceSelection} from './serviceItem.helper'
import NightIcon from '../../common/icons/night.icon'
import WarningIcon from '../../common/icons/warning.icon'
import context from '../../common/store/context'
import {useContext} from 'react'

function ServiceItem(props){

    const contxt = useContext(context)

    return (
        <div id="serviceItem" onClick={()=>handleServiceSelection(props.service, contxt)}>
            <div>{props.service.name}</div>
            <div>
                {operatesInEvening(props.service.serviceTypes) && <NightIcon></NightIcon>}
                {hasServiceDisruptions(props.service) && <WarningIcon></WarningIcon>}
            </div>
        </div>
    )
}

export default ServiceItem