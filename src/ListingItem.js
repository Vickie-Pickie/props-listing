import PropTypes from "prop-types";

function ListingItem(props) {
  console.log(props)
  const { url, MainImage, title, currency_code, price, quantity } = props.item;
  let titleRes = title;
  if (title.length > 50) {
    titleRes = `${title.substring(0, 50)}...`;
  }

  let formatedPrice = `${price} ${currency_code}`;
  if (currency_code === 'USD') {
    formatedPrice = `$${price}`;
  }

  if (currency_code === 'EUR') {
    formatedPrice = `€${price}`;
  }

  let classLevel = 'item-quantity level-';
  if (quantity <= 10) {
    classLevel += 'low';
  } else if (quantity <= 20) {
    classLevel += 'medium';
  } else {
    classLevel += 'high';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleRes}</p>
        <p className="item-price">{formatedPrice}</p>
        <p className={classLevel}>{quantity} left</p>
      </div>
    </div>
  );
}

export default ListingItem;

ListingItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        url: PropTypes.string,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
        MainImage: PropTypes.shape(
          {
            url_570xN: PropTypes.string,
          }
        ),
      }
    )
  ),
}
