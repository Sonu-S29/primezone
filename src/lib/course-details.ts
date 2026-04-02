
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
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
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
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
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
            { title: "Document Handling", icon: "MonitorCheck", topics: ["MS Word Basics", "Mail Merge", "Formatting"] },
            { title: "Data Handling", icon: "BarChart", topics: ["Excel Functions", "Filtering", "Chart Basics"] },
            { title: "Web Tools", icon: "Globe", topics: ["Email Etiquette", "Cloud Storage", "Internet Security"] }
        ],
        tools: [
            { name: "Word", logo: "/images/tech/word.svg" },
            { name: "Excel", logo: "/images/tech/excel.svg" },
            { name: "PowerPoint", logo: "/images/tech/p.svg" }
        ],
        faqs: [
            { q: "Which is the best Office Automation institute in Mumbai?", a: "Primezone Computer Education is the leading choice for office skills training in Mumbai." },
            { q: "Who can join an office course in Mumbai?", a: "Anyone looking to improve their daily productivity and documentation skills." },
            { q: "Is this course practical?", a: "Yes, it is 100% hands-on with real office document templates." },
            { q: "What is the duration?", a: "The course is 2 months long with flexible batch timings." }
        ]
    },
    'ms-office': {
        title: "MS Office Course in Mumbai | Word, Excel, PowerPoint Training | Primezone",
        metaDescription: "Join the best MS Office training in Mumbai. Master Microsoft Word, Excel, and PPT for business use. 100% practical classes at Primezone.",
        description: "A deep dive into the Microsoft Office Suite. This course focuses on the advanced features of Word, Excel, and PowerPoint required for business operations.",
        whyLearn: "MS Office is the global standard for documentation and analysis. Mastering these tools ensures you can work in any office, anywhere in Mumbai or beyond.",
        image: "/images/courses/short/account/msoffice.png",
        hint: "ms office",
        highlights: ["Business Documentation", "Data Analysis", "Presentation Skills", "Outlook & OneNote", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Advanced Word Formatting", "Excel Pivot Tables", "Animated Slide Design", "Business Communication tools"],
        careerOpportunities: ["Back Office Executive", "Secretary", "Project Coordinator", "Support Assistant"],
        syllabus: [
            { title: "Word for Business", icon: "FileText", topics: ["Styles", "References", "Table of Contents"] },
            { title: "Excel for Work", icon: "BarChart", topics: ["Vlookup", "Countif", "Sorting & Filtering"] },
            { title: "Pro Presentations", icon: "LayoutTemplate", topics: ["Slide Masters", "Infographics", "Transitions"] }
        ],
        tools: [
            { name: "Word", logo: "/images/tech/word.svg" },
            { name: "Excel", logo: "/images/tech/excel.svg" },
            { name: "PowerPoint", logo: "/images/tech/p.svg" }
        ],
        faqs: [
            { q: "Which is the best MS Office institute in Mumbai?", a: "Primezone is highly recommended for its detailed and job-focused MS Office training." },
            { q: "Who should join an MS Office course in Mumbai?", a: "Students and professionals wanting to excel in administrative and analyst roles." },
            { q: "What tools are covered?", a: "Word, Excel, PowerPoint, and Outlook." },
            { q: "Do I get a certificate?", a: "Yes, you receive a government-recognized certificate upon completion." }
        ]
    },
    'advanced-excel': {
        title: "Advanced Excel Course in Mumbai | MIS Reporting & Macros Training | Primezone",
        metaDescription: "Master Advanced Excel in Mumbai. Learn VLOOKUP, Pivot Tables, and VBA Macros. Industry-oriented training for MIS roles at Primezone.",
        description: "Go beyond basic spreadsheets. Learn the powerful functions that office professionals use to handle large datasets efficiently.",
        whyLearn: "Excel is the world's most common business tool. Advanced knowledge can save you hours of work and boost your salary prospects significantly.",
        image: "/images/courses/short/account/advexcel.png",
        hint: "excel spreadsheet",
        highlights: ["Advanced Formulas", "MIS Reporting", "Macros & VBA", "Data Visualization", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Complex logical functions", "Creating dynamic charts", "Automating tasks with Macros", "Data cleaning techniques"],
        careerOpportunities: ["MIS Executive", "Operations Analyst", "Back Office Head", "Financial Analyst"],
        syllabus: [
            { title: "Functions", icon: "BarChart", topics: ["Lookups", "Index Match", "Sumifs/Countifs"] },
            { title: "Analysis", icon: "BarChart", topics: ["Pivot Tables", "Power Query", "What-if Analysis"] },
            { title: "Automation", icon: "Code", topics: ["VBA Basics", "Recording Macros", "Custom Userforms"] }
        ],
        tools: [
            { name: "Excel", logo: "/images/tech/excel.svg" }
        ],
        faqs: [
            { q: "Which is the best Advanced Excel institute in Mumbai?", a: "Primezone is known for the most advanced Excel and VBA curriculum in Mumbai." },
            { q: "Who can join?", a: "Commerce students, graduates, and working professionals." },
            { q: "Will I learn Macros?", a: "Yes, our advanced course includes Macro recording and VBA basics." },
            { q: "Is there placement assistance?", a: "Yes, we help students find MIS and analyst roles in Mumbai." }
        ]
    },
    'tally-gst': {
        title: "Tally Prime with GST Course in Mumbai | Accounting Training | Primezone",
        metaDescription: "Learn Tally Prime and GST in Mumbai. Practical accounting training with voucher entry and tax returns. Join the best Tally institute in Mumbai.",
        description: "Master India's most popular accounting software. This course covers everything from company creation to filing GST returns.",
        whyLearn: "Every business in India needs an accountant who knows Tally and GST. This is a recession-proof skill with immediate job opportunities in Mumbai.",
        image: "/images/courses/short/account/tallygst.png",
        hint: "accounting tally",
        highlights: ["Tally Prime Mastery", "GST Compliance", "Live Voucher Entry", "Bank Reconciliation", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Day-to-day accounting entries", "Generating GST invoices", "Inventory management", "Payroll and TDS handling"],
        careerOpportunities: ["Tally Operator", "Junior Accountant", "GST Consultant", "Accounts Executive"],
        syllabus: [
            { title: "Accounting", icon: "Landmark", topics: ["Journal Vouchers", "Ledger Groups", "Final Accounts"] },
            { title: "Taxation", icon: "FileText", topics: ["GST Invoicing", "RCM", "GST Returns"] },
            { title: "Inventory", icon: "Settings", topics: ["Stock Groups", "Godown Management", "Purchase/Sales Orders"] }
        ],
        tools: [
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
            { name: "Excel", logo: "/images/tech/excel.svg" },
            { name: "GST", logo: "/images/tech/gst.jpg" }
        ],
        faqs: [
            { q: "Which is the best Tally institute in Mumbai?", a: "Primezone offers the most comprehensive Tally Prime with GST training in Mumbai." },
            { q: "Who can join a Tally course in Mumbai?", a: "Anyone interested in accounting, especially commerce students." },
            { q: "Is the software provided?", a: "We train you on the latest Tally Prime software in our labs." },
            { q: "Do you teach GST returns?", a: "Yes, practical GST return filing is a key part of the syllabus." }
        ]
    },
    'web-development': {
        title: "Web Development Course in Mumbai | Frontend & Backend Training | Primezone",
        metaDescription: "Master Web Development in Mumbai. Learn HTML, CSS, JS, and backend tech. Practical coding classes with placement assistance at Primezone.",
        description: "Learn to build complete, functional web applications from scratch using modern frameworks and technologies.",
        whyLearn: "The tech industry is always looking for skilled developers. This course gives you the practical experience needed to build a career in web development.",
        image: "/images/courses/short/programming/webdev.png",
        hint: "web development",
        highlights: ["Modern Frameworks", "Full-Stack Concepts", "Deployment Mastery", "Real-world Projects", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Building responsive interfaces", "Managing databases", "Creating secure server-side logic", "Deploying apps to the cloud"],
        careerOpportunities: ["Frontend Developer", "Backend Developer", "Junior Web Developer", "Freelance Developer"],
        syllabus: [
            { title: "Frontend", icon: "Code", topics: ["HTML5 & CSS3", "JavaScript ES6", "React Basics"] },
            { title: "Backend", icon: "Code", topics: ["Node.js Intro", "Express.js", "RESTful APIs"] },
            { title: "Database", icon: "Settings", topics: ["MySQL Fundamentals", "Data Modeling"] }
        ],
        tools: [
            { name: "VS Code", logo: "/images/tech/vscode.svg" },
            { name: "Node.js", logo: "/images/tech/node.svg" },
            { name: "React", logo: "/images/tech/react.svg" },
            { name: "HTML5", logo: "/images/tech/html.svg" },
            { name: "CSS3", logo: "/images/tech/css.svg" },
            { name: "JavaScript", logo: "/images/tech/js.svg" }
        ],
        faqs: [
            { q: "Which is the best Web Dev institute in Mumbai?", a: "Primezone is a top choice for practical web development training in Mumbai." },
            { q: "Do I need prior experience?", a: "No, we start from the very basics of coding." },
            { q: "Which tools are taught?", a: "VS Code, Node.js, React, HTML, CSS, and JS." },
            { q: "Is there placement support?", a: "Yes, we help students find roles in Mumbai's tech companies." }
        ]
    },
    'web-designing': {
        title: "Web Designing Course in Mumbai | HTML, CSS, JavaScript Training | Primezone",
        metaDescription: "Best Web Designing Course in Mumbai. Learn to create responsive websites using HTML, CSS, and JS. Practical training in Jogeshwari and Vile Parle.",
        description: "Learn to build visually stunning and responsive websites. This short-term course is perfect for creative individuals looking to enter the tech field.",
        whyLearn: "Web design is the foundation of the internet. Every business in Mumbai needs a designer to create its digital identity.",
        image: "/images/courses/short/programming/webdesign.png",
        hint: "web design",
        highlights: ["Responsive Design", "UI/UX Principles", "HTML/CSS Mastery", "Portfolio Building", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Creating website layouts", "Applying CSS styling", "Making websites mobile-friendly", "Basic JavaScript interactivity"],
        careerOpportunities: ["Web Designer", "UI Designer", "Frontend Developer", "Freelance Designer"],
        syllabus: [
            { title: "Fundamentals", icon: "Code", topics: ["HTML5 Structure", "CSS3 Styling", "Box Model"] },
            { title: "Design", icon: "Palette", topics: ["Color Theory", "Typography", "Layout Design"] },
            { title: "Advanced", icon: "Code", topics: ["Media Queries", "Flexbox", "CSS Grid"] }
        ],
        tools: [
            { name: "HTML5", logo: "/images/tech/html.svg" },
            { name: "CSS3", logo: "/images/tech/css.svg" },
            { name: "JavaScript", logo: "/images/tech/js.svg" },
            { name: "Canva", logo: "/images/tech/canva.svg" }
        ],
        faqs: [
            { q: "Which is the best Web Design institute in Mumbai?", a: "Primezone offers top-tier web design training with a focus on UI/UX and responsive design." },
            { q: "How long is the course?", a: "The Web Designing course typically takes 4 months to complete." },
            { q: "Will I learn mobile-friendly design?", a: "Yes, responsive web design is a core part of the curriculum." },
            { q: "Is there a certificate?", a: "Yes, you get a government-recognized certificate upon completion." }
        ]
    },
    'dsa': {
        title: "Data Structures & Algorithms Course in Mumbai | DSA Training | Primezone",
        metaDescription: "Master DSA in Mumbai. Learn Arrays, Linked Lists, Trees, and Algorithms. Prepare for top tech interviews at Primezone Computer Education.",
        description: "The core of computer science. Learn how to organize data and solve complex problems efficiently using algorithms.",
        whyLearn: "DSA is the most important topic for technical interviews at companies like Google, Amazon, and Microsoft. It's essential for any serious programmer.",
        image: "/images/courses/short/programming/dsa.png",
        hint: "data structures",
        highlights: ["Problem Solving", "Complexity Analysis", "Core Data Structures", "Interview Prep", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Implementing stacks and queues", "Sorting and searching algorithms", "Tree and Graph traversals", "Dynamic programming basics"],
        careerOpportunities: ["Software Engineer", "Algorithmic Developer", "Tech Lead"],
        syllabus: [
            { title: "Linear Structures", icon: "Code", topics: ["Arrays", "Linked Lists", "Stacks", "Queues"] },
            { title: "Non-Linear", icon: "Code", topics: ["Binary Trees", "Heaps", "Graphs"] },
            { title: "Algorithms", icon: "Code", topics: ["Sorting", "Searching", "Recursion", "Big O"] }
        ],
        tools: [
            { name: "VS Code", logo: "/images/tech/vscode.svg" },
            { name: "Java", logo: "/images/tech/java.svg" },
            { name: "C++", logo: "/images/tech/cplusplus.svg" }
        ],
        faqs: [
            { q: "Which is the best DSA institute in Mumbai?", a: "Primezone is highly recommended for its structured and interview-focused DSA course." },
            { q: "Which language is used?", a: "We primarily use Java or C++ for DSA implementations." },
            { q: "Is this for beginners?", a: "Basic coding knowledge is recommended, but we review the fundamentals." },
            { q: "Does it help with interviews?", a: "Yes, the course is specifically designed to help students clear technical coding rounds." }
        ]
    },
    'python': {
        title: "Python Programming Course in Mumbai | Beginner to Advanced Training | Primezone",
        metaDescription: "Learn Python in Mumbai. Master syntax, data structures, and automation. Join the best Python coding classes at Primezone with placement assistance.",
        description: "Learn Python, the world's most versatile and beginner-friendly programming language. Used in web dev, AI, and data science.",
        whyLearn: "Python is readable, powerful, and essential for modern tech roles in 2025. It's the perfect first language for aspiring developers in Mumbai.",
        image: "/images/courses/short/programming/python.png",
        hint: "python code",
        highlights: ["Easy Syntax", "Automation Scripts", "Data Libraries", "Coding Challenges", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Logic & Control Flow", "OOP Concepts", "Handling APIs", "Building real-world scripts"],
        careerOpportunities: ["Python Developer", "Automation Engineer", "Back-end Developer"],
        syllabus: [
            { title: "Basics", icon: "Code", topics: ["Data Types", "Loops", "Functions"] },
            { title: "Advanced", icon: "Code", topics: ["Classes", "Modules", "Exception Handling"] }
        ],
        tools: [
            { name: "Python", logo: "/images/tech/python.svg" },
            { name: "VS Code", logo: "/images/tech/vscode.svg" }
        ],
        faqs: [
            { q: "Which is the best Python institute in Mumbai?", a: "Primezone provides excellent hands-on Python training for all levels." },
            { q: "Is Python good for non-IT students?", a: "Absolutely! It's very easy to pick up and great for data analysis in any field." },
            { q: "What is the duration?", a: "The Python course typically takes 3 months." },
            { q: "Are there projects?", a: "Yes, you will build several real-world automation scripts." }
        ]
    },
    'seo': {
        title: "SEO Course in Mumbai | Search Engine Optimization Training | Primezone",
        metaDescription: "Best SEO Course in Mumbai. Learn On-Page, Off-Page, and Technical SEO. Master Google ranking factors at Primezone Computer Education.",
        description: "Learn how to get any website to rank on the first page of Google. This course covers the science and art of Search Engine Optimization.",
        whyLearn: "SEO is the most sustainable way to get traffic. Companies in Mumbai save millions in ad spend by hiring skilled SEO experts.",
        image: "/images/courses/short/dm/SEO.png",
        hint: "seo audit",
        highlights: ["Google Algorithm", "Keyword Research", "Link Building", "Technical SEO", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Finding high-volume keywords", "Optimizing content for users and bots", "Building high-quality backlinks", "SEO Audit techniques"],
        careerOpportunities: ["SEO Analyst", "Digital Marketer", "Content Strategist", "Search Manager"],
        syllabus: [
            { title: "Foundations", icon: "Search", topics: ["How Search Works", "Keyword Discovery", "Competitor Analysis"] },
            { title: "On-Page", icon: "FileText", topics: ["Meta Tags", "Content Optimization", "Internal Linking"] },
            { title: "Technical", icon: "Settings", topics: ["Sitemaps", "Robots.txt", "Page Speed", "Schema"] }
        ],
        tools: [
            { name: "Analytics", logo: "/images/tech/ga.svg" },
            { name: "WordPress", logo: "/images/tech/wordpress.svg" },
            { name: "SEMrush", logo: "/images/tech/seo.svg" }
        ],
        faqs: [
            { q: "Which is the best SEO institute in Mumbai?", a: "Primezone is a leader in SEO training with a focus on ranking results." },
            { q: "Do I need coding for SEO?", a: "Only basic HTML knowledge is needed, which is included in the course." },
            { q: "Is it a practical course?", a: "Yes, you will optimize a live website during the training." },
            { q: "How long is the SEO course?", a: "It is a 2-month intensive program." }
        ]
    },
    'coreldraw': {
        title: "CorelDRAW Course in Mumbai | Vector Graphic Design Training | Primezone",
        metaDescription: "Learn CorelDRAW in Mumbai. Master logo design, banners, and print layouts. Top-rated design training at Primezone in Jogeshwari.",
        description: "Master the most popular vector design software for the print industry. Ideal for creating logos, brochures, and branding material.",
        whyLearn: "CorelDRAW is widely used in the advertising and printing industry in Mumbai. It's fast, powerful, and essential for print designers.",
        image: "/images/courses/short/graphics/CorelDRAW.png",
        hint: "vector art",
        highlights: ["Logo Design", "Print Layouts", "Typography", "Vector Illustration", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Creating vector graphics", "Designing for print media", "Color theory for printing", "Advanced tool mastery"],
        careerOpportunities: ["DTP Operator", "Graphic Designer", "Logo Artist", "Print Media Specialist"],
        syllabus: [
            { title: "Interface", icon: "Palette", topics: ["Workspace Setup", "Tool Basics", "Object Management"] },
            { title: "Designing", icon: "Brush", topics: ["Tracing", "Logo Creation", "Brochure Layout"] },
            { title: "Production", icon: "FileText", topics: ["Color CMYK", "Exporting for Print", "Post-press basics"] }
        ],
        tools: [
            { name: "CorelDRAW", logo: "/images/tech/coreldraw.svg" }
        ],
        faqs: [
            { q: "Which is the best CorelDRAW institute in Mumbai?", a: "Primezone offers the most industry-relevant CorelDRAW training in Mumbai." },
            { q: "Who should join this?", a: "Anyone interested in print media and graphic design should learn CorelDRAW." },
            { q: "Do I get a certificate?", a: "Yes, you receive a government-recognized certificate." },
            { q: "Is the course practical?", a: "Yes, it is 100% project-based." }
        ]
    },
    'adobe-photoshop': {
        title: "Adobe Photoshop Course in Mumbai | Image Editing Training | Primezone",
        metaDescription: "Master Photoshop in Mumbai. Learn photo retouching, digital art, and UI assets. Job-oriented creative training at Primezone Computer Education.",
        description: "The industry standard for image editing. Learn everything from basic cropping to advanced digital painting and photo manipulation.",
        whyLearn: "Photoshop is essential for almost every creative role today. It's the most powerful tool for visual creators.",
        image: "/images/courses/short/graphics/AdobePhotoshop.png",
        hint: "photoshop editing",
        highlights: ["Photo Retouching", "Layer Management", "Compositing", "Digital Art", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Advanced selection tools", "Non-destructive editing", "Color correction", "Designing for web and print"],
        careerOpportunities: ["Photo Editor", "Social Media Designer", "UI Designer", "Freelance Artist"],
        syllabus: [
            { title: "Basics", icon: "Palette", topics: ["Workspace", "Layers", "Selections"] },
            { title: "Editing", icon: "Brush", topics: ["Masking", "Retouching", "Filters"] },
            { title: "Output", icon: "FileText", topics: ["File Formats", "Web Optimization", "Print Prep"] }
        ],
        tools: [{ name: "Photoshop", logo: "/images/tech/photoshop.svg" }],
        faqs: [
            { q: "Which is the best Photoshop institute in Mumbai?", a: "Primezone is highly rated for its practical Photoshop training." },
            { q: "Is this course practical?", a: "Yes, 100% practical with hands-on projects." },
            { q: "What is the duration?", a: "The Photoshop course takes 2 months." },
            { q: "Can I join as a beginner?", a: "Yes, we start from the absolute basics." }
        ]
    },
    'power-bi': {
        title: "Power BI Course in Mumbai | Data Visualization Training | Primezone",
        metaDescription: "Learn Power BI in Mumbai. Master interactive dashboards and data reporting. Top-rated BI training at Primezone in Jogeshwari and Vile Parle.",
        description: "Transform raw data into beautiful, interactive insights. Power BI is the leader in business intelligence and reporting.",
        whyLearn: "Companies need experts who can tell stories with data. Power BI is the most in-demand tool for business analysts in Mumbai's corporate world.",
        image: "/images/courses/short/programming/powerbi.png",
        hint: "powerbi dashboard",
        highlights: ["Data Modeling", "DAX Formulas", "Custom Visuals", "Live Dashboards", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Connecting to data sources", "Cleaning data with Power Query", "Writing complex DAX expressions", "Publishing reports to the cloud"],
        careerOpportunities: ["Business Analyst", "BI Developer", "Data Visualization Expert"],
        syllabus: [
            { title: "Data Prep", icon: "BarChart", topics: ["ETL Process", "Power Query", "Merging Data"] },
            { title: "Modeling", icon: "BarChart", topics: ["Relationships", "DAX Basics", "Measures & Columns"] },
            { title: "Reporting", icon: "Palette", topics: ["Visuals", "Formatting", "Slicers", "Dashboards"] }
        ],
        tools: [{ name: "Power BI", logo: "/images/tech/powerbi.svg" }],
        faqs: [
            { q: "Which is the best Power BI institute in Mumbai?", a: "Primezone provides top-tier Power BI training with real-world business cases." },
            { q: "Is Excel knowledge needed?", a: "Basic Excel is helpful but not mandatory; we cover needed concepts." },
            { q: "What is the duration?", a: "The course is 3 months long." },
            { q: "Do you teach DAX?", a: "Yes, DAX is a core part of the modeling module." }
        ]
    },
    'taxation-auditing': {
        title: "Taxation & Auditing Course in Mumbai | Primezone",
        metaDescription: "Master Taxation and Auditing in Mumbai. Learn Income Tax, GST filing, and Audit procedures at Primezone.",
        description: "A specialized course for those looking to excel in tax consultancy and corporate auditing.",
        whyLearn: "Compliance is a massive industry in India. Skilled tax professionals are always in high demand.",
        image: "/images/courses/short/account/TaxationAuditing.png",
        hint: "tax audit",
        highlights: ["Income Tax Filing", "GST Returns", "Audit Reports", "Direct & Indirect Tax", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["ITR forms mastery", "GST portal usage", "Bank audit basics", "Corporate audit workflows"],
        careerOpportunities: ["Tax Consultant", "Audit Assistant", "Accountant"],
        syllabus: [{ title: "Tax Laws", icon: "Landmark", topics: ["Income Tax", "GST", "TDS"] }],
        tools: [
            { name: "Income Tax", logo: "/images/tech/tax.png" },
            { name: "GST", logo: "/images/tech/gst.jpg" }
        ],
        faqs: [{ q: "Who can join?", a: "Commerce graduates or anyone interested in finance." }]
    },
    'share-market': {
        title: "Share Market Course in Mumbai | Trading & Investment | Primezone",
        metaDescription: "Learn Share Market in Mumbai. Master Technical Analysis, IPOs, and Trading strategies at Primezone Computer Education.",
        description: "Understand the mechanics of the stock market and learn how to invest wisely.",
        whyLearn: "Financial literacy is key to wealth creation. Learn the tools used by professional traders.",
        image: "/images/courses/short/account/sharemarket.png",
        hint: "stock trading",
        highlights: ["Technical Analysis", "Fundamental Analysis", "Option Trading", "Risk Management", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Reading charts", "Understanding market indicators", "Portfolio management", "Live trading sessions"],
        careerOpportunities: ["Stock Trader", "Investment Advisor", "Market Analyst"],
        syllabus: [{ title: "Trading", icon: "BarChart", topics: ["Candlesticks", "Indicators", "Psychology"] }],
        tools: [{ name: "Power BI", logo: "/images/tech/powerbi.svg" }],
        faqs: [{ q: "Do you give tips?", a: "No, we teach you how to analyze the market yourself." }]
    },
    'ccc': {
        title: "CCC Course in Mumbai | Course on Computer Concepts | Primezone",
        metaDescription: "Best CCC Course in Mumbai. Learn computer fundamentals for govt jobs and general proficiency at Primezone.",
        description: "A foundational course designed to impart basic level computer appreciation for common people.",
        whyLearn: "CCC is often a mandatory requirement for government job applications in India.",
        image: "/images/courses/short/account/ccc.png",
        hint: "ccc certificate",
        highlights: ["Govt Job Prep", "Basic PC Skills", "Internet Awareness", "Digital Literacy", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Operating systems", "Word & Excel basics", "Digital financial services", "Cybersecurity awareness"],
        careerOpportunities: ["Govt Job Eligible", "Office Assistant"],
        syllabus: [{ title: "Basics", icon: "MonitorCheck", topics: ["Windows", "Internet", "Email", "Office"] }],
        tools: [{ name: "MS Word", logo: "/images/tech/word.svg" }, { name: "MS Excel", logo: "/images/tech/excel.svg" }],
        faqs: [{ q: "Is the exam included?", a: "We prepare you for the official NIELIT CCC exam." }]
    },
    'c-programming': {
        title: "C Programming Course in Mumbai | Logic Building | Primezone",
        metaDescription: "Learn C Programming in Mumbai. The best course for logic building and coding foundations at Primezone.",
        description: "Start your coding journey with the 'mother of all languages'.",
        whyLearn: "C helps you understand how computers work at a low level, which is vital for any professional developer.",
        image: "/images/courses/short/programming/cprog.png",
        hint: "c code",
        highlights: ["Logic Building", "Memory Management", "Syntax Clarity", "Algorithm Design", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Loops & Arrays", "Pointers", "File I/O", "Data Structures basics"],
        careerOpportunities: ["System Programmer", "Foundation for IT Jobs"],
        syllabus: [{ title: "C Syntax", icon: "Code", topics: ["Variables", "Operators", "Functions"] }],
        tools: [{ name: "VS Code", logo: "/images/tech/vscode.svg" }],
        faqs: [{ q: "Is it hard?", a: "It is challenging but very rewarding for your future coding career." }]
    },
    'c-plus-plus': {
        title: "C++ Programming Course in Mumbai | OOPS Training | Primezone",
        metaDescription: "Master C++ in Mumbai. Learn Object Oriented Programming and build fast applications at Primezone.",
        description: "Move from C to C++ and master the concepts of classes and objects.",
        whyLearn: "C++ is used in game development, high-performance systems, and complex software like browsers.",
        image: "/images/courses/short/programming/c++.png",
        hint: "c++ code",
        highlights: ["OOPS Concepts", "Inheritance", "Polymorphism", "Standard Template Library", "Learning Mode: Offline | Hybrid | Online"],
        whatYouWillLearn: ["Class design", "Templates", "Exception handling", "Dynamic memory"],
        careerOpportunities: ["Game Developer", "System Architect", "Embedded Engineer"],
        syllabus: [{ title: "OOPS", icon: "Code", topics: ["Classes", "Objects", "Virtual Functions"] }],
        tools: [{ name: "C++", logo: "/images/tech/cplusplus.svg" }, { name: "VS Code", logo: "/images/tech/vscode.svg" }],
        faqs: [{ q: "Can I join after C?", a: "Yes, it is the perfect next step after learning C." }]
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
