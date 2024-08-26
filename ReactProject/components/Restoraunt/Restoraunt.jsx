import { RestorauntTitle } from "../Restoraunt/RestorauntTitle/RestorauntTitle";
import "../../styles/restoraunt.css";
import { Menu } from "./Menu/Menu.jsx";
import { ReviewsPage } from "../Reviews/ReviewsPage/ReviewsPage.jsx";

export const Restoraunt = ({id, name, menu, reviews}) => {
    return (
        
        <div className="restourant-card">
            <RestorauntTitle title={name}/>
            <Menu menu={menu}/>
            <ReviewsPage reviews={reviews} />
        </div>
    );
}