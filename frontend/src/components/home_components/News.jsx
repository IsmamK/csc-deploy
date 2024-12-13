import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const News = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const [data, setData] = useState({
        title: "",
        subtitle: "",
        news: []
    });

    const [expandedIds, setExpandedIds] = useState([]); // Track expanded descriptions

    const toggleReadMore = (id) => {
        if (expandedIds.includes(id)) {
            setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id));
        } else {
            setExpandedIds([...expandedIds, id]);
        }
    };

    useEffect(() => {
        fetch(`${apiUrl}/home/news`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div style={{ backgroundColor: data.bgColor, color: data.textColor }} className='flex'>
           <section className="py-24 w-3/4 mx-auto">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Title and Description Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:sticky lg:top-40 lg:border-l-4 lg:pl-32 " style={{borderColor:data.textColor}}>
            <h2 className="text-5xl font-bold leading-[3.25rem] mb-5 md:text-8xl">
                {data.title}
            </h2>
            <p className="mb-10 max-lg:max-w-xl max-lg:mx-auto">{data.subtitle}</p>
            <a
                href="javascript:;"
                className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center font-semibold transition-all duration-300 hover:bg-gray-100 items-center gap-2 mx-auto lg:mx-0"
                style={{ backgroundColor: data.textColor, color: data.bgColor }}
            >
                Explore <FontAwesomeIcon icon={faArrowRight} />
            </a>
        </div>

        {/* News Cards Section */}
        <div className="relative w-full lg:w-1/2 h-[calc(100vh-80px)]0  mx-auto">
            <div className="grid grid-cols-1 gap-10">
                {data.news.map((news, index) => (
                    <div
                        key={news.id}
                        className="lg:w-2/3  bg-white border-white border-4 shadow-lg rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300  sticky top-40 "
                        style={{ backgroundColor: data.textColor, color: data.bgColor }}
                    >
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">{news.title}</h3>
                            <p
                                className={`text-sm leading-6 transition-all duration-500 ${
                                    expandedIds.includes(news.id) ? '' : 'line-clamp-3'
                                }`}
                            >
                                {news.description}
                            </p>
                            <button
                                onClick={() => toggleReadMore(news.id)}
                                className="hover:underline font-extrabold mt-3"
                            >
                                {expandedIds.includes(news.id) ? 'Read Less' : 'Read More ->'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default News;
