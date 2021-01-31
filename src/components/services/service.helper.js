export function sortServices(data){
    return data.sort((x, y) => x.modeName > y.modeName ? (x.name > y.name ? 1: -1) : -1)
}

//below function will highlight the selected service
//and remove highlights from any prior selections
export function highlightService(lastSelectedServiceId, id, setLastSelectedServiceId){
    if(lastSelectedServiceId === id){
        return
    }
    if(lastSelectedServiceId !== -1){
        let prevSelectedServiceEle = document.getElementById(`service${lastSelectedServiceId}`)
        let prevSelectedServiceItemEle = prevSelectedServiceEle.firstChild
        prevSelectedServiceItemEle.classList = []
    }
    setLastSelectedServiceId(id)
    let currSelectedServiceEle = document.getElementById(`service${id}`)
    let currSelectedServiceItemEle = currSelectedServiceEle.firstChild
    currSelectedServiceItemEle.classList.add("selected")
}