export const Menu = ({ menu }) => {
  return (
    <div className="restourant-card-menu">
      <h3 className="restourant-card-menu-h3">Меню:</h3>
      {menu.map(({ id, name, price, ingredients }) => (
        <div className="restourant-card-menu-details">
          <details>
            <summary className="restourant-card-menu-details-summary-name">{name}</summary>
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </details>
          <p className="restourant-card-menu-details-price">{price}$</p>
        </div>
      ))}
    </div>
  );
};
