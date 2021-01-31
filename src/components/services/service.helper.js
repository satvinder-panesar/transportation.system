export function sortServices(data){
    return data.sort((x, y) => x.modeName > y.modeName ? (x.name > y.name ? 1: -1) : -1)
}