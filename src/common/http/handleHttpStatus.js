function handleHttpStatus(status){
    if(!status){
        return <div className="loading">Getting data...</div>
    }else if(status && status !== 200){
        return <div className="loading">Error getting data...</div>
    }else{
        return null
    }
}

export default handleHttpStatus