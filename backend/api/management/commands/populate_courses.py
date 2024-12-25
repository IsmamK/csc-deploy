from django.core.management.base import BaseCommand
from django.utils.text import slugify
from api.models import Course  # Replace `myapp` with your app name

class Command(BaseCommand):
    help = "Populate Course model with predefined data"

    def handle(self, *args, **kwargs):
        courses_data = [
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in International Business",
    "title_1": "BBA in International Business",
    "description_1": "This degree prepares students to manage and operate businesses globally, providing insights into international trade, finance, and global markets.",
    "title_2": "Why take up BBA in International Business?",
    "description_2": "Gain a deep understanding of cross-border business operations, international economics, and global marketing strategies.",
    "career_opportunities": [
      "International Business Manager",
      "Global Marketing Specialist",
      "Export Manager",
      "Supply Chain Manager",
      "International Trade Analyst"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to International Business",
          "International Economics",
          "Global Marketing",
          "Cross-Cultural Communication",
          "International Business Law"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Global Financial Management",
          "International Trade and Investment",
          "Managing International Operations",
          "International Supply Chain Management",
          "Global Business Strategy"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Emerging Markets and Global Strategy",
          "International HRM",
          "Global Entrepreneurship",
          "Sustainability in International Business",
          "Capstone Project"
        ]
      }
    ]
    }
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in International Management",
    "title_1": "BBA in International Management",
    "description_1": "This program focuses on managing businesses in a global context, preparing students for leadership roles in multinational corporations.",
    "title_2": "Why take up BBA in International Management?",
    "description_2": "Develop the skills needed to lead teams, manage global operations, and drive innovation in international business environments.",
    "career_opportunities": [
      "International Operations Manager",
      "Global Strategy Consultant",
      "Management Analyst",
      "Cross-Cultural Manager",
      "International Project Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Principles of Management",
          "Introduction to International Business",
          "Global Leadership",
          "Cultural Diversity in Management",
          "Business Ethics"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "International Strategic Management",
          "Global Business Environment",
          "Project Management in International Business",
          "Cross-Cultural Communication",
          "International Organizational Behavior"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Global Entrepreneurship and Innovation",
          "International Human Resource Management",
          "International Risk Management",
          "Global Business Negotiation",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in Digital Marketing",
    "title_1": "BBA in Digital Marketing",
    "description_1": "This program focuses on digital marketing techniques and strategies, preparing students to lead marketing efforts in the digital era.",
    "title_2": "Why take up BBA in Digital Marketing?",
    "description_2": "Learn to create digital marketing campaigns, manage social media, understand online consumer behavior, and use analytics for decision-making.",
    "career_opportunities": [
      "Digital Marketing Manager",
      "Social Media Manager",
      "SEO Specialist",
      "Content Marketing Strategist",
      "Online Advertising Specialist"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Digital Marketing",
          "Social Media Marketing",
          "Consumer Behavior",
          "Marketing Analytics",
          "Search Engine Optimization (SEO)"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Content Marketing",
          "Pay-Per-Click (PPC) Advertising",
          "Email Marketing",
          "Digital Marketing Strategies",
          "E-Commerce and Online Retail"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Digital Advertising and Campaigns",
          "Data-Driven Marketing",
          "Mobile Marketing",
          "Web Analytics",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in Management Accounting & Finance",
    "title_1": "BBA in Management Accounting & Finance",
    "description_1": "This program integrates accounting and financial management, preparing students for roles in financial planning, analysis, and management accounting.",
    "title_2": "Why take up BBA in Management Accounting & Finance?",
    "description_2": "Build strong financial acumen to manage corporate finances, assess investments, and analyze financial performance in businesses.",
    "career_opportunities": [
      "Management Accountant",
      "Financial Analyst",
      "Investment Analyst",
      "Corporate Finance Manager",
      "Risk Management Consultant"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Accounting",
          "Business Finance",
          "Cost Accounting",
          "Business Economics",
          "Financial Reporting"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Corporate Finance",
          "Financial Modeling",
          "Management Accounting",
          "Investment Management",
          "Accounting Information Systems"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Advanced Management Accounting",
          "Financial Statement Analysis",
          "Strategic Financial Management",
          "Risk Management and Derivatives",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in Healthcare Operations",
    "title_1": "BBA in Healthcare Operations",
    "description_1": "This degree focuses on the management of healthcare systems, preparing students to optimize healthcare delivery and improve operational efficiency in healthcare settings.",
    "title_2": "Why take up BBA in Healthcare Operations?",
    "description_2": "Develop expertise in managing healthcare operations, including hospital administration, patient care, healthcare technology, and compliance with healthcare regulations.",
    "career_opportunities": [
      "Healthcare Operations Manager",
      "Hospital Administrator",
      "Healthcare Project Manager",
      "Healthcare Consultant",
      "Patient Care Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Healthcare Systems",
          "Healthcare Management",
          "Health Policy and Law",
          "Introduction to Business Management",
          "Healthcare Information Systems"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Healthcare Quality Management",
          "Operations Management in Healthcare",
          "Healthcare Financial Management",
          "Patient Care Management",
          "Health Marketing"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Health Economics",
          "Healthcare Supply Chain Management",
          "Global Health Systems",
          "Healthcare Strategic Management",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in I.T. Project Management",
    "title_1": "BBA in I.T. Project Management",
    "description_1": "This program focuses on managing technology projects, equipping students with the skills required to handle IT projects, from planning and execution to completion.",
    "title_2": "Why take up BBA in I.T. Project Management?",
    "description_2": "Gain expertise in managing complex IT projects, learning about project planning, risk management, and resource allocation, specifically within the technology industry.",
    "career_opportunities": [
      "IT Project Manager",
      "Technology Consultant",
      "Project Coordinator",
      "IT Business Analyst",
      "Project Portfolio Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Project Management",
          "Information Technology Fundamentals",
          "Business Communication",
          "Principles of Management",
          "Introduction to Information Systems"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Project Planning and Scheduling",
          "Risk Management in IT Projects",
          "Resource Management",
          "IT Business Analysis",
          "Software Development Methodologies"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Advanced IT Project Management",
          "Agile Project Management",
          "IT Project Delivery",
          "Quality Assurance in IT Projects",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in Data Analytics & A.I.",
    "title_1": "BBA in Data Analytics & A.I.",
    "description_1": "This program offers students a deep understanding of data analytics, machine learning, and artificial intelligence, enabling them to make data-driven decisions and leverage AI for business success.",
    "title_2": "Why take up BBA in Data Analytics & A.I.?",
    "description_2": "Develop the skills needed to analyze data, design AI models, and understand machine learning algorithms for driving business insights and improving operational efficiency.",
    "career_opportunities": [
      "Data Analyst",
      "Machine Learning Engineer",
      "AI Specialist",
      "Business Intelligence Analyst",
      "Data Scientist"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Data Analytics",
          "Principles of Statistics",
          "Business Intelligence",
          "Mathematics for Business",
          "Programming for Data Science"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Data Mining",
          "Big Data Technologies",
          "Machine Learning",
          "Business Analytics",
          "Data Visualization"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Artificial Intelligence",
          "Deep Learning",
          "Advanced Data Analytics",
          "Predictive Modeling",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BSc)",
    "name": "Bachelor of IT Systems & Project Management",
    "title_1": "Bachelor of IT Systems & Project Management",
    "description_1": "This program focuses on IT systems and project management, equipping students with the knowledge and skills needed to manage and optimize IT infrastructure and projects in a global business environment.",
    "title_2": "Why take up Bachelor of IT Systems & Project Management?",
    "description_2": "Learn how to integrate IT systems and manage technology projects efficiently, from design to execution, ensuring business success in an ever-evolving tech landscape.",
    "career_opportunities": [
      "IT Systems Manager",
      "Project Manager",
      "IT Consultant",
      "Systems Analyst",
      "Technology Project Coordinator"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to IT Systems",
          "Project Management Principles",
          "Database Management Systems",
          "Networking Fundamentals",
          "Information Systems Analysis"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Project Scheduling and Control",
          "Enterprise Resource Planning",
          "System Architecture and Design",
          "IT Infrastructure Management",
          "Software Development Practices"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Advanced Project Management",
          "Business Process Automation",
          "IT Security Management",
          "Cloud Computing",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in Hotel & Tourism Management",
    "title_1": "BBA in Hotel & Tourism Management",
    "description_1": "This program prepares students for a career in the hotel and tourism industry, covering topics such as hospitality management, customer service, and event planning.",
    "title_2": "Why take up BBA in Hotel & Tourism Management?",
    "description_2": "Gain comprehensive knowledge and skills to manage hotels, resorts, and tourism businesses, ensuring top-tier guest experiences and operational success.",
    "career_opportunities": [
      "Hotel Manager",
      "Tourism Operations Manager",
      "Event Coordinator",
      "Travel Consultant",
      "Hospitality Entrepreneur"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Hospitality Management",
          "Tourism and Travel Operations",
          "Hotel Front Office Operations",
          "Food and Beverage Management",
          "Customer Relationship Management"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Event Management",
          "Hospitality Marketing",
          "Tourism Economics",
          "Hotel Management Systems",
          "Financial Management for Hospitality"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Sustainable Tourism",
          "International Hospitality Management",
          "Resort and Spa Management",
          "Tourism Law and Ethics",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in Hospitality Management",
    "title_1": "BBA in Hospitality Management",
    "description_1": "This program focuses on the operational and management aspects of the hospitality industry, equipping students with the knowledge to manage hotels, restaurants, and other hospitality-related businesses.",
    "title_2": "Why take up BBA in Hospitality Management?",
    "description_2": "Prepare for a career in hospitality by learning about hotel management, service excellence, and effective business practices tailored to the dynamic hospitality industry.",
    "career_opportunities": [
      "Hotel General Manager",
      "Food and Beverage Director",
      "Resort Manager",
      "Guest Relations Manager",
      "Event Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Principles of Hospitality Management",
          "Food and Beverage Operations",
          "Hotel Front Desk Operations",
          "Guest Services and Customer Care",
          "Hospitality Marketing"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Hospitality Law",
          "Tourism Management",
          "Event Planning and Management",
          "Human Resources in Hospitality",
          "Financial Management for Hospitality"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Advanced Hotel Operations",
          "Sustainability in Hospitality",
          "Leadership in Hospitality Management",
          "Revenue Management",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in Events Management",
    "title_1": "BBA in Events Management",
    "description_1": "This program prepares students to plan, organize, and manage various events, ranging from corporate meetings to large-scale conferences and festivals.",
    "title_2": "Why take up BBA in Events Management?",
    "description_2": "Develop skills in project management, creative event design, and logistics, enabling you to excel in the fast-paced events industry.",
    "career_opportunities": [
      "Event Planner",
      "Conference Manager",
      "Exhibition Coordinator",
      "Wedding Planner",
      "Event Marketing Specialist"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Event Management",
          "Principles of Marketing",
          "Project Management Fundamentals",
          "Customer Relationship Management",
          "Event Planning and Organization"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Event Design and Production",
          "Event Marketing and Promotion",
          "Risk Management for Events",
          "Event Financial Management",
          "Venue Management"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Sustainable Event Management",
          "Digital Marketing for Events",
          "Event Technology and Innovation",
          "International Events Management",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BBA)",
    "name": "BBA in Sports Management",
    "title_1": "BBA in Sports Management",
    "description_1": "This program focuses on the business and management aspects of the sports industry, preparing students for careers in sports teams, events, and facilities management.",
    "title_2": "Why take up BBA in Sports Management?",
    "description_2": "Learn how to manage sports organizations, plan events, and understand the business of sports, including marketing, sponsorship, and financial management.",
    "career_opportunities": [
      "Sports Event Manager",
      "Sports Marketing Specialist",
      "Team Operations Manager",
      "Athletic Director",
      "Facility Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Sports Management",
          "Fundamentals of Marketing",
          "Business Ethics in Sports",
          "Sports Law and Governance",
          "Financial Management for Sports"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Sports Event Management",
          "Sports Marketing and Promotion",
          "Sports Sponsorship and Branding",
          "Athlete Management",
          "Facility and Venue Management"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "Advanced Sports Marketing",
          "Digital Media in Sports",
          "International Sports Management",
          "Sports Analytics",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BSc)",
    "name": "Bachelor in Marketing – Communication (French Taught)",
    "title_1": "Bachelor in Marketing – Communication",
    "description_1": "This program is designed for students who are interested in the strategic aspects of marketing and communication, with a focus on French-speaking markets.",
    "title_2": "Why take up Bachelor in Marketing – Communication?",
    "description_2": "Gain comprehensive knowledge in marketing, communication, and public relations, preparing you for roles that involve branding, advertising, and corporate communication strategies.",
    "career_opportunities": [
      "Marketing Communications Manager",
      "Brand Manager",
      "Public Relations Specialist",
      "Advertising Executive",
      "Corporate Communications Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "French",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Marketing",
          "Communication Theory",
          "Public Relations",
          "Consumer Behavior",
          "Advertising Principles"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Brand Management",
          "Digital Marketing",
          "Marketing Research",
          "Media Planning and Buying",
          "Strategic Communication"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "International Marketing",
          "Marketing Analytics",
          "Crisis Communication",
          "Marketing Ethics",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Bachelors (BSc)",
    "name": "Bachelor in Management – Gestion (French Taught)",
    "title_1": "Bachelor in Management – Gestion",
    "description_1": "This program focuses on general management principles and practices, with an emphasis on French-speaking business environments.",
    "title_2": "Why take up Bachelor in Management – Gestion?",
    "description_2": "Learn about organizational behavior, business strategy, and leadership within the context of French business practices, and prepare for a career in diverse management roles.",
    "career_opportunities": [
      "Business Manager",
      "Operations Manager",
      "Project Manager",
      "Human Resources Manager",
      "Consultant"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 180,
    "duration": "3 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "French",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Management",
          "Business Communication",
          "Principles of Economics",
          "Accounting for Managers",
          "Organizational Behavior"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Marketing Management",
          "Human Resources Management",
          "Financial Management",
          "Business Strategy",
          "Entrepreneurship"
        ]
      },
      {
        "year": "Year 3",
        "courses": [
          "International Business",
          "Operations Management",
          "Leadership and Team Management",
          "Business Ethics and Corporate Social Responsibility",
          "Capstone Project"
        ]
      }
    ]}
  },
  #MBA
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in International Business",
    "title_1": "MBA in International Business",
    "description_1": "This program is designed to provide students with the knowledge and skills required to manage international business operations and navigate the global marketplace.",
    "title_2": "Why take up MBA in International Business?",
    "description_2": "Gain in-depth understanding of international trade, global market strategies, and cross-cultural management practices, preparing you for leadership roles in multinational organizations.",
    "career_opportunities": [
      "International Business Manager",
      "Global Marketing Manager",
      "International Trade Consultant",
      "Cross-cultural Manager",
      "Export/Import Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": [
      {
        "year": "Year 1",
        "courses": [
          "International Business Environment",
          "Global Marketing Strategies",
          "International Financial Management",
          "Cross-Cultural Management",
          "Global Supply Chain Management"
        ]
      },
      {
        "year": "Year 2",
        "courses": {"course_modules":[
          "International Business Strategy",
          "Global Human Resource Management",
          "International Trade and Economics",
          "International Business Law",
          "Capstone Project"
        ]}
      }
    ]
  },
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in Management Accounting & Finance",
    "title_1": "MBA in Management Accounting & Finance",
    "description_1": "This MBA program focuses on equipping students with the financial management and accounting skills required to oversee the financial aspects of business operations.",
    "title_2": "Why take up MBA in Management Accounting & Finance?",
    "description_2": "Acquire expertise in financial analysis, budgeting, cost control, and financial decision-making, essential for high-level management and executive positions in finance and accounting.",
    "career_opportunities": [
      "Financial Controller",
      "Management Accountant",
      "Financial Analyst",
      "Chief Financial Officer (CFO)",
      "Business Consultant"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Advanced Management Accounting",
          "Corporate Finance",
          "Financial Reporting and Analysis",
          "Business Economics",
          "Cost Management"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Strategic Financial Management",
          "Investment Analysis",
          "Corporate Taxation",
          "Financial Risk Management",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in Digital Marketing",
    "title_1": "MBA in Digital Marketing",
    "description_1": "This MBA program focuses on digital marketing strategies and tools, preparing students for leadership roles in marketing, advertising, and digital media.",
    "title_2": "Why take up MBA in Digital Marketing?",
    "description_2": "Develop expertise in digital marketing platforms, content strategy, social media marketing, SEO, and data analytics to lead digital transformation in marketing departments.",
    "career_opportunities": [
      "Digital Marketing Manager",
      "Social Media Strategist",
      "SEO Specialist",
      "E-commerce Manager",
      "Digital Advertising Director"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Digital Marketing Strategies",
          "Social Media Marketing",
          "Content Marketing",
          "Search Engine Optimization (SEO)",
          "Digital Advertising"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Web Analytics",
          "E-commerce Strategies",
          "Digital Branding",
          "Customer Relationship Management (CRM)",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in Hospitality Management",
    "title_1": "MBA in Hospitality Management",
    "description_1": "This program focuses on the principles and practices of hospitality management, preparing students for leadership roles in hotels, resorts, restaurants, and tourism businesses.",
    "title_2": "Why take up MBA in Hospitality Management?",
    "description_2": "Gain management skills specific to the hospitality industry, including operations, guest relations, marketing, and strategic management, essential for thriving in this dynamic field.",
    "career_opportunities": [
      "Hotel General Manager",
      "Hospitality Operations Manager",
      "Event Coordinator",
      "Restaurant Manager",
      "Tourism Consultant"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Hospitality Management",
          "Hotel Operations",
          "Revenue Management",
          "Customer Service Excellence",
          "Tourism Economics"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Marketing for Hospitality",
          "Strategic Hospitality Management",
          "Event and Conference Management",
          "Sustainability in Hospitality",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in Event Management",
    "title_1": "MBA in Event Management",
    "description_1": "This program equips students with the skills and knowledge necessary to plan, organize, and manage events on a global scale, focusing on strategy, operations, and logistics.",
    "title_2": "Why take up MBA in Event Management?",
    "description_2": "Develop advanced skills in event planning, marketing, budgeting, and logistics to manage large-scale events, conferences, and corporate gatherings with a global perspective.",
    "career_opportunities": [
      "Event Director",
      "Event Planner",
      "Conference Coordinator",
      "Exhibition Manager",
      "Corporate Event Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Event Management",
          "Event Planning and Strategy",
          "Marketing for Events",
          "Event Budgeting and Financial Management",
          "Event Logistics and Operations"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Global Event Management",
          "Event Design and Production",
          "Event Marketing and Promotion",
          "Sponsorship and Fundraising for Events",
          "Capstone Project"
        ]
      }
    ]}
  },


  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in Sports Management",
    "title_1": "MBA in Sports Management",
    "description_1": "This MBA program focuses on the business and management aspects of the sports industry, including sports marketing, event management, and athlete management.",
    "title_2": "Why take up MBA in Sports Management?",
    "description_2": "Gain expertise in sports management, including marketing, sponsorship, event coordination, and strategic planning, to excel in leadership roles within the global sports industry.",
    "career_opportunities": [
      "Sports Manager",
      "Event Coordinator",
      "Athlete Manager",
      "Sports Marketing Manager",
      "Sponsorship Coordinator"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Sports Management",
          "Sports Marketing and Sponsorship",
          "Event Planning in Sports",
          "Sports Law and Ethics",
          "Sports Finance"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Strategic Sports Management",
          "Leadership in Sports Organizations",
          "Global Sports Trends",
          "Sports Analytics",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in Healthcare Management",
    "title_1": "MBA in Healthcare Management",
    "description_1": "This program focuses on managing healthcare institutions, including hospitals, clinics, and public health organizations, addressing challenges in healthcare operations and policy.",
    "title_2": "Why take up MBA in Healthcare Management?",
    "description_2": "Develop skills in healthcare administration, policy, and operations management to lead healthcare organizations, improve patient care, and optimize operational efficiency.",
    "career_opportunities": [
      "Healthcare Administrator",
      "Hospital Manager",
      "Healthcare Consultant",
      "Public Health Manager",
      "Medical Practice Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Healthcare Management",
          "Health Policy and Ethics",
          "Healthcare Finance",
          "Healthcare Operations",
          "Marketing in Healthcare"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Healthcare Leadership",
          "Global Healthcare Systems",
          "Health Information Systems",
          "Strategic Management in Healthcare",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in Data Analytics & A.I.",
    "title_1": "MBA in Data Analytics & A.I.",
    "description_1": "This MBA program combines business management with cutting-edge knowledge of data analytics and artificial intelligence to drive decision-making and innovation.",
    "title_2": "Why take up MBA in Data Analytics & A.I.?",
    "description_2": "Learn to leverage data analytics and artificial intelligence technologies to solve complex business challenges, optimize decision-making, and enhance business operations.",
    "career_opportunities": [
      "Data Scientist",
      "AI Strategist",
      "Business Intelligence Analyst",
      "Data Analytics Manager",
      "Chief Data Officer"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Data Analytics Fundamentals",
          "Introduction to Artificial Intelligence",
          "Business Analytics",
          "Machine Learning for Business",
          "Big Data Management"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Predictive Analytics",
          "AI in Business Strategy",
          "Data-Driven Decision Making",
          "AI and Ethics",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in I.T. Project Management",
    "title_1": "MBA in I.T. Project Management",
    "description_1": "This program focuses on managing large-scale IT projects, providing students with the skills required to oversee technological development and IT solutions.",
    "title_2": "Why take up MBA in I.T. Project Management?",
    "description_2": "Equip yourself with the tools and methodologies needed for effective project management in the technology sector, with an emphasis on IT infrastructure, risk management, and team leadership.",
    "career_opportunities": [
      "IT Project Manager",
      "Project Portfolio Manager",
      "Technology Consultant",
      "IT Operations Manager",
      "Project Coordinator"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Project Management",
          "Information Systems and IT Project Management",
          "Project Risk Management",
          "Agile and Scrum Methodologies",
          "IT Project Financial Management"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Advanced IT Project Management",
          "Managing IT Teams and Stakeholders",
          "IT Infrastructure Management",
          "Technology Innovation and Strategy",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MBA)",
    "name": "MBA in Logistics & Supply Chain",
    "title_1": "MBA in Logistics & Supply Chain",
    "description_1": "This MBA program provides an understanding of the global supply chain and logistics industry, focusing on strategies for improving efficiency and reducing costs.",
    "title_2": "Why take up MBA in Logistics & Supply Chain?",
    "description_2": "Gain in-depth knowledge of logistics, transportation, supply chain management, and procurement, preparing you for senior positions in logistics and supply chain management across industries.",
    "career_opportunities": [
      "Supply Chain Manager",
      "Logistics Coordinator",
      "Operations Manager",
      "Procurement Manager",
      "Inventory Control Manager"
    ],
    "study_mode": "On Campus & Hybrid",
    "credits": 60,
    "duration": "2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Logistics and Supply Chain Management",
          "Supply Chain Strategy",
          "Operations Management",
          "Procurement and Sourcing",
          "Inventory Management"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Global Logistics and Distribution",
          "Supply Chain Optimization",
          "Sustainability in Supply Chain Management",
          "Supply Chain Risk Management",
          "Capstone Project"
        ]
      }
    ]}
  },
#MS

  {
    "degree_type": "M",
    "name": "MS Marketing et Communication (French Taught)",
    "title_1": "MS Marketing et Communication (French Taught)",
    "description_1": "This program offers a comprehensive understanding of marketing and communication strategies, focusing on developing advanced skills for managing corporate communication, brand development, and marketing campaigns.",
    "title_2": "Why take up MS in Marketing et Communication?",
    "description_2": "Specialize in strategic marketing, brand management, and communication skills to manage and promote businesses effectively in a dynamic market environment. This program prepares students for leadership roles in global marketing and communications.",
    "career_opportunities": [
      "Marketing Manager",
      "Brand Manager",
      "Public Relations Specialist",
      "Digital Marketing Manager",
      "Corporate Communication Officer"
    ],
    "study_mode": "On Campus",
    "credits": 60,
    "duration": "1 to 2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "French",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Marketing Fundamentals",
          "Consumer Behavior",
          "Corporate Communication",
          "Brand Management",
          "Digital Marketing and Social Media"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Strategic Marketing",
          "Marketing Research",
          "International Marketing",
          "Corporate Social Responsibility",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MSC)",
    "name": "MS Management et Stratégie d’Enterprise (French Taught)",
    "title_1": "MS Management et Stratégie d’Enterprise (French Taught)",
    "description_1": "This program offers an advanced understanding of business management and strategy, focusing on the skills needed to lead organizations in a competitive global marketplace. It combines theoretical knowledge with practical strategies for decision-making and corporate leadership.",
    "title_2": "Why take up MS in Management et Stratégie d’Enterprise?",
    "description_2": "Prepare to manage and lead businesses through the complexities of modern markets. Learn strategic management, organizational behavior, leadership, and corporate decision-making to enhance business performance and competitiveness.",
    "career_opportunities": [
      "Business Consultant",
      "Corporate Strategy Manager",
      "Operations Manager",
      "Business Analyst",
      "General Manager"
    ],
    "study_mode": "On Campus",
    "credits": 60,
    "duration": "1 to 2 Years",
    "recognized_by": "WES Canada & UK ENIC (NARIC)",
    "awarded_by": "Eucléa Business School, France",
    "language_proficiency": "French",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Strategic Management",
          "Leadership and Organizational Behavior",
          "Business Economics",
          "Marketing Strategy",
          "Business Ethics"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Innovation Management",
          "Global Strategy",
          "Financial Management for Managers",
          "Corporate Governance",
          "Capstone Project"
        ]
      }
    ]}
  },
  {
    "degree_type": "Extended Diploma",
    "name": "Extended Diploma in Business & Management (ATHE Level 4)",
    "title_1": "Extended Diploma in Business & Management (ATHE Level 4)",
    "description_1": "This diploma is designed to provide students with the core business management skills needed to excel in various industries. It covers a wide range of business-related topics, equipping students with practical knowledge in management, marketing, finance, and strategy.",
    "title_2": "Why take up Extended Diploma in Business & Management?",
    "description_2": "Gain comprehensive knowledge in business management, including leadership, finance, marketing, and strategy. This diploma serves as a foundation for pursuing higher education or a career in management across multiple sectors.",
    "career_opportunities": [
      "Business Manager",
      "Marketing Manager",
      "Financial Analyst",
      "Human Resources Manager",
      "Operations Manager"
    ],
    "study_mode": "On Campus",
    "credits": 120,
    "duration": "2 Years",
    "recognized_by": "ATHE, UK",
    "awarded_by": "ATHE, UK",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Business and Management",
          "Marketing Principles",
          "Managing People",
          "Business Environment",
          "Financial Management"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Strategic Management",
          "Leadership and Organizational Behavior",
          "Business Planning and Development",
          "Human Resources Management",
          "Project Management"
        ]
      }
        ]}
  },
  {
    "degree_type": "Extended Diploma",
    "name": "Extended Diploma in Hospitality Management (CTH Level 4)",
    "title_1": "Extended Diploma in Hospitality Management (CTH Level 4)",
    "description_1": "This diploma provides specialized knowledge in the hospitality industry, focusing on management practices in hotels, resorts, and restaurants. It aims to equip students with the skills needed to lead in the dynamic hospitality sector.",
    "title_2": "Why take up Extended Diploma in Hospitality Management?",
    "description_2": "Prepare to manage and lead in the hospitality industry. Learn essential hospitality management techniques, including operations, marketing, and financial management, to pursue a career in hotel, restaurant, and tourism management.",
    "career_opportunities": [
      "Hotel Manager",
      "Restaurant Manager",
      "Event Manager",
      "Hospitality Operations Manager",
      "Tourism Manager"
    ],
    "study_mode": "On Campus",
    "credits": 120,
    "duration": "2 Years",
    "recognized_by": "CTH, UK",
    "awarded_by": "CTH, UK",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "courses": [
          "Introduction to Hospitality Management",
          "Customer Service in Hospitality",
          "Hospitality Operations",
          "Marketing for Hospitality",
          "Financial Management in Hospitality"
        ]
      },
      {
        "year": "Year 2",
        "courses": [
          "Strategic Management in Hospitality",
          "Event and Conference Management",
          "Leadership in Hospitality",
          "Sustainable Practices in Hospitality",
          "Hospitality Law and Ethics"
        ]
      }
    ]},

    #Foundation + Bachelors
  },
  {
    "degree_type": "Foundation + Bachelors",
    "name": "Business Management",
    "title_1": "Foundation + Bachelor's in Business Management",
    "description_1": "This program provides a strong foundation in business management, followed by specialized education in leadership, strategy, marketing, and operations. It is designed to prepare students for managerial roles in a wide range of industries.",
    "title_2": "Why take up Foundation + Bachelor's in Business Management?",
    "description_2": "Gain a deep understanding of business principles and management practices. The program equips students with essential skills in decision-making, finance, marketing, and leadership, preparing them for roles in diverse sectors.",
    "career_opportunities": [
      "Business Manager",
      "Operations Manager",
      "Marketing Manager",
      "Financial Analyst",
      "Project Manager"
    ],
    "study_mode": "On Campus",
    "credits": 240,
    "duration": "4 Years",
    "recognized_by": "Accredited Business Institutions",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Foundation Year",
        "courses": [
          "Introduction to Business",
          "Principles of Marketing",
          "Accounting and Finance Basics",
          "Organizational Behavior",
          "Introduction to Economics"
        ]
      },
      {
        "year": "Bachelor's Year 1",
        "courses": [
          "Business Environment",
          "Marketing Management",
          "Financial Accounting",
          "Human Resource Management",
          "Business Law"
        ]
      },
      {
        "year": "Bachelor's Year 2",
        "courses": [
          "Strategic Management",
          "Leadership in Business",
          "Operations Management",
          "Business Ethics",
          "International Business"
        ]
      },
      {
        "year": "Bachelor's Year 3",
        "courses": [
          "Advanced Marketing Strategy",
          "Project Management",
          "Financial Analysis and Planning",
          "Entrepreneurship and Innovation",
          "Business Research"
        ]
      }
    ]}
  },
  {
    "degree_type": "Foundation + Bachelors",
    "name": "Hospitality Management",
    "title_1": "Foundation + Bachelor's in Hospitality Management",
    "description_1": "This program combines a foundation in hospitality with advanced studies in management, leadership, and operations. It focuses on preparing students for leadership roles in the hospitality and tourism industry.",
    "title_2": "Why take up Foundation + Bachelor's in Hospitality Management?",
    "description_2": "The program prepares students for managing hotels, resorts, and other hospitality organizations. It provides expertise in customer service, operations management, and event planning, ideal for future leaders in the industry.",
    "career_opportunities": [
      "Hotel Manager",
      "Restaurant Manager",
      "Event Manager",
      "Tourism Manager",
      "Hospitality Operations Manager"
    ],
    "study_mode": "On Campus",
    "credits": 240,
    "duration": "4 Years",
    "recognized_by": "International Hospitality Organizations",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Foundation Year",
        "courses": [
          "Introduction to Hospitality Management",
          "Customer Service in Hospitality",
          "Tourism Industry Overview",
          "Basics of Marketing",
          "Fundamentals of Accounting"
        ]
      },
      {
        "year": "Bachelor's Year 1",
        "courses": [
          "Hospitality Operations Management",
          "Hospitality Marketing",
          "Human Resource Management in Hospitality",
          "Financial Management in Hospitality",
          "Hospitality Law"
        ]
      },
      {
        "year": "Bachelor's Year 2",
        "courses": [
          "Event Management",
          "Strategic Hospitality Management",
          "Sustainable Practices in Hospitality",
          "Leadership in Hospitality",
          "International Tourism"
        ]
      },
      {
        "year": "Bachelor's Year 3",
        "courses": [
          "Advanced Event Management",
          "Hotel Management Strategy",
          "Crisis Management in Hospitality",
          "Entrepreneurship in Hospitality",
          "Hospitality Business Research"
        ]
      }
    ]}
  },
  {
    "degree_type": "Foundation + Bachelors",
    "name": "Computing IT",
    "title_1": "Foundation + Bachelor's in Computing IT",
    "description_1": "This program provides a strong foundation in computing and IT, followed by advanced education in software development, networking, and cybersecurity. It is ideal for students aiming for technical roles in the IT industry.",
    "title_2": "Why take up Foundation + Bachelor's in Computing IT?",
    "description_2": "The program offers a deep dive into computing technologies, with courses covering software engineering, database management, and IT security. It prepares students for careers as IT professionals, developers, and system administrators.",
    "career_opportunities": [
      "Software Developer",
      "Network Engineer",
      "Cybersecurity Analyst",
      "IT Consultant",
      "Systems Administrator"
    ],
    "study_mode": "On Campus",
    "credits": 240,
    "duration": "4 Years",
    "recognized_by": "Accredited IT Institutions",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Foundation Year",
        "courses": [
          "Introduction to Computing",
          "Computer Programming",
          "Fundamentals of Networking",
          "Introduction to Databases",
          "Mathematics for Computing"
        ]
      },
      {
        "year": "Bachelor's Year 1",
        "courses": [
          "Software Engineering",
          "Network Management",
          "Operating Systems",
          "Database Systems",
          "Web Development"
        ]
      },
      {
        "year": "Bachelor's Year 2",
        "courses": [
          "Advanced Software Development",
          "Cloud Computing",
          "Information Security",
          "Data Structures and Algorithms",
          "IT Project Management"
        ]
      },
      {
        "year": "Bachelor's Year 3",
        "courses": [
          "Cybersecurity",
          "Mobile Application Development",
          "Big Data Technologies",
          "Artificial Intelligence",
          "IT Business Strategy"
        ]
      }
    ]}
  },
  {
    "degree_type": "Foundation + Bachelors",
    "name": "Event Management",
    "title_1": "Foundation + Bachelor's in Event Management",
    "description_1": "This program combines a foundation in event planning with advanced studies in event marketing, budgeting, and logistics. It prepares students for leadership roles in organizing large-scale events and conferences.",
    "title_2": "Why take up Foundation + Bachelor's in Event Management?",
    "description_2": "Students will gain expertise in all aspects of event management, from planning and organizing to execution and evaluation. The program is designed to prepare students for successful careers in the events industry.",
    "career_opportunities": [
      "Event Manager",
      "Conference Planner",
      "Wedding Planner",
      "Corporate Event Coordinator",
      "Exhibition Organizer"
    ],
    "study_mode": "On Campus",
    "credits": 240,
    "duration": "4 Years",
    "recognized_by": "Event Management Institutions",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Foundation Year",
        "courses": [
          "Introduction to Event Management",
          "Marketing and Promotion",
          "Fundamentals of Budgeting",
          "Event Design and Planning",
          "Project Management Basics"
        ]
      },
      {
        "year": "Bachelor's Year 1",
        "courses": [
          "Event Marketing",
          "Event Logistics",
          "Risk Management for Events",
          "Venue Selection and Management",
          "Legal Aspects of Event Management"
        ]
      },
      {
        "year": "Bachelor's Year 2",
        "courses": [
          "Corporate Event Planning",
          "Event Technology",
          "Sponsorship and Partnerships",
          "Social Media for Events",
          "Event Sustainability"
        ]
      },
      {
        "year": "Bachelor's Year 3",
        "courses": [
          "Advanced Event Strategy",
          "Global Event Management",
          "Crisis Management in Events",
          "Event Research",
          "Event Business Development"
        ]
      }
    ]}
  },
  {
    "degree_type": "Foundation + Bachelors",
    "name": "Sports Management",
    "title_1": "Foundation + Bachelor's in Sports Management",
    "description_1": "This program combines a foundation in sports management with advanced studies in sports marketing, event coordination, and athlete management. It is designed for students seeking careers in sports organizations, clubs, and event management.",
    "title_2": "Why take up Foundation + Bachelor's in Sports Management?",
    "description_2": "Students will learn about managing sports teams, athletes, and sporting events. The program equips them with knowledge in marketing, business administration, and strategic planning in the sports industry.",
    "career_opportunities": [
      "Sports Manager",
      "Athlete Manager",
      "Event Coordinator",
      "Sports Marketing Manager",
      "Fitness Club Manager"
    ],
    "study_mode": "On Campus",
    "credits": 240,
    "duration": "4 Years",
    "recognized_by": "Sports Management Institutions",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Foundation Year",
        "courses": [
          "Introduction to Sports Management",
          "Sports Marketing Basics",
          "Fundamentals of Sports Science",
          "Team Management",
          "Introduction to Event Management"
        ]
      },
      {
        "year": "Bachelor's Year 1",
        "courses": [
          "Sports Event Management",
          "Sports Marketing",
          "Business in Sports",
          "Sports Law",
          "Financial Management in Sports"
        ]
      },
      {
        "year": "Bachelor's Year 2",
        "courses": [
          "Strategic Sports Management",
          "Athlete and Talent Management",
          "Sports Sponsorship",
          "Sports Media and Communications",
          "Leadership in Sports"
        ]
      },
      {
        "year": "Bachelor's Year 3",
        "courses": [
          "Advanced Sports Marketing",
          "Global Sports Business",
          "Sports Entrepreneurship",
          "Event Planning and Coordination",
          "Sports Research"
        ]
      }
    ]}
  },
  #MSC
  {
    "degree_type": "Masters (MSC)",
    "name": "Data Analytics",
    "title_1": "Master's in Data Analytics",
    "description_1": "This program focuses on data-driven decision-making, teaching advanced techniques in data analysis, statistical modeling, and machine learning. It prepares students for careers in data science, analytics, and business intelligence.",
    "title_2": "Why take up Master's in Data Analytics?",
    "description_2": "Gain expertise in analyzing complex datasets and extracting valuable insights. This program equips students with skills in data visualization, predictive modeling, and statistical analysis, making them highly employable in various sectors.",
    "career_opportunities": [
      "Data Analyst",
      "Data Scientist",
      "Business Intelligence Analyst",
      "Machine Learning Engineer",
      "Quantitative Analyst"
    ],
    "study_mode": "On Campus",
    "credits": 180,
    "duration": "2 Years",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "course_modules": [
          "Introduction to Data Analytics",
          "Statistical Methods for Data Analysis",
          "Data Visualization and Reporting",
          "Data Mining and Machine Learning",
          "Big Data Technologies"
        ]
      },
      {
        "year": "Year 2",
        "course_modules": [
          "Advanced Data Analytics",
          "Predictive Modeling and Forecasting",
          "Database Management and SQL",
          "Business Intelligence Systems",
          "Capstone Project in Data Analytics"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MSC)",
    "name": "Software Development",
    "title_1": "Master's in Software Development",
    "description_1": "This program prepares students for software engineering roles by teaching advanced programming, software design principles, and development methodologies. It focuses on producing high-quality software applications and systems.",
    "title_2": "Why take up Master's in Software Development?",
    "description_2": "Learn advanced programming languages, software development frameworks, and project management methodologies. This program equips students to become leaders in software design, development, and implementation.",
    "career_opportunities": [
      "Software Engineer",
      "Full Stack Developer",
      "Application Architect",
      "Software Development Manager",
      "Mobile App Developer"
    ],
    "study_mode": "On Campus",
    "credits": 180,
    "duration": "2 Years",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "course_modules": [
          "Advanced Programming Techniques",
          "Software Design and Architecture",
          "Database Design and Development",
          "Software Testing and Debugging",
          "Agile Methodologies"
        ]
      },
      {
        "year": "Year 2",
        "course_modules": [
          "Mobile Application Development",
          "Cloud Computing and Services",
          "DevOps and Continuous Integration",
          "Software Project Management",
          "Capstone Project in Software Development"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MSC)",
    "name": "Networking",
    "title_1": "Master's in Networking",
    "description_1": "This program focuses on advanced networking concepts and technologies. Students will learn about network security, network administration, and designing scalable networking systems for organizations.",
    "title_2": "Why take up Master's in Networking?",
    "description_2": "Gain expertise in building and managing network infrastructure. Learn about network protocols, security measures, and best practices in managing enterprise-level networks.",
    "career_opportunities": [
      "Network Engineer",
      "Network Administrator",
      "Security Analyst",
      "Systems Administrator",
      "Network Architect"
    ],
    "study_mode": "On Campus",
    "credits": 180,
    "duration": "2 Years",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "course_modules": [
          "Network Fundamentals",
          "Routing and Switching",
          "Network Security",
          "Wireless Networks",
          "Cloud Networking"
        ]
      },
      {
        "year": "Year 2",
        "course_modules": [
          "Advanced Network Design",
          "Network Management and Monitoring",
          "Network Virtualization",
          "Network Security and Cryptography",
          "Capstone Project in Networking"
        ]
      }
    ]}
  },
  {
    "degree_type": "Masters (MSC)",
    "name": "Application Development",
    "title_1": "Master's in Application Development",
    "description_1": "This program equips students with the skills to develop robust, scalable, and user-friendly applications. It includes courses in software engineering, front-end and back-end development, and mobile app development.",
    "title_2": "Why take up Master's in Application Development?",
    "description_2": "Master the techniques for developing applications across multiple platforms. The program focuses on modern development frameworks and languages, and it prepares students for careers in both enterprise and consumer application development.",
    "career_opportunities": [
      "Application Developer",
      "Mobile App Developer",
      "Full Stack Developer",
      "Front-End Developer",
      "Back-End Developer"
    ],
    "study_mode": "On Campus",
    "credits": 180,
    "duration": "2 Years",
    "language_proficiency": "English",
    "course_modules": {"course_modules":[
      {
        "year": "Year 1",
        "course_modules": [
          "Introduction to Web Development",
          "Mobile Application Development",
          "Front-End Technologies",
          "Back-End Technologies",
          "Database Integration"
        ]
      },
      {
        "year": "Year 2",
        "course_modules": [
          "Advanced Application Architecture",
          "Cloud Computing for App Development",
          "User Interface Design",
          "Software Engineering Principles",
          "Capstone Project in Application Development"
        ]
      }
    ]}
  }



  






]




        for course_data in courses_data:
            course, created = Course.objects.get_or_create(
                slug=slugify(course_data["name"]),
                defaults=course_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"Added course: {course.name}"))
            else:
                self.stdout.write(self.style.WARNING(f"Course already exists: {course.name}"))
