import React from 'react';
import "./detail.css"
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const DetailCard = () => {
    return (
        <div className="flex justify-center gap-14">
            <div className="w-[300px] h-[391px] rounded-lg bg-white border-gold">
                <img src="images/p8 1.png" alt="" className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[391px] rounded-lg bg-white ml-4 border-gold">
                <img src="images/p8 1.png" alt="" className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[391px] rounded-lg bg-white ml-4 border-gold">
                <img src="images/p8 1.png" alt="" className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[391px] rounded-lg bg-white ml-4 border-gold">
                <img src="images/p8 1.png" alt="" className="w-full h-full" />
            </div>

        </div>
    );
};

export default DetailCard;