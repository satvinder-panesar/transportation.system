import Content from '../content/content'
import Services from '../services/services'
import './container.scss'
import {useReducer} from 'react'
import reducer from '../../common/store/reducer'
import context from '../../common/store/context'

function Container(){

    const initialState = {selectedService: null}

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div id="container">
            <context.Provider value={{contextState: state, contextDispatch: dispatch}}>
                <Services></Services>
                <Content></Content>
            </context.Provider>
        </div>
    )
}

export default Container