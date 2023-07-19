import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Feed({ _id, title, summary, coverImg, content, createdAt, author }) {
    return (
        <div className='post'>
            <div className='image'>
                <Link to={`/post/${_id}`}>
                    <img src={`http://localhost:4000/${coverImg}`} alt='' />
                </Link>
            </div>
            <div className='texts'>
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className='info'>
                    <a className='author'>{author.username}</a>
                    <time>{moment(createdAt).format("Do MMMM YYYY, h:mm a")}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    )
}

//https://montreal.ctvnews.ca/content/dam/ctvnews/en/images/2023/7/15/pedestrian-walks-through-que--storm-1-6480987-1689420146157.jpg