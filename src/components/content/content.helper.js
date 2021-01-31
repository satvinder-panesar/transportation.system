import ContentItem from '../contentItem/contentItem'
import Search from '../search/search'

export function displayContent(selectedService){
    if(!selectedService){
        return <div className="message">Please select a service</div>
    }else if(selectedService.name === "Cycle Hire"){
        return <Search></Search>
    }
    else{
        //showing any service disruptions
        if(selectedService["hasDisruptions"]){
            return<div>
            <div className="message">Service currently suffering disruptions:</div>
                {selectedService.lineStatuses.filter(x => x.statusSeverity !== 10).map((x, index) => <ContentItem key = {`content${index}`} reason={x.reason}></ContentItem>)}
            </div>
        }else{
            return <div className="message">No service disruptions</div>
        }
    }
}