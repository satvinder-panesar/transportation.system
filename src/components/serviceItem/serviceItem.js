import './serviceItem.scss'
import {operatesInEvening, hasServiceDisruptions} from './serviceItem.helper'
import NightIcon from '../../common/icons/night.icon'
import WarningIcon from '../../common/icons/warning.icon'

function ServiceItem(props){
    return (
        <div id="serviceItem">
            <div>{props.service.name}</div>
            <div>
                {operatesInEvening(props.service.serviceTypes) && <NightIcon></NightIcon>}
                {hasServiceDisruptions(props.service) && <WarningIcon></WarningIcon>}
            </div>
        </div>
    )
}

export default ServiceItem