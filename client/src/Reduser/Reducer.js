let initialState = {
    searchedVideos: [],
    currentVideo: {},
    main100Videos:[],
    hiddenMenuVisible: false,
    mobileSearchVisible: false
}

const reducer = (state = initialState,action) => {
    if (action.type === 'SET_SEARCHED_VIDEOS_LIST') {
        //console.log(state)
        return {
            ...state,
            searchedVideos: action.payload
        }
    }
    if (action.type === 'SET_PLAY_VIDEO') {
        console.log('set play video')
        return {
            ...state,
            currentVideo: action.payload
        }
    }
    if (action.type === 'SET_100_VIDEOS') {
        //console.log('set 100 video reduser')
        return {
            ...state,
            main100Videos: action.payload
        }
    }
    if (action.type === 'CHANGE_HIDDEN_MENU_VISIBLE') {
        console.log(state.hiddenMenuVisible)
        return {
            ...state,
            hiddenMenuVisible: !state.hiddenMenuVisible
        }
    }
    if (action.type === 'CLOSE_HIDDEN_MENU') {
        return {
            ...state,
            hiddenMenuVisible: false
        }
    }
    if (action.type === 'CHANGE_MOBILE_SEARCH_VISIBLE') {
        return {
            ...state,
            mobileSearchVisible: !state.mobileSearchVisible
        }
    }
    console.log(state)
    return state
}

export default reducer