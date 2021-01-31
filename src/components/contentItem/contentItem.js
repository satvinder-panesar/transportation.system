import './contentItem.scss'

function ContentItem(props){
    return (
        <div id="contentItem">
            {props.reason}
        </div>
    )
}

export default ContentItem