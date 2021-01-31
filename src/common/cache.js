export function getItemFromCache(key){
    return JSON.parse(window.sessionStorage.getItem(key))
}

export function addItemToCache(key, value){
    window.sessionStorage.setItem(key, JSON.stringify(value))
}