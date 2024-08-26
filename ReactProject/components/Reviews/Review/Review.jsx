import "../../../styles/review.css";

export const Review = ({id, user, text, rating}) => {
    return(
        <div className="review-div">
            <span className="review-user">{user}</span>
            <span className="review-text">{text}</span>
            <span className="review-rating">{rating}</span>
        </div>
    );
}