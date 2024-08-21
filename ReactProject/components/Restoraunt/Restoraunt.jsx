import { RestorauntTitle } from "../Restoraunt/RestorauntTitle/RestorauntTitle";
import "../../styles/restoraunt.css";
import { Menu } from "./Menu/Menu.jsx";

export const Restoraunt = ({id, name, menu, reviews}) => {
    return (
        
        <div className="restourant-card">
            <RestorauntTitle title={name}/>
            <Menu menu={menu}/>
        </div>
    );
}