const INITIAL_STATE = { detail: { platforms: [] }, screen: { results: [] }, isLoading: true };

const detailReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload.detail,
                screen: action.payload.screen,
                isLoading: false
            };
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true
            };
        default:
            return { ...state };
    }
};
export default detailReducer;