
import { Calculator, Code, Megaphone, Paintbrush } from "lucide-react";
import React from "react";

export interface DiplomaCourse {
  slug: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  hint: string;
  totalTopics: string;
  modules: {
    title: string;
    icon: string;
    subTopics: string[];
  }[];
}

export const diplomaCourses: DiplomaCourse[] = [
  // {
  //   slug: "accounting",
  //   title: "Diploma In Accounting",
  //   duration: "1 Year",
  //   description: "Gain comprehensive knowledge in financial, managerial, and tax accounting, preparing you for various roles in the accounting field.",
  //   image: "/images/courses/DIA.jpg",
  //   hint: "accounting collage",
  //   totalTopics: "60+",
  //   modules: [
  //       { title: "Financial Accounting Basics", icon: "Landmark", subTopics: ["Introduction to Accounting", "Journal Entries", "Ledger and Trial Balance", "Final Accounts Preparation", "Bank Reconciliation", "and many more..."] },
  //       { title: "Advanced Excel for Accountants", icon: "BarChart", subTopics: ["Advanced Formulas", "PivotTables & PivotCharts", "Data Validation & Protection", "Financial Modeling Basics", "Macros & VBA for Accountants", "and many more..."] },
  //       { title: "Tally Prime with GST", icon: "FileText", subTopics: ["Company Creation & Configuration", "Voucher Entry", "GST Setup and Compliance", "Inventory Management", "Payroll Processing", "and many more..."] },
  //   ],
  // },
  // {
  //   slug: "financial-accounting",
  //   title: "Diploma In Financial Accounting",
  //   duration: "1 Year",
  //   description: "Master financial accounting principles, practices, and software tools essential for managing an organization's financial records and reports.",
  //   image: "/images/courses/DFA.jpg",
  //   hint: "financial report",
  //   totalTopics: "90+",
  //   modules: [
  //       { title: "Office Automation", icon: "MonitorCheck", subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Microsoft Windows Fundamental", "and many more..."] },
  //       { title: "Advanced Excel", icon: "BarChart", subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting", "and many more..."] },
  //       { title: "Tally Prime (GST)", icon: "FileText", subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "TDS (Tax Deducted at Source)", "GST, Apply GST Number", "and many more..."] },
  //       { title: "Taxation Auditing", icon: "Landmark", subTopics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats, GST Return", "and many more..."] }
  //   ],
  // },
  {
    slug: "computer-application",
    title: "Diploma In Computer Application",
    duration: "1 Year",
    description: "Learn essential computer skills, including hardware basics, operating systems, and popular software applications for personal and professional use.",
    image: "/images/courses/diploma/dca.webp",
    hint: "computer application",
    totalTopics: "220+",
    modules: [
        { title: "Office Automation", icon: "MonitorCheck", subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Mircosoft Windows Fundamental", "and many more..."] },
        { title: "Advanced Excel", icon: "BarChart", subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting"] },
        { title: "Tally Prime (GST)", icon: "FileText", subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "TDS (Tax Deducted at Source)", "GST, Apply GST Number", "and many more..."] },
        { title: "Graphic Designing", icon: "Palette", subTopics: ["CorelDRAW", "Adobe PHOTOSHOP", "Adobe ILLUSTRATOR", "Adobe INDESIGN", "CANVA DESIGN", "ASSIGNMENTS / PROJECT", "and many more..."] },
        { title: "Web Designing", icon: "Globe", subTopics: ["Html / CSS", "Adobe Animate", "Javascript", "Web Hosting", "Adobe Dreamweaver", "ASSIGNMENTS / PROJECT", "and many more..."] }
    ],
  },
  {
    slug: "financial-management",
    title: "Diploma In Financial & Management",
    duration: "1 Year",
    description: "Develop skills in financial analysis, investment strategies, and management principles to prepare for careers in finance and business administration.",
    image: "/images/courses/diploma/dfam.webp",
    hint: "financial management",
    totalTopics: "235+",
    modules: [
        { title: "Office Automation", icon: "MonitorCheck", subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Mircosoft Windows Fundamental", "and many more..."] },
        { title: "Advanced Excel", icon: "BarChart", subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting"] },
        { title: "Tally Prime (GST)", icon: "FileText", subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "GST, TDS (Tax Deducted at Source)", "ASSIGNMENTS/PROJECT", "and many more..."] },
        { title: "Taxation Auditing", icon: "Landmark", subTopics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats, GST Return", "and many more..."] },
        { title: "Management Skills", icon: "Users", subTopics: ["Understanding of Management Skills", "Managing Business Finance", "Practical Work on Project Reports", "Export / Import Management", "Case Study of Successful Employee", "Office & Marketing Management", "and many more..."] },
        { title: "Share Market", icon: "BarChart", subTopics: ["Primary Markets", "Book Building", "IPOS & Listings Trading", "Clearance & Settlements", "Mutual Funds", "Depositories, Derivatives", "and many more..."] }
    ],
  },
  {
    slug: "programming-course",
    title: "Diploma In Programming Course",
    duration: "1 Year",
    description: "Master various programming languages and concepts for front-end, back-end, mobile, and machine learning development to become a versatile programmer.",
    image: "/images/courses/diploma/dpc.webp",
    hint: "programming course",
    totalTopics: "255+",
    modules: [
        { title: "C, C++ & DSA", icon: "Code", subTopics: ["Intro Flow Algorithm", "C Syntax, Operators & Data Types", "C++ with OOPS Concepts", "Control Statements & Loops", "Data Structures & Algorithms", "File Handling & Preprocessor"] },
        { title: "Web Technologies", icon: "Globe", subTopics: ["HTML", "CSS", "JavaScript", "PHP for server-side scripting", "Database Management (MySQL/SSMS)", "WordPress basics", "Web Hosting & Deployment"] },
        { title: "Python Programming", icon: "Bot", subTopics: ["Python Setup & Installation", "Core Python Features", "Data Types & Variables", "Operators and Control Flow", "Functions & Modules", "File Handling", "and many more..."] },
        { title: "Java (Core & Advanced)", icon: "Code", subTopics: ["Introduction to Java", "Java Class, Inheritances, Polymorphism", "GUI with Swing Controls", "Multithreading & Exception Handling", "Servlet, JSP, JDBC", "and many more..."] },
        { title: ".NET or MERN Stack", icon: "Rocket", subTopics: ["ASP.NET with C#", "Angular or React", "State Management", "Handling HTTP requests", "Server-side Rendering (SSR)", "API Integration", "and many more..."] }
    ],
  },
  {
    slug: "graphic-animation",
    title: "Diploma In Graphic & Animation",
    duration: "1 Year",
    description: "Explore graphic design principles, digital illustration, and animation techniques to create visually appealing content for various media platforms.",
    image: "/images/courses/diploma/dga.webp",
    hint: "graphic animation",
    totalTopics: "200+",
    modules: [
        { title: "Graphic Designing", icon: "Palette", subTopics: ["CorelDRAW", "Adobe PHOTOSHOP", "Adobe ILLUSTRATOR", "Adobe INDESIGN", "CANVA DESIGN", "ASSIGNMENTS / PROJECT", "and many more..."] },
        { title: "Web Designing", icon: "Globe", subTopics: ["Introduction to Web Page Designing", "Html / CSS", "Adobe Animate", "Web Hosting", "Domain / Sub Domain", "ASSIGNMENTS / PROJECT", "and many more..."] },
        { title: "Adobe Animate", icon: "Bot", subTopics: ["Frame By Frame Animation", "Movie Clips, Symbols, Buttons", "Shape Tweening", "Walk Through Animation", "Smoke Animation", "Action Script 2.0", "and many more..."] },
        { title: "Video / Sound Editing", icon: "LayoutTemplate", subTopics: ["Introduction", "Workspace, Project, Sequence", "Editing Frame with Tools", "Slow & Fast - Speed Duration", "Transition Effects", "Animation Effects", "and many more..."] },
        { title: "3DS MAX", icon: "Rocket", subTopics: ["Interface - 2D Tools - Modifiers", "2D / 3D Interior Designing", "Architecture - Civil", "3D Modelling - Character", "Materials - Camera Walkthrough", "ASSIGNMENTS / PROJECT", "and many more..."] }
    ],
  },
  {
    slug: "ethical-hacking",
    title: "Diploma In Ethical Hacking",
    duration: "1 Year",
    description: "Learn cybersecurity fundamentals, penetration testing techniques, and ethical hacking practices to protect systems and networks from malicious attacks.",
    image: "/images/courses/diploma/deh.webp",
    hint: "ethical hacking",
    totalTopics: "135+",
    modules: [
      { title: "Intro to Ethical Hacking", icon: "ShieldCheck", subTopics: ["Key terminology", "Penetration testing", "Cyber ethics", "Hacking phases"] },
      { title: "Footprinting", icon: "Fingerprint", subTopics: ["Using search engines", "Website footprinting", "Email footprinting", "DNS footprinting", "Network footprinting", "Social engineering"] },
      { title: "Network Scanning", icon: "Search", subTopics: ["Checking for live systems", "Checking for open ports", "Scanning techniques", "Scanning beyond an IDS", "Banner grabbing", "Vulnerability scanning", "Drawing network diagrams", "Preparing proxies"] },
      { title: "Enumeration", icon: "Mail", subTopics: ["NetBIOS enumeration", "SNMP enumeration", "LDAP enumeration", "NTP enumeration", "SMTP enumeration", "DNS enumeration"] },
      { title: "Vulnerability Analysis", icon: "Bug", subTopics: ["Vulnerability classification", "Vulnerability assessment", "Vulnerability-assessment tools"] },
      { title: "System Hacking", icon: "TerminalSquare", subTopics: ["Gaining access", "Escalating privileges", "Maintaining access", "Hiding files", "Covering tracks"] },
      { title: "Malware Threats", icon: "BugPlay", subTopics: ["Trojan concepts", "Virus and worm concepts", "Malware analysis", "Countermeasures"] },
      { title: "Sniffing", icon: "Wifi", subTopics: ["MAC attacks", "DHCP attacks", "ARP poisoning", "Spoofing attacks", "DNS poisoning"] },
      { title: "Social Engineering", icon: "Users", subTopics: ["Social engineering concepts", "Social engineering techniques", "Insider threats", "Impersonation on social networking sites"] },
      { title: "Denial-of-Service", icon: "ShieldOff", subTopics: ["DoS/DDoS concepts", "DoS/DDoS attack techniques", "Botnets", "DDoS case study", "DoS/DDoS attack tools"] },
      { title: "Session Hijacking", icon: "ServerCrash", subTopics: ["Session hijacking concepts", "Application-level session hijacking", "Network-level session hijacking", "Session hijacking tools"] },
      { title: "Evading IDS, Firewalls, and Honeypots", icon: "ShieldAlert", subTopics: ["IDS, firewall, and honeypot concepts", "IDS, firewall, and honeypot solutions", "Evading IDS", "Evading firewalls", "Detecting honeypots"] },
      { title: "Hacking Web Servers", icon: "ServerCrash", subTopics: ["Web server concepts", "Web server attacks", "Web server attack methodology", "Patch management"] },
      { title: "Hacking Web Applications", icon: "Code", subTopics: ["Web app concepts", "Web app threats", "Web app hacking methodology"] },
      { title: "SQL Injection", icon: "KeyRound", subTopics: ["SQL injection concepts", "Types of SQL injection", "SQL injection methodology", "SQL injection tools", "Evasion techniques"] }
    ],
  },
  {
    slug: "digital-marketing",
    title: "Diploma In Digital Marketing",
    duration: "6 Months",
    description: "Master digital marketing strategies, including SEO, social media marketing, content creation, and analytics to promote businesses in the online world.",
    image: "/images/courses/diploma/ddm.webp",
    hint: "digital marketing",
    totalTopics: "120+",
    modules: [
        { title: "Marketing Fundamentals", icon: "Megaphone", subTopics: ["Introduction to Digital Marketing", "Website Analysis", "Google Algorithms", "Duplicate Content Checking", "Web Master Tools"] },
        { title: "SEO & SEM", icon: "Search", subTopics: ["On-Page Optimization", "Off-Page Optimization", "Keyword Research", "Meta Tag Optimization", "Search Engine Marketing (SEM)", "PPC Marketing", "Google Analytics"] },
        { title: "Social Media Marketing", icon: "Users", subTopics: ["Social Media Marketing (SMM)", "Facebook & Instagram Marketing", "LinkedIn for Business", "Twitter for Business", "Pinterest Marketing", "YouTube Marketing"] },
        { title: "Content Marketing", icon: "Newspaper", subTopics: ["Content Creation Strategy", "Blogging for Business", "Website Creation using WordPress", "Post Formats & Comments", "Link Management", "Domain & Hosting"] },
        { title: "Email Marketing", icon: "Megaphone", subTopics: ["Introduction to Email Marketing", "Building Mailing Lists", "Creating Email Layouts & Templates", "Types of Forms & Reports", "Campaign Analysis"] },
        { title: "Google Analytics", icon: "BarChart", subTopics: ["Introduction to Google Analytics", "Tracking Website Traffic", "Analyzing User Behavior", "Conversion Tracking", "Reporting and Dashboards"] }
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    duration: "1 Year",
    description: "Become proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, Angular, Node.js, and MySQL for comprehensive web development.",
    image: "/images/courses/diploma/fullstack.webp",
    hint: "full stack",
    totalTopics: "155+",
    modules: [
        { title: "HTML & CSS", icon: "Code", subTopics: ["HTML Tags, Fonts, Image, Heading", "Table, Links, Source, Form, Frames", "CSS Tags, Styles, Syntax, Model, IDS"] },
        { title: "JavaScript", icon: "Code", subTopics: ["Developer Essentials", "Language, Events", "Methods, Using Names, Objects", "Validation options, Rollovers & More"] },
        { title: "AngularJS", icon: "Code", subTopics: ["Expressions, Modules, Directives", "Model, Data Binding, Controllers", "Scopes, Filters, Services, Http", "Tables, Select, SQL, DOM, Events", "Validation, API, W3.CSS, Animation", "AngularJS Routing, Application"] },
        { title: "ReactJS", icon: "Code", subTopics: ["Components in React", "State management Lists & keys", "Handling events, Forms", "Handling HTTP requests", "Server-side rendering (SSR)"] },
        { title: "Bootstrap", icon: "Code", subTopics: ["Bootstrap Framework, Features", "Bootstrap Components, Grid", "Responsive web page, Bootstrap Plug-Ins"] },
        { title: "Back-End Technologies", icon: "ServerCrash", subTopics: ["Django", "Node.js", "Express.js", "Python", "PHP", "Laravel"] },
        { title: "Database Technologies", icon: "Settings", subTopics: ["MySQL", "MongoDB"] },
        { title: "Java Technology", icon: "Code", subTopics: ["Core Java", "Advanced Java", "Hibernate", "Spring"] }
    ],
  },
  {
    slug: "data-analysis",
    title: "Data Analytics",
    duration: "6 Months",
    description: "Develop skills in data mining, statistical analysis, and data visualization to extract meaningful insights and support data-driven decision-making in businesses.",
    image: "/images/courses/diploma/dataanalysis.webp",
    hint: "data analytics",
    totalTopics: "120+",
    modules: [
        { title: "Advanced Excel", icon: "BarChart", subTopics: ["Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Complex Functions, What - if - Analysis", "Working with Macros, MIS Reporting", "Dashboard Creation, Data Validation"] },
        { title: "Power BI", icon: "BarChart", subTopics: ["Introducing PowerPivot", "Working with Data", "Enhancing the Data Model", "Analysing Data", "Data Analysis Expressions (DAX)", "Publishing & Managing PowerPivot Models", "Importing Data with Power Query"] },
        { title: "MY SQL", icon: "Code", subTopics: ["Introduction to SQL Server", "Database & Types", "Using DDL / DML", "Simple Queries, Sub-Queries", "Queries using Joins", "Constraints", "Using Aggregate Functions"] },
        { title: "Python", icon: "Bot", subTopics: ["Basic Python Syntax", "Data Types & Operators", "Decision Making & Looping", "Lists, Tuples, Dictionary", "Functions & Modules", "Files Input & Output", "Exceptional Handling, Class & Object"] },
        { title: "Tableau", icon: "BarChart", subTopics: ["Working with Tableau", "Deep Diving with Data & Connections", "Creating Charts", "Calculations in your Workbook", "Data Mapping in Tableau", "Dashboards", "Visualization"] }
    ],
  },
];


export interface ShortTermCourse {
    slug: string;
    title: string;
    description: string;
    duration: string;
    modules: number;
    topics: string[];
    image: string;
    hint: string;
}

export interface ShortTermCourseCategory {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    courses: ShortTermCourse[];
}

export const courseData: ShortTermCourseCategory[] = [
  {
    id: "accounting",
    name: "Account",
    description: "Master accounting and finance",
    icon: React.createElement(Calculator, { className: "h-8 w-8" }),
    courses: [
        {
          slug: 'office-automation',
          title: 'Office Automation',
          description: 'Master essential office tools',
          duration: "2 Months",
          modules: 6,
          topics: ['Word', 'Excel', 'PPT', 'OneNote', 'Outlook', 'Access'],
          image: "/images/courses/short/account/oa.png",
          hint: "office software"
        },
        {
          slug: 'ms-office',
          title: 'MS Office',
          description: 'Become proficient in Microsoft Office Suite.',
          duration: "2 Months",
          modules: 6,
          topics: ['Word', 'Excel', 'PowerPoint', 'OneNote', 'Outlook', 'Access'],
          image: "/images/courses/short/account/msoffice.png",
          hint: "ms office"
        },
        {
          slug: 'advanced-excel',
          title: 'Advanced Excel',
          description: 'Master advanced Excel functions',
          duration: "3 Months",
          modules: 5,
          topics: ['Formulas and Functions', 'Pivot Tables', 'Data Analysis Tools', 'Macros and VBA', 'Advanced Charting'],
          image: "/images/courses/short/account/advexcel.png",
          hint: "excel spreadsheet"
        },
        
        {
          slug: 'tally-gst',
          title: 'Tally Prime + GST',
          description: 'Learn GST compliance',
          duration: "3 Months",
          modules: 5,
          topics: ['GST Registration', 'Filing GST Returns', 'Input Tax Credit', 'GST Audit', 'Compliance Management'],
          image: "/images/courses/short/account/tallygst.png",
          hint: "tax document"
        },
        {
          slug: 'taxation-auditing',
          title: 'Taxation Auditing',
          description: 'Understand tax laws and auditing',
          duration: "4 Months",
          modules: 5,
          topics: ['Tax Laws Overview', 'Auditing Techniques', 'Tax Returns Preparation', 'Compliance and Regulations', 'Tax Planning Strategies'],
          image: "/images/courses/short/account/TaxationAuditing.png",
          hint: "auditing report"
        },
        {
          slug: 'management-skill',
          title: 'Management Skill',
          description: 'Develop leadership and team management',
          duration: "2 Months",
          modules: 5,
          topics: ['Leadership Skills', 'Team Management', 'Conflict Resolution', 'Time Management', 'Decision Making'],
          image: "/images/courses/short/account/management.png",
          hint: "team management"
        },
        {
          slug: 'share-market',
          title: 'Share Market',
          description: 'Understand the basics of share trading',
          duration: "2 Months",
          modules: 5,
          topics: ['Introduction to Share Market', 'Types of Shares', 'Stock Market Analysis', 'Trading Strategies', 'Risk Management'],
          image: "/images/courses/short/account/sharemarket.png",
          hint: "stock market chart"
        },
        {
          slug: 'ccc',
          title: 'CCC',
          description: 'Learn computer fundamentals',
          duration: "3 Months",
          modules: 5,
          topics: ['Computer Fundamentals', 'Internet and Web Technologies', 'Word Processing', 'Spreadsheet Applications', 'Presentation Software'],
          image: "/images/courses/short/account/ccc.png",
          hint: "computer basics"
        }
    ]
  },
  {
    id: "programming",
    name: "Programming",
    description: "Learn coding and development",
    icon: React.createElement(Code, { className: "h-8 w-8" }),
    courses: [
        {
            slug: 'web-development',
            title: 'Web Development',
            description: 'Build modern web applications',
            duration: "6 Months",
            modules: 5,
            topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Frontend Frameworks', 'Backend Integration'],
            image: "/images/courses/short/programming/webdev.png",
            hint: "web development"
        },
        {
            slug: 'web-designing',
            title: 'Web Designing',
            description: 'Create visually appealing websites',
            duration: "4 Months",
            modules: 5,
            topics: ['UI/UX Principles', 'Color Theory', 'Typography', 'Design Tools', 'Prototyping'],
            image: "/images/courses/short/programming/webdesign.png",
            hint: "web design"
        },
        {
            slug: 'dsa',
            title: 'DSA',
            description: 'Master data structures and algorithms',
            duration: "3 Months",
            modules: 5,
            topics: ['Data Structures', 'Algorithms', 'Problem Solving', 'Complexity Analysis', 'Coding Challenges'],
            image: "/images/courses/short/programming/dsa.png",
            hint: "data structures"
        },
        {
            slug: 'c-programming',
            title: 'C',
            description: 'Learn C programming',
            duration: "2 Months",
            modules: 5,
            topics: ['Syntax and Semantics', 'Object-Oriented Programming', 'Memory Management', 'File Handling', 'Data Structures in C/C++'],
            image: "/images/courses/short/programming/cprog.png",
            hint: "c code"
        },
        {
            slug: 'c-plus-plus',
            title: 'C++',
            description: 'Learn C++',
            duration: "3 Months",
            modules: 5,
            topics: ['Syntax and Semantics', 'Object-Oriented Programming', 'Memory Management', 'File Handling', 'Data Structures in C/C++'],
            image: "/images/courses/short/programming/c++.png",
            hint: "c++ code"
        },
        {
            slug: 'python',
            title: 'Python',
            description: 'Learn Python programming',
            duration: "3 Months",
            modules: 5,
            topics: ['Python Basics', 'Data Types and Structures', 'Functions and Modules', 'File I/O', 'Libraries and Frameworks'],
            image: "/images/courses/short/programming/python.png",
            hint: "python code"
        },
        {
            slug: 'front-end-development',
            title: 'Front-End Development',
            description: 'Build front-end web applications',
            duration: "4 Months",
            modules: 5,
            topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Frontend Frameworks', 'Version Control with Git'],
            image: "/images/courses/short/programming/frontend.png",
            hint: "front end code"
        },
        {
            slug: 'back-end-development',
            title: 'Back-End Development',
            description: 'Build back-end web applications',
            duration: "4 Months",
            modules: 5,
            topics: ['Server-Side Programming', 'Database Management', 'API Development', 'Authentication and Security', 'Deployment Strategies'],
            image: "/images/courses/short/programming/backend.png",
            hint: "back end code"
        },
        {
            slug: 'database',
            title: 'Database',
            description: 'Learn database management',
            duration: "3 Months",
            modules: 5,
            topics: ['SQL Basics', 'Database Design', 'Data Normalization', 'Query Optimization', 'NoSQL Databases'],
            image: "/images/courses/short/programming/database.png",
            hint: "database diagram"
        },
        {
            slug: 'angular',
            title: 'Angular',
            description: 'Learn Angular framework',
            duration: "3 Months",
            modules: 5,
            topics: ['Angular Basics', 'Components and Modules', 'Services and Dependency Injection', 'Routing and Navigation', 'State Management'],
            image: "/images/courses/short/programming/angular.png",
            hint: "angular code"
        },
        {
            slug: 'html-css',
            title: 'HTML-CSS',
            description: 'Master HTML and CSS',
            duration: "2 Months",
            modules: 5,
            topics: ['HTML Structure', 'CSS Styling', 'Responsive Design', 'CSS Frameworks', 'Accessibility'],
            image: "/images/courses/short/programming/htmlcss.png",
            hint: "html css code"
        },
        {
            slug: 'javascript',
            title: 'JavaScript',
            description: 'Learn JavaScript',
            duration: "2 Months",
            modules: 5,
            topics: ['JavaScript Basics', 'DOM Manipulation', 'Event Handling', 'AJAX and Fetch API', 'ES6 Features'],
            image: "/images/courses/short/programming/js.png",
            hint: "javascript code"
        },
        {
            slug: 'core-java',
            title: 'Core Java',
            description: 'Learn Java programming',
            duration: "3 Months",
            modules: 5,
            topics: ['Java Basics', 'Object-Oriented Programming', 'Exception Handling', 'Collections Framework', 'Multithreading'],
            image: "/images/shortterm/java.png",
            hint: "java code"
        },
        {
            slug: 'c-sharp',
            title: 'C#',
            description: 'Learn C# programming',
            duration: "3 Months",
            modules: 5,
            topics: ['C# Basics', 'Object-Oriented Programming', 'LINQ Queries', 'Asynchronous Programming', '.NET Framework'],
            image: "/images/courses/short/programming/csharp.png",
            hint: "c# code"
        },
        {
            slug: 'react',
            title: 'React',
            description: 'Learn React framework',
            duration: "3 Months",
            modules: 5,
            topics: ['React Basics', 'Components and Props', 'State Management', 'React Router', 'Hooks'],
            image: "/images/courses/short/programming/react.png",
            hint: "react code"
        },
        {
            slug: 'advanced-java',
            title: 'Advanced Java',
            description: 'Learn advanced Java',
            duration: "4 Months",
            modules: 5,
            topics: ['Java EE', 'Spring Framework', 'Hibernate', 'RESTful Services', 'Microservices'],
            image: "/images/courses/short/programming/advjava.png",
            hint: "java ee code"
        },
        {
            slug: 'power-bi',
            title: 'PowerBI',
            description: 'Learn PowerBI for data visualization',
            duration: "3 Months",
            modules: 5,
            topics: ['Data Visualization', 'DAX Functions', 'Power Query', 'Report Sharing', 'Dashboard Creation'],
            image: "/images/courses/short/programming/powerbi.png",
            hint: "powerbi dashboard"
        }
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description: "Master online marketing",
    icon: React.createElement(Megaphone, { className: "h-8 w-8" }),
    courses: [
        {
            slug: 'seo',
            title: 'SEO',
            description: 'Optimize websites for search engines',
            duration: "2 Months",
            modules: 5,
            topics: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'SEO Tools'],
            image: "/images/courses/short/dm/SEO.png",
            hint: "seo analysis"
        },
        {
            slug: 'smm',
            title: 'SMM',
            description: 'Manage social media marketing',
            duration: "3 Months",
            modules: 5,
            topics: ['Social Media Strategy', 'Content Creation', 'Engagement Techniques', 'Analytics', 'Community Management'],
            image: "/images/courses/short/dm/smm.png",
            hint: "social media marketing"
        },
        {
            slug: 'sem',
            title: 'SEM',
            description: 'Manage search engine marketing',
            duration: "2 Months",
            modules: 5,
            topics: ['PPC Campaigns', 'Ad Copywriting', 'Bid Management', 'Conversion Tracking', 'A/B Testing'],
            image: "/images/courses/short/dm/sem.png",
            hint: "search engine marketing"
        },
        {
            slug: 'wordpress',
            title: 'WordPress',
            description: 'Build and manage WordPress websites',
            duration: "2 Months",
            modules: 5,
            topics: ['WordPress Setup', 'Theme Customization', 'Plugin Management', 'SEO for WordPress', 'Security Best Practices'],
            image: "/images/courses/short/dm/wordpress.png",
            hint: "wordpress dashboard"
        },
        {
            slug: 'content-creation',
            title: 'Content Creation',
            description: 'Create engaging content',
            duration: "2 Months",
            modules: 5,
            topics: ['Blogging', 'Video Content', 'Social Media Posts', 'Copywriting', 'Content Strategy'],
            image: "/images/courses/short/dm/Content.png",
            hint: "content creation"
        },
        {
            slug: 'facebook-google-ads',
            title: 'Facebook & Google Ads',
            description: 'Manage paid ad campaigns',
            duration: "2 Months",
            modules: 5,
            topics: ['Facebook Ads', 'Google Ads', 'Campaign Management', 'Ad Copywriting', 'Conversion Tracking'],
            image: "/images/courses/short/dm/facebookgoogleads.png",
            hint: "social media ads"
        },
        {
            slug: 'smo',
            title: 'SMO',
            description: 'Manage social media optimization',
            duration: "2 Months",
            modules: 5,
            topics: ['Social Media Strategy', 'Content Planning', 'Engagement Techniques', 'Analytics', 'Community Management'],
            image: "/images/courses/short/dm/SMO.png",
            hint: "social media optimization"
        },
        {
            slug: 'google-analytics',
            title: 'Google Analytics',
            description: 'Track website performance',
            duration: "2 Months",
            modules: 5,
            topics: ['Setting Up Google Analytics', 'Understanding Metrics', 'Tracking Conversions', 'Reporting', 'Data Interpretation'],
            image: "/images/courses/short/dm/googleanalytics.png",
            hint: "analytics dashboard"
        }
    ]
  },
  {
    id: "graphics",
    name: "Graphics",
    description: "Create stunning visuals",
    icon: React.createElement(Paintbrush, { className: "h-8 w-8" }),
    courses: [
      {
        slug: 'coreldraw',
        title: 'CorelDRAW',
        description: 'Learn vector graphics design',
        duration: "2 Months",
        modules: 5,
        topics: ['Vector Graphics', 'Logo Design', 'Layout Design', 'Typography', 'Color Management'],
        image: "/images/courses/short/graphics/CorelDRAW.png",
        hint: "vector design"
      },
      {
        slug: 'adobe-photoshop',
        title: 'Adobe Photoshop',
        description: 'Master photo editing',
        duration: "2 Months",
        modules: 5,
        topics: ['Photo Editing', 'Retouching Techniques', 'Layer Management', 'Color Correction', 'Graphic Design'],
        image: "/images/courses/short/graphics/AdobePhotoshop.png",
        hint: "photoshop editing"
      },
      {
        slug: 'adobe-illustrator',
        title: 'Adobe Illustrator',
        description: 'Create vector illustrations',
        duration: "2 Months",
        modules: 5,
        topics: ['Vector Illustration', 'Logo Creation', 'Infographics', 'Icon Design', 'Print Design'],
        image: "/images/courses/short/graphics/Illustrator.png",
        hint: "illustrator art"
      },
      {
        slug: 'adobe-indesign',
        title: 'Adobe InDesign',
        description: 'Learn layout design',
        duration: "2 Months",
        modules: 5,
        topics: ['Layout Design', 'Typography', 'Print Production', 'Interactive PDFs', 'Book Design'],
        image: "/images/courses/short/graphics/InDesign.png",
        hint: "indesign layout"
      },
      {
        slug: 'video-sound-editing',
        title: 'Video|Sound Editing',
        description: 'Edit videos and audio',
        duration: "3 Months",
        modules: 5,
        topics: ['Video Editing Basics', 'Audio Editing Techniques', 'Color Grading', 'Motion Graphics', 'Exporting and Compression'],
        image: "/images/courses/short/graphics/PremierePro.png",  // Used PremierePro as closest match
        hint: "video editing"
      },
      {
        slug: 'adobe-animation',
        title: 'Adobe Animation',
        description: 'Create animations',
        duration: "3 Months",
        modules: 5,
        topics: ['Animation Principles', 'Character Animation', 'Motion Graphics', 'Storyboarding', 'Exporting Animations'],
        image: "/images/courses/short/graphics/animates.png",
        hint: "character animation"
      },
      {
        slug: '3d-max',
        title: '3D MAX',
        description: 'Learn 3D modeling',
        duration: "4 Months",
        modules: 5,
        topics: ['3D Modeling', 'Texturing', 'Lighting Techniques', 'Animation', 'Rendering'],
        image: "/images/courses/short/graphics/3DMAX.png",
        hint: "3d modeling"
      },
      {
        slug: 'canva-design',
        title: 'Canva Design',
        description: 'Create designs for social media',
        duration: "2 Months",
        modules: 5,
        topics: ['Graphic Design Basics', 'Social Media Graphics', 'Presentation Design', 'Branding', 'Marketing Materials'],
        image: "/images/courses/short/graphics/Canva.png",
        hint: "canva design"
      },
      {
        slug: 'after-effects',
        title: 'After Effects',
        description: 'Create motion graphics and visual effects.',
        duration: "3 Months",
        modules: 5,
        topics: ['Motion Graphics', 'Visual Effects', 'Compositing', 'Animation', 'Exporting'],
        image: "/images/courses/short/graphics/AfterEffects.png",
        hint: "motion graphics"
      },
      {
        slug: 'premiere-pro',
        title: 'Premiere Pro',
        description: 'Learn professional video editing.',
        duration: "3 Months",
        modules: 5,
        topics: ['Video Editing', 'Audio Editing', 'Color Correction', 'Titling', 'Exporting'],
        image: "/images/courses/short/graphics/PremierePro.png",
        hint: "video editing software"
      },
      {
        slug: 'figma',
        title: 'Figma',
        description: 'Design and prototype user interfaces.',
        duration: "3 Months",
        modules: 5,
        topics: ['UI Design', 'Prototyping', 'Collaboration', 'Design Systems', 'Components'],
        image: "/images/courses/short/graphics/Figma.png",
        hint: "ui design figma"
      },
      {
        slug: 'autocad',
        title: 'AutoCAD',
        description: 'Learn 2D and 3D design and drafting.',
        duration: "3 Months",
        modules: 5,
        topics: ['2D Drafting', '3D Modeling', 'Technical Drawing', 'Layouts', 'Plotting'],
        image: "/images/courses/short/graphics/AutoCAD.png",
        hint: "autocad drawing"
      },
      {
        slug: 'revit',
        title: 'Revit',
        description: 'Learn BIM for architectural design.',
        duration: "4 Months",
        modules: 5,
        topics: ['BIM Modeling', 'Architectural Design', 'Construction Documentation', 'Collaboration', 'Families'],
        image: "/images/courses/short/graphics/Revit.png",
        hint: "revit architecture"
      }
    ]
  },
];

export const allCoursesList = [
    "Diploma In Accounting",
    "Diploma In Financial Accounting",
    "Diploma In Computer Application",
    "Diploma In Financial & Management",
    "Diploma In Programming Course",
    "Diploma In Graphic & Animation",
    "Diploma In Ethical Hacking",
    "Diploma In Digital Marketing",
    "Full-Stack Development",
    "Data Analytics",
    "Office Automation",
    "MS Office",
    "Advanced Excel",
    "Tally Prime + GST",
    "Taxation Auditing",
    "Management Skill",
    "Share Market",
    "CCC",
    "Web Development",
    "Web Designing",
    "DSA",
    "C",
    "C++",
    "Python",
    "Front-End Development",
    "Back-End Development",
    "Database",
    "Angular",
    "HTML-CSS",
    "JavaScript",
    "Core Java",
    "C#",
    "React",
    "Advanced Java",
    "PowerBI",
    "SEO",
    "SMM",
    "SEM",
    "WordPress",
    "Content Creation",
    "Facebook & Google Ads",
    "SMO",
    "Google Analytics",
    "CorelDRAW",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Video|Sound Editing",
    "Adobe Animation",
    "3D MAX",
    "Canva Design",
    "After Effects",
    "Premiere Pro",
    "Figma",
    "AutoCAD",
    "Revit",
  ];
