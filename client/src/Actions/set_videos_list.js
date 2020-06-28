const setVideosList = (videos) => {
    return {
        type: 'SET_SEARCHED_VIDEOS_LIST',
        payload: videos
    }
};

export default setVideosList