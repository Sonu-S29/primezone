
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
            { title: "Financial Accounting Basics", icon: "barchart", subTopics: ["Introduction to Accounting", "Journal Entries", "Ledger and Trial Balance", "Final Accounts Preparation", "Bank Reconciliation", "and many more..."] },
            { title: "Advanced Excel for Accountants", icon: "barchart", subTopics: ["Advanced Formulas", "PivotTables & PivotCharts", "Data Validation & Protection", "Financial Modeling Basics", "Macros & VBA for Accountants", "and many more..."] },
            { title: "Tally Prime with GST", icon: "code", subTopics: ["Company Creation & Configuration", "Voucher Entry", "GST Setup and Compliance", "Inventory Management", "Payroll Processing", "and many more..."] },
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
            { title: "Office Automation", icon: "tv", subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Microsoft Windows Fundamental", "and many more..."] },
            { title: "Advanced Excel", icon: "barchart", subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting", "and many more..."] },
            { title: "Tally Prime (GST)", icon: "code", subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "TDS (Tax Deducted at Source)", "GST, Apply GST Number", "and many more..."] },
            { title: "Taxation Auditing", icon: "barchart", subTopics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats, GST Return", "and many more..."] }
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
    // Add other courses here
};
