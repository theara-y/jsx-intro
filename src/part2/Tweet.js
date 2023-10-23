import './Tweet.css';

const Tweet = ({username, name, date, message}) => (
    <div className="Tweet">
    <h2>{username}</h2>
    <h3>{name}</h3>
    <p>{message}</p>
    <p>{date}</p>
    </div>
);

export default Tweet;