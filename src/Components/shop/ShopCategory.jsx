import React, { useState, useEffect } from 'react';
import './shopcategory.css';
import Item from '../item/Item';
import all_product from '../assets/all_product'

const ShopCategory = (props) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//  useEffect(() => {
//   fetch('/find-data-all-product')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       return response.json();
//     })
//     .then(data => {
//       setProducts(data);
//       setLoading(false);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//       setError(error);
//       setLoading(false);
//     });
// }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

  return (
    <div>
      <div className="shopcategory">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
