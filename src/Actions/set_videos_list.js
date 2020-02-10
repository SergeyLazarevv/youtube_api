const setVideosList = (videos) => {
    return {
        type: 'SET_VIDEOS_LIST',
        payload: videos
    }
};

export default setVideosList