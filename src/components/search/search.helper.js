export function handleChange(event, setTriggerSearch, setSearchTerm){
    setTriggerSearch(false)
    setSearchTerm(event.target.value)
}

export function handleKeyUp(event, searchTerm, setTriggerSearch){
    if(event.keyCode === 13){
        handleClick(searchTerm, setTriggerSearch)
    }
}

export function handleClick(searchTerm, setTriggerSearch){
    if(searchTerm && searchTerm.length > 0){
        setTriggerSearch(true)
    }
}