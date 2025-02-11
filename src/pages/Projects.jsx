import React from 'react'

const services = [
  {
    title: "E-Commerce Website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKo2hdasSNC_JJ-r9LzxlVYPOXOoTotzROA&s",
    category: "Web Development",
    status: "Completed",
    description: "A fully functional e-commerce website with payment gateway integration, user authentication, and a responsive UI."
  },
  {
    title: "Company Portfolio Website",
    image: "https://w3layouts.b-cdn.net//wp-content/uploads/2015/12/onepageportfolio-future.jpg",
    category: "Web Design",
    status: "Completed",
    description: "A sleek and modern company portfolio website showcasing services, testimonials, and case studies."
  },
  {
    title: "AI-Powered Chatbot",
    image: "https://ddi-dev.com/uploads/media/news/0001/02/584668831a98d094bf9ceb0a533d0984149e044f.jpeg",
    category: "AI & Automation",
    status: "Ongoing",
    description: "A chatbot that automates customer support using AI and natural language processing (NLP)."
  },
  {
    title: "Healthcare Management System",
    image: "https://docpulse.com/wp-content/uploads/2024/02/slider-small-1.jpg",
    category: "Software Development",
    status: "Completed",
    description: "A management system for hospitals and clinics with appointment scheduling and patient record management."
  },
  {
    title: "Real Estate Listing Platform",
    image: "https://oril.co/wp-content/uploads/2021/12/realtor-1.png",
    category: "Web Development",
    status: "Ongoing",
    description: "A real estate website allowing users to list, search, and filter properties with a dynamic map integration."
  },
  {
    title: "SaaS Dashboard",
    image: "https://adminkit.io/static/eb84da92af6e3f6d447a6c90a1d6dc4b/3a874/bootstrap-saas-dashboard.png",
    category: "UI/UX Design",
    status: "Completed",
    description: "A modern SaaS analytics dashboard with interactive charts, reports, and a user-friendly interface."
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-700 p-6">
       <div className="container mx-auto  text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-white ">Our Projects</h2>
        <p className="mt-4 text-gray-100 max-w-2xl mx-auto">
          We offer a comprehensive solution for top-quality web design and development services. Our customized, budget-friendly web design options are tailored to meet your specific needs.
        </p>
      </div>
      
      <div className="container mx-auto px-6 mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white py-4 shadow-lg rounded-lg" data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
            <p className="text-gray-600 text-sm font-bold ps-2 pb-2">Category: <span className="font-normal"> {service.category}</span></p>
            <div className="w-full flex justify-center mb-4">
              <img src={service.image} alt={service.title} className="w-100 aspect-video" />
            </div>
            <div className="text-center">
              <div className="text-gray-700 text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
