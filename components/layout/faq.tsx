'use client';
/*import { useState } from 'react';

const faqs = [
  {
    question: "What is Lahana LunchBox?",
    answer: "Lahana LunchBox is a meal delivery service offering delicious and healthy meals.",
  },
  {
    question: "How can I order?",
    answer: "You can order through our website by selecting your desired meals and checkout.",
  },
  {
    question: "What are the delivery hours?",
    answer: "We deliver from 10 AM to 8 PM, Monday to Saturday.",
  },
  // Add more FAQs as needed
];


    export const Faq = () => {
      const [activeIndex, setActiveIndex] = useState<number | null>(null);

      const toggleFAQ = (index:number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    
      return (
        <div className="  p-5">
      <div className="max-w-5xl mx-auto  p-8 bg-slate-300 rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                {faq.answer}
              </div>
            )}
            <hr className="mt-2" />
          </div>
        ))}
      </div>
    </div>
      )
    }
      */
    import { useState } from 'react';
    import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
    
    const faqs = [
      {
        question: "What is Lahana LunchBox?",
        answer: "Lahana LunchBox is a lunch delivery service that provides fresh, healthy, and eco-friendly meals directly to your office.",
      },
      {
        question: "How do I place an order?",
        answer: "You can order through our website by selecting your plan and customizing your menu.",
      },
      {
        question: "What areas do you  deliver to?",
        answer: "We currently deliver to []. Please check our delivery map for more details.",
      },

      {
        question: "Do you offer vegeterian option?",
        answer: "Yes, we have a variety of vegeterian options available on our menu.",
      },
      {
        question: "How can I contact Customer Service?",
        answer: "You can reach out customer service team at 9802365873(Call/Text/Whatsapp) or via email at info@lahanalunchbox.com",
      },
      // Add more FAQs as needed
    ];
    
    export const Faq = () => {
      const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
      const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    
      return (
        <div className="p-5">
          <div className="max-w-5xl mx-auto p-8  shadow-xl rounded-lg">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#7e3939]">Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span>
                    {activeIndex === index ? <FiChevronDown /> : <FiChevronUp />}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="mt-2 text-gray-600">
                    {faq.answer}
                  </div>
                )}
                <hr className="mt-2" />
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    