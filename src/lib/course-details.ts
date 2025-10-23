
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
            { title: "HTML & CSS", icon: "code", topics: ["HTML Tags, Forms, Frames", "CSS Syntax, Box Model, Flexbox, Grid"] },
            { title: "JavaScript", icon: "code", topics: ["ES6+ Features", "DOM Manipulation", "Events", "Asynchronous JavaScript (Promises, async/await)"] },
            { title: "ReactJS", icon: "code", topics: ["Components, Props, and State", "React Hooks", "State Management (Context API/Redux)", "React Router"] },
            { title: "Back-End (Node.js/Express)", icon: "code", topics: ["Creating a server with Node.js", "Building RESTful APIs with Express", "Middleware", "Authentication & Authorization"] },
            { title: "Databases", icon: "code", topics: ["MySQL for relational data", "MongoDB for NoSQL data", "Database design and modeling"] }
        ],
        tools: [
            { name: "HTML5", logo: "/images/tech/html.png" },
            { name: "CSS3", logo: "/images/tech/css.png" },
            { name: "JavaScript", logo: "/images/tech/js.png" },
            { name: "React", logo: "/images/tech/react.png" },
            { name: "Node.js", logo: "/images/tech/node.png" },
            { name: "MySQL", logo: "/images/tech/sql.png" },
            { name: "MongoDB", logo: "/images/tech/mongodb.png" }
        ]
    },
    // Add other courses here
};
