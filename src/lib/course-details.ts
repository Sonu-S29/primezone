
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
    'computer-application': {
        title: "Diploma In Computer Application",
        description: "Learn essential computer skills, including hardware basics, operating systems, and popular software applications for personal and professional use.",
        image: "/images/heroslider/dca.jpeg",
        hint: "computer application",
        highlights: ["All-in-One Course", "Graphic & Web Design", "Accounting Software", "Programming Basics"],
        whatYouWillLearn: ["Proficiency in office automation tools and advanced Excel.", "Complete Tally Prime with GST for accounting.", "Fundamentals of graphic design with CorelDRAW, Photoshop, and Illustrator.", "Basics of web design with HTML, CSS, and Adobe Animate."],
        careerOpportunities: ["DTP Operator", "Graphic Designer", "Accountant", "Web Designer", "Office Administrator"],
        syllabus: [
            { title: "Office Automation", icon: "tv", topics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet Usage", "Windows Fundamentals"] },
            { title: "Advanced Excel", icon: "barchart", topics: ["Advanced Formatting", "Pivot Tables & Charts", "V-Lookup & H-Lookup", "Macros and MIS Reporting"] },
            { title: "Tally Prime (GST)", icon: "code", topics: ["Accounting Principles", "Voucher Entry", "TDS & GST Compliance", "Inventory & Payroll"] },
            { title: "Graphic Designing", icon: "brush", topics: ["CorelDRAW", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva"] },
            { title: "Web Designing", icon: "code", topics: ["HTML / CSS", "Adobe Animate", "JavaScript Basics", "Web Hosting", "Adobe Dreamweaver"] }
        ],
        tools: [
            { name: "MS Office", logo: "/images/tech/office.png" },
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
            { name: "Photoshop", logo: "/images/tech/photoshop.png" },
            { name: "Illustrator", logo: "/images/tech/illustrator.png" },
            { name: "HTML5", logo: "/images/tech/html.png" },
            { name: "CSS3", logo: "/images/tech/css.png" },
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
        careerOpportunities: ["SEM Specialist", "PPC Analyst", "Digital Advertising Coordinator"],
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
    },
    'office-automation': {
        title: "Office Automation",
        description: "Master essential office tools for productivity and efficiency.",
        image: "/images/courses/short/account/oa.png",
        hint: "office software",
        highlights: ["Productivity Boost", "Essential Skills", "Widely Applicable", "Hands-On Practice"],
        whatYouWillLearn: ["Creating professional documents in Word", "Managing data and creating charts in Excel", "Designing engaging presentations in PowerPoint", "Organizing notes and information with OneNote"],
        careerOpportunities: ["Office Administrator", "Executive Assistant", "Data Entry Operator", "Any office-based role"],
        syllabus: [
            { title: "Microsoft Word", icon: "code", topics: ["Formatting text and paragraphs", "Working with tables and images", "Creating templates and mail merge"] },
            { title: "Microsoft Excel", icon: "barchart", topics: ["Basic formulas and functions", "Formatting and sorting data", "Creating charts and graphs"] },
            { title: "Microsoft PowerPoint", icon: "tv", topics: ["Creating and designing slides", "Adding animations and transitions", "Delivering presentations"] }
        ],
        tools: [
            { name: "MS Word", logo: "/images/tech/word.png" },
            { name: "MS Excel", logo: "/images/tech/excel.png" },
            { name: "MS PowerPoint", logo: "/images/tech/powerpoint.png" }
        ]
    },
    'ms-office': {
        title: "MS Office",
        description: "Become proficient in the complete Microsoft Office Suite for any professional environment.",
        image: "/images/courses/short/account/msoffice.png",
        hint: "ms office",
        highlights: ["Comprehensive Suite", "Professional Skills", "Industry Standard", "Practical Exercises"],
        whatYouWillLearn: ["Mastering Word, Excel, and PowerPoint", "Managing emails and schedules with Outlook", "Creating simple databases with Access", "Organizing information with OneNote"],
        careerOpportunities: ["Office Manager", "Administrative Assistant", "Project Coordinator", "Any role requiring MS Office proficiency"],
        syllabus: [
            { title: "Core Applications", icon: "tv", topics: ["In-depth Word, Excel, and PowerPoint", "Advanced features and integration"] },
            { title: "Productivity Tools", icon: "code", topics: ["Email management with Outlook", "Note-taking with OneNote"] },
            { title: "Data Management", icon: "code", topics: ["Introduction to database concepts with MS Access"] }
        ],
        tools: [
            { name: "MS Office", logo: "/images/tech/office.png" }
        ]
    },
    'taxation-auditing': {
        title: "Taxation Auditing",
        description: "Understand the principles of tax laws and auditing procedures.",
        image: "/images/courses/short/account/TaxationAuditing.png",
        hint: "auditing report",
        highlights: ["Tax Compliance", "Audit Procedures", "Financial Reporting", "Practical Knowledge"],
        whatYouWillLearn: ["Understanding direct and indirect taxes", "Preparing and filing tax returns", "Conducting internal audits", "Ensuring financial compliance and accuracy"],
        careerOpportunities: ["Tax Consultant", "Auditor", "Compliance Officer", "Finance Officer"],
        syllabus: [
            { title: "Taxation", icon: "barchart", topics: ["Direct and Indirect Tax laws", "Income Tax preparation", "GST compliance and returns"] },
            { title: "Auditing", icon: "code", topics: ["Principles of Auditing", "Internal and External Audit procedures", "Vouching and Verification"] }
        ],
        tools: [
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
            { name: "MS Excel", logo: "/images/tech/excel.png" }
        ]
    },
    'management-skill': {
        title: "Management Skill",
        description: "Develop essential leadership and team management skills for career growth.",
        image: "/images/courses/short/account/management.png",
        hint: "team management",
        highlights: ["Leadership Development", "Team Building", "Conflict Resolution", "Decision Making"],
        whatYouWillLearn: ["Effective leadership and communication techniques", "Motivating and managing teams", "Resolving conflicts and making sound decisions", "Time management and personal productivity"],
        careerOpportunities: ["Team Leader", "Manager", "Project Manager", "Entrepreneur"],
        syllabus: [
            { title: "Leadership & Communication", icon: "code", topics: ["Leadership styles", "Effective communication", "Public speaking"] },
            { title: "Team Management", icon: "code", topics: ["Building and managing teams", "Delegation and motivation", "Performance management"] }
        ],
        tools: []
    },
    'share-market': {
        title: "Share Market",
        description: "Understand the fundamentals of the stock market, trading, and investment strategies.",
        image: "/images/courses/short/account/sharemarket.png",
        hint: "stock market chart",
        highlights: ["Stock Trading Basics", "Investment Strategies", "Technical Analysis", "Risk Management"],
        whatYouWillLearn: ["How the stock market works", "Analyzing stocks and making investment decisions", "Different trading strategies for short-term and long-term gains", "Managing risks in your investment portfolio"],
        careerOpportunities: ["Stock Trader", "Financial Advisor", "Investment Analyst", "Personal Investor"],
        syllabus: [
            { title: "Market Fundamentals", icon: "barchart", topics: ["Introduction to Stock Market", "Primary and Secondary Markets", "IPOs and FPOs"] },
            { title: "Analysis & Trading", icon: "code", topics: ["Fundamental and Technical Analysis", "Trading patterns and indicators", "Risk management"] }
        ],
        tools: []
    },
    'ccc': {
        title: "CCC (Course on Computer Concepts)",
        description: "Gain foundational knowledge of computer hardware, software, and internet technologies.",
        image: "/images/courses/short/account/ccc.png",
        hint: "computer basics",
        highlights: ["NIELIT Certified", "Computer Fundamentals", "Internet & Email", "Digital Literacy"],
        whatYouWillLearn: ["Basic computer hardware and software concepts", "Using the internet and email effectively", "Creating documents, spreadsheets, and presentations", "Understanding digital financial tools"],
        careerOpportunities: ["Government Jobs requiring CCC", "Data Entry Operator", "Office Assistant"],
        syllabus: [
            { title: "Computer Fundamentals", icon: "tv", topics: ["Introduction to computers", "Operating Systems", "Hardware and Software"] },
            { title: "Productivity Tools", icon: "code", topics: ["Word Processing", "Spreadsheet Applications", "Presentations"] },
            { title: "Internet & Digital Services", icon: "code", topics: ["Internet and WWW", "Email and Social Networking", "Digital Financial Services"] }
        ],
        tools: [
            { name: "MS Office", logo: "/images/tech/office.png" }
        ]
    },
    'web-development': {
        title: "Web Development",
        description: "Learn to build modern, dynamic, and responsive web applications from the ground up.",
        image: "/images/courses/short/programming/webdev.png",
        hint: "web development",
        highlights: ["Front-end & Back-end", "Live Projects", "Portfolio Creation", "Modern Frameworks"],
        whatYouWillLearn: ["Building web pages with HTML and CSS", "Adding interactivity with JavaScript", "Using front-end frameworks like React or Angular", "Developing server-side logic with Node.js or Python"],
        careerOpportunities: ["Web Developer", "Front-End Developer", "Back-End Developer", "Full-Stack Developer"],
        syllabus: [
            { title: "Front-End", icon: "code", topics: ["HTML, CSS, JavaScript", "Responsive Design", "React or Angular basics"] },
            { title: "Back-End", icon: "code", topics: ["Node.js and Express", "Databases (SQL/NoSQL)", "API Development"] }
        ],
        tools: [
            { name: "HTML5", logo: "/images/tech/html.png" },
            { name: "CSS3", logo: "/images/tech/css.png" },
            { name: "JavaScript", logo: "/images/tech/js.png" },
            { name: "React", logo: "/images/tech/react.png" },
            { name: "Node.js", logo: "/images/tech/node.png" }
        ]
    },
    'dsa': {
        title: "Data Structures & Algorithms",
        description: "Master the foundational concepts of data structures and algorithms to excel in coding interviews and competitive programming.",
        image: "/images/courses/short/programming/dsa.png",
        hint: "data structures",
        highlights: ["Problem Solving", "Interview Preparation", "Complexity Analysis", "Coding Challenges"],
        whatYouWillLearn: ["Implementing various data structures like arrays, linked lists, trees, and graphs", "Understanding and applying key algorithms for sorting, searching, and more", "Analyzing the time and space complexity of algorithms", "Solving complex coding problems efficiently"],
        careerOpportunities: ["Software Engineer", "SDE Interview Preparation", "Competitive Programmer"],
        syllabus: [
            { title: "Core Data Structures", icon: "code", topics: ["Arrays, Stacks, Queues", "Linked Lists", "Trees, Heaps, Graphs"] },
            { title: "Algorithms", icon: "code", topics: ["Sorting and Searching", "Recursion and Backtracking", "Dynamic Programming", "Greedy Algorithms"] }
        ],
        tools: [
            { name: "C++", logo: "/images/tech/cplusplus.png" },
            { name: "Java", logo: "/images/tech/java.png" },
            { name: "Python", logo: "/images/tech/python.png" }
        ]
    },
    'c-programming': {
        title: "C Programming",
        description: "Learn the fundamentals of C, a powerful and widely used programming language that forms the basis for many other languages.",
        image: "/images/courses/short/programming/cprog.png",
        hint: "c code",
        highlights: ["Procedural Programming", "Memory Management", "Strong Foundation", "Problem Solving"],
        whatYouWillLearn: ["C programming syntax and semantics", "Working with pointers and memory management", "Implementing data structures", "Developing problem-solving skills"],
        careerOpportunities: ["Embedded Systems Engineer", "System Programmer", "Foundation for other languages"],
        syllabus: [
            { title: "C Fundamentals", icon: "code", topics: ["Variables, Data Types, Operators", "Control Structures (if, for, while)", "Functions and Arrays"] },
            { title: "Advanced C", icon: "code", topics: ["Pointers and Memory Allocation", "Structures and Unions", "File I/O"] }
        ],
        tools: []
    },
    'c-plus-plus': {
        title: "C++ Programming",
        description: "Master C++ and its object-oriented features to build high-performance applications.",
        image: "/images/courses/short/programming/c++.png",
        hint: "c++ code",
        highlights: ["Object-Oriented Programming", "High Performance", "STL", "Game Development"],
        whatYouWillLearn: ["Object-Oriented Programming (OOP) concepts", "Using the Standard Template Library (STL)", "Memory management and performance optimization", "Building complex applications"],
        careerOpportunities: ["Game Developer", "Software Engineer", "Quantitative Analyst", "High-Frequency Trading"],
        syllabus: [
            { title: "C++ Basics", icon: "code", topics: ["Syntax, Variables, Control Flow", "Functions and Arrays"] },
            { title: "Object-Oriented C++", icon: "code", topics: ["Classes and Objects", "Inheritance, Polymorphism", "Templates and STL"] }
        ],
        tools: [
            { name: "C++", logo: "/images/tech/cplusplus.png" }
        ]
    },
    'python': {
        title: "Python Programming",
        description: "Learn Python, a versatile and beginner-friendly language used in web development, data science, automation, and more.",
        image: "/images/courses/short/programming/python.png",
        hint: "python code",
        highlights: ["Beginner-Friendly", "Versatile", "Large Community", "Data Science & AI"],
        whatYouWillLearn: ["Python syntax and data structures", "Writing functions and modules", "Object-oriented programming in Python", "Working with popular libraries like NumPy and Pandas"],
        careerOpportunities: ["Python Developer", "Data Scientist", "Automation Engineer", "Web Developer (with Django/Flask)"],
        syllabus: [
            { title: "Core Python", icon: "code", topics: ["Data Types, Variables, Operators", "Control Flow and Loops", "Functions, Modules, and Packages"] },
            { title: "Advanced Python", icon: "code", topics: ["Object-Oriented Programming", "File Handling", "Introduction to Pandas and NumPy"] }
        ],
        tools: [
            { name: "Python", logo: "/images/tech/python.png" }
        ]
    },
    'front-end-development': {
        title: "Front-End Development",
        description: "Build beautiful and interactive user interfaces for the web using HTML, CSS, and JavaScript.",
        image: "/images/courses/short/programming/frontend.png",
        hint: "front end code",
        highlights: ["UI/UX Implementation", "Responsive Design", "JavaScript Frameworks", "Portfolio Projects"],
        whatYouWillLearn: ["Creating semantic HTML and modern CSS layouts", "Building dynamic and interactive UIs with JavaScript", "Using a modern framework like React or Angular", "Ensuring cross-browser compatibility and responsiveness"],
        careerOpportunities: ["Front-End Developer", "UI Engineer", "Web Developer"],
        syllabus: [
            { title: "Web Fundamentals", icon: "code", topics: ["HTML5 and CSS3", "Flexbox and Grid", "Responsive Design"] },
            { title: "JavaScript", icon: "code", topics: ["DOM Manipulation", "Events", "ES6+ features", "API integration"] },
            { title: "Frameworks", icon: "code", topics: ["Introduction to React or Angular", "Component-based architecture"] }
        ],
        tools: [
            { name: "HTML5", logo: "/images/tech/html.png" },
            { name: "CSS3", logo: "/images/tech/css.png" },
            { name: "JavaScript", logo: "/images/tech/js.png" },
            { name: "React", logo: "/images/tech/react.png" }
        ]
    },
    'back-end-development': {
        title: "Back-End Development",
        description: "Learn to build the server-side logic, databases, and APIs that power web applications.",
        image: "/images/courses/short/programming/backend.png",
        hint: "back end code",
        highlights: ["Server-Side Logic", "API Development", "Database Management", "Scalable Systems"],
        whatYouWillLearn: ["Building server-side applications with Node.js or Python", "Designing and implementing RESTful APIs", "Working with SQL and NoSQL databases", "User authentication and security best practices"],
        careerOpportunities: ["Back-End Developer", "API Developer", "Database Engineer", "Software Engineer"],
        syllabus: [
            { title: "Server-Side Programming", icon: "code", topics: ["Node.js and Express (or Python with Django/Flask)", "Handling requests and responses"] },
            { title: "Databases", icon: "code", topics: ["SQL fundamentals (MySQL/PostgreSQL)", "Introduction to NoSQL (MongoDB)"] },
            { title: "APIs & Security", icon: "code", topics: ["Building RESTful APIs", "Authentication (JWT, OAuth)"] }
        ],
        tools: [
            { name: "Node.js", logo: "/images/tech/node.png" },
            { name: "Python", logo: "/images/tech/python.png" },
            { name: "MySQL", logo: "/images/tech/sql.png" },
            { name: "MongoDB", logo: "/images/tech/mongodb.png" }
        ]
    },
    'database': {
        title: "Database Management",
        description: "Learn to design, implement, and manage both SQL and NoSQL databases.",
        image: "/images/courses/short/programming/database.png",
        hint: "database diagram",
        highlights: ["SQL & NoSQL", "Database Design", "Query Optimization", "Data Modeling"],
        whatYouWillLearn: ["Fundamentals of database design and normalization", "Writing complex SQL queries", "Understanding the use cases for NoSQL databases", "Basic database administration tasks"],
        careerOpportunities: ["Database Administrator", "Data Engineer", "Back-End Developer"],
        syllabus: [
            { title: "SQL Databases", icon: "code", topics: ["Relational Database Design", "Advanced SQL queries (Joins, Subqueries)", "Transactions and Indexing"] },
            { title: "NoSQL Databases", icon: "code", topics: ["Introduction to NoSQL (e.g., MongoDB)", "Document-based data modeling", "CRUD operations"] }
        ],
        tools: [
            { name: "MySQL", logo: "/images/tech/sql.png" },
            { name: "MongoDB", logo: "/images/tech/mongodb.png" }
        ]
    },
    'angular': {
        title: "Angular",
        description: "Learn the Angular framework to build powerful and scalable single-page applications.",
        image: "/images/courses/short/programming/angular.png",
        hint: "angular code",
        highlights: ["Component-Based", "TypeScript", "Powerful CLI", "Enterprise-Ready"],
        whatYouWillLearn: ["Building applications with Angular's component-based architecture", "Using TypeScript for robust and maintainable code", "Managing application state and routing", "Communicating with back-end APIs"],
        careerOpportunities: ["Angular Developer", "Front-End Developer", "UI Engineer"],
        syllabus: [
            { title: "Angular Basics", icon: "code", topics: ["Components, Modules, and Data Binding", "Directives and Pipes"] },
            { title: "Advanced Angular", icon: "code", topics: ["Services and Dependency Injection", "Routing", "Handling Forms", "HTTP Client"] }
        ],
        tools: [
            { name: "Angular", logo: "/images/tech/angular.png" }
        ]
    },
    'html-css': {
        title: "HTML & CSS",
        description: "Master the fundamental building blocks of the web: HTML for structure and CSS for styling.",
        image: "/images/courses/short/programming/htmlcss.png",
        hint: "html css code",
        highlights: ["Web Fundamentals", "Responsive Design", "Modern CSS", "Essential Skills"],
        whatYouWillLearn: ["Creating well-structured web pages with semantic HTML", "Styling websites with modern CSS, including Flexbox and Grid", "Building responsive layouts that work on all devices"],
        careerOpportunities: ["Starting point for any web career", "Email Developer", "Content Manager"],
        syllabus: [
            { title: "HTML5", icon: "code", topics: ["Semantic elements", "Forms", "Multimedia"] },
            { title: "CSS3", icon: "code", topics: ["Selectors and Specificity", "Box Model", "Flexbox and Grid", "Responsive Design with Media Queries"] }
        ],
        tools: [
            { name: "HTML5", logo: "/images/tech/html.png" },
            { name: "CSS3", logo: "/images/tech/css.png" }
        ]
    },
    'javascript': {
        title: "JavaScript",
        description: "Learn the most popular programming language for the web to build interactive and dynamic websites.",
        image: "/images/courses/short/programming/js.png",
        hint: "javascript code",
        highlights: ["Interactive Web", "DOM Manipulation", "Asynchronous Programming", "Core Language"],
        whatYouWillLearn: ["JavaScript fundamentals and modern ES6+ syntax", "Manipulating the DOM to create dynamic web pages", "Handling user events", "Making asynchronous requests to APIs (AJAX/Fetch)"],
        careerOpportunities: ["JavaScript Developer", "Front-End Developer", "Full-Stack Developer"],
        syllabus: [
            { title: "Core JavaScript", icon: "code", topics: ["Variables, Data Types, Operators", "Control Flow, Functions, Objects"] },
            { title: "Browser JavaScript", icon: "code", topics: ["DOM Manipulation and Events", "Asynchronous JavaScript (Promises, async/await)", "Fetch API"] }
        ],
        tools: [
            { name: "JavaScript", logo: "/images/tech/js.png" }
        ]
    },
    'core-java': {
        title: "Core Java",
        description: "Build a strong foundation in Java, one of the most widely used programming languages in the world.",
        image: "/images/shortterm/java.png",
        hint: "java code",
        highlights: ["Object-Oriented", "Platform Independent", "Robust & Secure", "Enterprise Standard"],
        whatYouWillLearn: ["Java fundamentals and syntax", "Object-Oriented Programming (OOP) principles", "Handling exceptions and errors", "Working with the Java Collections Framework"],
        careerOpportunities: ["Java Developer", "Android Developer", "Software Engineer"],
        syllabus: [
            { title: "Java Fundamentals", icon: "code", topics: ["JVM, JRE, JDK", "Data Types, Variables, Operators", "Control Flow"] },
            { title: "Object-Oriented Programming", icon: "code", topics: ["Classes and Objects", "Inheritance, Polymorphism", "Exception Handling", "Collections"] }
        ],
        tools: [
            { name: "Java", logo: "/images/tech/java.png" }
        ]
    },
    'c-sharp': {
        title: "C# Programming",
        description: "Learn C#, a modern, object-oriented language from Microsoft for building a wide range of applications.",
        image: "/images/courses/short/programming/csharp.png",
        hint: "c# code",
        highlights: [".NET Framework", "Game Development (Unity)", "Windows Applications", "Web Services"],
        whatYouWillLearn: ["C# syntax and object-oriented principles", "Working with the .NET framework", "Using LINQ for data querying", "Building console and desktop applications"],
        careerOpportunities: [".NET Developer", "Game Developer (Unity)", "Windows Application Developer"],
        syllabus: [
            { title: "C# Fundamentals", icon: "code", topics: ["Data Types, Variables", "Control Structures", "Methods"] },
            { title: "Advanced C#", icon: "code", topics: ["Object-Oriented Programming", "LINQ", "Asynchronous Programming"] }
        ],
        tools: [
            { name: "C#", logo: "/images/tech/csharp.png" }
        ]
    },
    'react': {
        title: "React",
        description: "Learn React, the popular JavaScript library for building fast and interactive user interfaces.",
        image: "/images/courses/short/programming/react.png",
        hint: "react code",
        highlights: ["Component-Based", "Declarative UI", "Virtual DOM", "Large Ecosystem"],
        whatYouWillLearn: ["Building UIs with React's component-based architecture", "Managing application state with hooks", "Handling user events and forms", "Routing in a single-page application with React Router"],
        careerOpportunities: ["React Developer", "Front-End Developer", "UI Engineer"],
        syllabus: [
            { title: "React Fundamentals", icon: "code", topics: ["JSX and Components", "Props and State", "Lifecycle Methods/Hooks"] },
            { title: "Advanced React", icon: "code", topics: ["React Router", "State Management (Context API/Redux)", "Working with APIs"] }
        ],
        tools: [
            { name: "React", logo: "/images/tech/react.png" }
        ]
    },
    'advanced-java': {
        title: "Advanced Java (Java EE)",
        description: "Go beyond Core Java to build enterprise-level, web-based applications.",
        image: "/images/courses/short/programming/advjava.png",
        hint: "java ee code",
        highlights: ["Enterprise Applications", "Web Services", "Servlet & JSP", "Spring & Hibernate"],
        whatYouWillLearn: ["Building web applications with Servlets and JSP", "Developing RESTful web services with JAX-RS", "Using Spring Framework for dependency injection and MVC", "Object-Relational Mapping (ORM) with Hibernate"],
        careerOpportunities: ["Java EE Developer", "Back-End Engineer", "Enterprise Application Developer"],
        syllabus: [
            { title: "Web Technologies", icon: "code", topics: ["Servlets, JSP, JSTL", "JDBC for database connectivity"] },
            { title: "Frameworks", icon: "code", topics: ["Introduction to Spring Framework", "Introduction to Hibernate ORM"] }
        ],
        tools: [
            { name: "Java", logo: "/images/tech/java.png" },
            { name: "Spring", logo: "/images/tech/spring.png" },
            { name: "Hibernate", logo: "/images/tech/hibernate.png" }
        ]
    },
    'seo': {
        title: "Search Engine Optimization (SEO)",
        description: "Learn to optimize websites to rank higher in search engine results and drive organic traffic.",
        image: "/images/courses/short/dm/SEO.png",
        hint: "seo analysis",
        highlights: ["On-Page & Off-Page", "Keyword Research", "Technical SEO", "Link Building"],
        whatYouWillLearn: ["How search engines work", "Conducting keyword research and competitor analysis", "Optimizing on-page elements like titles, meta descriptions, and content", "Building high-quality backlinks to improve authority"],
        careerOpportunities: ["SEO Specialist", "Digital Marketing Manager", "Content Strategist"],
        syllabus: [
            { title: "SEO Fundamentals", icon: "code", topics: ["Keyword Research", "On-Page SEO", "Off-Page SEO"] },
            { title: "Technical & Local SEO", icon: "code", topics: ["Technical SEO (site speed, mobile-friendliness)", "Local SEO and Google My Business"] }
        ],
        tools: [
            { name: "Google Analytics", logo: "/images/tech/ga.png" },
            { name: "Google Search Console", logo: "/images/tech/gsc.png" }
        ]
    },
    'smm': {
        title: "Social Media Marketing (SMM)",
        description: "Learn to manage and grow a brand's presence on social media platforms.",
        image: "/images/courses/short/dm/smm.png",
        hint: "social media marketing",
        highlights: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics"],
        whatYouWillLearn: ["Creating a social media strategy", "Developing engaging content for different platforms", "Running paid ad campaigns on Facebook and Instagram", "Measuring and analyzing social media performance"],
        careerOpportunities: ["Social Media Manager", "Content Creator", "Digital Marketer"],
        syllabus: [
            { title: "Platform Strategies", icon: "code", topics: ["Facebook and Instagram Marketing", "LinkedIn for B2B", "Content Creation"] },
            { title: "Advertising & Analytics", icon: "code", topics: ["Facebook Ads Manager", "Tracking KPIs", "Reporting"] }
        ],
        tools: [
            { name: "Facebook Ads", logo: "/images/tech/fb.png" },
            { name: "Instagram", logo: "/images/tech/ig.png" }
        ]
    },
    'sem': {
        title: "Search Engine Marketing (SEM)",
        description: "Master paid search advertising to drive targeted traffic and conversions.",
        image: "/images/courses/short/dm/sem.png",
        hint: "search engine marketing",
        highlights: ["Google Ads", "PPC Campaigns", "Conversion Optimization", "Bid Strategies"],
        whatYouWillLearn: ["Setting up and structuring Google Ads campaigns", "Conducting keyword research for paid search", "Writing effective ad copy", "Optimizing campaigns for better performance and lower cost"],
        careerOpportunities: ["SEM Specialist", "PPC Analyst", "Digital Advertising Manager"],
        syllabus: [
            { title: "Google Ads", icon: "code", topics: ["Campaign Setup", "Ad Groups and Keywords", "Bidding and Budgeting"] },
            { title: "Optimization", icon: "barchart", topics: ["A/B Testing", "Conversion Tracking", "Performance Analysis"] }
        ],
        tools: [
            { name: "Google Ads", logo: "/images/tech/google-ads.png" }
        ]
    },
    'wordpress': {
        title: "WordPress Development",
        description: "Learn to build and manage dynamic websites and blogs using WordPress, the world's most popular CMS.",
        image: "/images/courses/short/dm/wordpress.png",
        hint: "wordpress dashboard",
        highlights: ["No-Code Website Building", "Theme Customization", "Plugin Management", "E-commerce"],
        whatYouWillLearn: ["Setting up WordPress and configuring a new site", "Customizing themes and layouts", "Using plugins to add functionality", "Basic SEO for WordPress sites"],
        careerOpportunities: ["WordPress Developer", "Webmaster", "Blogger", "Small Business Owner"],
        syllabus: [
            { title: "WordPress Basics", icon: "code", topics: ["Installation and Setup", "Dashboard and Settings", "Posts vs. Pages"] },
            { title: "Customization", icon: "brush", topics: ["Working with Themes", "Using the Customizer", "Essential Plugins"] }
        ],
        tools: [
            { name: "WordPress", logo: "/images/tech/wordpress.png" }
        ]
    },
    'content-creation': {
        title: "Content Creation",
        description: "Learn to create compelling and effective content for various digital platforms.",
        image: "/images/courses/short/dm/Content.png",
        hint: "content creation",
        highlights: ["Blogging", "Video Content", "Copywriting", "Content Strategy"],
        whatYouWillLearn: ["Developing a content strategy that aligns with business goals", "Writing engaging blog posts and articles", "Creating scripts and storyboards for video content", "Crafting persuasive copy for websites and ads"],
        careerOpportunities: ["Content Creator", "Copywriter", "Content Strategist", "Digital Marketer"],
        syllabus: [
            { title: "Written Content", icon: "code", topics: ["Blogging for SEO", "Copywriting fundamentals", "Email marketing content"] },
            { title: "Visual Content", icon: "brush", topics: ["Basics of graphic design for social media", "Video content planning and creation"] }
        ],
        tools: [
            { name: "Canva", logo: "/images/tech/canva.png" },
            { name: "WordPress", logo: "/images/tech/wordpress.png" }
        ]
    },
    'facebook-google-ads': {
        title: "Facebook & Google Ads",
        description: "Master the two most powerful online advertising platforms to reach your target audience and drive results.",
        image: "/images/courses/short/dm/facebookgoogleads.png",
        hint: "social media ads",
        highlights: ["Paid Advertising", "Targeted Campaigns", "ROI Optimization", "A/B Testing"],
        whatYouWillLearn: ["Creating and managing ad campaigns on Facebook, Instagram, and Google", "Advanced audience targeting and retargeting", "Optimizing ad spend for maximum return on investment (ROI)", "Analyzing campaign performance and creating reports"],
        careerOpportunities: ["Paid Media Specialist", "Digital Advertiser", "Performance Marketer"],
        syllabus: [
            { title: "Facebook & Instagram Ads", icon: "code", topics: ["Campaign objectives", "Audience targeting", "Ad creation and testing"] },
            { title: "Google Ads", icon: "code", topics: ["Search, Display, and YouTube campaigns", "Keyword strategy", "Conversion tracking"] }
        ],
        tools: [
            { name: "Facebook Ads", logo: "/images/tech/fb.png" },
            { name: "Google Ads", logo: "/images/tech/google-ads.png" }
        ]
    },
    'smo': {
        title: "Social Media Optimization (SMO)",
        description: "Optimize your social media profiles and content to increase visibility and engagement.",
        image: "/images/courses/short/dm/SMO.png",
        hint: "social media optimization",
        highlights: ["Profile Optimization", "Engagement Strategy", "Brand Visibility", "Content Amplification"],
        whatYouWillLearn: ["Optimizing social media profiles for search and discovery", "Developing a strategy to increase engagement and followers", "Techniques to amplify your content's reach", "Integrating social media with other marketing channels"],
        careerOpportunities: ["Social Media Manager", "Community Manager", "Brand Manager"],
        syllabus: [
            { title: "Profile & Content Optimization", icon: "code", topics: ["Optimizing profiles on major platforms", "Creating shareable content"] },
            { title: "Engagement & Growth", icon: "code", topics: ["Strategies for increasing engagement", "Using social media for customer service"] }
        ],
        tools: [
            { name: "Facebook", logo: "/images/tech/fb.png" },
            { name: "Instagram", logo: "/images/tech/ig.png" },
            { name: "LinkedIn", logo: "/images/tech/linkedin.png" }
        ]
    },
    'google-analytics': {
        title: "Google Analytics",
        description: "Learn to track, analyze, and report on website traffic to make data-driven decisions.",
        image: "/images/courses/short/dm/googleanalytics.png",
        hint: "analytics dashboard",
        highlights: ["Data-Driven Decisions", "User Behavior Analysis", "Conversion Tracking", "Custom Reports"],
        whatYouWillLearn: ["Setting up and configuring Google Analytics", "Understanding key metrics and dimensions", "Analyzing user behavior and traffic sources", "Setting up goals and tracking conversions"],
        careerOpportunities: ["Digital Analyst", "Web Analyst", "Marketing Analyst"],
        syllabus: [
            { title: "GA4 Fundamentals", icon: "barchart", topics: ["Setting up GA4", "Navigating the interface", "Understanding events"] },
            { title: "Analysis & Reporting", icon: "barchart", topics: ["Acquisition, Engagement, and Monetization reports", "Creating custom explorations", "Setting up conversion tracking"] }
        ],
        tools: [
            { name: "Google Analytics", logo: "/images/tech/ga.png" }
        ]
    },
    'coreldraw': {
        title: "CorelDRAW",
        description: "Learn vector graphics design for creating logos, illustrations, and print layouts.",
        image: "/images/courses/short/graphics/CorelDRAW.png",
        hint: "vector design",
        highlights: ["Vector Graphics", "Logo Design", "Print Layouts", "Illustration"],
        whatYouWillLearn: ["Using CorelDRAW's tools to create vector illustrations", "Designing professional logos and brand identities", "Creating layouts for brochures, flyers, and other print media"],
        careerOpportunities: ["Graphic Designer", "Illustrator", "Logo Designer"],
        syllabus: [
            { title: "CorelDRAW Basics", icon: "brush", topics: ["Interface and tools", "Working with shapes and lines", "Color and fills"] },
            { title: "Advanced Techniques", icon: "brush", topics: ["Logo design process", "Creating layouts for print", "Special effects"] }
        ],
        tools: []
    },
    'adobe-photoshop': {
        title: "Adobe Photoshop",
        description: "Master the industry-standard software for photo editing, image manipulation, and digital art.",
        image: "/images/courses/short/graphics/AdobePhotoshop.png",
        hint: "photoshop editing",
        highlights: ["Photo Retouching", "Image Compositing", "Digital Painting", "Graphic Design"],
        whatYouWillLearn: ["Retouching and enhancing photos", "Working with layers, masks, and selections", "Creating composite images", "Preparing images for web and print"],
        careerOpportunities: ["Photo Editor", "Graphic Designer", "Digital Artist"],
        syllabus: [
            { title: "Photoshop Essentials", icon: "brush", topics: ["Interface and tools", "Layers and masks", "Selection techniques"] },
            { title: "Advanced Editing", icon: "brush", topics: ["Photo retouching", "Color correction", "Compositing"] }
        ],
        tools: [
            { name: "Photoshop", logo: "/images/tech/photoshop.png" }
        ]
    },
    'adobe-illustrator': {
        title: "Adobe Illustrator",
        description: "Create stunning vector graphics, from logos and icons to complex illustrations.",
        image: "/images/courses/short/graphics/Illustrator.png",
        hint: "illustrator art",
        highlights: ["Vector Illustration", "Logo & Icon Design", "Infographics", "Scalable Graphics"],
        whatYouWillLearn: ["Mastering the Pen Tool and other drawing tools", "Creating logos, icons, and illustrations", "Working with typography", "Preparing artwork for various outputs"],
        careerOpportunities: ["Graphic Designer", "Illustrator", "UI Designer"],
        syllabus: [
            { title: "Illustrator Basics", icon: "brush", topics: ["Interface and artboards", "Drawing tools", "Color and gradients"] },
            { title: "Advanced Illustration", icon: "brush", topics: ["Pen Tool mastery", "Creating complex illustrations", "Typography and effects"] }
        ],
        tools: [
            { name: "Illustrator", logo: "/images/tech/illustrator.png" }
        ]
    },
    'adobe-indesign': {
        title: "Adobe InDesign",
        description: "Learn to design and publish professional layouts for print and digital media.",
        image: "/images/courses/short/graphics/InDesign.png",
        hint: "indesign layout",
        highlights: ["Page Layout Design", "Print & Digital Publishing", "Typography", "Multi-page Documents"],
        whatYouWillLearn: ["Creating layouts for magazines, brochures, and books", "Working with master pages and styles", "Preparing documents for professional printing", "Creating interactive PDFs"],
        careerOpportunities: ["Layout Artist", "Graphic Designer", "Publishing Specialist"],
        syllabus: [
            { title: "InDesign Essentials", icon: "brush", topics: ["Document setup", "Working with frames", "Text and typography"] },
            { title: "Advanced Layouts", icon: "brush", topics: ["Master pages and styles", "Creating interactive documents", "Prepress and printing"] }
        ],
        tools: [
            { name: "InDesign", logo: "/images/tech/indesign.png" }
        ]
    },
    'video-sound-editing': {
        title: "Video & Sound Editing",
        description: "Learn to edit video and audio to create professional-quality productions.",
        image: "/images/courses/short/graphics/PremierePro.png",
        hint: "video editing",
        highlights: ["Video Editing", "Sound Design", "Color Grading", "Motion Graphics"],
        whatYouWillLearn: ["Editing video in Adobe Premiere Pro", "Cleaning and enhancing audio", "Applying color correction and grading", "Creating basic motion graphics and titles"],
        careerOpportunities: ["Video Editor", "Multimedia Artist", "Content Creator"],
        syllabus: [
            { title: "Video Editing", icon: "brush", topics: ["Premiere Pro interface", "Editing techniques", "Color correction"] },
            { title: "Audio & Motion", icon: "code", topics: ["Sound editing basics", "Introduction to After Effects for titles"] }
        ],
        tools: [
            { name: "Premiere Pro", logo: "/images/tech/premiere.png" },
            { name: "After Effects", logo: "/images/tech/after-effects.png" }
        ]
    },
    'adobe-animation': {
        title: "Adobe Animate",
        description: "Create interactive animations for web, TV, and video games.",
        image: "/images/courses/short/graphics/animates.png",
        hint: "character animation",
        highlights: ["2D Animation", "Character Rigging", "Interactive Content", "Web Banners"],
        whatYouWillLearn: ["The principles of animation", "Creating character animations with bone rigging", "Building interactive web content", "Exporting animations for various platforms"],
        careerOpportunities: ["Animator", "Motion Graphics Designer", "Interactive Designer"],
        syllabus: [
            { title: "Animation Basics", icon: "brush", topics: ["Timeline and frames", "Shape and motion tweens", "Symbols"] },
            { title: "Character Animation", icon: "brush", topics: ["Character rigging", "Walk cycles", "Lip-syncing"] }
        ],
        tools: [
            { name: "Animate", logo: "/images/tech/animate.png" }
        ]
    },
    '3d-max': {
        title: "3ds Max",
        description: "Learn 3D modeling, animation, and rendering for games, film, and architectural visualization.",
        image: "/images/courses/short/graphics/3DMAX.png",
        hint: "3d modeling",
        highlights: ["3D Modeling", "Texturing & Lighting", "Animation", "Rendering"],
        whatYouWillLearn: ["Creating complex 3D models", "Applying materials and textures", "Setting up lighting and cameras", "Rendering high-quality images and animations"],
        careerOpportunities: ["3D Modeler", "Architectural Visualizer", "Game Artist"],
        syllabus: [
            { title: "Modeling", icon: "brush", topics: ["Polygon and spline modeling", "Modifiers", "Creating complex objects"] },
            { title: "Rendering", icon: "brush", topics: ["Materials and texturing", "Lighting and cameras", "Rendering with Arnold"] }
        ],
        tools: []
    },
    'canva-design': {
        title: "Canva Design",
        description: "Quickly create beautiful graphics for social media, presentations, and marketing materials with Canva.",
        image: "/images/courses/short/graphics/Canva.png",
        hint: "canva design",
        highlights: ["Easy-to-Use", "Social Media Graphics", "Marketing Materials", "No Design Experience Needed"],
        whatYouWillLearn: ["Using Canva's templates to create professional designs", "Creating custom graphics for social media", "Designing presentations, flyers, and posters", "Understanding basic design principles"],
        careerOpportunities: ["Social Media Manager", "Small Business Owner", "Marketer", "Anyone needing quick graphics"],
        syllabus: [
            { title: "Canva Basics", icon: "brush", topics: ["Navigating the Canva interface", "Using templates", "Working with text and images"] },
            { title: "Creating Content", icon: "brush", topics: ["Designing for social media", "Creating presentations", "Brand kit usage"] }
        ],
        tools: [
            { name: "Canva", logo: "/images/tech/canva.png" }
        ]
    },
    'after-effects': {
        title: "After Effects",
        description: "Create stunning motion graphics and visual effects for film, TV, video, and web.",
        image: "/images/courses/short/graphics/AfterEffects.png",
        hint: "motion graphics",
        highlights: ["Motion Graphics", "Visual Effects (VFX)", "Compositing", "Animation"],
        whatYouWillLearn: ["Creating animations with keyframes", "Working with shape layers and text animators", "Compositing video and adding visual effects", "Exporting projects for different media"],
        careerOpportunities: ["Motion Graphics Artist", "VFX Artist", "Video Editor"],
        syllabus: [
            { title: "Motion Graphics Basics", icon: "brush", topics: ["Interface and compositions", "Keyframe animation", "Text and shape layers"] },
            { title: "Visual Effects", icon: "brush", topics: ["Masking and tracking", "Color correction", "Introduction to compositing"] }
        ],
        tools: [
            { name: "After Effects", logo: "/images/tech/after-effects.png" }
        ]
    },
    'premiere-pro': {
        title: "Premiere Pro",
        description: "Learn professional video editing with Adobe Premiere Pro, the industry-leading software.",
        image: "/images/courses/short/graphics/PremierePro.png",
        hint: "video editing software",
        highlights: ["Professional Editing", "Color Correction", "Audio Mixing", "Multi-camera Editing"],
        whatYouWillLearn: ["The complete video editing workflow from import to export", "Advanced editing techniques, including multi-camera editing", "Color correcting and grading footage", "Mixing audio and adding sound effects"],
        careerOpportunities: ["Video Editor", "Filmmaker", "Content Creator", "YouTuber"],
        syllabus: [
            { title: "Editing Fundamentals", icon: "brush", topics: ["Project setup and importing", "Timeline editing", "Transitions and effects"] },
            { title: "Polishing Your Edit", icon: "brush", topics: ["Color correction and grading", "Audio mixing", "Exporting for different platforms"] }
        ],
        tools: [
            { name: "Premiere Pro", logo: "/images/tech/premiere.png" }
        ]
    },
    'figma': {
        title: "Figma",
        description: "Design and prototype user interfaces collaboratively in the cloud with Figma.",
        image: "/images/courses/short/graphics/Figma.png",
        hint: "ui design figma",
        highlights: ["UI/UX Design", "Prototyping", "Collaboration", "Design Systems"],
        whatYouWillLearn: ["Designing high-fidelity user interfaces for web and mobile", "Creating interactive prototypes to test user flows", "Working collaboratively with a team", "Building and using design systems and components"],
        careerOpportunities: ["UI/UX Designer", "Product Designer", "Web Designer"],
        syllabus: [
            { title: "Figma for UI Design", icon: "brush", topics: ["Interface and tools", "Layout grids and constraints", "Components and styles"] },
            { title: "Prototyping & Collaboration", icon: "code", topics: ["Creating interactive prototypes", "Sharing and collaborating on designs"] }
        ],
        tools: [
            { name: "Figma", logo: "/images/tech/figma.png" }
        ]
    },
    'revit': {
        title: "Revit",
        description: "Learn Building Information Modeling (BIM) for architectural design and construction.",
        image: "/images/courses/short/graphics/Revit.png",
        hint: "revit architecture",
        highlights: ["BIM Modeling", "Architectural Design", "Construction Documentation", "Collaboration"],
        whatYouWillLearn: ["Creating 3D architectural models with intelligent components", "Generating construction documents from your model", "Collaborating with a team on a BIM project", "Understanding the principles of BIM"],
        careerOpportunities: ["BIM Modeler", "Architectural Technician", "Revit Specialist"],
        syllabus: [
            { title: "Revit Architecture", icon: "brush", topics: ["Modeling walls, floors, and roofs", "Placing doors and windows", "Creating views and sheets"] },
            { title: "Documentation", icon: "code", topics: ["Annotating and dimensioning", "Creating schedules", "Setting up construction documents"] }
        ],
        tools: []
    }
};
