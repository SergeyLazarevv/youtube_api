import React from 'react'
import './VideoInfo.css'
import { useEffect } from 'react'

let VideoInfo = (props) => {
    console.log(props)
    return (
        <div className='VideoInfo'>
            <div className='VideoInfo_titles'>
                <div className='VideoInfo_id'>{props.video.kind}</div>
                <div className='VideoInfo_title'>{props.video.snippet.title}</div>
                </div>
            <div className='VideoInfo_statistics'>
                <div>{props.video.statistics.viewCount} Просмотров </div>
                <div className='VideoInfo_statistics_likes'>
                    <div>
                        <img  className='like_img' src="image/like.png" alt='like'/>
                    {props.video.statistics.likeCount || 0}
                    </div>
                    <div>
                        <img  className='dislike_img' src="image/dislike.png" alt='dislike'/>  
                        {props.video.statistics.dislikeCount || 0}
                    </div>
                </div>
                <div className='VideoInfo_statistics_links'>Link1 Link2 Link3</div>
            </div>
        </div>
    )
}

export default VideoInfo
/*title=props.snippet.localized.title,
                data=snippet.publishedAt,likes=statistics.likeCount,
                dislike=statistics.dislikeCount,wiew=statistics.viewCount 
                
                <div className='VideoInfo_statistics_date'>
                    {props.video.snippet.publishedAt.toLocaleString('ru')}
                </div>*/