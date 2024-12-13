import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// FAQ component receiving faq object as a prop
const FAQ = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: faq.bgColor, color: faq.textColor }}>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col md:flex-row gap-10 items-center">
          {/* Title and Subtitle */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
              {faq.title}
            </h2>
            <p className="mx-auto max-w-screen-md text-center md:text-lg">
              {faq.subtitle}
            </p>
          </div>

          {/* FAQs */}
          <div className="mx-auto flex w-full flex-col border-t">
            {faq.faqs.map((faqItem, index) => (
              <div key={index} className="border-b">
                <div 
                  className="flex cursor-pointer justify-between gap-2 py-4  hover:text-white" 
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold transition duration-100 md:text-lg">
                    {faqItem.question}
                  </span>

                  <span className={` ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <FaChevronDown className="h-6 w-6" />
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mb-4 ">{faqItem.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
