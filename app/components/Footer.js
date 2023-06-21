import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div
            className="flex justify-between text-white p-10 mt-60"
            style={{
                backgroundImage: `url('/images/Rectangle 82.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '600px'
            }}
        >
            {/* <div className='grid'>

            </div>
            <div className='wrapper'>
                <div className='circle'>

                </div>
            </div> */}


            <div className="flex items-center">
                <h1 className="text-4xl font-bold font-northden text-[#F903AA]">LOGO</h1>
                <p className="font-regular text-lg ml-4">This is my dummy page</p>
            </div>
            <div className="flex items-center">
                <div>
                    <h1 className="text-lg text-[#F903AA] font-bold mb-2">Useful Links</h1>
                    <a href="/" className="block mb-1">
                        Home
                    </a>
                    <a href="/" className="block mb-1">
                        Product
                    </a>
                    <a href="/" className="block mb-1">
                        About Us
                    </a>
                    <a href="/" className="block mb-1">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="flex items-center">
                <div>
                    <h1 className="text-lg font-bold mb-2">Follow Us on</h1>
                    <div className="flex space-x-2">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
