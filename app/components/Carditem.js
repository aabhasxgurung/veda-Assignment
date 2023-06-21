import React from 'react';
import Card from './Card';

const CardItem = () => {
    return (
        <div id='card' className='w-full p-20 bg-[#380D41] '>

            <img src='images/vector.png' className='w-[46.97px] h-[46.97px]' />

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">

                <div className="flex space-x-[112px] mt-[245px]">

                    <Card
                        pname="Apple"
                        imageSrc="images/alienware.png"
                        description="MacBook Pro 15-inch"
                        price="£350.00"
                        size="w-[263px] h-[145px] mb-[8.6px] mt-[31px] rounded-lg"
                        animationDelay="0s" // Add animation delay for the first card
                    />

                    <Card
                        pname="Keyboard"
                        imageSrc="images/p11 1.png"
                        description="AZERTY Keyboard"
                        price="£100.00"
                        size="w-[215px] h-[119px] mb-[41px] mt-[31px] rounded-lg"
                        animationDelay="0.2s" // Add animation delay for the second card
                    />

                    <Card
                        pname="Desktop"
                        imageSrc="images/p9 1.png"
                        description="AZERTY Desktop"
                        price="£250.00"
                        size="w-[180px] h-[163px] mb-[6px] mt-[22px] ml-[30px] rounded-lg"
                        animationDelay="0.4s" // Add animation delay for the third card
                    />

                    <Card
                        pname="Headphone"
                        imageSrc="images/p8 1.png"
                        description="Wireless Headphone"
                        price="£50.00"
                        size="w-[141px] h-[166px] mt-[19px] mb-[7px] ml-[40px] rounded-lg"
                        animationDelay="0.6s" // Add animation delay for the fourth card
                    />


                </div>
            </div>

            <img src='images/Vector (1).png' className='w-[46.97px] h-[46.97px] absolute right-0 mr-[117px]' />

        </div>

    );
};

export default CardItem;
