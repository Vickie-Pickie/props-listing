import ListingItem from './ListingItem';
import PropTypes from 'prop-types';

function Listing ({ items }) {
  return (
    <div className="item-list">
      {
        items.filter((item) => item.state === 'active')
          .map((item) => <ListingItem key={item.listing_id} item={item}/>)
      }
    </div>
  );
}

export default Listing;

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        state: PropTypes.string,
        listing_id: PropTypes.number,
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
