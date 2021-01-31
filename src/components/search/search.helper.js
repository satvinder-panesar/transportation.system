export function handleChange(event, setTriggerSearch, setSearchTerm){
    if(event.target.value === ""){
        setTriggerSearch(false)
    }
    setSearchTerm(event.target.value)
}

export function handleClick(searchTerm, setTriggerSearch){
    if(searchTerm && searchTerm.length > 0){
        setTriggerSearch(true)
    }
}