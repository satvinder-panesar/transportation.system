import Content from '../content/content'
import Services from '../services/services'

import './container.scss'

function Container(){
    return (
        <div id="container">
            <Services></Services>
            <Content></Content>
        </div>
    )
}

export default Container