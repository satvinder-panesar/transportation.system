import {actionTypes} from '../../common/constants'

export function operatesInEvening(serviceTypes){
    return serviceTypes.filter(x => x.name === "Night").length > 0
}

export function hasServiceDisruptions(service){
    if(service.lineStatuses.filter(x => x.statusSeverity !== 10).length > 0){
        service["hasDisruptions"] = 1
        return true
    }else{
        return false
    }
}

export function handleServiceSelection(service, contxt){
    contxt.contextDispatch({type: actionTypes.SELECT_SERVICE, service: service})
}