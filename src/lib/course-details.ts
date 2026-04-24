
export const courseDetails: { [key: string]: any } = {
    // --- DIPLOMA COURSES ---
    'itcg-graduation': {
        title: "ITCG - Information Technology Computer Graduation Course in Mumbai | Primezone",
        metaDescription: "Enroll in the best 2.5-Year ITCG Graduation Course in Mumbai at Primezone. Comprehensive program covering Office AI, Tally, Graphics, Web Dev, Digital Marketing, and specializations.",
        description: "The Information Technology Computer Graduation (ITCG) is a professional multi-semester career program. It combines essential office productivity with AI tools, financial accounting, creative design, full-stack web development, digital marketing, and advanced specializations.",
        whyLearn: "ITCG is designed to make you a complete tech professional. In today's market, employers look for candidates who can handle office work, accounting, design, high-end development, and digital presence. This comprehensive program provides the multi-skilled edge required for top-tier corporate and technical roles in Mumbai's competitive job market.",
        image: "/images/courses/diploma/itcg.webp",
        hint: "computer graduation",
        highlights: ["2.5 Year Professional Track", "Office AI & Advanced Excel", "Tally Prime & GST Mastery", "Graphic & Web Designing", "Advanced Digital Marketing", "Specialized Elective Track", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: [
            "Advanced Office Productivity with Artificial Intelligence (AI) integration.",
            "Complete Excel mastery from basic formulas to complex MIS dashboards.",
            "Professional Accounting, Inventory, and GST compliance using Tally Prime.",
            "Creative visual designing and branding using Adobe & Corel tools.",
            "Full-Stack Web Development and Professional E-Commerce setup.",
            "Digital Marketing strategies (SEO, SEM, SMM) for global brands.",
            "Specialized track in either Finance, Data Analytics, or Animation/Video Editing."
        ],
        careerOpportunities: ["Senior Accountant", "Full-Stack Developer", "Digital Marketing Manager", "Graphic Designer", "Data Analyst", "MIS Manager", "UI/UX Designer", "Video Editor", "VFX Artist"],
        syllabus: [
            // SEMESTER 1
            { 
                semester: 1,
                title: "Advance MS with AI Tools", 
                icon: "Bot", 
                topics: ["Windows Fundamentals", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Artificial Intelligence (AI)", "AI Chatbots", "Content Creation Tools", "AI for Design & Creativity", "AI for Data & Office Work", "AI for Video & Audio Editing", "AI for Marketing & Business"] 
            },
            { 
                semester: 1,
                title: "Microsoft Excel", 
                icon: "BarChart", 
                topics: ["Basic Formulas", "Number Formatting", "Conditional Formatting", "Paste Special", "Insert Tab", "Page Layout Tab", "Data tab/data filtrations", "Working with Charts", "Macros", "Track Changes", "Sheet Protection"] 
            },
            { 
                semester: 1,
                title: "Advanced Excel Mastery", 
                icon: "BarChart", 
                topics: ["Date & Time Functions", "Text Functions", "Statistical Functions", "Financial Functions", "Logical Functions", "Conditional Functions", "V-Look Up, H-Look Up, X-Look UP", "Array Functions", "DashBoard Creation", "MIS Reporting"] 
            },
            { 
                semester: 1,
                title: "Tally Prime (Operating)", 
                icon: "FileText", 
                topics: ["Installation & Company Creation", "Features & Configuration", "Creating Company", "Company Settings & Security", "Masters Creation", "Creating Groups", "Units of Measure", "Stock Groups & Categories", "Voucher Entry & Transactions", "Payment, Receipt, Contra", "Journal, Purchase & Sales"] 
            },
            { 
                semester: 1,
                title: "Tally Prime (Advance)", 
                icon: "FileText", 
                topics: ["Multi-Company Creation", "Data Backup & Restore", "E-Way Bill & E-Invoicing", "Inventory Management", "Bill of Materials (BOM)", "Consumption Analysis", "Cost Centres & Budgeting", "Advanced Banking", "TDS & TCS Configuration", "Payroll", "Data Import & Audit"] 
            },
            { 
                semester: 1,
                title: "Tally Prime (GST)", 
                icon: "Landmark", 
                topics: ["Basics of GST", "Types of GST", "GST Registration Process", "Activating GST in Tally Prime", "GST Masters Creation", "GST Purchase Transactions", "GST Sales Transactions", "Debit Note/Credit Note(GST)", "GST Reports in Tally Prime", "E-Way Bill & E-Invoicing", "GST Payment & Adjustment"] 
            },
            // SEMESTER 2
            { 
                semester: 2,
                title: "Graphic Designing (CorelDRAW)", 
                icon: "Palette", 
                topics: ["Introduction to Vector", "UI Interface & Tool Basics", "Logo Creation", "Object Management", "Flyer & Brochure", "Poster & Social Media Ad", "Brand Identity Design", "Vector Tracing", "Book Cover Design", "Typography", "Exporting for Printing"] 
            },
            { 
                semester: 2,
                title: "Graphic Designing (Adobe Photoshop)", 
                icon: "Palette", 
                topics: ["Raster Graphics Basics", "Selection Tools & Techniques", "Layer Masking", "Photo Retouching", "Color Correction", "Photo Manipulation", "Social Media Ads", "GIF Animation", "Mockup Design"] 
            },
            { 
                semester: 2,
                title: "Graphic Designing (Adobe Illustrator)", 
                icon: "Palette", 
                topics: ["Advanced UI & Workspace", "Pen Tool Mastery", "Gradient & Mesh Tool", "Typography & Effects", "Logo Design", "Icon Design", "Infographic Creation", "Character Illustration", "3D Effects", "File Preparation"] 
            },
            { 
                semester: 2,
                title: "Graphic Designing (Adobe InDesign)", 
                icon: "Palette", 
                topics: ["Master Page Setup", "Text Flow & Styles", "Multi-Page Layout", "Newspaper & Magazine", "Interactive PDF", "Table of Contents", "Character & Paragraph Styles", "Printing & Packaging"] 
            },
            { 
                semester: 2,
                title: "Personality Development", 
                icon: "Users", 
                topics: ["Communication Skills", "Professional Etiquette", "Resume Building", "Interview Techniques", "Body Language", "Time Management", "Leadership Skills", "Confidence Building"] 
            },
            // SEMESTER 3 (Intermediate ITCG)
            {
                semester: 3,
                title: "Web Designing",
                icon: "Globe",
                topics: ["Html 5", "CSS 3", "Javascript", "Web Hosting", "Domain / Sub Domain", "UI/UX Basics", "Responsive Layouts"]
            },
            {
                semester: 3,
                title: "Web Development",
                icon: "Code",
                topics: ["Front-End Development", "Back-End Development", "Database Management", "JavaScript (Core + Advance)", "Node.js Basics", "Deployment Strategies"]
            },
            // SEMESTER 4 (Professional ITCG)
            {
                semester: 4,
                title: "Search Engine Optimization (SEO)",
                icon: "Search",
                topics: ["Keyword Research", "On-Page SEO", "Technical SEO", "Off-Page SEO", "SEO Tools & Analytics", "Advanced SEO Reporting"]
            },
            {
                semester: 4,
                title: "Social Media Marketing (SMM)",
                icon: "Users",
                topics: ["Platforms Overview", "Content Strategy", "Paid Ads", "Campaign Management", "Performance Tracking", "Advanced SMM Strategy"]
            },
            {
                semester: 4,
                title: "Search Engine Marketing (SEM)",
                icon: "Megaphone",
                topics: ["Google Ads Fundamentals", "Search Ads (PPC)", "Display & Video Advertising", "Shopping & E-commerce Ads", "Analytics & Optimization", "Advanced SEM Campaigns"]
            },
            {
                semester: 4,
                title: "WordPress Mastery",
                icon: "Globe",
                topics: ["Themes Customization", "Plugin Management", "E-Commerce Integration", "Website Security", "Dynamic Website Creation"]
            },
            // SEMESTER 5 (Final Elective Tracks)
            // Option 1
            {
                semester: 5,
                title: "Option A: Accounting & Finance",
                icon: "Landmark",
                topics: ["Basics of Taxation System", "Income Tax (Direct/Indirect)", "Practical Taxation", "Auditing Fundamentals", "Share Market Fundamentals", "Fundamental & Technical Analysis", "Trading Strategies", "Mutual Funds & Investment", "Management Skills (Team/Workplace)"]
            },
            // Option 2
            {
                semester: 5,
                title: "Option B: Programming & Data Analytics",
                icon: "BarChart",
                topics: ["Data Analysis Libraries (Numpy, Pandas, Polars)", "Data Visualization (Matplotlib, Seaborn, Plotly)", "ML & AI Libraries (Scikit-learn, TensorFlow)", "Web Libraries (Django, Flask, FastAPI)", "Automation & Utility Libraries", "Tableau & Power BI Mastery"]
            },
            // Option 3
            {
                semester: 5,
                title: "Option C: Animation & Video Editing",
                icon: "LayoutTemplate",
                topics: ["Basics of Animation", "Types of Animation", "Premiere Pro (Basics to Advance)", "Frame Rate & Aspect Ratio", "Transitions & Effects", "Color Correction", "Music & Sound Effects", "Green Screen Editing", "Thumbnail Designing"]
            }
        ],
        tools: [
            { name: "MS Word", logo: "/images/tech/word.svg" },
            { name: "MS Excel", logo: "/images/tech/excel.svg" },
            { name: "MS PowerPoint", logo: "/images/tech/powerpoint.svg" },
            { name: "Claude", logo: "/images/tech/ai1.svg" },
            { name: "ChatGPT", logo: "/images/tech/ai2.svg" },
            { name: "Perplexity", logo: "/images/tech/ai3.svg" },
            { name: "Gemini", logo: "/images/tech/ai4.svg" },
            { name: "Tally Prime", logo: "/images/tech/tally.svg" },
            { name: "Photoshop", logo: "/images/tech/photoshop.svg" },
            { name: "Illustrator", logo: "/images/tech/illustrator.svg" },
            { name: "InDesign", logo: "/images/tech/indesign.svg" },
            { name: "CorelDRAW", logo: "/images/tech/coreldraw.svg" },
            { name: "HTML5", logo: "/images/tech/html.svg" },
            { name: "CSS", logo: "/images/tech/css.svg" },
            { name: "JavaScript", logo: "/images/tech/js.svg" },
            { name: "WordPress", logo: "/images/tech/wordpress.svg" },
            { name: "Google Ads", logo: "/images/tech/google-ads.svg" },
            { name: "Analytics", logo: "/images/tech/ga.svg" },
            { name: "SEO", logo: "/images/tech/seo.svg" },
            { name: "Google Search Console", logo: "/images/tech/gsc.svg" },
            { name: "Meta", logo: "/images/tech/meta.svg" },
            { name: "Facebook Ads", logo: "/images/tech/fb.svg" },
            { name: "Instagram", logo: "/images/tech/instagram.svg" },
            { name: "Premiere Pro", logo: "/images/tech/premiere.svg" },
            { name: "Python", logo: "/images/tech/python.svg" },
            { name: "Pandas", logo: "/images/tech/pandas.svg" },
            { name: "NumPY", logo: "/images/tech/numpy.svg" },
            { name: "Tableau", logo: "/images/tech/tableau.svg" },
            { name: "Power BI", logo: "/images/tech/powerbi.svg" }
        ],
        faqs: [
            { q: "What is the total duration of the ITCG course?", a: "The Information Technology Computer Graduation (ITCG) is a comprehensive 2.5-year program (5 Semesters)." },
            { q: "What are the specialization options in Semester 5?", a: "Students can choose from three tracks: Accounting & Finance, Programming & Data Analytics, or Animation & Video Editing." },
            { q: "Does the course cover Digital Marketing?", a: "Yes, Semester 4 is entirely focused on Professional Digital Marketing, covering SEO, SEM, SMM, and WordPress." },
            { q: "Is job placement guaranteed?", a: "We provide 100% job placement assistance after the completion of the ITCG graduation program in top Mumbai firms." }
        ]
    },
    'computer-application': {
        title: "Diploma In Computer Application (DCA) Course in Mumbai | Primezone",
        metaDescription: "Best DCA Course in Mumbai. Learn MS Office, AI Tools, Tally, Graphic Design, and Web Design. Job-oriented training in Jogeshwari and Vile Parle with placement.",
        description: "The Diploma in Computer Application (DCA) at Primezone is a comprehensive 1-year program covering everything from basic office tools and AI productivity to advanced graphic and web design.",
        whyLearn: "DCA is the perfect foundation for any professional career. It combines essential administrative skills with modern AI tools and creative design, making you a versatile candidate for various industries in Mumbai's competitive job market.",
        image: "/images/courses/diploma/dca.webp",
        hint: "computer application",
        highlights: ["MS Office + AI Tools", "Tally Prime & GST", "Advanced Excel Mastery", "Graphic & Web Designing", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: [
            "Mastery of MS Office (Word, Powerpoint, Excel) enhanced with AI Tools.",
            "Professional Accounting with Tally Prime and GST Compliance.",
            "Advanced Data Analysis and MIS Reporting using Excel.",
            "Creative Graphic Design with Adobe Creative Cloud and CorelDRAW.",
            "Modern Web Designing using HTML5, CSS, JS, and WordPress."
        ],
        careerOpportunities: ["Computer Operator", "Office Assistant", "Accounts Assistant", "Back Office Executive", "Corporate Office Admin", "Web Designer", "Freelancing"],
        syllabus: [
            { 
                title: "MS OFFICE + AI TOOLS", 
                icon: "MonitorCheck", 
                topics: ["Windows Fundamentals", "Microsoft Word", "Microsoft Powerpoint", "Microsoft Excel", "AI Tools", "Assignment & Projects"] 
            },
            { 
                title: "TALLY PRIME (GST)", 
                icon: "FileText", 
                topics: ["Basics of Accounting", "Accounting in Tally Prime", "Purchase, Sales, Journal Entries", "Payment, Receipt, Contra Vouchers", "Credit & Debit Notes", "Inventory Management", "GST Concept, Types of GST", "GST Setup, GST Transactions", "GST Returns, TDS, TCS", "Financial Statements", "Security & Backup", "Assignment & Projects"] 
            },
            { 
                title: "ADVANCE EXCEL", 
                icon: "BarChart", 
                topics: ["Advance Formula & Functions", "Pivot Tables & Charts", "V lookup, H lookup, X lookup", "Data Analysis", "Charts & Dashboard", "What if Analysis", "MIS Reporting", "Data Protection", "Track Changes & Macros", "Assignment & Projects"] 
            },
            { 
                title: "GRAPHIC DESIGNING", 
                icon: "Palette", 
                topics: ["Adobe Illustrator (Logo, Banner etc)", "Adobe Photoshop (Image Editing, Filters)", "Adobe InDesign (Newspaper, Books)", "CorelDRAW (Logo, Card, Flyer etc)", "Canva Designing Pro", "Assignment & Projects"] 
            },
            { 
                title: "WEB DESIGNING", 
                icon: "Globe", 
                topics: ["Html 5, CSS", "JavaScript", "Web Hosting, Domain", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "MS Word", logo: "/images/tech/word.svg" },
            { name: "MS Excel", logo: "/images/tech/excel.svg" },
            { name: "Tally Prime", logo: "/images/tech/tally.svg" },
            { name: "GST", logo: "/images/tech/gst.jpg" },
            { name: "Photoshop", logo: "/images/tech/photoshop.svg" },
            { name: "Illustrator", logo: "/images/tech/illustrator.svg" },
            { name: "InDesign", logo: "/images/tech/indesign.svg" },
            { name: "CorelDRAW", logo: "/images/tech/coreldraw.svg" },
            { name: "Canva", logo: "/images/tech/canva.svg" },
            { name: "HTML5", logo: "/images/tech/html.svg" },
            { name: "CSS3", logo: "/images/tech/css.svg" },
            { name: "JavaScript", logo: "/images/tech/js.svg" }
        ],
        faqs: [
            { q: "Which is the best DCA institute in Mumbai?", a: "Primezone Computer Education is widely considered the best DCA institute in Mumbai, offering practical training with AI tools and placement support." },
            { q: "Who can join a DCA course in Mumbai?", a: "Students who have completed 10th or 12th grade, graduates, and working professionals can enroll in this diploma." },
            { q: "Which tools are taught in the DCA course?", a: "The course covers MS Office, Tally Prime, Advance Excel, Graphic Designing (Photoshop, Illustrator), and Web Designing tools." },
            { q: "Is there placement support?", a: "Yes, we provide 100% placement assistance in Mumbai for our DCA students across various sectors like back office, accounting, and design." }
        ]
    },
    'financial-management': {
        title: "Diploma In Financial Accounting & Management (DFAM) Course in Mumbai | Primezone",
        metaDescription: "Master Financial Accounting and Management in Mumbai. Comprehensive training in Tally Prime, GST, Taxation, and Share Market. Enroll at Primezone today for job success.",
        description: "The Diploma in Financial Accounting & Management (DFAM) is a specialized 1-year program designed to create expert accounting professionals equipped with modern taxation and management skills.",
        whyLearn: "In Mumbai's corporate hub, every business requires skilled accountants who can handle GST, Income Tax, and financial reports. DFAM provides the practical edge needed to manage business finances and investments effectively.",
        image: "/images/courses/diploma/dfam.webp",
        hint: "financial management",
        highlights: ["Office Automation Basics", "Tally Prime & GST Mastery", "Share Market Trading", "Taxation & Auditing", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: [
            "Advanced Financial Accounting with Tally Prime and live GST compliance.",
            "Professional Data Analysis and MIS reporting using Excel.",
            "Detailed understanding of Direct & Indirect Taxation (ITR, TDS, TCS).",
            "Basics of Share Market, trading instruments, and technical analysis.",
            "Advanced Office Automation and Management skills for corporate roles."
        ],
        careerOpportunities: ["Accounts Executive", "GST Executive", "Finance Assistant", "Tax Assistant", "Payroll Executive", "Junior Accountant", "Banking Assistant"],
        syllabus: [
            { 
                title: "OFFICE AUTOMATION", 
                icon: "MonitorCheck", 
                topics: ["Windows Fundamentals", "Microsoft Word", "Microsoft Powerpoint", "Microsoft Excel", "Internet - Upload, Download, Booking", "Assignment & Projects"] 
            },
            { 
                title: "ADVANCE EXCEL", 
                icon: "BarChart", 
                topics: ["Advance Formula & Functions", "Pivot Tables & Pivot Charts", "V lookup, H lookup, X lookup", "Data Analysis", "Charts & Dashboard", "What if Analysis", "MIS Reporting", "Track Changes & Macros", "Assignment & Projects"] 
            },
            { 
                title: "TALLY PRIME (GST)", 
                icon: "FileText", 
                topics: ["Basics of Accounting", "Accounting Principal", "Golden Rules", "Voucher Entries (Receipt, Journal, Contra)", "Inventory Management", "GST Setup & Transactions", "GST Returns, TDS, TCS", "Assignment & Projects"] 
            },
            { 
                title: "TAXATION AUDITING", 
                icon: "Landmark", 
                topics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats", "GST Return filing", "Assignment & Projects"] 
            },
            { 
                title: "MANAGEMENT SKILL", 
                icon: "Users", 
                topics: ["Understanding Management Skills", "Managing Business Finance", "Project Reports", "Export / Import Management", "Case Study of Successful Employees", "Office & Marketing Management", "Assignment & Projects"] 
            },
            { 
                title: "SHARE MARKET", 
                icon: "BarChart", 
                topics: ["Primary Markets", "Book Building", "IPOS & Listings Trading", "Clearance & Settlements", "Mutual Funds", "Depositories & Derivatives", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "MS Word", logo: "/images/tech/word.svg" },
            { name: "MS Excel", logo: "/images/tech/excel.svg" },
            { name: "MS Powerpoint", logo: "/images/tech/powerpoint.svg" },
            { name: "Tally Prime", logo: "/images/tech/tally.svg" },
            { name: "GST", logo: "/images/tech/gst.jpg" },
            { name: "Income Tax", logo: "/images/tech/tax.png" },
            { name: "MySQL", logo: "/images/tech/mysql.svg" }
        ],
        faqs: [
            { q: "Which is the best Financial Accounting institute in Mumbai?", a: "Primezone Computer Education offers the best DFAM course in Mumbai with practical Tally Prime and Taxation training." },
            { q: "Who can join this accounting course in Mumbai?", a: "This course is ideal for 10th and 12th pass students, commerce graduates, and anyone looking to start a career in finance." },
            { q: "Does the course cover live GST filing?", a: "Yes, our curriculum includes practical training on GST transactions, returns, and portal usage." },
            { q: "Is there placement assistance for accounting roles?", a: "Yes, Primezone provides 100% placement assistance for roles like Accounts Executive, GST Executive, and Banking Assistant." }
        ]
    },
    'programming-course': {
        title: "Diploma In Programming Course in Mumbai | C, C++, Java, Python | Primezone",
        metaDescription: "Learn to code in Mumbai. Master Python, Java, C++, and Web Development. Practical coding classes with placement assistance at Primezone Computer Education.",
        description: "Our Diploma in Programming is a rigorous 1-year journey designed to turn absolute beginners into proficient software developers by mastering core logic and modern stacks.",
        whyLearn: "Coding is the language of the future. By mastering C, Python, and Java, you gain the skills to build apps, automate tasks, and enter high-paying tech roles in Mumbai's thriving IT industry.",
        image: "/images/courses/diploma/dpc.webp",
        hint: "programming course",
        highlights: ["Core Logic with C & C++", "Python & Java Specialization", "Database & SQL Training", "Live Project Development", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: [
            "Building strong programming foundations using C and C++.",
            "Object-Oriented Programming (OOP) concepts in depth.",
            "Advanced application development using Python and Java.",
            "Frontend and Backend integration for web applications.",
            "Database management and efficient SQL querying."
        ],
        careerOpportunities: ["Software Developer", "Python Developer", "Java Developer", "Junior Web Developer", "Database Administrator", "Backend Engineer", "Coding Instructor"],
        syllabus: [
            { 
                title: "C, C++ & DSA", 
                icon: "Code", 
                topics: ["Intro Flow Algorithm", "C Syntax, Operators & Data Types", "C++ with OOPS Concepts", "Control Statements & Loops", "Data Structures & Algorithms", "File Handling & Preprocessor", "Assignment & Projects"] 
            },
            { 
                title: "WEB TECHNOLOGIES", 
                icon: "Globe", 
                topics: ["HTML5 & CSS3 Basics", "JavaScript Fundamentals", "PHP for server-side scripting", "WordPress basics", "Web Hosting & Deployment", "Assignment & Projects"] 
            },
            { 
                title: "PYTHON PROGRAMMING", 
                icon: "Code", 
                topics: ["Python Setup & Basics", "Data Types & Variables", "Control Flow & Loops", "Functions & Modules", "File Handling", "Exception Handling", "Introduction to Libraries", "Assignment & Projects"] 
            },
            { 
                title: "JAVA (CORE & ADVANCED)", 
                icon: "Code", 
                topics: ["Introduction to Java", "Classes, Inheritances, Polymorphism", "GUI with Swing Controls", "Multithreading & Exception Handling", "Servlet, JSP, JDBC", "Assignment & Projects"] 
            },
            { 
                title: ".NET or MERN Stack", 
                icon: "Rocket", 
                topics: ["ASP.NET with C#", "Angular or React", "State Management", "Handling HTTP requests", "Server-side Rendering (SSR)", "API Integration", "Assignment & Projects"] 
            },
            { 
                title: "DATABASE MANAGEMENT", 
                icon: "Settings", 
                topics: ["Introduction to SQL", "MySQL Fundamentals", "DDL & DML Queries", "Joins & Constraints", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "VS Code", logo: "/images/tech/vscode.svg" },
            { name: "Python", logo: "/images/tech/python.svg" },
            { name: "Java", logo: "/images/tech/java.svg" },
            { name: "C Programming", logo: "/images/tech/c.svg" },
            { name: "C++", logo: "/images/tech/cplusplus.svg" },
            { name: "MySQL", logo: "/images/tech/mysql.svg" },
            { name: "HTML5", logo: "/images/tech/html.svg" },
            { name: "CSS3", logo: "/images/tech/css.svg" },
            { name: "JavaScript", logo: "/images/tech/js.svg" },
            { name: "React", logo: "/images/tech/react.svg" }
        ],
        faqs: [
            { q: "Which is the best programming institute in Mumbai?", a: "Primezone Computer Education is a top-rated coding institute in Mumbai, known for its practical approach to languages like Python, Java, and C++." },
            { q: "Do I need prior coding experience?", a: "No, we start from absolute logic building and basic syntax to ensure a strong foundation." },
            { q: "Which programming languages are taught?", a: "You will master C, C++, Python, Java, JavaScript, and SQL as part of this comprehensive diploma." },
            { q: "Is there placement assistance for developers?", a: "Yes, we provide 100% placement support and help students build portfolios to land jobs in top IT companies." }
        ]
    },
    'graphic-animation': {
        title: "Diploma In Graphic & Animation (DGA) Course in Mumbai | Photoshop, 3ds Max | Primezone",
        metaDescription: "Best Graphic Design and Animation Course in Mumbai. Learn Photoshop, Illustrator, 3ds Max, and After Effects. Job-oriented creative training at Primezone.",
        description: "The Diploma in Graphic & Animation (DGA) is a powerhouse program designed for creative minds. From high-end branding to professional VFX and 3D architectural modeling, this course covers the entire creative spectrum.",
        whyLearn: "The creative economy is booming. Mumbai's film, advertising, and real estate sectors are in constant need of skilled visual storytellers who can handle design, video editing, and 3D visualization.",
        image: "/images/courses/diploma/dga.webp",
        hint: "graphic animation",
        highlights: ["Graphic & Web Designing", "Video & Sound Editing", "After Effects (VFX)", "3Ds MAX (2D-3D)", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: [
            "Mastery of Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
            "Professional Web Design with HTML5, CSS, and WordPress.",
            "High-end Video and Sound editing with Premiere Pro.",
            "Cinematic VFX and Motion Graphics using After Effects.",
            "3D Architectural Modeling and Interior Design with 3Ds MAX."
        ],
        careerOpportunities: ["Graphic Designer", "3D Modeler", "Video Editor", "VFX Artist", "UI Designer", "Web Designer", "Motion Graphic Artist"],
        syllabus: [
            { 
                title: "GRAPHIC DESIGNING", 
                icon: "Palette", 
                topics: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "CorelDRAW", "Canva Pro", "Assignment & Projects"] 
            },
            { 
                title: "WEB DESIGNING", 
                icon: "Globe", 
                topics: ["Introduction to Web Design", "Html 5 & CSS", "Adobe Animate", "Web Hosting & Domain", "Adobe Dreamweaver", "Assignment & Projects"] 
            },
            { 
                title: "ADOBE ANIMATE", 
                icon: "Bot", 
                topics: ["Frame By Frame Animation", "Movie Clips, Symbols, Buttons", "Shape Tweening", "Walk Through Animation", "Smoke Animation", "Action Script 2.0", "Assignment & Projects"] 
            },
            { 
                title: "VIDEO SOUND EDITING", 
                icon: "LayoutTemplate", 
                topics: ["Introduction Premiere Pro", "Interface & Panels", "Basic Editing Tools", "Video Motion & Opacity", "Slow/Fast Motion", "Movie Titles", "Video Transitions & Effects", "Green Screen Chroma Editing", "Assignment & Projects"] 
            },
            { 
                title: "3Ds MAX (2D-3D)", 
                icon: "Rocket", 
                topics: ["Interface & Navigation", "2D Drafting to 3D", "3D Modeling & Modifiers", "Architectural Design", "Materials & Texturing", "Lighting & Cameras", "Animation Basics", "Environment & Effects", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "Photoshop", logo: "/images/tech/photoshop.svg" },
            { name: "Illustrator", logo: "/images/tech/illustrator.svg" },
            { name: "InDesign", logo: "/images/tech/indesign.svg" },
            { name: "CorelDRAW", logo: "/images/tech/coreldraw.svg" },
            { name: "Canva", logo: "/images/tech/canva.svg" },
            { name: "HTML5", logo: "/images/tech/html.svg" },
            { name: "CSS3", logo: "/images/tech/css.svg" },
            { name: "Premiere Pro", logo: "/images/tech/premiere.svg" },
            { name: "After Effects", logo: "/images/tech/after-effects.svg" },
            { name: "3Ds Max", logo: "/images/tech/3dsMax.svg" }
        ],
        faqs: [
            { q: "Which is the best Graphic Design institute in Mumbai?", a: "Primezone Computer Education is considered the best for Graphic & Animation training, offering all industry-standard Adobe tools and 3Ds MAX." },
            { q: "Does this course include 3D modeling?", a: "Yes, Module 5 is entirely dedicated to 3Ds MAX, covering both 2D drafting and advanced 3D architectural modeling." },
            { q: "Will I learn video editing and VFX?", a: "Absolutely. The course includes professional video editing with Premiere Pro and VFX/Motion Graphics with After Effects." },
            { q: "What are the job opportunities after DGA?", a: "Graduates can work as Graphic Designers, Video Editors, 3D Visualizers, or VFX Artists in top creative agencies." }
        ]
    },
    'ethical-hacking': {
        title: "Cyber Security & Ethical Hacking Course in Mumbai | Primezone",
        metaDescription: "Best Cyber Security & Ethical Hacking Course in Mumbai. Learn Linux, Networking, Web App Security, and Malware Analysis. Job-oriented training with placement.",
        description: "Become a certified Cyber Security professional. Our Diploma in Ethical Hacking is a comprehensive program that covers everything from networking fundamentals and Linux security to advanced web application exploitation and malware analysis.",
        whyLearn: "Cybersecurity is one of the fastest-growing careers globally. With digital threats on the rise, companies in Mumbai and beyond are actively hiring experts to protect their data. This course equips you with the mindset and tools of a professional ethical hacker.",
        image: "/images/courses/diploma/deh.webp",
        hint: "cyber security",
        highlights: ["Networking & OSI Model", "Linux & System Security", "Web App Penetration Testing", "Malware Analysis Basics", "Learning Mode: Offline | Hybrid | Online"],
         whatYouWillLearn: [
            "Mastery of Networking Fundamentals, IP Addressing, and TCP/IP models.",
            "Advanced Linux system security, file commands, and virtual lab setup.",
            "Conducting professional Footprinting, Scanning, and Enumeration.",
            "Exploiting Web Application vulnerabilities like SQLi and XSS (OWASP Top 10).",
            "Understanding Malware types, DDoS concepts, and Incident Response basics."
        ],
        careerOpportunities: ["Cyber Security Analyst", "Ethical Hacker", "Digital Forensics Expert", "SOC Analyst", "Malware Analyst", "Forensics Expert", "Network Security Engineer"],
        syllabus: [
            { 
                title: "C.S & NETWORKING FUNDAMENTALS", 
                icon: "MonitorCheck", 
                topics: ["Introduction to Cyber Security", "Types of Hackers (White, Black, Grey Hat)", "Cyber Laws & Ethics", "Common Cyber Attacks", "Networking Basics", "OSI & TCP/IP Model", "IP Addressing & Subnetting", "Ports & Protocols", "Assignment & Projects"] 
            },
            { 
                title: "LINUX & SYSTEM SECURITY", 
                icon: "TerminalSquare", 
                topics: ["Introduction to Linux", "File System & Commands", "User & Permission Management", "Windows Security Basics", "Installing & Setting up Virtual Lab", "Security Hardening Basics", "Assignment & Projects"] 
            },
            { 
                title: "ETHICAL HACKING CONCEPTS", 
                icon: "Search", 
                topics: ["Footprinting & Reconnaissance", "Scanning & Enumeration", "Vulnerability Assessment", "Social Engineering Concepts", "Password Cracking Concepts", "Wireless Network Basics", "Nmap, Wireshark Mastery", "Assignment & Projects"] 
            },
            { 
                title: "WEB APPLICATION SECURITY", 
                icon: "Code", 
                topics: ["SQL Injection", "Cross-Site Scripting (XSS)", "OWASP Top 10", "Firewall Concepts", "IDS & IPS", "VPN & Network Defense", "Burp Suite", "Metasploit", "Assignment & Projects"] 
            },
            { 
                title: "MALWARE CONCEPTS", 
                icon: "BugPlay", 
                topics: ["Malware Types", "Basic Malware Analysis", "DoS & DDoS Concepts", "Cloud Security Basics", "Mobile Security Introduction", "Incident Response Basics", "Assignment & Projects"] 
            },
            { 
                title: "REAL-WORLD PROJECTS", 
                icon: "Rocket", 
                topics: ["Website Security Testing", "Network Vulnerability Assessment", "WiFi Security Testing", "Security Audit Simulation", "Final Capstone Project", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "Kali Linux", logo: "/images/tech/linux.svg" },
            { name: "Wireshark", logo: "/images/tech/wireshark.svg" },
            { name: "Nmap", logo: "/images/tech/nmap.svg" },
            { name: "Metasploit", logo: "/images/tech/Metasploit.svg" },
            { name: "Hacking", logo: "/images/tech/hacker.svg" }
        ],
        faqs: [
            { q: "Which is the best Cyber Security institute in Mumbai?", a: "Primezone Computer Education offers the most practical Ethical Hacking and Cyber Security course in Mumbai, featuring real-world lab environments." },
            { q: "Do I need coding for Ethical Hacking?", a: "Basic understanding of HTML, JS, and SQL is helpful for Web Security, and Python is great for automation—all of which are touched upon in our course." },
            { q: "Is there placement assistance for Cyber Security?", a: "Yes, we provide 100% placement support for roles like SOC Analyst, Security Engineer, and Malware Analyst in Mumbai." },
            { q: "Who can join this course?", a: "Students from IT, Science, or Commerce backgrounds, as well as working professionals looking to transition into cybersecurity, can enroll." }
        ]
    },
    'digital-marketing': {
        title: "Diploma In Digital Marketing (DDM) Course in Mumbai | Primezone",
        metaDescription: "Join the best Digital Marketing Course in Mumbai at Primezone Computer Education. Learn SEO, SEM, SMM, and Web Design with practical training and placement.",
        description: "The Diploma in Digital Marketing (DDM) is an extensive program covering the entire digital ecosystem—from search engines and social media to professional creative design and video production.",
        whyLearn: "Digital Marketing is the heartbeat of modern business. In Mumbai's fast-paced market, businesses are shifting budgets online. Mastering DDM ensures you become a highly valued asset for any brand or agency.",
        image: "/images/courses/diploma/ddm.webp",
        hint: "digital marketing",
        highlights: ["S.E.O & S.E.M Mastery", "S.M.M & Content Strategy", "Graphic & Web Designing", "Video & Sound Editing", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: [
            "Ranking websites on Google using On-Page, Off-Page, and Technical SEO.",
            "Managing viral social media campaigns on Facebook, Instagram, and LinkedIn.",
            "Running high-ROI paid ads using Google Ads and Search Engine Marketing.",
            "Professional creative designing with Adobe suite and CorelDRAW.",
            "Building business websites with WordPress and editing viral video content."
        ],
        careerOpportunities: ["Google Ads Specialist", "SEO Executive", "SMM Executive", "Content Marketer", "YouTube Executive", "Web Designer", "SEM Executive"],
        syllabus: [
            { 
                title: "S.E.O (Search Engine Optimization)", 
                icon: "Search", 
                topics: ["S.E.O Fundamentals", "Keyword Research", "On-Page S.E.O", "Content Optimization", "Technical S.E.O", "Off-Page S.E.O, Local S.E.O", "S.E.O Tools & Analytics", "S.E.O Errors & Penalties", "Assignment & Projects"] 
            },
            { 
                title: "S.M.M (Social Media Marketing)", 
                icon: "Users", 
                topics: ["Introduction to S.M.M", "Social Media Strategy", "Platform Wise Marketing", "Facebook, Instagram, LinkedIn", "Youtube & Email Marketing", "Content Creation", "Paid Social Media Advertising", "Growth & Optimization", "Assignment & Projects"] 
            },
            { 
                title: "S.E.M (Search Engine Marketing)", 
                icon: "Megaphone", 
                topics: ["Keyword Research", "Google Ads Setup", "Ad Creation & Copywriting", "Bidding & Budget Strategy", "Targeting Audience", "Conversion Tracking", "Advance S.E.M", "Campaign Optimization", "Assignment & Projects"] 
            },
            { 
                title: "GRAPHIC DESIGNING", 
                icon: "Palette", 
                topics: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "CorelDRAW", "Canva Pro", "Assignment & Projects"] 
            },
            { 
                title: "WEB DESIGNING", 
                icon: "Globe", 
                topics: ["Html 5, CSS, Javascript", "BootStrap", "Web Hosting, Domain", "Assignment & Projects"] 
            },
            { 
                title: "VIDEO & SOUND EDITING", 
                icon: "LayoutTemplate", 
                topics: ["Interface & Panel (Workspace)", "Basic Editing Tools, Razer", "Slow Fast Motion", "Titles, Movie Titles", "Lower Third Motions", "Transition & Video Effects", "Green Screen Chroma Editing", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "Google Ads", logo: "/images/tech/google-ads.svg" },
            { name: "Analytics", logo: "/images/tech/ga.svg" },
            { name: "SEO", logo: "/images/tech/seo.svg" },
            { name: "Google Search Console", logo: "/images/tech/gsc.svg" },
            { name: "Meta Advertising", logo: "/images/tech/meta.svg" },
            { name: "Facebook Ads", logo: "/images/tech/fb.svg" },
            { name: "Instagram", logo: "/images/tech/instagram.svg" },
            { name: "HTML", logo: "/images/tech/html.svg" },
            { name: "CSS", logo: "/images/tech/css.svg" },
            { name: "BootStrap", logo: "/images/tech/bootstrap.svg" },
            { name: "Photoshop", logo: "/images/tech/photoshop.svg" },
            { name: "Illustrator", logo: "/images/tech/illustrator.svg" },
            { name: "Premiere Pro", logo: "/images/tech/premiere.svg" },
            { name: "CorelDRAW", logo: "/images/tech/coreldraw.svg" },
            { name: "Canva", logo: "/images/tech/canva.svg" }
        ],
        faqs: [
            { q: "Which is the best Digital Marketing institute in Mumbai?", a: "Primezone Computer Education is widely recognized for its practical DDM course, offering live campaign experience and placement." },
            { q: "Who can join a DDM course in Mumbai?", a: "Graduates, students after 12th, business owners, and working professionals can join this course." },
            { q: "Does the course include graphic design and video editing?", a: "Yes, our DDM is unique as it integrates professional graphic design and video editing to make you a complete digital marketer." },
            { q: "Is placement support provided?", a: "Yes, we provide 100% placement assistance for roles in top marketing agencies and corporate offices." }
        ]
    },
    'full-stack-development': {
        title: "Full-Stack Development Course in Mumbai | Frontend & Backend | Primezone",
        metaDescription: "Master Full-Stack Web Development in Mumbai. Learn React, Node.js, Java, and Databases. Professional coding classes with placement assistance at Primezone.",
        description: "The Full-Stack Development program at Primezone is a 1-year career-defining course that takes you from basic web layouts to building complex, data-driven enterprise applications.",
        whyLearn: "Full-stack developers are the most sought-after professionals in the tech industry. Mastering both frontend and backend makes you highly versatile and command top salaries in Mumbai's IT sector.",
        image: "/images/courses/diploma/fullstack.webp",
        hint: "full stack",
        highlights: ["React & Angular Mastery", "Node.js & Python Backend", "Java Enterprise Tech", "Database & Cloud Setup", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: [
            "Building responsive, high-performance user interfaces with React.",
            "Creating scalable server-side logic using Node.js and Python.",
            "Developing enterprise-grade applications with Java, Hibernate, and Spring.",
            "Managing complex datasets with MySQL and MongoDB.",
            "Full project lifecycle from development to cloud hosting."
        ],
        careerOpportunities: ["Full-Stack Developer", "Frontend Engineer", "Backend Developer", "Node.js Specialist", "Java Developer", "Software Engineer"],
        syllabus: [
            { 
                title: "FRONTEND TECHNOLOGIES", 
                icon: "Code", 
                topics: ["HTML5 & CSS3", "Bootstrap & Tailwind", "JavaScript ES6+", "ReactJS / AngularJS", "State Management", "API Integration", "Assignment & Projects"] 
            },
            { 
                title: "BACKEND TECHNOLOGIES", 
                icon: "Code", 
                topics: ["Node.js & Express.js", "Python / PHP / Laravel", "RESTful API Development", "Authentication & JWT", "Middleware & Security", "Assignment & Projects"] 
            },
            { 
                title: "JAVA TECHNOLOGY", 
                icon: "Code", 
                topics: ["Core Java Foundations", "Advanced Java", "Hibernate Framework", "Spring Boot", "Microservices Architecture", "Assignment & Projects"] 
            },
            { 
                title: "DATABASE & DEPLOYMENT", 
                icon: "Settings", 
                topics: ["MySQL (Relational)", "MongoDB (NoSQL)", "Git & GitHub", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "VS Code", logo: "/images/tech/vscode.svg" },
            { name: "React", logo: "/images/tech/react.svg" },
            { name: "Angular", logo: "/images/tech/angular.svg" },
            { name: "Node.js", logo: "/images/tech/node.svg" },
            { name: "Express JS", logo: "/images/tech/express.svg" },
            { name: "Java", logo: "/images/tech/java.svg" },
            { name: "SpringBoot", logo: "/images/tech/spring.svg" },
            { name: "Hibernate", logo: "/images/tech/hibernate.svg" },
            { name: "PHP", logo: "/images/tech/php.svg" },
            { name: "Django", logo: "/images/tech/django.svg" },
            { name: "MySQL", logo: "/images/tech/mysql.svg" },
            { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
            { name: "Github", logo: "/images/tech/github.svg" },
            { name: "HTML5", logo: "/images/tech/html.svg" },
            { name: "CSS3", logo: "/images/tech/css.svg" },
            { name: "JavaScript", logo: "/images/tech/js.svg" }
        ],
        faqs: [
            { q: "Which is the best Full-Stack institute in Mumbai?", a: "Primezone Computer Education is a top choice for practical Full-Stack training, covering the MERN stack and Java enterprise tech." },
            { q: "What is the duration of the Full-Stack course?", a: "This is a comprehensive 1-year diploma program designed for job readiness." },
            { q: "Is there placement assistance?", a: "Yes, we provide 100% placement support and help build a professional GitHub portfolio." },
            { q: "Who should join this course?", a: "IT graduates, engineers, and coding enthusiasts looking for a serious career in software development." }
        ]
    },
    'data-analysis': {
        title: "Data Analytics Course in Mumbai | Excel, Power BI, Python Training | Primezone",
        metaDescription: "Best Data Analytics Course in Mumbai. Learn Excel, Power BI, SQL, Python, and Tableau. Practical training with placement assistance in Jogeshwari and Vile Parle.",
        description: "Primezone Computer Education offers one of the best Data Analytics Courses in Mumbai designed for students and working professionals. Our course covers industry tools like Excel, Power BI, SQL, and Python to help you become a skilled data analyst.",
        whyLearn: "Data analytics is one of the fastest-growing careers in India. Companies rely on data to make important business decisions. By joining a data analytics training program, you can learn how to collect, analyze, and visualize data using modern tools.",
        image: "/images/courses/diploma/dataanalysis.webp",
        hint: "data analytics",
        highlights: ["Advanced Excel & MIS", "Power BI Dashboards", "MySQL Data Management", "Python for Analytics", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: [
            "Advanced Data Analysis and MIS Reporting using Excel.",
            "Creating high-impact business dashboards with Power BI and Tableau.",
            "Managing and querying large datasets with MySQL.",
            "Automating data processing and analysis using Python.",
            "Statistical modeling and data storytelling techniques."
        ],
        careerOpportunities: ["Data Analyst", "Business Analyst", "MIS Executive", "Data Visualizer", "Operations Analyst", "Reporting Manager"],
        syllabus: [
            { 
                title: "ADVANCED EXCEL", 
                icon: "BarChart", 
                topics: ["Pivot Tables & Pivot Charts", "Advanced Conditional Formatting", "V-Lookup, H-Lookup, X-Lookup", "What-if Analysis", "Macros & MIS Reporting", "Dynamic Dashboards", "Assignment & Projects"] 
            },
            { 
                title: "POWER BI", 
                icon: "BarChart", 
                topics: ["ETL with Power Query", "Data Modeling & Relationships", "DAX Formulas", "Interactive Reports", "Publishing to Cloud", "Assignment & Projects"] 
            },
            { 
                title: "MYSQL", 
                icon: "Code", 
                topics: ["SQL Fundamentals", "DDL & DML Commands", "Complex Joins & Subqueries", "Aggregates & Constraints", "Stored Procedures", "Assignment & Projects"] 
            },
            { 
                title: "PYTHON", 
                icon: "Bot", 
                topics: ["Python Syntax & Basics", "Control Flow & Data Structures", "Functions & Modules & Exception Handling", "Numpy & Pandas Libraries", "Matplotlib & Seaborn Visualization", "Data Cleaning Techniques", "Assignment & Projects"] 
            },
            { 
                title: "TABLEAU", 
                icon: "BarChart", 
                topics: ["Tableau Basics", "Deep Diving with Data", "Mapping in Tableau", "Calculations & Workbooks", "Advanced Dashboards", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "MS Excel", logo: "/images/tech/excel.svg" },
            { name: "Power BI", logo: "/images/tech/powerbi.svg" },
            { name: "Tableau", logo: "/images/tech/tableau.svg" },
            { name: "Python", logo: "/images/tech/python.svg" },
            { name: "MySQL", logo: "/images/tech/mysql.svg" }
        ],
        faqs: [
            { q: "Which is the best data analytics institute in Mumbai?", a: "Primezone Computer Education offers one of the best data analytics courses with practical training and placement guidance." },
            { q: "Who can join a data analyst course in Mumbai?", a: "Students from commerce, science, IT, and working professionals can join this program." },
            { q: "Which tools are taught in this course?", a: "You will master Excel, Power BI, SQL, Python, and Tableau." },
            { q: "Is there placement support?", a: "Yes, we provide 100% placement assistance after completing the data analyst course in Mumbai." }
        ]
    },

    // --- SHORT TERM COURSES ---
    'office-automation': {
        title: "Office Automation Course in Mumbai | MS Office & Internet Skills | Primezone",
        metaDescription: "Best Office Automation Course in Mumbai. Learn MS Word, Excel, PowerPoint, and Web usage. Job-oriented training in Jogeshwari East & West.",
        description: "Master the essential software used in every office environment. Our 2-month Office Automation course turns you into a productive professional.",
        whyLearn: "Office automation is the most basic yet vital skill for any white-collar job in Mumbai. Being fast with Word and Excel is non-negotiable in 2025.",
        image: "/images/courses/short/account/oa.png",
        hint: "office software",
        highlights: ["MS Word Mastery", "Excel Foundations", "PPT Presentations", "Internet Productivity", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Creating professional documents", "Basic data management in Excel", "Designing impact presentations", "Efficient email and web usage"],
        careerOpportunities: ["Front Desk Executive", "Administrative Assistant", "Office Coordinator", "Data Entry Specialist"],
        syllabus: [
            { 
                title: "Computer Fundamentals", 
                icon: "Cpu", 
                topics: ["Introduction to Computer", "Windows Basics", "Typing Practice"] 
            },
            { 
                title: "MS Word & Documentation", 
                icon: "FileText", 
                topics: ["Word Basics", "Formatting Documents", "Mail Merge", "Professional Letters"] 
            },
            { 
                title: "MS Excel & Data Handling", 
                icon: "BarChart", 
                topics: ["Excel Basics", "Basic Functions", "Sorting & Filtering", "Charts"] 
            },
            { 
                title: "PowerPoint & Presentation", 
                icon: "Presentation", 
                topics: ["Slide Design", "Animations", "Business Presentations"] 
            },
            { 
                title: "Internet & Email Skills", 
                icon: "Globe", 
                topics: ["Internet Usage", "Email Writing", "Online Safety"] 
            }
        ],
        tools: [
            { name: "MS Word", logo: "/images/tech/word.svg" },
            { name: "MS Excel", logo: "/images/tech/excel.svg" },
            { name: "MS PowerPoint", logo: "/images/tech/powerpoint.svg" },
            { name: "Windows OS", logo: "/images/tech/windows.svg" },
            { name: "Internet & Email Tools", logo: "/images/tech/browser.svg" },
            { name: "Ai Tool", logo: "/images/tech/ai4.svg" }
        ],
        faqs: [
            { 
                q: "Which Computer Class is the best for Office Automation course in Mumbai?", 
                a: "Primezone Computer Education offers one of the best Office Automation courses in Mumbai with practical training in MS Word, Excel, PowerPoint, and Internet skills." 
            },
            { 
                q: "What is included in an Office Automation course?", 
                a: "The course includes MS Word, MS Excel, PowerPoint, Windows basics, typing practice, and internet/email usage." 
            },
            { 
                q: "Who should join this course?", 
                a: "Students, job seekers, and professionals looking to improve computer skills and office productivity can join this course." 
            },
            { 
                q: "Is this MS Office course beginner-friendly?", 
                a: "Yes, this course is designed for beginners with no prior computer knowledge." 
            },
            { 
                q: "What is the duration of the Office Automation course?", 
                a: "The course duration is typically 2 to 3 months depending on the batch and learning mode." 
            }
        ]
    },
    'ms-office': {
        title: "MS Office Course in Mumbai | Basic to Advanced Word, Excel, PowerPoint Training",
    
        metaDescription: "Enroll in the best MS Office course in Mumbai. Learn MS Word, Excel, PowerPoint from basic to advanced with 100% practical training at Primezone.",
        
        description: "This comprehensive MS Office course covers everything from basic computer skills to advanced features of Word, Excel, and PowerPoint. Designed for beginners and professionals, it ensures complete mastery of office productivity tools.",
        
        whyLearn: "MS Office skills are essential for every job role in Mumbai. From basic documentation to advanced Excel data analysis, this course prepares you for real-world office work.",
        
        image: "/images/courses/short/account/ms.png",
    
        hint: "ms office",
        highlights: [
            "Basic to Advanced Training",
            "Business Documentation Skills",
            "AI Tools for Office Automation",
            "Excel Data Analysis with AI Support",
            "Smart Document & Email Writing",
            "Presentation & Communication Skills",
            "Learning Mode: Offline | Hybrid | Online"
        ],
        
        whatYouWillLearn: [
            "MS Word, Excel & PowerPoint from basic to advanced",
            "Using ChatGPT for document creation and automation",
            "Excel formulas, pivot tables & AI-assisted analysis",
            "Creating presentations faster using AI tools",
            "Professional email writing with AI support"
        ],
        
        careerOpportunities: [
            "Back Office Executive",
            "Office Assistant",
            "Data Entry Operator",
            "Project Coordinator",
            "Administrative Executive"
        ],
        
        syllabus: [
            { 
                title: "Computer Basics", 
                icon: "Cpu", 
                topics: ["Introduction to Computers", "Windows Basics", "Typing Practice"] 
            },
            { 
                title: "MS Word + AI", 
                icon: "FileText", 
                topics: ["Formatting & Styles", "Mail Merge", "AI Document Writing", "Report Creation"] 
            },
            { 
                title: "MS Excel + AI", 
                icon: "BarChart", 
                topics: ["Basic Formulas", "IF, VLOOKUP", "Pivot Tables", "AI Data Analysis"] 
            },
            { 
                title: "PowerPoint + AI", 
                icon: "Presentation", 
                topics: ["Slide Design", "Animations", "AI Presentation Creation"] 
            },
            { 
                title: "AI Tools for Office Work", 
                icon: "Bot", 
                topics: ["ChatGPT Basics", "Prompt Writing", "Email Automation", "Content Generation"] 
            }
        ],
        
        tools: [
            { name: "MS Word", logo: "/images/tech/word.svg" },
            { name: "MS Excel", logo: "/images/tech/excel.svg" },
            { name: "MS PowerPoint", logo: "/images/tech/powerpoint.svg" },
            { name: "MS Outlook", logo: "/images/tech/outlook.svg" },
            { name: "Ai Tools", logo: "/images/tech/ai4.svg" }
        ],
        
        faqs: [
            { 
                q: "Which is the best MS Office + AI course in Mumbai?", 
                a: "Primezone Computer Education offers one of the best MS Office + AI courses in Mumbai with practical training in Word, Excel, PowerPoint, and ChatGPT." 
            },
            { 
                q: "What is included in the MS Office + AI course?", 
                a: "The course includes MS Word, Excel, PowerPoint, and AI tools like ChatGPT for automation, document creation, and data analysis." 
            },
            { 
                q: "Is this course suitable for beginners?", 
                a: "Yes, the course starts from basic computer knowledge and progresses to advanced MS Office and AI skills." 
            },
            { 
                q: "How is AI used in this course?", 
                a: "AI is used to automate document writing, Excel analysis, presentations, and email communication using ChatGPT." 
            },
            { 
                q: "Will I get a certificate after completion?", 
                a: "Yes, you will receive a recognized certificate after successfully completing the course." 
            }
        ]
    },
    'advanced-excel': {
        title: "Advanced Excel Course in Mumbai | MIS Reporting, Dashboards & VBA with AI",
    
        metaDescription: "Join the best Advanced Excel course in Mumbai. Learn MIS reporting, dashboards, Pivot Tables, VBA Macros & AI tools for data analysis.",
        
        description: "Master Advanced Excel skills used in real jobs. This course covers formulas, Pivot Tables, dashboards, VBA automation, and AI tools to handle large datasets efficiently.",
        
        whyLearn: "Advanced Excel is one of the most in-demand skills in Mumbai for MIS, operations, and analyst roles. Adding automation and AI skills can significantly increase your productivity and salary.",
        
        image: "/images/courses/short/account/advexcel.png",
        hint: "advanced excel",
        highlights: [
            "Advanced Excel Formulas & Functions",
            "MIS Reporting & Dashboard Creation",
            "Macros & VBA Automation",
            "Data Cleaning & Analysis",
            "AI Tools for Excel Productivity",
            "Learning Mode: Offline | Hybrid | Online"
        ],
        
        whatYouWillLearn: [
            "Advanced formulas like INDEX-MATCH, IF, SUMIFS",
            "Creating interactive dashboards",
            "Pivot Tables & data analysis techniques",
            "Automating reports using Macros & VBA",
            "Using AI tools for faster Excel work"
        ],
        
        careerOpportunities: [
            "MIS Executive",
            "Data Analyst (Entry-Level)",
            "Operations Analyst",
            "Reporting Executive",
            "Financial Analyst"
        ],
        
        syllabus: [
            { 
                title: "Advanced Excel Functions", 
                icon: "BarChart", 
                topics: ["VLOOKUP, HLOOKUP", "INDEX-MATCH", "IF, Nested IF", "SUMIFS, COUNTIFS"] 
            },
            { 
                title: "Data Analysis & MIS Reporting", 
                icon: "TrendingUp", 
                topics: ["Pivot Tables", "Data Cleaning", "What-if Analysis", "MIS Report Creation"] 
            },
            { 
                title: "Dashboard & Visualization", 
                icon: "LayoutDashboard", 
                topics: ["Dynamic Dashboards", "Charts & Graphs", "Data Visualization"] 
            },
            { 
                title: "Automation with VBA", 
                icon: "Code", 
                topics: ["Macro Recording", "VBA Basics", "Automation Scripts"] 
            },
            { 
                title: "Excel with AI Tools", 
                icon: "Bot", 
                topics: ["Using ChatGPT for Excel", "Formula Generation", "Data Insights with AI"] 
            }
        ],
        
        tools: [
            { name: "Microsoft Excel", logo: "/images/tech/excel.svg" },
            { name: "ChatGPT", logo: "/images/tech/ai4.svg" }
        ],
        
        faqs: [
            { 
                q: "Which is the best Advanced Excel course in Mumbai?", 
                a: "Primezone Computer Education offers one of the best Advanced Excel courses in Mumbai with MIS reporting, dashboards, VBA, and AI training." 
            },
            { 
                q: "What will I learn in Advanced Excel?", 
                a: "You will learn advanced formulas, Pivot Tables, dashboards, MIS reporting, and automation using VBA macros." 
            },
            { 
                q: "Is this course useful for MIS jobs?", 
                a: "Yes, this course is specifically designed for MIS Executive and data analyst roles." 
            },
            { 
                q: "Do you teach VBA and Macros?", 
                a: "Yes, the course includes Macro recording and VBA programming for automation." 
            },
            { 
                q: "How is AI used in this course?", 
                a: "AI tools like ChatGPT are used to generate formulas, automate tasks, and analyze data faster." 
            }
        ]
    },
    'tally-gst': {
    title: "Tally Prime with GST Course in Mumbai | Accounting, Taxation & Returns Training",
    
    metaDescription: "Enroll in the best Tally Prime with GST course in Mumbai. Learn accounting, GST returns, TDS, payroll & Excel with practical training.",
    
    description: "Become a job-ready accountant with our Tally Prime with GST course. Learn practical accounting, taxation, GST return filing, and real business transactions using industry-standard tools.",
    
    whyLearn: "Tally with GST is one of the most in-demand skills in Mumbai for accounting jobs. Businesses require professionals who can handle accounts, taxation, and compliance efficiently.",
    
    image: "/images/courses/short/account/tallygst.png",
    hint: "tally gst course",
    
    highlights: [
        "Tally Prime with Practical Accounting",
        "GST Returns & Compliance",
        "Live Voucher Entry & Real Transactions",
        "Bank Reconciliation & Payroll",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Recording day-to-day accounting transactions",
        "GST invoicing and return filing process",
        "Inventory and stock management",
        "Payroll, TDS, and business accounting",
        "Bank reconciliation and financial reports"
    ],
    
    careerOpportunities: [
        "Tally Operator",
        "Accounts Executive",
        "Junior Accountant",
        "GST Executive",
        "Billing Executive"
    ],
    
    syllabus: [
        { 
            title: "Accounting Fundamentals", 
            icon: "Landmark", 
            topics: ["Accounting Basics", "Ledger Creation", "Journal Entries", "Final Accounts"] 
        },
        { 
            title: "Tally Prime Practical Training", 
            icon: "Calculator", 
            topics: ["Company Creation", "Voucher Entry", "Sales & Purchase", "Bank Reconciliation"] 
        },
        { 
            title: "GST & Taxation", 
            icon: "FileText", 
            topics: ["GST Registration", "GST Invoicing", "RCM", "GST Returns (GSTR-1, GSTR-3B)"] 
        },
        { 
            title: "Inventory Management", 
            icon: "Boxes", 
            topics: ["Stock Groups", "Godown Management", "Order Processing"] 
        },
        { 
            title: "Payroll & TDS", 
            icon: "Users", 
            topics: ["Salary Processing", "PF/ESI Basics", "TDS Calculation"] 
        }
    ],
    
    tools: [
        { name: "Tally Prime", logo: "/images/tech/tally.svg" },
        { name: "GST Portal", logo: "/images/tech/gst.jpg" }
    ],
    
    faqs: [
        { 
            q: "Which is the best Tally course in Mumbai?", 
            a: "Primezone Computer Education offers one of the best Tally Prime with GST courses in Mumbai with practical accounting and taxation training." 
        },
        { 
            q: "What is included in the Tally with GST course?", 
            a: "The course includes accounting basics, Tally Prime, GST returns, inventory management, payroll, and TDS." 
        },
        { 
            q: "Is this course suitable for beginners?", 
            a: "Yes, this course starts from basic accounting concepts and progresses to advanced Tally and GST training." 
        },
        { 
            q: "Will I learn GST return filing?", 
            a: "Yes, you will learn practical GST return filing including GSTR-1 and GSTR-3B." 
        },
        { 
            q: "What jobs can I get after this course?", 
            a: "You can work as a Tally Operator, Accounts Executive, Junior Accountant, or GST Executive." 
        }
    ]
    },
    'web-development': {
    title: "Full Stack Web Development Course in Mumbai | HTML, CSS, JavaScript, React, Node.js + AI",
    
    metaDescription: "Join the best Web Development course in Mumbai. Learn Full Stack development with HTML, CSS, JavaScript, React, Node.js, Git & AI tools.",
    
    description: "Become a job-ready full stack developer by learning frontend, backend, databases, and deployment. This course also includes AI tools to speed up coding and development.",
    
    whyLearn: "Web development is one of the highest-paying and in-demand skills in Mumbai. Learning full stack development with AI tools gives you a strong advantage in tech careers.",
    
    image: "/images/courses/short/programming/webdev.png",
    hint: "full stack web development",
    
    highlights: [
        "Full Stack Development (Frontend + Backend)",
        "Live Projects & Portfolio Building",
        "GitHub & Version Control",
        "Deployment & Hosting",
        "AI Tools for Coding",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Build responsive websites using HTML, CSS, JavaScript",
        "Create dynamic web apps using React",
        "Develop backend APIs using Node.js & Express",
        "Work with databases like MySQL",
        "Deploy websites on live servers",
        "Use AI tools to write and debug code faster"
    ],
    
    careerOpportunities: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Web Designer",
        "Freelance Developer"
    ],
    
    syllabus: [
        { 
            title: "Frontend Development", 
            icon: "Code", 
            topics: ["HTML5", "CSS3", "JavaScript (ES6)", "Responsive Design", "React.js Basics"] 
        },
        { 
            title: "Backend Development", 
            icon: "Server", 
            topics: ["Node.js", "Express.js", "REST APIs", "Authentication Basics"] 
        },
        { 
            title: "Database Management", 
            icon: "Database", 
            topics: ["MySQL", "CRUD Operations", "Data Modeling"] 
        },
        { 
            title: "Version Control & Deployment", 
            icon: "GitBranch", 
            topics: ["Git & GitHub", "Hosting Websites", "Deployment (Netlify / Vercel)"] 
        },
        { 
            title: "AI for Developers", 
            icon: "Bot", 
            topics: ["Using ChatGPT for Coding", "Debugging with AI", "Code Optimization"] 
        }
    ],
    
    tools: [
        { name: "VS Code", logo: "/images/tech/vscode.svg" },
        { name: "HTML5", logo: "/images/tech/html.svg" },
        { name: "CSS3", logo: "/images/tech/css.svg" },
        { name: "JavaScript", logo: "/images/tech/js.svg" },
        { name: "React", logo: "/images/tech/react.svg" },
        { name: "Node.js", logo: "/images/tech/node.svg" },
        { name: "GitHub", logo: "/images/tech/github.svg" },
        { name: "GitHub", logo: "/images/tech/ai2.svg" },
        { name: "Claude", logo: "/images/tech/ai1.svg" }
    ],
    
    faqs: [
        { 
            q: "Which is Computer Class if the best for web development course in Mumbai?", 
            a: "Primezone Computer Education offers one of the best full stack web development courses in Mumbai with practical training and live projects." 
        },
        { 
            q: "Do I need coding experience to join?", 
            a: "No, this course starts from basic HTML and progresses to advanced full stack development." 
        },
        { 
            q: "Will I build real projects?", 
            a: "Yes, you will work on live projects and create a portfolio for job interviews." 
        },
        { 
            q: "What technologies will I learn?", 
            a: "You will learn HTML, CSS, JavaScript, React, Node.js, MySQL, and GitHub." 
        },
        { 
            q: "How is AI used in this course?", 
            a: "AI tools like ChatGPT are used to assist in coding, debugging, and improving development speed." 
        }
    ]
    },
    'web-designing': {
    title: "Web Designing Course in Mumbai | UI/UX, HTML, CSS, JavaScript & Figma Training",
    
    metaDescription: "Join the best Web Designing course in Mumbai. Learn UI/UX design, HTML, CSS, JavaScript, and Figma with practical training and portfolio projects.",
    
    description: "Start your career in web design by learning UI/UX principles, responsive design, and frontend basics. This course includes tools like Figma and AI to create modern, user-friendly websites.",
    
    whyLearn: "Web design is one of the most in-demand creative skills in Mumbai. Businesses need visually appealing and user-friendly websites to grow online.",
    
    image: "/images/courses/short/programming/webdesign.png",
    hint: "web designing ui ux",
    
    highlights: [
        "UI/UX Design Fundamentals",
        "Responsive Website Design",
        "HTML, CSS & JavaScript Basics",
        "Portfolio & Freelancing Skills",
        "AI Tools for Design",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Design modern website layouts using UI/UX principles",
        "Create responsive websites using HTML and CSS",
        "Add interactivity using JavaScript",
        "Design wireframes and prototypes using Figma",
        "Use AI tools for faster design and content creation"
    ],
    
    careerOpportunities: [
        "Web Designer",
        "UI/UX Designer",
        "Frontend Developer (Beginner)",
        "Freelance Web Designer"
    ],
    
    syllabus: [
        { 
            title: "Web Design Fundamentals", 
            icon: "Code", 
            topics: ["HTML5 Structure", "CSS3 Styling", "Box Model", "Basic JavaScript"] 
        },
        { 
            title: "UI/UX Design", 
            icon: "Palette", 
            topics: ["Design Principles", "Color Theory", "Typography", "User Experience Basics"] 
        },
        { 
            title: "Responsive Design", 
            icon: "Smartphone", 
            topics: ["Media Queries", "Flexbox", "CSS Grid", "Mobile-Friendly Design"] 
        },
        { 
            title: "Design Tools", 
            icon: "PenTool", 
            topics: ["Figma Basics", "Wireframing", "Prototyping"] 
        },
        { 
            title: "Portfolio & AI Tools", 
            icon: "Bot", 
            topics: ["Portfolio Creation", "Freelancing Basics", "Using ChatGPT for Design Content"] 
        }
    ],
    
    tools: [
        { name: "HTML5", logo: "/images/tech/html.svg" },
        { name: "CSS3", logo: "/images/tech/css.svg" },
        { name: "JavaScript", logo: "/images/tech/js.svg" },
        { name: "Figma", logo: "/images/tech/figma.svg" },
        { name: "Canva", logo: "/images/tech/canva.svg" },
        { name: "ChatGPT", logo: "/images/tech/ai2.svg" }
    ],
    
    faqs: [
        { 
            q: "Which is the best web designing course in Mumbai?", 
            a: "Primezone Computer Education offers one of the best web designing courses in Mumbai with UI/UX, Figma, and practical project training." 
        },
        { 
            q: "Do I need coding knowledge to join?", 
            a: "No, this course starts from basic HTML and CSS, making it perfect for beginners." 
        },
        { 
            q: "Will I learn UI/UX design?", 
            a: "Yes, the course includes UI/UX fundamentals, wireframing, and prototyping using Figma." 
        },
        { 
            q: "Can I start freelancing after this course?", 
            a: "Yes, you will build a portfolio and learn freelancing basics to start earning." 
        },
        { 
            q: "Is responsive design included?", 
            a: "Yes, creating mobile-friendly and responsive websites is a core part of the course." 
        }
    ]
    },
    'dsa': {
    title: "Data Structures & Algorithms Course in Mumbai | DSA + Interview Preparation with Java/C++",
    
    metaDescription: "Join the best DSA course in Mumbai. Learn Data Structures, Algorithms, problem solving & coding interview preparation with Java/C++ and AI tools.",
    
    description: "Master Data Structures and Algorithms with a strong focus on problem solving and coding interviews. This course prepares you for top tech companies with structured learning and real coding practice.",
    
    whyLearn: "DSA is essential for cracking technical interviews at top companies like Google, Amazon, and Microsoft. Strong problem-solving skills can significantly boost your career in software development.",
    
    image: "/images/courses/short/programming/dsa.png",
    hint: "dsa interview prep",
    
    highlights: [
        "Problem Solving & Coding Practice",
        "DSA for Interview Preparation",
        "Time & Space Complexity Analysis",
        "Real Coding Questions",
        "AI Tools for Learning",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Master core data structures like arrays, stacks, queues, trees, and graphs",
        "Solve coding problems using optimized algorithms",
        "Understand time and space complexity",
        "Practice interview-level questions",
        "Use AI tools to debug and improve code"
    ],
    
    careerOpportunities: [
        "Software Engineer",
        "Backend Developer",
        "Full Stack Developer",
        "Algorithm Engineer"
    ],
    
    syllabus: [
        { 
            title: "Programming Fundamentals", 
            icon: "Code", 
            topics: ["Basic Syntax (Java/C++)", "Loops & Functions", "Problem Solving Basics"] 
        },
        { 
            title: "Linear Data Structures", 
            icon: "Layers", 
            topics: ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues"] 
        },
        { 
            title: "Non-Linear Data Structures", 
            icon: "Share2", 
            topics: ["Trees", "Binary Search Trees", "Heaps", "Graphs"] 
        },
        { 
            title: "Algorithms & Problem Solving", 
            icon: "Cpu", 
            topics: ["Sorting Algorithms", "Searching", "Recursion", "Backtracking"] 
        },
        { 
            title: "AI for Coding", 
            icon: "Bot", 
            topics: ["Using ChatGPT for Debugging", "Code Optimization", "Understanding Concepts Faster"] 
        }
    ],
    
    tools: [
        { name: "VS Code", logo: "/images/tech/vscode.svg" },
        { name: "Java", logo: "/images/tech/java.svg" },
        { name: "C++", logo: "/images/tech/cplusplus.svg" },
        { name: "ChatGPT", logo: "/images/tech/ai2.svg" }
    ],
    
    faqs: [
        { 
            q: "Which is the best DSA course in Mumbai?", 
            a: "Primezone Computer Education offers one of the best DSA courses in Mumbai with structured learning and interview preparation." 
        },
        { 
            q: "Which programming language is used in this course?", 
            a: "You can learn DSA using Java or C++, depending on your preference." 
        },
        { 
            q: "Is this course suitable for beginners?", 
            a: "Basic programming knowledge is recommended, but we revise fundamentals before starting DSA." 
        },
        { 
            q: "Will this course help me crack coding interviews?", 
            a: "Yes, the course includes problem-solving practice, mock interviews, and real coding questions." 
        },
        { 
            q: "How is AI used in this course?", 
            a: "AI tools like ChatGPT are used to debug code, understand algorithms, and improve problem-solving speed." 
        }
    ]
    },
    'python': {
    title: "Python Programming Course in Mumbai | Beginner to Advanced + AI & Automation",
    
    metaDescription: "Join the best Python course in Mumbai. Learn Python programming, automation, data handling, and AI basics with real projects and placement support.",
    
    description: "Master Python from basics to advanced with real-world applications. This course includes automation, data handling, APIs, and AI tools to prepare you for modern tech careers.",
    
    whyLearn: "Python is one of the most in-demand programming languages used in web development, data science, and automation. Learning Python opens multiple career opportunities in Mumbai.",
    
    image: "/images/courses/short/programming/python.png",
    hint: "python programming",
    
    highlights: [
        "Beginner to Advanced Python",
        "Real-World Projects",
        "Automation & Scripting",
        "API Integration",
        "AI Tools for Coding",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Python programming fundamentals and logic building",
        "Object-Oriented Programming (OOP)",
        "Automation scripts for real tasks",
        "Working with APIs and data",
        "Using AI tools to write and debug Python code"
    ],
    
    careerOpportunities: [
        "Python Developer",
        "Automation Engineer",
        "Backend Developer (Beginner)",
        "Data Analyst (Entry-Level)"
    ],
    
    syllabus: [
        { 
            title: "Python Fundamentals", 
            icon: "Code", 
            topics: ["Variables & Data Types", "Loops & Conditions", "Functions"] 
        },
        { 
            title: "Intermediate Python", 
            icon: "Layers", 
            topics: ["Lists, Tuples, Dictionaries", "File Handling", "Error Handling"] 
        },
        { 
            title: "Advanced Python", 
            icon: "Cpu", 
            topics: ["OOP Concepts", "Modules & Packages"] 
        },
        { 
            title: "Python with Data", 
            icon: "BarChart", 
            topics: ["Intro to NumPy", "Pandas Basics", "Data Handling"] 
        },
        { 
            title: "AI Tools for Python", 
            icon: "Bot", 
            topics: ["Using ChatGPT for Coding", "Debugging Code", "Code Optimization"] 
        }
    ],
    
    tools: [
        { name: "Python", logo: "/images/tech/python.svg" },
        { name: "VS Code", logo: "/images/tech/vscode.svg" },
        { name: "Jupyter Notebook", logo: "/images/tech/jupyter.svg" },
        { name: "ChatGPT", logo: "/images/tech/ai2.svg" }
    ],
    
    faqs: [
        { 
            q: "Which is the best Python course in Mumbai?", 
            a: "Primezone Computer Education offers one of the best Python courses in Mumbai with practical training and real-world projects." 
        },
        { 
            q: "Is Python suitable for beginners?", 
            a: "Yes, Python is one of the easiest programming languages and is perfect for beginners." 
        },
        { 
            q: "What can I do after learning Python?", 
            a: "You can work in web development, automation, data analysis, or continue into AI and machine learning." 
        },
        { 
            q: "Does this course include projects?", 
            a: "Yes, you will work on real-world projects and automation scripts." 
        },
        { 
            q: "How is AI used in this course?", 
            a: "AI tools like ChatGPT are used to help write code, debug errors, and improve learning speed." 
        }
    ]
    },
    'seo': {
    title: "SEO Course in Mumbai | On-Page, Off-Page & Technical SEO Training | Primezone",
    
    metaDescription: "Learn SEO in Mumbai with Primezone. Master On-Page, Off-Page, Technical SEO, Google Analytics, and AI-powered SEO strategies. Hands-on training with placement support.",
    
    description: "Become an expert in Search Engine Optimization (SEO). Learn to increase website visibility, drive organic traffic, and rank on Google using modern SEO strategies and AI tools.",
    
    whyLearn: "SEO is one of the most in-demand digital skills in Mumbai. Skilled SEO professionals help companies save millions in ads and improve online presence sustainably.",
    
    image: "/images/courses/short/dm/SEO.png",
    hint: "seo training",
    
    highlights: [
        "Google Algorithm Mastery",
        "Keyword Research & Strategy",
        "On-Page & Off-Page SEO",
        "Technical SEO & Audit",
        "AI SEO Tools",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Perform keyword research for high-volume, low-competition terms",
        "Optimize website content for users and search engines",
        "Build high-quality backlinks and improve domain authority",
        "Conduct technical SEO audits and fix site issues",
        "Leverage AI tools for SEO content creation and optimization"
    ],
    
    careerOpportunities: [
        "SEO Analyst",
        "Digital Marketing Specialist",
        "Content Strategist",
        "Search Engine Manager",
        "SEO Consultant"
    ],
    
    syllabus: [
        { 
            title: "SEO Foundations", 
            icon: "Search", 
            topics: ["How Search Engines Work", "Keyword Discovery", "Competitor Analysis", "Google Algorithm Basics"] 
        },
        { 
            title: "On-Page SEO", 
            icon: "FileText", 
            topics: ["Meta Tags & Headings", "Content Optimization", "Internal Linking", "Mobile SEO"] 
        },
        { 
            title: "Off-Page SEO", 
            icon: "Link", 
            topics: ["Link Building Strategies", "Guest Posting", "Social Signals", "Reputation Management"] 
        },
        { 
            title: "Technical SEO", 
            icon: "Settings", 
            topics: ["Sitemaps & Robots.txt", "Page Speed Optimization", "Schema Markup", "Core Web Vitals"] 
        },
        { 
            title: "AI & SEO Tools", 
            icon: "Bot", 
            topics: ["Using SEMrush, Ahrefs, Analytics", "AI content optimization", "SEO automation workflows"] 
        }
    ],
    
    tools: [
        { name: "Google Analytics", logo: "/images/tech/ga.svg" },
        { name: "WordPress", logo: "/images/tech/wordpress.svg" },
        { name: "SEMrush", logo: "/images/tech/seo.svg" },
        { name: "ChatGPT", logo: "/images/tech/ai2.svg" }
    ],
    
    faqs: [
        { 
            q: "Which is the best SEO institute in Mumbai?", 
            a: "Primezone provides expert SEO training with a hands-on approach and AI tools for modern SEO strategies." 
        },
        { 
            q: "Do I need coding knowledge for SEO?", 
            a: "Only basic HTML/CSS is required, which is covered during the course." 
        },
        { 
            q: "Is this a practical course?", 
            a: "Yes, students optimize live websites and perform real SEO audits during training." 
        },
        { 
            q: "How long is the SEO course?", 
            a: "The course is 2 months long with flexible batches (Offline | Hybrid | Online)." 
        },
        { 
            q: "Will I learn AI-based SEO?", 
            a: "Yes, we integrate AI tools like ChatGPT to help with content optimization and SEO automation." 
        }
    ]
    },
    'coreldraw': {
    title: "CorelDRAW Course in Mumbai | Vector Graphic Design & Logo Training | Primezone",
    
    metaDescription: "Learn CorelDRAW in Mumbai. Master vector graphics, logo design, brochures, and print layouts. Hands-on design training at Primezone with certificate.",
    
    description: "Become a professional vector graphic designer using CorelDRAW. This course covers logos, brochures, banners, and all essential print and digital media design skills.",
    
    whyLearn: "CorelDRAW is the industry standard for vector-based design in advertising, branding, and print media in Mumbai. Mastery of CorelDRAW opens multiple career opportunities.",
    
    image: "/images/courses/short/graphics/CorelDRAW.png",
    hint: "vector graphic design",
    
    highlights: [
        "Vector & Logo Design",
        "Print & Digital Layouts",
        "Typography & Color Theory",
        "Illustrations & Branding",
        "Project-Based Learning: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Creating vector illustrations and logos",
        "Designing brochures, flyers, and banners",
        "Applying color theory and typography for professional layouts",
        "Advanced CorelDRAW tools and effects for print-ready designs",
        "Preparing files for print and digital media"
    ],
    
    careerOpportunities: [
        "Graphic Designer",
        "Logo Designer",
        "DTP Operator",
        "Print Media Specialist",
        "Branding & Marketing Designer"
    ],
    
    syllabus: [
        { 
            title: "CorelDRAW Interface", 
            icon: "Palette", 
            topics: ["Workspace Setup", "Tool Overview", "Object & Layer Management"] 
        },
        { 
            title: "Design Essentials", 
            icon: "Brush", 
            topics: ["Vector Tracing", "Logo & Icon Design", "Flyer and Brochure Layouts"] 
        },
        { 
            title: "Advanced Design & Production", 
            icon: "FileText", 
            topics: ["Typography Techniques", "Color Management (CMYK/RGB)", "Exporting & Print Prep"] 
        },
        { 
            title: "Branding Projects", 
            icon: "Star", 
            topics: ["Real Client Project Simulations", "Branding Collaterals", "Portfolio Building"] 
        }
    ],
    
    tools: [
        { name: "CorelDRAW", logo: "/images/tech/coreldraw.svg" }
    ],
    
    faqs: [
        { 
            q: "Which is the best CorelDRAW institute in Mumbai?", 
            a: "Primezone provides industry-relevant CorelDRAW training with hands-on projects for practical learning." 
        },
        { 
            q: "Who should join this course?", 
            a: "Anyone interested in graphic design, print media, branding, or advertising." 
        },
        { 
            q: "Is it practical?", 
            a: "Yes, the course is 100% project-based with real-world design exercises." 
        },
        { 
            q: "Do I get a certificate?", 
            a: "Yes, students receive a government-recognized certificate upon completion." 
        },
        { 
            q: "Will I build a portfolio?", 
            a: "Yes, you will create a professional portfolio ready for job applications or freelance work." 
        }
    ]
    },
    'adobe-photoshop': {
    title: "Adobe Photoshop Course in Mumbai | Photo Editing & Digital Art Training | Primezone",
    
    metaDescription: "Learn Adobe Photoshop in Mumbai. Master photo editing, retouching, digital art, and UI design. Hands-on creative training with AI tools at Primezone.",
    
    description: "Become a professional Photoshop user. From basic photo editing to advanced digital painting, compositing, and UI asset creation, this course covers all essential skills for modern creatives.",
    
    whyLearn: "Photoshop is the industry-standard tool for photo editing, digital art, and UI/UX design. Mastering it opens careers in creative studios, social media, freelancing, and marketing agencies.",
    
    image: "/images/courses/short/graphics/AdobePhotoshop.png",
    hint: "photoshop editing",
    
    highlights: [
        "Photo Retouching & Manipulation",
        "Layer & Mask Management",
        "Compositing & Digital Art",
        "Web & Print Design",
        "AI-Powered Editing Techniques",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Advanced selection and masking tools",
        "Non-destructive editing workflows",
        "Color correction and grading",
        "Creating web and print-ready designs",
        "Digital painting and illustration techniques",
        "AI-assisted editing and content generation"
    ],
    
    careerOpportunities: [
        "Photo Editor",
        "Digital Artist",
        "Social Media Designer",
        "UI/UX Designer",
        "Freelance Graphic Designer"
    ],
    
    syllabus: [
        { 
            title: "Photoshop Basics", 
            icon: "Palette", 
            topics: ["Workspace Overview", "Layer Management", "Selection Tools", "Basic Editing"] 
        },
        { 
            title: "Photo Editing & Retouching", 
            icon: "Brush", 
            topics: ["Masking Techniques", "Healing & Retouching", "Filters & Effects", "Color Correction"] 
        },
        { 
            title: "Design for Web & Print", 
            icon: "FileText", 
            topics: ["File Formats & Optimization", "Web & UI Assets", "Print Layout Prep", "Typography & Layout Design"] 
        },
        { 
            title: "Advanced Digital Art & AI Tools", 
            icon: "Star", 
            topics: ["Digital Painting", "Compositing Techniques", "AI-Assisted Editing", "Portfolio Project Creation"] 
        }
    ],
    
    tools: [
        { name: "Adobe Photoshop", logo: "/images/tech/photoshop.svg" }
    ],
    
    faqs: [
        { 
            q: "Which is the best Computer Class for Photoshop in Mumbai?", 
            a: "Primezone is highly rated for hands-on, practical Photoshop training with AI-assisted techniques." 
        },
        { 
            q: "Is this course practical?", 
            a: "Yes, it is 100% project-based, including photo editing, digital art, and UI design projects." 
        },
        { 
            q: "Can beginners join?", 
            a: "Absolutely! The course starts from basics and progresses to advanced creative techniques." 
        },
        { 
            q: "How long is the course?", 
            a: "The Photoshop course typically takes 2 months, with flexible offline, hybrid, and online batches." 
        },
        { 
            q: "Will I build a portfolio?", 
            a: "Yes, you will create a professional portfolio ready for jobs or freelance projects." 
        }
    ]
    },
    'power-bi': {
    title: "Power BI Course in Mumbai | Data Visualization & Analytics Training | Primezone",
    
    metaDescription: "Master Power BI in Mumbai. Learn interactive dashboards, data modeling, and DAX for business intelligence. Practical BI training at Primezone.",
    
    description: "Turn raw data into actionable insights with Power BI. Learn to build interactive dashboards, automate reporting, and deliver business intelligence like a pro.",
    
    whyLearn: "Data-driven decision making is the future. Companies in Mumbai need professionals who can analyze data, create insights, and present them visually using Power BI.",
    
    image: "/images/courses/short/programming/powerbi.png",
    hint: "powerbi dashboard",
    
    highlights: [
        "Data Modeling & Transformation",
        "Advanced DAX Formulas",
        "Interactive Dashboards",
        "Power Query & ETL",
        "AI-Powered Analytics",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Connecting to multiple data sources",
        "Cleaning and transforming data with Power Query",
        "Writing advanced DAX measures and calculated columns",
        "Creating interactive visuals and custom dashboards",
        "Publishing and sharing reports via Power BI Service",
        "Leveraging AI visuals and insights in Power BI"
    ],
    
    careerOpportunities: [
        "Business Analyst",
        "BI Developer",
        "Data Visualization Specialist",
        "Reporting Analyst",
        "Power BI Consultant"
    ],
    
    syllabus: [
        { 
            title: "Data Preparation & ETL", 
            icon: "BarChart", 
            topics: ["ETL Concepts", "Power Query Transformations", "Data Merging & Cleaning"] 
        },
        { 
            title: "Data Modeling & DAX", 
            icon: "BarChart", 
            topics: ["Relationships & Star Schema", "Basic to Advanced DAX", "Calculated Columns & Measures"] 
        },
        { 
            title: "Visualization & Reporting", 
            icon: "Palette", 
            topics: ["Interactive Charts & Custom Visuals", "Slicers & Filters", "Dashboard Layouts & Formatting"] 
        },
        { 
            title: "Advanced Analytics & AI", 
            icon: "Star", 
            topics: ["AI Insights in Power BI", "Quick Measures", "Forecasting & Trend Analysis"] 
        }
    ],
    
    tools: [
        { name: "Power BI Desktop", logo: "/images/tech/powerbi.svg" }
    ],
    
    faqs: [
        { 
            q: "Which is the best Computer Class for Power BI in Mumbai?", 
            a: "Primezone offers hands-on Power BI training with real-world business cases and dashboard projects." 
        },
        { 
            q: "Do I need prior Excel knowledge?", 
            a: "Basic Excel is helpful, but all required concepts are taught during the course." 
        },
        { 
            q: "Can beginners join?", 
            a: "Yes, the course starts with basics and progresses to advanced analytics." 
        },
        { 
            q: "How long is the course?", 
            a: "The Power BI course duration is 3 months with flexible batch options." 
        },
        { 
            q: "Do we learn advanced DAX?", 
            a: "Yes, advanced DAX, measures, calculated columns, and AI-powered insights are included." 
        }
    ]
    },
    'taxation-auditing': {
    title: "Taxation & Auditing Course in Mumbai | GST, Income Tax & Audit Training | Primezone",
    
    metaDescription: "Master Taxation and Auditing in Mumbai. Learn Income Tax, GST filing, TDS, and corporate audit procedures at Primezone with practical training.",
    
    description: "Gain practical knowledge of taxation and auditing to excel as a tax consultant or audit professional. Learn real-world filing, reporting, and audit workflows used by Indian businesses.",
    
    whyLearn: "Taxation and auditing skills are highly sought after in Mumbai's corporate and finance sectors. Expertise in GST, Income Tax, and audit compliance ensures stable career opportunities.",
    
    image: "/images/courses/short/account/TaxationAuditing.png",
    hint: "tax audit",
    
    highlights: [
        "Income Tax Filing & ITR Preparation",
        "GST Compliance & Returns",
        "Corporate Audit Procedures",
        "Direct & Indirect Tax Laws",
        "Practical Case Studies",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Preparation and filing of ITR forms",
        "GST portal operations and tax compliance",
        "Basics of bank and corporate audits",
        "TDS calculations and reporting",
        "Audit report preparation and workflows"
    ],
    
    careerOpportunities: [
        "Tax Consultant",
        "Audit Assistant",
        "Accounts Executive",
        "GST Compliance Officer",
        "Corporate Accountant"
    ],
    
    syllabus: [
        { 
            title: "Taxation", 
            icon: "Landmark", 
            topics: ["Income Tax Laws & Filing", "GST Returns & Compliance", "TDS/TCS Accounting", "Direct & Indirect Tax Concepts"] 
        },
        { 
            title: "Auditing", 
            icon: "FileText", 
            topics: ["Bank & Cash Audits", "Corporate Audit Procedures", "Audit Report Preparation", "Internal Controls & Compliance"] 
        }
    ],
    
    tools: [
        { name: "Income Tax Portal", logo: "/images/tech/tax.png" },
        { name: "GST Portal", logo: "/images/tech/gst.jpg" },
        { name: "Tally Prime", logo: "/images/tech/tally.svg" }
    ],
    
    faqs: [
        { q: "Who can join this course?", a: "Commerce graduates, finance students, or anyone interested in accounting, taxation, and auditing." },
        { q: "Is this course practical?", a: "Yes, the course includes hands-on filing, GST compliance, and audit exercises." },
        { q: "Do I get a certificate?", a: "Yes, Primezone provides a government-recognized certificate upon completion." },
        { q: "How long is the course?", a: "The Taxation & Auditing course is typically 2–3 months, with flexible batch timings." }
    ]
    },
    'share-market': {
    title: "Share Market Course in Mumbai | Trading, Investment & Technical Analysis | Primezone",
    
    metaDescription: "Learn Share Market in Mumbai. Master stock trading, technical and fundamental analysis, IPOs, and portfolio management at Primezone Computer Education.",
    
    description: "Gain practical knowledge of the stock market and trading strategies. Learn to analyze stocks, manage a portfolio, and execute trades confidently.",
    
    whyLearn: "Financial literacy and market knowledge are essential for wealth creation. Mumbai’s finance sector values skilled traders and investment advisors.",
    
    image: "/images/courses/short/account/sharemarket.png",
    hint: "stock trading",
    
    highlights: [
        "Technical Analysis & Chart Reading",
        "Fundamental Analysis of Companies",
        "Options and Derivatives Trading",
        "Risk Management Strategies",
        "Portfolio Creation & Management",
        "Live Market Trading Sessions",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Analyzing candlestick patterns and technical indicators",
        "Evaluating stocks using fundamental data",
        "Creating and managing a diversified portfolio",
        "Understanding derivatives and options trading",
        "Risk mitigation and trading psychology",
        "Hands-on live market simulations"
    ],
    
    careerOpportunities: [
        "Stock Trader",
        "Investment Advisor",
        "Equity Analyst",
        "Portfolio Manager",
        "Financial Consultant"
    ],
    
    syllabus: [
        { 
            title: "Technical Analysis", 
            icon: "BarChart", 
            topics: ["Candlestick Patterns", "Trend Lines & Support/Resistance", "Indicators (RSI, MACD, Moving Averages)", "Charting Tools"] 
        },
        { 
            title: "Fundamental Analysis", 
            icon: "FileText", 
            topics: ["Company Financials", "Balance Sheet Analysis", "PE Ratios & Valuation", "IPO Analysis"] 
        },
        { 
            title: "Trading & Risk Management", 
            icon: "Settings", 
            topics: ["Options & Futures Basics", "Trading Strategies", "Portfolio Diversification", "Risk Management Techniques"] 
        }
    ],
    
    tools: [
        { name: "Trading Platforms", logo: "/images/tech/groww.svg" },
        { name: "MS Excel", logo: "/images/tech/excel.svg" },
        { name: "Technical Analysis Software", logo: "/images/tech/tradingview.svg" }
    ],
    
    faqs: [
        { q: "Do you give stock tips?", a: "No, the course teaches you how to analyze and make your own trading decisions." },
        { q: "Is prior experience needed?", a: "No, beginners can join; we start with fundamentals and gradually advance." },
        { q: "Can I practice live trading?", a: "Yes, the course includes live market simulations for practical experience." },
        { q: "Do I get a certificate?", a: "Yes, Primezone provides a government-recognized certificate on completion." }
    ]
    },
    'ccc': {
    title: "CCC Course in Mumbai | Certificate in Computer Concepts | Primezone",
    
    metaDescription: "Join the best CCC Course in Mumbai. Learn basic computer concepts, MS Office, Internet usage, and digital literacy for govt jobs at Primezone.",
    
    description: "The Certificate in Computer Concepts (CCC) is a foundational course that equips learners with essential computer knowledge, digital skills, and office productivity tools required for academics, government jobs, and day-to-day professional work.",
    
    whyLearn: "CCC is a mandatory qualification for many government jobs in India. Mastering computer basics enhances your employability and digital literacy in Mumbai or anywhere in India.",
    
    image: "/images/courses/short/account/ccc.png",
    hint: "ccc certificate",
    
    highlights: [
        "Government Job Preparation",
        "Basic Computer Skills",
        "MS Office & Internet Proficiency",
        "Digital Literacy & Cybersecurity",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Operating systems basics (Windows)",
        "Word processing with MS Word",
        "Spreadsheet fundamentals with MS Excel",
        "PowerPoint presentation basics",
        "Internet browsing and email communication",
        "Digital financial services and cybersecurity awareness"
    ],
    
    careerOpportunities: [
        "Government Job Eligibility",
        "Office Assistant",
        "Data Entry Operator",
        "Administrative Support"
    ],
    
    syllabus: [
        { title: "Computer Fundamentals", icon: "MonitorCheck", topics: ["Windows OS", "File Management", "Basic Troubleshooting"] },
        { title: "Office Applications", icon: "FileText", topics: ["MS Word", "MS Excel", "PowerPoint"] },
        { title: "Internet & Email", icon: "Globe", topics: ["Email Usage", "Browsing Skills", "Digital Transactions"] },
        { title: "Cybersecurity & Digital Literacy", icon: "Shield", topics: ["Safe Internet Practices", "Password Security", "Digital Payment Awareness"] }
    ],
    
    tools: [
        { name: "MS Word", logo: "/images/tech/word.svg" },
        { name: "MS Excel", logo: "/images/tech/excel.svg" },
        { name: "MS PowerPoint", logo: "/images/tech/powerpoint.svg" }
    ],
    
    faqs: [
        { q: "Is the official CCC exam included?", a: "Yes, we prepare you thoroughly for the NIELIT CCC exam with practice tests and guidance." },
        { q: "Who can join?", a: "Students, job seekers, and professionals who want to strengthen their computer basics." },
        { q: "What is the course duration?", a: "Typically 1-2 months depending on learning mode." },
        { q: "Is it beginner-friendly?", a: "Absolutely, no prior computer knowledge is required." }
    ]
    },
    'c-programming': {
    title: "C Programming Course in Mumbai | Logic Building & Coding Fundamentals | Primezone",
    
    metaDescription: "Learn C Programming in Mumbai at Primezone. Build strong coding foundations, master memory management, loops, pointers, and file handling.",
    
    description: "Start your programming journey with C, the foundation of all modern languages. This course emphasizes logic building, memory management, and understanding how computers work at a low level.",
    
    whyLearn: "C programming is essential for anyone aiming to become a professional developer. Understanding C gives you a strong foundation for system programming, embedded systems, and advanced languages.",
    
    image: "/images/courses/short/programming/cprog.png",
    hint: "c code",
    
    highlights: [
        "Logic & Algorithm Building",
        "Memory Management & Pointers",
        "File I/O Handling",
        "Strong Coding Foundations",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Loops, arrays, and conditional statements",
        "Pointers and memory allocation",
        "File input/output operations",
        "Basic data structures like stacks and queues"
    ],
    
    careerOpportunities: [
        "System Programmer",
        "Embedded Systems Developer",
        "Software Developer",
        "Foundation for IT Jobs"
    ],
    
    syllabus: [
        { title: "C Programming", icon: "Code", topics: ["Variables & Data Types", "Operators", "Control Structures", "Functions", "Pointers", "Arrays", "File Handling", "Structure"] }
    ],
    
    tools: [
        { name: "VS Code", logo: "/images/tech/vscode.svg" },
        { name: "C Programming", logo: "/images/tech/c.svg" }
    ],
    
    faqs: [
        { q: "Is C programming hard?", a: "It can be challenging initially, but learning C builds a strong foundation for your coding career." },
        { q: "Do I need prior experience?", a: "No, this course starts from the basics of programming logic." },
        { q: "Can I learn advanced topics here?", a: "Yes, we cover pointers, memory management, file handling, and basic data structures." }
    ]
    },
    'c-plus-plus': {
    title: "C++ Programming Course in Mumbai | OOPS & Advanced Programming | Primezone",
    
    metaDescription: "Master C++ in Mumbai. Learn Object-Oriented Programming, STL, and advanced software development at Primezone with real-world projects.",
    
    description: "Transition from C to C++ and become proficient in object-oriented programming. Build real-world applications using classes, objects, inheritance, and templates.",
    
    whyLearn: "C++ powers game development, high-performance applications, and complex software. Mastering it opens up career paths in system programming, embedded systems, and software architecture.",
    
    image: "/images/courses/short/programming/c++.png",
    hint: "c++ code",
    
    highlights: [
        "Object-Oriented Programming (OOPS)",
        "Inheritance & Polymorphism",
        "Standard Template Library (STL)",
        "Exception Handling & Dynamic Memory",
        "Learning Mode: Offline | Hybrid | Online"
    ],
    
    whatYouWillLearn: [
        "Designing classes and objects",
        "Working with templates and STL",
        "Exception handling and debugging",
        "Dynamic memory management and file handling"
    ],
    
    careerOpportunities: [
        "Game Developer",
        "System Architect",
        "Embedded Systems Engineer",
        "Software Developer"
    ],
    
    syllabus: [
        { title: "C++", icon: "Code", topics: ["Variables & Data Types", "Operators", "Control Structures", "Functions", "Pointers", "Arrays","Classes & Objects", "Constructors & Destructors", "Exception Handling", "Inheritance", "Polymorphism"] }
    ],
    
    tools: [
        { name: "C++", logo: "/images/tech/cplusplus.svg" },
        { name: "VS Code", logo: "/images/tech/vscode.svg" }
    ],
    
    faqs: [
        { q: "Can I join after learning C?", a: "Yes, C++ is the natural next step after C programming." },
        { q: "Do I need prior C++ knowledge?", a: "No, basic programming knowledge helps, and we start from fundamental concepts." },
        { q: "Will I learn real-world applications?", a: "Yes, we focus on practical coding and projects using C++." }
    ]
    },
    'adobe-illustrator': {
        title: "Adobe Illustrator Course in Mumbai | Vector Design Training | Primezone",
        metaDescription: "Learn Illustrator in Mumbai. Master logo design and vector art. Professional creative classes at Primezone.",
        description: "The gold standard for vector graphics. Create everything from simple icons to complex illustrations.",
        whyLearn: "Illustrator is used by every professional graphic designer for scalable artwork like logos.",
        image: "/images/courses/short/graphics/Illustrator.png",
        hint: "illustrator design",
        highlights: ["Logo Creation", "Typography", "Branding", "Vector Tracing", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Pen tool mastery", "Gradient mesh", "Artboard management", "Output for print & web"],
        careerOpportunities: ["Logo Designer", "Illustrator", "Brand Identity Designer"],
        syllabus: [{ title: "Vectors", icon: "Palette", topics: ["Paths", "Shapes", "Colors"] }],
        tools: [{ name: "Illustrator", logo: "/images/tech/illustrator.svg" }],
        faqs: [{ q: "Is it better than Photoshop?", a: "It is different; Illustrator is for vectors while Photoshop is for pixels." }]
    },
    'autocad': {
        title: "AutoCAD 2D & 3D Course in Mumbai | Drafting Training | Primezone",
        metaDescription: "Learn AutoCAD in Mumbai. Master 2D drafting and 3D modeling for Civil, Mech, and Interior Design at Primezone.",
        description: "Become a pro at technical drawing and drafting with the most widely used software in engineering and architecture.",
        whyLearn: "AutoCAD is an essential skill for engineers, architects, and interior designers in Mumbai's construction boom.",
        image: "/images/courses/short/graphics/AutoCAD.png",
        hint: "autocad drafting",
        highlights: ["2D Drafting", "3D Modeling", "Building Plans", "Technical Drawing", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Layer management", "Dimensioning", "Plotting", "Isometric views"],
        careerOpportunities: ["CAD Designer", "Draftsman", "Interior Designer", "Project Engineer"],
        syllabus: [{ title: "Drafting", icon: "LayoutTemplate", topics: ["Coordinates", "Drawing Tools", "Editing Commands"] }],
        tools: [{ name: "AutoCAD", logo: "/images/tech/p.svg" }],
        faqs: [{ q: "Who should join?", a: "Civil, Mechanical, and Electrical students or Interior designers." }]
    },
    'front-end-development': {
        title: "Front-End Development Course in Mumbai | Primezone",
        metaDescription: "Learn Frontend Development in Mumbai. Master HTML, CSS, React, and UI/UX. Practical training at Primezone.",
        description: "Focus on the visual part of the website that users interact with.",
        whyLearn: "Frontend is the gateway to web development. Demand for React developers is at an all-time high.",
        image: "/images/courses/short/programming/frontend.png",
        hint: "frontend code",
        highlights: ["Responsive UI", "React Mastery", "CSS Frameworks", "API Integration", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Building complex UI components", "State management", "Routing", "Optimizing performance"],
        careerOpportunities: ["Frontend Developer", "UI Developer", "React Specialist"],
        syllabus: [{ title: "React", icon: "Code", topics: ["Hooks", "Context API", "Props"] }],
        tools: [{ name: "React", logo: "/images/tech/react.svg" }, { name: "HTML5", logo: "/images/tech/html.svg" }, { name: "CSS3", logo: "/images/tech/css.svg" }, { name: "JavaScript", logo: "/images/tech/js.svg" }],
        faqs: [{ q: "Do I need JS?", a: "Yes, we teach JavaScript extensively before moving to React." }]
    },
    'back-end-development': {
        title: "Back-End Development Course in Mumbai | Primezone",
        metaDescription: "Master Backend Development in Mumbai. Learn Node.js, Express, and Databases. Professional classes at Primezone.",
        description: "Learn the engine behind the scenes—server logic, databases, and APIs.",
        whyLearn: "The backend is the brain of any application. High-scale apps rely on robust backend systems.",
        image: "/images/courses/short/programming/backend.png",
        hint: "backend code",
        highlights: ["Server Logic", "Database Design", "Auth & Security", "REST APIs", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Node.js architecture", "Handling requests", "JWT Authentication", "Middleware development"],
        careerOpportunities: ["Backend Developer", "Node.js Developer", "Database Administrator"],
        syllabus: [{ title: "NodeJS", icon: "Code", topics: ["Modules", "Events", "Express Server"] }],
        tools: [{ name: "Node.js", logo: "/images/tech/node.svg" }, { name: "MySQL", logo: "/images/tech/mysql.svg" }],
        faqs: [{ q: "Which DB is taught?", a: "We cover MySQL and MongoDB." }]
    },
    'database': {
        title: "Database Management (SQL) Course in Mumbai | Primezone",
        metaDescription: "Learn SQL and Database Management in Mumbai. Master MySQL and Data queries. Practical training at Primezone.",
        description: "Master the art of storing, retrieving, and managing large volumes of data.",
        whyLearn: "Every app has a database. Knowing how to write optimized SQL queries is a superpower for developers and analysts.",
        image: "/images/courses/short/programming/database.png",
        hint: "sql database",
        highlights: ["SQL Queries", "Joins & Unions", "Indexing", "DB Normalization", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["CRUD operations", "Designing schemas", "Stored procedures", "Performance tuning"],
        careerOpportunities: ["DBA", "SQL Developer", "Data Analyst"],
        syllabus: [{ title: "SQL", icon: "Settings", topics: ["Select Statements", "Aggregates", "Constraints"] }],
        tools: [{ name: "MySQL", logo: "/images/tech/mysql.svg" }],
        faqs: [{ q: "Is it useful for data science?", a: "Yes, SQL is the first step for any data-related role." }]
    },
    'core-java': {
        title: "Core Java Course in Mumbai | Java Programming Training | Primezone",
        metaDescription: "Learn Core Java in Mumbai. Master OOPS, Exception handling, and Multithreading. Best coding classes at Primezone.",
        description: "Master one of the most reliable and popular programming languages in the world.",
        whyLearn: "Java powers millions of apps and enterprise systems. It is essential for banking and large-scale IT firms.",
        image: "/images/shortterm/java.png",
        hint: "java code",
        highlights: ["OOPS", "Collections Framework", "Threading", "Exception Handling", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Java syntax", "Class and Objects", "Memory management", "GUI basics"],
        careerOpportunities: ["Java Developer", "Android Dev Foundation"],
        syllabus: [{ title: "Core Java", icon: "Code", topics: ["Inheritance", "Interfaces", "Packages"] }],
        tools: [{ name: "Java", logo: "/images/tech/java.svg" }],
        faqs: [{ q: "Is Java still relevant?", a: "Yes, it is the standard for corporate enterprise applications." }]
    },
    'react': {
        title: "ReactJS Course in Mumbai | Frontend Training | Primezone",
        metaDescription: "Learn React in Mumbai. Master hooks, state management, and modern UI. Best frontend classes at Primezone.",
        description: "Master the most popular library for building modern user interfaces.",
        whyLearn: "React developers are the highest-paid frontend engineers in the current Mumbai market.",
        image: "/images/courses/short/programming/react.png",
        hint: "react ui",
        highlights: ["Virtual DOM", "React Hooks", "Redux", "Component Architecture", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["JSX", "Functional components", "Effect and State hooks", "Integration with APIs"],
        careerOpportunities: ["React Developer", "Frontend Engineer"],
        syllabus: [{ title: "Modern UI", icon: "Code", topics: ["Functional Components", "State Management"] }],
        tools: [{ name: "React", logo: "/images/tech/react.svg" }, { name: "JavaScript", logo: "/images/tech/js.svg" }],
        faqs: [{ q: "Do I need HTML/CSS?", a: "Yes, basic knowledge is required." }]
    },
    'smm': {
        title: "Social Media Marketing (SMM) Course in Mumbai | Primezone",
        metaDescription: "Learn SMM in Mumbai. Master Facebook, Instagram, and LinkedIn marketing. Professional classes at Primezone.",
        description: "Learn how to build brands and run viral campaigns on social platforms.",
        whyLearn: "Every business in Mumbai is fighting for attention on social media. Learn the strategy to win.",
        image: "/images/courses/short/dm/smm.png",
        hint: "social media",
        highlights: ["Instagram Growth", "Facebook Ads", "LinkedIn Strategy", "Content Calendars", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Audience targeting", "Ad creative design", "Influencer collaboration", "Analytics tracking"],
        careerOpportunities: ["Social Media Manager", "Content Specialist"],
        syllabus: [{ title: "Strategy", icon: "Users", topics: ["Engagement", "Hashtag Research", "Paid Ads"] }],
        tools: [{ name: "Facebook Ads", logo: "/images/tech/fb.svg" }, { name: "Instagram", logo: "/images/tech/fb.svg" }],
        faqs: [{ q: "Do we learn content creation?", a: "Yes, we cover basic design for social posts." }]
    },
    'sem': {
        title: "Search Engine Marketing (SEM) Course in Mumbai | Primezone",
        metaDescription: "Learn SEM and Google Ads in Mumbai. Master PPC and Paid Search. Practical training at Primezone.",
        description: "Master paid advertising on search engines like Google and Bing.",
        whyLearn: "SEM gives immediate results. Companies value experts who can generate ROI-driven leads quickly.",
        image: "/images/courses/short/dm/sem.png",
        hint: "search ads",
        highlights: ["Google Ads Mastery", "Keyword Bidding", "Conversion Tracking", "Quality Score Optimization", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Setting up search campaigns", "Remarketing", "Display ads", "Budget management"],
        careerOpportunities: ["SEM Specialist", "Performance Marketer"],
        syllabus: [{ title: "PPC", icon: "Search", topics: ["Ad Groups", "Extensions", "Bidding Strategies"] }],
        tools: [{ name: "Google Ads", logo: "/images/tech/google-ads.svg" }],
        faqs: [{ q: "Is it different from SEO?", a: "Yes, SEO is organic while SEM is paid." }]
    },
    'wordpress': {
        title: "WordPress Web Design Course in Mumbai | Primezone",
        metaDescription: "Learn WordPress in Mumbai. Build websites without coding. Best WordPress classes in Jogeshwari at Primezone.",
        description: "Learn to build professional websites without writing a single line of code.",
        whyLearn: "40% of the web is built on WordPress. It's the fastest way to start a web design business.",
        image: "/images/courses/short/dm/wordpress.png",
        hint: "wordpress cms",
        highlights: ["No-Code Design", "WooCommerce", "Theme Customization", "Security & SEO Plugins", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Installation & Setup", "Page building with Elementor", "Blog management", "E-commerce store setup"],
        careerOpportunities: ["WordPress Developer", "Freelance Web Designer"],
        syllabus: [{ title: "CMS", icon: "Globe", topics: ["Plugins", "Widgets", "Custom Post Types"] }],
        tools: [{ name: "WordPress", logo: "/images/tech/wordpress.svg" }],
        faqs: [{ q: "Can I build a blog?", a: "Yes, you will learn to build blogs, portfolios, and e-stores." }]
    },
    'content-creation': {
        title: "Content Creation Course in Mumbai | Primezone",
        metaDescription: "Learn Content Creation in Mumbai. Master Blogging, Scriptwriting, and Design. Professional classes at Primezone.",
        description: "The ultimate course for modern storytellers and digital creators.",
        whyLearn: "Content is the soul of marketing. Learn how to craft messages that resonate and convert.",
        image: "/images/courses/short/dm/Content.png",
        hint: "content creator",
        highlights: ["Blogging", "Video Scripts", "Copywriting", "Creative Design", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Writing for the web", "Graphic design basics", "Video storytelling", "Building a personal brand"],
        careerOpportunities: ["Content Writer", "Digital Creator", "Brand Storyteller"],
        syllabus: [{ title: "Creation", icon: "Palette", topics: ["Storyboarding", "Editing", "Publishing"] }],
        tools: [{ name: "Canva", logo: "/images/tech/canva.svg" }],
        faqs: [{ q: "Is it good for YouTubers?", a: "Yes, it covers the planning and creation aspects perfectly." }]
    },
    'facebook-google-ads': {
        title: "Facebook & Google Ads Course in Mumbai | Primezone",
        metaDescription: "Master FB and Google Ads in Mumbai. ROI-driven performance marketing training at Primezone.",
        description: "Combine the power of the two biggest ad platforms in the world.",
        whyLearn: "These platforms are where the majority of marketing budget is spent. Expertise here means high employability.",
        image: "/images/courses/short/dm/facebookgoogleads.png",
        hint: "paid advertising",
        highlights: ["Meta Ads Manager", "Google Search Ads", "Targeting & Retargeting", "Conversion Optimization", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Campaign structure", "A/B testing", "Scaling budgets", "Analyzing ROI"],
        careerOpportunities: ["Performance Marketer", "Ad Specialist"],
        syllabus: [{ title: "Ads Mastery", icon: "Megaphone", topics: ["Funnel Building", "Conversion Pixels"] }],
        tools: [{ name: "Google Ads", logo: "/images/tech/google-ads.svg" }, { name: "Facebook Ads", logo: "/images/tech/fb.svg" }],
        faqs: [{ q: "Do we get hands-on?", a: "Yes, we run live demo campaigns." }]
    },
    'adobe-indesign': {
        title: "Adobe InDesign Course in Mumbai | Layout Design | Primezone",
        metaDescription: "Learn InDesign in Mumbai. Master book and magazine layout. Professional design classes at Primezone.",
        description: "Learn to create professional layouts for print and digital publishing.",
        whyLearn: "InDesign is the industry standard for publishers, authors, and marketing departments.",
        image: "/images/courses/short/graphics/InDesign.png",
        hint: "indesign layout",
        highlights: ["Typography", "Grid Systems", "Master Pages", "Interactive PDFs", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Book design", "Magazine layouts", "Brochure creation", "Advanced text styling"],
        careerOpportunities: ["Layout Designer", "Desktop Publisher"],
        syllabus: [{ title: "Publishing", icon: "FileText", topics: ["Styles", "Packaging", "Exports"] }],
        tools: [{ name: "InDesign", logo: "/images/tech/indesign.svg" }],
        faqs: [{ q: "Is it for print only?", a: "No, it is used for digital magazines and e-books too." }]
    },
    'adobe-animation': {
        title: "Adobe Animate Course in Mumbai | 2D Animation | Primezone",
        metaDescription: "Learn 2D Animation in Mumbai. Master Adobe Animate for cartoons and web. Best animation classes at Primezone.",
        description: "Bring your characters to life with professional 2D animation techniques.",
        whyLearn: "Animation is used in games, ads, and education. It's a fun and lucrative career path.",
        image: "/images/courses/short/graphics/animates.png",
        hint: "2d animation",
        highlights: ["Frame-by-Frame", "Character Rigging", "Motion Tweens", "ActionScript basics", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Walk cycles", "Lip syncing", "Interactive animations", "Exporting for various formats"],
        careerOpportunities: ["2D Animator", "Cartoonist", "Ad Designer"],
        syllabus: [{ title: "Motion", icon: "Bot", topics: ["Keyframes", "Onion Skinning", "Symbols"] }],
        tools: [{ name: "Animate", logo: "/images/tech/animate.svg" }],
        faqs: [{ q: "Is drawing skill needed?", a: "It helps, but we teach digital drawing tools too." }]
    },
    '3d-max': {
        title: "3DS MAX Course in Mumbai | 3D Modeling Training | Primezone",
        metaDescription: "Learn 3ds Max in Mumbai. Master architectural visualization and 3D modeling at Primezone Computer Education.",
        description: "Master the world's most powerful architectural visualization software.",
        whyLearn: "Real estate companies in Mumbai need 3D experts to create realistic interiors and buildings before they are built.",
        image: "/images/courses/short/graphics/3DMAX.png",
        hint: "3d modeling",
        highlights: ["V-Ray Rendering", "Interior Design", "Texturing & Lighting", "Walkthroughs", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Poly modeling", "Applying materials", "Day/Night lighting", "Advanced rendering"],
        careerOpportunities: ["3D Visualizer", "Interior Designer", "Game Artist"],
        syllabus: [{ title: "Modeling", icon: "Rocket", topics: ["Modifiers", "Compound Objects", "Rendering"] }],
        tools: [{ name: "3ds Max", logo: "/images/tech/p.svg" }],
        faqs: [{ q: "Do you teach V-Ray?", a: "Yes, V-Ray rendering is a core part of the 3ds Max course." }]
    },
    'canva-design': {
        title: "Canva Design Course in Mumbai | Quick Design Skills | Primezone",
        metaDescription: "Learn Canva in Mumbai. Master social media design and presentations. Best quick design classes at Primezone.",
        description: "Learn to create stunning professional designs in minutes using Canva.",
        whyLearn: "Canva is the most efficient tool for small business owners and social media managers.",
        image: "/images/courses/short/graphics/Canva.png",
        hint: "canva design",
        highlights: ["Social Media Graphics", "Brand Kits", "Templates", "Presentation Design", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Color matching", "Font pairing", "Designing for printing", "Video creation in Canva"],
        careerOpportunities: ["Social Media Executive", "Freelance Designer"],
        syllabus: [{ title: "Quick Design", icon: "Palette", topics: ["Elements", "Effects", "Branding"] }],
        tools: [{ name: "Canva", logo: "/images/tech/canva.svg" }],
        faqs: [
            { q: "Is it for professional use?", a: "Yes, Canva is widely used by marketing agencies for speed and efficiency." }
        ]
    },
    'after-effects': {
        title: "After Effects Course in Mumbai | Motion Graphics Training | Primezone",
        metaDescription: "Learn After Effects in Mumbai. Master Motion Graphics and VFX at Primezone. Best professional classes in Mumbai.",
        description: "The industry standard for motion graphics and visual effects.",
        whyLearn: "Bring static designs to life. After Effects is essential for high-end video production and commercials.",
        image: "/images/courses/short/graphics/AfterEffects.png",
        hint: "motion graphics",
        highlights: ["Motion Tracking", "VFX", "Compositing", "Logo Animation", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Keyframe animation", "Masking", "3D layers", "Particle effects"],
        careerOpportunities: ["Motion Designer", "VFX Artist"],
        syllabus: [{ title: "VFX", icon: "Rocket", topics: ["Transitions", "Dynamic Link", "Rendering"] }],
        tools: [{ name: "After Effects", logo: "/images/tech/aftereffects.svg" }],
        faqs: [{ q: "Do I need Premiere Pro?", a: "It's helpful to know both, but you can learn After Effects separately." }]
    },
    'premiere-pro': {
        title: "Adobe Premiere Pro Course in Mumbai | Video Editing | Primezone",
        metaDescription: "Master Premiere Pro in Mumbai. Learn professional video editing at Primezone. 100% practical training.",
        description: "Learn the most used video editing software in the film and YouTube industry.",
        whyLearn: "Professional editing is a high-demand skill. From reels to documentaries, Premiere Pro is the go-to tool.",
        image: "/images/courses/short/graphics/PremierePro.png",
        hint: "video editing",
        highlights: ["Timeline Workflow", "Color Correction", "Audio Editing", "Export Settings", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Ingesting footage", "Storytelling through cuts", "Multi-cam editing", "Text and graphics"],
        careerOpportunities: ["Video Editor", "Content Creator"],
        syllabus: [{ title: "Editing Pro", icon: "LayoutTemplate", topics: ["Sequences", "Transitions", "Effects"] }],
        tools: [{ name: "Premiere Pro", logo: "/images/tech/premiere.svg" }],
        faqs: [{ q: "Can I edit reels?", a: "Yes, we teach specific techniques for vertical social media videos." }]
    },
    'figma': {
        title: "Figma Course in Mumbai | UI/UX Design Training | Primezone",
        metaDescription: "Learn Figma in Mumbai. Master App and Web design prototyping. Top-rated UI/UX classes at Primezone.",
        description: "Master the tool that designers use to build the world's most beautiful apps.",
        whyLearn: "Figma is the #1 tool for UI/UX design. Knowing Figma is your ticket into the product design industry.",
        image: "/images/courses/short/graphics/Figma.png",
        hint: "figma design",
        highlights: ["Prototyping", "Design Systems", "Collaboration", "Auto Layout", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["User flow design", "Wireframing", "High-fidelity UI", "Developer handoff"],
        careerOpportunities: ["UI/UX Designer", "Product Designer"],
        syllabus: [{ title: "UI/UX", icon: "Palette", topics: ["Components", "Variants", "Interactions"] }],
        tools: [{ name: "Figma", logo: "/images/tech/figma.svg" }],
        faqs: [{ q: "Do I need to code?", a: "No, UI/UX design focuses on the visual design and user journey." }]
    },
    'revit': {
        title: "Revit Architecture Course in Mumbai | BIM Training | Primezone",
        metaDescription: "Learn Revit in Mumbai. Master BIM modeling for Architecture and Civil Engineering at Primezone.",
        description: "Learn Building Information Modeling (BIM) with the industry leader, Autodesk Revit.",
        whyLearn: "The construction industry is shifting to BIM. Revit is essential for modern architects and civil engineers in Mumbai.",
        image: "/images/courses/short/graphics/Revit.png",
        hint: "revit modeling",
        highlights: ["BIM Workflow", "Floor Plans", "3D Visualization", "Families & Components", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Creating smart building models", "Generating documentation", "Parametric design", "Rendering"],
        careerOpportunities: ["BIM Modeler", "Architectural Drafter"],
        syllabus: [{ title: "BIM", icon: "Rocket", topics: ["Walls & Roofs", "Views", "Schedules"] }],
        tools: [{ name: "Revit", logo: "/images/tech/p.svg" }],
        faqs: [{ q: "Join after AutoCAD?", a: "Yes, it is the modern evolution of drafting." }]
    },
    'management-skill': {
        title: "Management Skills Course in Mumbai | Primezone",
        metaDescription: "Develop Management Skills in Mumbai. Learn leadership, communication, and office management at Primezone.",
        description: "Enhance your professional persona and leadership abilities.",
        whyLearn: "Technical skills get you the job, but management skills get you the promotion.",
        image: "/images/courses/short/account/management.png",
        hint: "leadership",
        highlights: ["Communication", "Leadership", "Conflict Resolution", "Team Building", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Effective office management", "Public speaking", "Strategic planning", "Managing diversity"],
        careerOpportunities: ["Manager", "Team Lead", "Admin Head"],
        syllabus: [{ title: "Leadership", icon: "Users", topics: ["Time Management", "Ethics", "Decision Making"] }],
        tools: [{ name: "MS Excel", logo: "/images/tech/excel.svg" }],
        faqs: [{ q: "Is it for freshers?", a: "Yes, it's great for anyone starting their career." }]
    }
};
