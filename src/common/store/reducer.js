import {actionTypes} from '../constants'

function reducer(_, action) {
    switch (action.type) {
      case actionTypes.SELECT_SERVICE:
          console.log("reached")
          return {selectedService: action.service}
      default:
        throw new Error();
    }
  }

  export default reducer