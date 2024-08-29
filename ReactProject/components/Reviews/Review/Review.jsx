import styles from "./Review.module.css";

export const Review = ({id, user, text, rating}) => {
    return(
        <div key={id} className={styles.reviewDiv}>
            <span className={styles.reviewUser}>{user}</span>
            <span className={styles.reviewText}>{text}</span>
            <span className={styles.reviewRating}>{rating}</span>
        </div>
    );
}