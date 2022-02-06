import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import laptop from '../../images/laptop.png';
import { Link } from 'react-router-dom';
import { showAverage } from '../../functions/rating';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

const { Meta } = Card;

const ProductCard = ({ product }) => {
    const [tooltip, setTooltip] = useState('Click to add');

    // redux
    const { user, cart } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // create cart array
        if (product.quantity < 1)
            return;
        let cart = [];
        if (typeof window !== 'undefined') {
            // if cart is in localstorage GET it
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            // push new product to cart
            cart.push({
                ...product,
                count: 1,
            });

            // remove duplicates
            let unique = _.uniqWith(cart, _.isEqual);

            // save to local storage
            // console.log('unique',unique)
            localStorage.setItem('cart', JSON.stringify
                (unique));
            //show tooltip
            setTooltip("Added");

            //add to redux state
            dispatch({
                type: "ADD_TO_CART",
                payload: unique,
            });
            // show cart items in side drawer
            dispatch({
                type: "SET_VISIBLE",
                payload: true,
            });
        }
    };

    // destructure
    const { title, description, images, slug, price } = product;
    return (
        <>
            {product && product.ratings && product.ratings.length ? (showAverage(product)
            ) : (
                <div className="text-center pt-1 pb-3">No rating yet</div>
            )}
            <Card
                cover={
                    <img
                        src={images && images.length ? images[0].url : laptop}
                        style={{ height: '150px', objectFit: 'cover' }}
                        className="p-1"
                    />
                }
                actions={[
                    <Link to={`/product/${slug}`}>
                        <EyeOutlined className="text-success" /> <br /> View product
                    </Link>,
                    <Tooltip title={product.quantity < 1 ? "" : tooltip}>
                        <a onClick={handleAddToCart} disabled={product.quantity < 1}>
                            <ShoppingCartOutlined className="text-danger" /> <br />
                            {product.quantity < 1 ? 'Out of stock' : 'Add to Cart'}
                        </a>
                    </Tooltip>
                ]}
            >
                <Meta
                    title={`${title} - $${price}`}
                    description={`${description && description.substring(0, 40)}...`} />
            </Card>
        </>
    );
};

export default ProductCard;