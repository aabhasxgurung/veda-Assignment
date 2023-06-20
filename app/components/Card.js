import React from 'react';
import './card.css'
import { AiOutlineStar } from 'react-icons/ai';

const Card = ({ imageSrc, name, description, price, rating }) => {
    const MAX_RATING = 5; // Maximum rating value

    const renderRatingStars = () => {
        const filledStars = Math.floor(rating); // Number of filled stars
        const starIcons = [];

        for (let i = 1; i <= MAX_RATING; i++) {
            if (i <= filledStars) {
                starIcons.push(<AiOutlineStar key={i} className="text-yellow-500" />);
            } else {
                starIcons.push(<AiOutlineStar key={i} className="text-gray-400" />);
            }
        }

        return starIcons;
    };

    return (
        <div className="w-[300px] h-[390px] bg-white rounded-lg p-6 shadow-md border-2 gradient-border">
            <img
                src={imageSrc}
                alt="Product Image"
                className="w-[311px] h-[180px] object-cover mb-4 rounded-lg"
            />
            <h2 className="text-3xl mt-7 font-semibold mb-2">{name}</h2>
            <p className="text-gray-500 mb-2">{description}</p>
            <p className="text-purple-900 font-bold">{price}</p>
            <div className="flex mt-2">{renderRatingStars()}</div>
        </div>
    );
};

export default Card;
