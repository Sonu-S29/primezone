
export const courseDetails: { [key: string]: any } = {
    'data-analysis': {
        title: "Data Analysis",
        description: "This comprehensive program is designed to equip you with the essential skills for data analysis, covering everything from foundational concepts to advanced tools. You'll learn to clean, analyze, and visualize data to drive informed business decisions.",
        image: "/images/courses/dataanalytics.webp",
        hint: "data analytics dashboard",
        highlights: ["100% Job Assistance", "Integrated Internship", "Live Projects", "Expert-Led Training"],
        whatYouWillLearn: [
            "Advanced techniques in Microsoft Excel for data manipulation and analysis.",
            "Creating compelling data visualizations and dashboards with Power BI and Tableau.",
            "Writing complex SQL queries to extract and manage data from relational databases.",
            "Using Python with libraries like Pandas and NumPy for data cleaning and analysis.",
            "Applying statistical methods to interpret data and generate insights."
        ],
        careerOpportunities: ["Data Analyst", "Business Intelligence Analyst", "Data Visualization Specialist", "Market Research Analyst", "Financial Analyst"],
        syllabus: [
            {
                title: "Advanced Excel",
                icon: "barchart",
                topics: [
                    "Advanced Conditional Formatting",
                    "Pivot Tables & Pivot Charts",
                    "V-Lookup & H-Lookup",
                    "Complex Functions, What-if-Analysis",
                    "Working with Macros, MIS Reporting",
                    "Dashboard Creation, Data Validation"
                ]
            },
            {
                title: "Power BI",
                icon: "barchart",
                topics: [
                    "Introduction to Power BI",
                    "Working with Data, Power Pivot",
                    "Data Analysis Expressions (DAX)",
                    "Publishing & Managing Reports",
                    "Importing Data with Power Query"
                ]
            },
            {
                title: "MySQL",
                icon: "code",
                topics: [
                    "Introduction to SQL Server",
                    "Database & Types",
                    "Using DDL / DML",
                    "Simple Queries, Sub-Queries",
                    "Queries using Joins",
                    "Constraints & Aggregate Functions"
                ]
            },
            {
                title: "Python",
                icon: "code",
                topics: [
                    "Basic Python Syntax",
                    "Data Types & Operators",
                    "Decision Making & Looping",
                    "Lists, Tuples, Dictionary",
                    "Functions & Modules",
                    "File I/O and Exception Handling"
                ]
            },
            {
                title: "Tableau",
                icon: "barchart",
                topics: [
                    "Working with Tableau",
                    "Deep Diving with Data & Connections",
                    "Creating Charts",
                    "Calculations in your Workbook",
                    "Data Mapping in Tableau",
                    "Dashboards & Visualization"
                ]
            }
        ],
        tools: [
            { name: "Excel", logo: "/images/tech/excel.png" },
            { name: "Power BI", logo: "/images/tech/powerbi.png" },
            { name: "SQL", logo: "/images/tech/sql.png" },
            { name: "Python", logo: "/images/tech/python.png" },
            { name: "Tableau", logo: "/images/tech/tableau.png" },
        ]
    },
    "full-stack-development": {
        title: "Full-Stack Development",
        description: "Become a versatile developer by mastering both front-end and back-end technologies. This course will guide you through building complete, scalable web applications from scratch.",
        image: "/images/courses/full-stack.webp",
        hint: "code on screen",
        highlights: ["100% Job Assistance", "Integrated Internship", "Live Projects", "Build Your Own Portfolio"],
        whatYouWillLearn: [
            "Building responsive and dynamic user interfaces with HTML, CSS, and JavaScript.",
            "Developing single-page applications using modern front-end frameworks like React or Angular.",
            "Creating robust server-side applications and APIs with Node.js, Express, or Django.",
            "Designing and managing databases with both SQL (MySQL) and NoSQL (MongoDB) technologies.",
            "Deploying and maintaining web applications."
        ],
        careerOpportunities: ["Full-Stack Developer", "Front-End Developer", "Back-End Developer", "Web Application Developer", "Software Engineer"],
        syllabus: [
            { title: "HTML & CSS", icon: "code", topics: ["HTML Tags, Fonts, Image, Heading", "Table, Links, Source, Form, Frames", "CSS Tags, Styles, Syntax, Model, IDS"] },
            { title: "JavaScript", icon: "code", topics: ["Developer Essentials", "Language, Events", "Methods, Using Names, Objects", "Validation options, Rollovers & More"] },
            { title: "AngularJS", icon: "code", topics: ["Expressions, Modules, Directives", "Model, Data Binding, Controllers", "Scopes, Filters, Services, Http", "Tables, Select, SQL, DOM, Events", "Validation, API, W3.CSS, Animation", "AngularJS Routing, Application"] },
            { title: "ReactJS", icon: "code", topics: ["Components in React", "State management Lists & keys", "Handling events, Forms", "Handling HTTP requests", "Server-side rendering (SSR)"] },
            { title: "Bootstrap", icon: "code", topics: ["Bootstrap Framework, Features", "Bootstrap Components, Grid", "Responsive web page, Bootstrap Plug-Ins"] },
            { title: "Back-End Technologies", icon: "code", topics: ["Django", "Node.js", "Express.js", "Python", "PHP", "Laravel"] },
            { title: "Database Technologies", icon: "code", topics: ["MySQL", "MongoDB"] },
            { title: "Java Technology", icon: "code", topics: ["Core Java", "Advanced Java", "Hibernate", "Spring"] }
        ],
        tools: [
            { name: "HTML5", logo: "/images/tech/html.png" },
            { name: "CSS3", logo: "/images/tech/css.png" },
            { name: "JavaScript", logo: "/images/tech/js.png" },
            { name: "React", logo: "/images/tech/react.png" },
            { name: "Angular", logo: "/images/tech/angular.png" },
            { name: "Node.js", logo: "/images/tech/node.png" },
            { name: "MySQL", logo: "/images/tech/sql.png" },
            { name: "MongoDB", logo: "/images/tech/mongodb.png" }
        ]
    },
    'accounting': {
        title: "Diploma In Accounting",
        description: "Gain comprehensive knowledge in financial, managerial, and tax accounting, preparing you for various roles in the accounting field.",
        image: "/images/courses/DIA.jpg",
        hint: "accounting collage",
        highlights: ["Job Oriented", "Practical Training", "Expert Faculty", "Certification"],
        whatYouWillLearn: ["Financial accounting principles", "Advanced Excel for accounting tasks", "Tally Prime with GST compliance", "Fundamentals of taxation and auditing"],
        careerOpportunities: ["Accountant", "Finance Executive", "Tax Consultant", "MIS Executive"],
        syllabus: [
            { title: "Financial Accounting Basics", icon: "barchart", topics: ["Introduction to Accounting", "Journal Entries", "Ledger and Trial Balance", "Final Accounts Preparation", "Bank Reconciliation", "and many more..."] },
            { title: "Advanced Excel for Accountants", icon: "barchart", topics: ["Advanced Formulas", "PivotTables & PivotCharts", "Data Validation & Protection", "Financial Modeling Basics", "Macros & VBA for Accountants", "and many more..."] },
            { title: "Tally Prime with GST", icon: "code", topics: ["Company Creation & Configuration", "Voucher Entry", "GST Setup and Compliance", "Inventory Management", "Payroll Processing", "and many more..."] },
        ],
        tools: [
            { name: "MS Excel", logo: "/images/tech/excel.png" },
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
        ]
    },
    'financial-accounting': {
        title: "Diploma In Financial Accounting",
        description: "Master financial accounting principles, practices, and software tools essential for managing an organization's financial records and reports.",
        image: "/images/courses/DFA.jpg",
        hint: "financial report",
        highlights: ["In-depth Curriculum", "Practical Case Studies", "Software Training", "Industry Recognized"],
        whatYouWillLearn: ["Office automation tools", "Advanced Excel for financial reporting", "Complete Tally Prime with GST", "Taxation and auditing procedures"],
        careerOpportunities: ["Financial Analyst", "Accounts Manager", "Taxation Expert", "Compliance Officer"],
        syllabus: [
            { title: "Office Automation", icon: "tv", topics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Microsoft Windows Fundamental", "and many more..."] },
            { title: "Advanced Excel", icon: "barchart", topics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting", "and many more..."] },
            { title: "Tally Prime (GST)", icon: "code", topics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "TDS (Tax Deducted at Source)", "GST, Apply GST Number", "and many more..."] },
            { title: "Taxation Auditing", icon: "barchart", topics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats, GST Return", "and many more..."] }
        ],
        tools: [
            { name: "MS Office", logo: "/images/tech/office.png" },
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
            { name: "MS Excel", logo: "/images/tech/excel.png" },
        ]
    },
    "web-designing": {
        title: "Web Designing",
        description: "Create visually appealing and user-friendly websites. Learn the principles of UI/UX design and master the tools to build beautiful web interfaces.",
        image: "/images/courses/short/programming/webdesign.png",
        hint: "web design",
        highlights: ["Portfolio Development", "Live Projects", "Responsive Design", "UI/UX Principles"],
        whatYouWillLearn: [
            "Fundamentals of UI/UX design.",
            "Creating wireframes and prototypes.",
            "Designing responsive layouts for different devices.",
            "Using modern design tools like Figma.",
            "Basics of HTML & CSS to bring designs to life."
        ],
        careerOpportunities: ["Web Designer", "UI Designer", "UX Designer", "Visual Designer"],
        syllabus: [
            { title: "UI/UX Principles", icon: "brush", topics: ["User-Centered Design", "Color Theory", "Typography", "Layout and Composition"] },
            { title: "HTML & CSS", icon: "code", topics: ["Structuring web pages with HTML5", "Styling with CSS3, including Flexbox and Grid", "Responsive Design Techniques"] },
            { title: "Design Tools", icon: "brush", topics: ["Designing and prototyping in Figma", "Introduction to Adobe XD and Sketch"] },
            { title: "Project", icon: "code", topics: ["Build a complete website design from scratch", "Create a personal portfolio"] }
        ],
        tools: [
            { name: "HTML5", logo: "/images/tech/html.png" },
            { name: "CSS3", logo: "/images/tech/css.png" },
            { name: "Figma", logo: "/images/tech/figma.png" },
            { name: "Adobe XD", logo: "/images/tech/xd.png" }
        ]
    },
     "advanced-excel": {
        title: "Advanced Excel",
        description: "Master complex formulas, data analysis, and visualization techniques to become an Excel power user.",
        image: "/images/courses/coursetrend/advexcel.png",
        hint: "excel spreadsheet",
        highlights: ["Data Analysis", "MIS Reporting", "Dashboard Creation", "Automation with Macros"],
        whatYouWillLearn: [
            "Advanced formulas and functions for complex calculations.",
            "Creating dynamic dashboards with PivotTables and PivotCharts.",
            "Automating repetitive tasks using VBA macros.",
            "Using tools like Power Query for data import and transformation."
        ],
        careerOpportunities: ["MIS Executive", "Data Analyst", "Financial Analyst", "Business Analyst"],
        syllabus: [
            { title: "Advanced Formulas", icon: "barchart", topics: ["VLOOKUP, HLOOKUP, INDEX, MATCH", "Logical functions (IF, AND, OR, nested IFs)", "Text and Date functions"] },
            { title: "Data Analysis Tools", icon: "barchart", topics: ["PivotTables and PivotCharts", "What-If Analysis (Goal Seek, Scenario Manager)", "Data Validation and Conditional Formatting"] },
            { title: "Macros & VBA", icon: "code", topics: ["Recording and running macros", "Introduction to the VBA editor", "Creating user-defined functions (UDFs)"] },
        ],
        tools: [
            { name: "MS Excel", logo: "/images/tech/excel.png" }
        ]
    },
    "power-bi": {
        title: "Power BI",
        description: "Turn complex data into clear, interactive visualizations and dashboards with Microsoft Power BI.",
        image: "/images/courses/coursetrend/power_bi.png",
        hint: "business intelligence dashboard",
        highlights: ["Dashboard Development", "Data Modeling", "DAX Formulas", "Data Storytelling"],
        whatYouWillLearn: [
            "Connecting to various data sources and transforming data with Power Query.",
            "Building robust data models.",
            "Writing powerful DAX (Data Analysis Expressions) formulas.",
            "Creating interactive and insightful dashboards and reports."
        ],
        careerOpportunities: ["BI Analyst", "Data Visualization Specialist", "Power BI Developer", "Business Analyst"],
        syllabus: [
            { title: "Introduction to Power BI", icon: "barchart", topics: ["Power BI Desktop, Service, and Mobile", "Connecting to data sources"] },
            { title: "Data Transformation", icon: "code", topics: ["Using Power Query Editor", "Cleaning, shaping, and merging data"] },
            { title: "Data Modeling and DAX", icon: "code", topics: ["Creating relationships between tables", "Calculated columns and measures using DAX"] },
            { title: "Visualization", icon: "brush", topics: ["Creating various charts and graphs", "Designing interactive dashboards"] },
        ],
        tools: [
            { name: "Power BI", logo: "/images/tech/powerbi.png" }
        ]
    },
    "tally-gst": {
        title: "Tally + GST",
        description: "Learn comprehensive accounting and GST management with the industry-standard Tally software.",
        image: "/images/courses/coursetrend/tally.png",
        hint: "accounting software",
        highlights: ["GST Compliance", "Financial Accounting", "Inventory Management", "Payroll Processing"],
        whatYouWillLearn: [
            "Day-to-day accounting entries in Tally.",
            "Managing GST, including generating GSTR-1, 2, and 3B.",
            "Processing payroll and managing employee data.",
            "Handling inventory and stock management."
        ],
        careerOpportunities: ["Accountant", "Tally Operator", "GST Practitioner", "Finance Executive"],
        syllabus: [
            { title: "Accounting Fundamentals", icon: "barchart", topics: ["Company Setup", "Ledger and Voucher Entry", "Bank Reconciliation"] },
            { title: "GST in Tally", icon: "code", topics: ["GST Activation and Configuration", "Recording GST-compliant transactions", "Generating GST reports"] },
            { title: "Advanced Features", icon: "code", topics: ["Inventory Management", "Payroll Setup and Processing", "TDS (Tax Deducted at Source)"] },
        ],
        tools: [
            { name: "Tally Prime", logo: "/images/tech/tally.png" }
        ]
    },
     "video-editing": {
        title: "Video & Sound Editing",
        description: "Master the art of video and audio editing to create professional-quality media content.",
        image: "/images/courses/short/graphics/PremierePro.png",
        hint: "video editing",
        highlights: ["Professional Software", "Hands-On Projects", "Storytelling Techniques", "Sound Design"],
        whatYouWillLearn: [
            "Editing techniques using Adobe Premiere Pro.",
            "Color correction and grading.",
            "Creating motion graphics and titles in After Effects.",
            "Audio editing and sound design principles."
        ],
        careerOpportunities: ["Video Editor", "Motion Graphics Artist", "Multimedia Artist", "Content Creator"],
        syllabus: [
            { title: "Premiere Pro Fundamentals", icon: "brush", topics: ["Interface and Workflow", "Basic and Advanced Editing Techniques", "Transitions and Effects"] },
            { title: "After Effects for Motion Graphics", icon: "brush", topics: ["Introduction to After Effects", "Creating Text and Shape Animations", "Compositing and Visual Effects"] },
            { title: "Sound Editing", icon: "code", topics: ["Audio cleanup and enhancement", "Mixing and mastering audio tracks"] },
        ],
        tools: [
            { name: "Premiere Pro", logo: "/images/tech/premiere.png" },
            { name: "After Effects", logo: "/images/tech/after-effects.png" }
        ]
    },
    "autocad": {
        title: "AutoCAD 2D-3D",
        description: "Learn to create precise 2D and 3D drawings with AutoCAD, the leading software for design and drafting.",
        image: "/images/courses/short/graphics/AutoCAD.png",
        hint: "autocad drawing",
        highlights: ["2D Drafting", "3D Modeling", "Technical Drawing", "Architectural Plans"],
        whatYouWillLearn: [
            "Creating and editing 2D technical drawings.",
            "Building and modifying 3D models.",
            "Preparing layouts for plotting and printing.",
            "Understanding industry standards for drafting."
        ],
        careerOpportunities: ["CAD Designer", "Drafter", "Architectural Assistant", "Interior Designer"],
        syllabus: [
            { title: "2D Drafting", icon: "brush", topics: ["Drawing and Modify tools", "Layers, Blocks, and Attributes", "Dimensioning and Annotations"] },
            { title: "3D Modeling", icon: "brush", topics: ["Creating 3D objects", "Solid modeling techniques", "Rendering and visualization"] },
            { title: "Layout and Plotting", icon: "code", topics: ["Working with layouts and viewports", "Setting up plots and print styles"] },
        ],
        tools: [
            { name: "AutoCAD", logo: "/images/tech/autocad.png" }
        ]
    },
    "social-media-marketing": {
        title: "Social Media Marketing",
        description: "Engage audiences, build brands, and drive results on major social media platforms.",
        image: "/images/courses/short/dm/smm.png",
        hint: "social media strategy",
        highlights: ["Content Strategy", "Campaign Management", "Audience Engagement", "Analytics & Reporting"],
        whatYouWillLearn: [
            "Developing a comprehensive social media strategy.",
            "Creating and curating engaging content for different platforms.",
            "Running effective paid advertising campaigns.",
            "Analyzing performance metrics to optimize results."
        ],
        careerOpportunities: ["Social Media Manager", "Content Strategist", "Digital Marketing Specialist"],
        syllabus: [
            { title: "Strategy & Planning", icon: "brush", topics: ["Setting goals", "Identifying target audience", "Platform selection"] },
            { title: "Content & Campaigns", icon: "code", topics: ["Content creation", "Running ads on Facebook, Instagram, LinkedIn", "Community management"] },
            { title: "Analytics", icon: "barchart", topics: ["Tracking key metrics", "Using platform-native analytics tools", "Reporting and optimization"] },
        ],
        tools: [
            { name: "Facebook", logo: "/images/tech/fb.png" },
            { name: "Instagram", logo: "/images/tech/ig.png" },
            { name: "LinkedIn", logo: "/images/tech/linkedin.png" }
        ]
    },
    "search-engine-marketing": {
        title: "Search Engine Marketing",
        description: "Drive traffic and conversions with paid search campaigns on platforms like Google and Bing.",
        image: "/images/courses/short/dm/sem.png",
        hint: "search engine ads",
        highlights: ["PPC Campaigns", "Keyword Research", "Ad Copywriting", "Conversion Tracking"],
        whatYouWillLearn: [
            "Setting up and managing Google Ads campaigns.",
            "Conducting effective keyword research.",
            "Writing compelling ad copy that converts.",
            "Optimizing campaigns based on performance data."
        ],
        careerOpportunities: ["SEM Specialist", "PPC Manager", "Digital Advertising Coordinator"],
        syllabus: [
            { title: "Google Ads Fundamentals", icon: "code", topics: ["Campaign structure", "Keyword match types", "Bidding strategies"] },
            { title: "Campaign Optimization", icon: "barchart", topics: ["A/B testing ad copy", "Quality Score improvement", "Conversion tracking and analysis"] },
        ],
        tools: [
            { name: "Google Ads", logo: "/images/tech/google-ads.png" },
            { name: "Google Analytics", logo: "/images/tech/ga.png" }
        ]
    },
    "google-facebook-ads": {
        title: "Google Ads & Facebook Ads",
        description: "Master the two largest advertising platforms to reach customers and drive growth.",
        image: "/images/courses/short/dm/facebookgoogleads.png",
        hint: "online advertising",
        highlights: ["Cross-Platform Strategy", "Audience Targeting", "Budget Optimization", "Performance Marketing"],
        whatYouWillLearn: [
            "Creating and managing campaigns on both Google Ads and Facebook Ads.",
            "Advanced audience targeting techniques.",
            "Optimizing ad spend for maximum ROI.",
            "Retargeting and building sales funnels."
        ],
        careerOpportunities: ["Paid Media Specialist", "Digital Marketing Manager", "Performance Marketer"],
        syllabus: [
            { title: "Platform Mastery", icon: "code", topics: ["Deep dive into Google Ads and Facebook Ads platforms", "Understanding different ad formats"] },
            { title: "Integrated Strategy", icon: "brush", topics: ["Creating a cohesive strategy across platforms", "Attribution modeling"] },
        ],
        tools: [
            { name: "Google Ads", logo: "/images/tech/google-ads.png" },
            { name: "Facebook Ads", logo: "/images/tech/fb.png" }
        ]
    }
};
