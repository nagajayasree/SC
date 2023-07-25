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
                    <p className='author'>{author.username}</p>
                    <time>{moment(createdAt).format("Do MMMM YYYY, h:mm a")}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    )
}
