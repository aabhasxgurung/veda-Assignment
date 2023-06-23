import React from 'react';
import Card from './Card';
import Image from 'next/image';

const CardItem = () => {
    return (
        <div id='card' className='w-full p-20 bg-[#380D41] '>


            <Image src="/images/vector.png" alt='' width={46.97} height={46.97} />

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">

                <div className="flex space-x-[112px] mt-[245px]">

                    <Card
                        pname="Apple"
                        imageSrc="/images/alienware.png"
                        description="MacBook Pro 15-inch"
                        price="£350.00"
                        width={263}
                        height={145}
                        size="mb-[8.6px] mt-[31px] rounded-lg"
                        animationDelay="0s" // Add animation delay for the first card
                    />

                    <Card
                        pname="Keyboard"
                        imageSrc="/images/p11 1.png"
                        description="AZERTY Keyboard"
                        price="£100.00"
                        width={215}
                        height={119}
                        size=" mb-[41px] mt-[31px] rounded-lg"
                        animationDelay="0.2s" // Add animation delay for the second card
                    />

                    <Card
                        pname="Desktop"
                        imageSrc="/images/p9 1.png"
                        description="AZERTY Desktop"
                        price="£250.00"
                        width={180}
                        height={163}
                        size="mb-[6px] mt-[22px] ml-[30px] rounded-lg"
                        animationDelay="0.4s" // Add animation delay for the third card
                    />

                    <Card
                        pname="Headphone"
                        imageSrc="/images/p8 1.png"
                        description="Wireless Headphone"
                        price="£50.00"
                        width={141}
                        height={166}
                        size="mt-[19px] mb-[7px] ml-[40px] rounded-lg"
                        animationDelay="0.6s" // Add animation delay for the fourth card
                    />


                </div>
            </div>
            <Image src="/images/Vector (1).png" alt='' width={46.97} height={46.97} className='absolute right-0 mr-[117px]' />


        </div>

    );
};

export default CardItem;
