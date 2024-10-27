import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import bgHero from "../assets/bgHero.png";  
import { useNavigate } from 'react-router-dom';

const CropRecommendationCard = () => {
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const cardData = [
        {
            image: "https://storage.googleapis.com/kaggle-datasets-images/2891746/4985987/b2d60ecb83da08b41502185097895593/dataset-cover.jpeg?t=2023-02-13-07-14-27",
            title: "Crop Recommendation",
            description: "Find the best crops based on soil and environmental data.",
            link: "/crop",
            details: (
                <ul>
                    <li>&#9824; Nitrogen, Phosphorus, Potassium (NPK) levels.</li>
                    <li>&#9824; Soil pH and moisture levels.</li>
                    <li>&#9824; Temperature and rainfall data.</li>
                    <li>&#9824; Crop adaptability and resistance to local pests.</li>
                </ul>
            )
        },
        {
            image: "https://cloudinary.propane.com/images/w_637,h_247,c_fill/f_auto,q_auto/v1651243734/website-media/PERC_Renewable-Propane_Plant-Based-Header-Image_4-29-22/PERC_Renewable-Propane_Plant-Based-Header-Image_4-29-22.jpeg?_i=AA",
            title: "Crop Rotation Recommendation",
            description: "Learn about optimal crop rotation to improve soil quality.",
            link: "/crop_recommendation",
            details: (
                <ul>
                    <li>&#9824; Balance nutrient depletion and replenishment.</li>
                    <li>&#9824; Reduce soil-borne diseases and pests.</li>
                    <li>&#9824; Maintain soil structure and organic matter.</li>
                    <li>&#9824; Adapt rotation plans to local climate and crops.</li>
                </ul>
            )
        },
        {
            image: "https://th.bing.com/th/id/OIP.QkxKnS7kskNm9wNwypEncwHaF7?rs=1&pid=ImgDetMain",
            title: "Crop Price Prediction",
            description: "Predict future prices for crops based on market trends.",
            link: "/prices",
            details: (
                <ul>
                    <li>&#9824; Historical price fluctuations.</li>
                    <li>&#9824; Supply-demand ratios for different regions.</li>
                    <li>&#9824; Impact of weather patterns on crop yields.</li>
                    <li>&#9824; Government policies and global trade trends.</li>
                </ul>
            )
        },
        {
            image: "https://img.freepik.com/premium-photo/digital-design-fertilization-role-nutrients-plant-soil_117255-1850.jpg",
            title: "Fertilizer Prediction",
            description: "Get recommendations for the best fertilizers for your crops.",
            link: "/fertilizer",
            details: (
                <ul>
                    <li>&#9824; Tailored recommendations based on soil nutrient analysis.</li>
                    <li>&#9824; Balanced nutrient profiles for different crops.</li>
                    <li>&#9824; Guidance on organic vs. synthetic fertilizers.</li>
                    <li>&#9824; Recommendations to improve long-term soil health.</li>
                </ul>
            )
        },
        {
            image: "https://th.bing.com/th/id/OIP.MjCO836ZA5dCr0AmblPAnwHaEP?rs=1&pid=ImgDetMain",
            title: "Soil Quality Prediction",
            description: "Analyze the quality of your soil for better yields.",
            link: "/soil",
            details: (
                <ul>
                    <li>&#9824; Organic matter content and soil texture.</li>
                    <li>&#9824; Nutrient availability and pH balance.</li>
                    <li>&#9824; Presence of contaminants or toxins.</li>
                    <li>&#9824; Recommendations for soil amendments and improvements.</li>
                </ul>
            )
        },
        {
            image: "https://th.bing.com/th/id/OIP.m5-x6mfyS59kwL_pH2L-ugHaEK?w=1000&h=562&rs=1&pid=ImgDetMain",
            title: "Irrigation System Prediction",
            description: "Determine the most effective irrigation system for your farm.",
            link: "/irrigation",
            details: (
                <ul>
                    <li>&#9824; Drip vs. sprinkler irrigation suitability.</li>
                    <li>&#9824; Water availability and crop water requirements.</li>
                    <li>&#9824; Soil moisture retention and evaporation rates.</li>
                    <li>&#9824; Efficiency recommendations for water conservation.</li>
                </ul>
            )
        }
    ];

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCard(null);
    };

    return (
        <>
            {loading ? <Spinner /> : (
                <div className="max-w-full mt-16 mx-auto px-4 pb-10 pt-5 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${bgHero})` }}>
                    
                    <h1 className="text-3xl text-center text-blue-500 font-bold">Assistance to Our Heroes</h1>

                   
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="p-4 border-2 border-blue-500 shadow-lg rounded-lg cursor-pointer hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 ease-in-out"
                                onClick={() => handleCardClick(card)}
                            >
                                <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold text-green-500">{card.title}</h2>
                                    <p className="mt-2 text-gray-700">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                    {showModal && selectedCard && (
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                                <h2 className="text-2xl font-bold text-green-500">{selectedCard.title}</h2>
                                <p className="mt-4 text-gray-700">{selectedCard.details}</p>

                                
                                <button
                                    className="mt-4 w-full px-3 py-2 rounded bg-green-500 text-white font-bold"
                                    onClick={() => navigate(selectedCard.link)}
                                >
                                    Try Now
                                </button>

                                
                                <button
                                    className="mt-2 w-full px-3 py-2 rounded bg-red-500 text-white font-bold"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default CropRecommendationCard;
