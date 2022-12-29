export function reducer (state, action) {
    switch (action.type) {
        case 'open modal save pin':
        return {
            ...state,
            mode: 'savePin'
        }

        case 'close modals':
            return{
                ...state,
                mode: null
            }

        case 'open cart':
             return {
                 ...state,
                    mode: 'openCart'
            }


        default:
            return state;
    }
}