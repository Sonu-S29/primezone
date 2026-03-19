
export const courseDetails: { [key: string]: any } = {
    // --- DIPLOMA COURSES ---
    'computer-application': {
        title: "Diploma In Computer Application (DCA) Course in Mumbai | Primezone",
        metaDescription: "Best DCA Course in Mumbai. Learn MS Office, AI Tools, Tally, Graphic Design, and Web Design. Job-oriented training in Jogeshwari and Vile Parle with placement.",
        description: "The Diploma in Computer Application (DCA) at Primezone is a comprehensive 1-year program covering everything from basic office tools and AI productivity to advanced graphic and web design.",
        whyLearn: "DCA is the perfect foundation for any professional career. It combines essential administrative skills with modern AI tools and creative design, making you a versatile candidate for various industries in Mumbai's competitive job market.",
        image: "/images/courses/diploma/dca.webp",
        hint: "computer application",
        highlights: ["MS Office + AI Tools", "Tally Prime & GST", "Advanced Excel Mastery", "Graphic & Web Designing"],
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
                topics: ["Html 5, CSS", "JavaScript", "WordPress", "Web Hosting, Domain", "Assignment & Projects"] 
            }
        ],
        tools: [
            { name: "MS Word", logo: "/images/tech/excel.svg" },
            { name: "MS Excel", logo: "/images/tech/excel.svg" },
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
            { name: "GST", logo: "/images/tech/gst.jpg" },
            { name: "Photoshop", logo: "/images/tech/photoshop.svg" },
            { name: "Illustrator", logo: "/images/tech/illustrator.svg" },
            { name: "InDesign", logo: "/images/tech/indesign.svg" },
            { name: "CorelDRAW", logo: "/images/tech/coreldraw.png" },
            { name: "Canva", logo: "/images/tech/canva.png" },
            { name: "HTML5", logo: "/images/tech/html.svg" },
            { name: "CSS3", logo: "/images/tech/css.svg" },
            { name: "JavaScript", logo: "/images/tech/js.svg" },
            { name: "WordPress", logo: "/images/tech/wordpress.svg" }
        ],
        faqs: [
            { q: "Is DCA a government-recognized course?", a: "Yes, Primezone provides government-recognized certification for the DCA program." },
            { q: "Who can join this course?", a: "Students who have completed 10th or 12th grade, graduates, and working professionals can enroll in this diploma." },
            { q: "Does the curriculum include AI tools?", a: "Yes, as per our updated curriculum, we include AI tools training to help you work faster and smarter in office environments." },
            { q: "Is there placement support?", a: "Yes, we provide 100% placement assistance in Mumbai for our DCA students across various sectors like back office, accounting, and design." }
        ]
    },
    'financial-management': {
        title: "Diploma In Financial & Management Course in Mumbai | Primezone",
        metaDescription: "Master Finance and Management in Mumbai. Comprehensive training in Accounting, Tally, Taxation, and Share Market. Enroll at Primezone today.",
        description: "This advanced diploma focuses on the financial backbone of businesses, covering accounting, taxation, auditing, and even share market fundamentals.",
        whyLearn: "Financial management is critical for every business. Mastering Tally, GST, and investment strategies ensures high-paying roles in finance departments across Mumbai's corporate sectors.",
        image: "/images/courses/diploma/dfam.webp",
        hint: "financial management",
        highlights: ["Tally Prime + GST", "Taxation Auditing", "Management Skills", "Share Market Training"],
        whatYouWillLearn: ["Financial Accounting Principles", "Direct & Indirect Taxes", "ITR & PAN Application", "Managing Business Finance", "Stock Market Trading Basics"],
        careerOpportunities: ["Tax Consultant", "Finance Manager", "Stock Trader", "Auditor", "Senior Accountant"],
        syllabus: [
            { title: "Accounting & Tally", icon: "Landmark", topics: ["Golden Rules", "Voucher Entry", "GST Compliance", "Payroll"] },
            { title: "Taxation & Auditing", icon: "FileText", topics: ["Income Tax Framework", "ITR Filing", "GST Returns", "Audit Procedures"] },
            { title: "Management Skills", icon: "Users", topics: ["Business Finance", "Project Reports", "Export/Import", "Office Management"] },
            { title: "Share Market", icon: "BarChart", topics: ["IPOs", "Mutual Funds", "Derivatives", "Trading Strategies"] }
        ],
        tools: [
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
            { name: "Excel", logo: "/images/tech/excel.svg" },
            { name: "Income Tax Portal", logo: "/images/tech/tax.png" },
            { name: "GST Portal", logo: "/images/tech/gst.jpg" }
        ],
        faqs: [
            { q: "Do you teach live taxation cases?", a: "Yes, we use real-world scenarios for GST and Income Tax training." },
            { q: "Is this course suitable for commerce students?", a: "It is ideal for B.Com and BMS students looking for practical job skills." }
        ]
    },
    'programming-course': {
        title: "Diploma In Programming Course in Mumbai | C, C++, Java, Python | Primezone",
        metaDescription: "Learn to code in Mumbai. Master Python, Java, C++, and Web Development. Practical coding classes with placement assistance at Primezone Computer Education.",
        description: "Our Diploma in Programming is designed to turn beginners into expert coders by covering the world's most popular programming languages.",
        whyLearn: "Software development is the highest-paying industry globally. Building logic in C/C++ and mastering Python and Java opens doors to top tech companies in Mumbai and Andheri's IT hubs.",
        image: "/images/courses/diploma/dpc.webp",
        hint: "programming course",
        highlights: ["C & C++ with DSA", "Python & Java Mastery", "Full Stack Development", "Live Coding Projects"],
        whatYouWillLearn: ["Algorithm Building", "Object-Oriented Programming", "Server-side scripting", "Database Management", "API Integration"],
        careerOpportunities: ["Software Developer", "Python Developer", "Java Developer", "Web Developer", "Backend Engineer"],
        syllabus: [
            { title: "Fundamentals", icon: "Code", topics: ["C Syntax", "C++ OOPS", "Data Structures", "Algorithms"] },
            { title: "Python Programming", icon: "Code", topics: ["Core Python", "Operators", "Functions", "File Handling"] },
            { title: "Java Technologies", icon: "Code", topics: ["Core Java", "Advanced Java", "Swing", "JDBC"] },
            { title: "Stack Choice", icon: "Rocket", topics: ["MERN Stack", "ASP.NET", "Database MySQL/MongoDB"] }
        ],
        tools: [
            { name: "VS Code", logo: "/images/tech/vscode.svg" },
            { name: "Python", logo: "/images/tech/python.svg" },
            { name: "Java", logo: "/images/tech/java.svg" },
            { name: "C++", logo: "/images/tech/cplusplus.svg" },
            { name: "MySQL", logo: "/images/tech/mysql.svg" }
        ],
        faqs: [
            { q: "Which language do we start with?", a: "We start with C to build strong logic foundations before moving to advanced languages." },
            { q: "Do you provide internship support?", a: "Yes, this diploma includes an integrated internship program." }
        ]
    },
    'graphic-animation': {
        title: "Diploma In Graphic & Animation Course in Mumbai | Photoshop, 3ds Max | Primezone",
        metaDescription: "Best Graphic Design and Animation Course in Mumbai. Learn Photoshop, Illustrator, 3ds Max, and Video Editing. Job-oriented creative training.",
        description: "Explore the world of visual storytelling. From logo design to 3D architectural walkthroughs, this course covers it all.",
        whyLearn: "The creative economy is booming. Skilled animators and designers are needed for social media, film, architecture, and advertising industries in Mumbai.",
        image: "/images/courses/diploma/dga.webp",
        hint: "graphic animation",
        highlights: ["Creative Suite Mastery", "3D Modeling & Animation", "Video & Sound Editing", "Portfolio Development"],
        whatYouWillLearn: ["Vector Illustration", "Image Retouching", "Motion Graphics", "3D Interior Design", "Sequence Editing"],
        careerOpportunities: ["Graphic Designer", "3D Modeler", "Video Editor", "Animator", "UI Designer"],
        syllabus: [
            { title: "Graphic Design", icon: "Palette", topics: ["CorelDRAW", "Photoshop", "Illustrator", "InDesign"] },
            { title: "Animation", icon: "Code", topics: ["Adobe Animate", "Frame by Frame", "Motion Tweens"] },
            { title: "3D Design", icon: "Rocket", topics: ["3DS MAX", "Interior Designing", "Materials & Lighting"] },
            { title: "Post Production", icon: "LayoutTemplate", topics: ["Video Editing", "Sound Effects", "Transitions"] }
        ],
        tools: [
            { name: "Photoshop", logo: "/images/tech/photoshop.svg" },
            { name: "Illustrator", logo: "/images/tech/illustrator.svg" },
            { name: "CorelDRAW", logo: "/images/tech/coreldraw.png" },
            { name: "3ds Max", logo: "/images/tech/p.svg" },
            { name: "Premiere Pro", logo: "/images/tech/premiere.svg" }
        ],
        faqs: [
            { q: "Do I need a high-end PC?", a: "While learning, you can use our state-of-the-art labs equipped with high-performance systems." },
            { q: "Will I learn video editing too?", a: "Yes, professional video and sound editing is a core module of this course." }
        ]
    },
    'ethical-hacking': {
        title: "Diploma In Ethical Hacking Course in Mumbai | Cybersecurity Training | Primezone",
        metaDescription: "Learn Cybersecurity in Mumbai. Master Penetration Testing, Network Security, and Hacking Countermeasures. Join the best Ethical Hacking course.",
        description: "Protect the digital world. Our Ethical Hacking diploma teaches you how to identify and patch vulnerabilities before malicious hackers find them.",
        whyLearn: "Cybersecurity is a top priority for every government and corporation. Skilled ethical hackers are in massive demand to protect sensitive data worldwide.",
        image: "/images/courses/diploma/deh.webp",
        hint: "ethical hacking",
        highlights: ["Network Scanning", "System Hacking", "Malware Analysis", "Sniffing & Social Engineering"],
        whatYouWillLearn: ["Penetration Testing Phases", "Vulnerability Assessment", "Securing Web Servers", "SQL Injection Countermeasures", "Firewall Evasion"],
        careerOpportunities: ["Cybersecurity Analyst", "Penetration Tester", "Security Consultant", "Network Engineer"],
        syllabus: [
            { title: "Reconnaissance", icon: "Search", topics: ["Footprinting", "Search Engines", "DNS Footprinting"] },
            { title: "Scanning & Enumeration", icon: "Code", topics: ["Network Scanning", "Enumeration", "Vulnerability Analysis"] },
            { title: "Exploitation", icon: "Bug", topics: ["System Hacking", "Malware Threats", "Sniffing"] },
            { title: "Advanced Protection", icon: "ShieldCheck", topics: ["IDS & Firewalls", "Web App Hacking", "SQL Injection"] }
        ],
        tools: [
            { name: "Kali Linux", logo: "/images/tech/linux.svg" },
            { name: "Wireshark", logo: "/images/tech/wireshark.svg" },
            { name: "Nmap", logo: "/images/tech/nmap.svg" },
            { name: "Metasploit", logo: "/images/tech/Metasploit.svg" },
            { name: "Burp Suite", logo: "/images/tech/burp.png" }
        ],
        faqs: [
            { q: "Is this course legal?", a: "Yes, we teach Ethical Hacking for defense and security purposes only." },
            { q: "What are the job prospects?", a: "Security is a high-growth field with opportunities in IT firms, banks, and govt agencies." }
        ]
    },
    'digital-marketing': {
        title: "Digital Marketing Course in Mumbai | SEO, SMM, Google Ads Training | Primezone",
        metaDescription: "Best Digital Marketing Course in Mumbai. Learn SEO, Social Media Marketing, PPC, and Analytics with 100% placement support in Jogeshwari and Vile Parle.",
        description: "Master the art of online growth. Our practical Digital Marketing course covers everything from ranking on Google to running viral ad campaigns.",
        whyLearn: "Businesses are moving online. Knowing how to drive traffic and convert leads is the most valuable business skill in 2025.",
        image: "/images/courses/diploma/ddm.webp",
        hint: "digital marketing",
        highlights: ["100% Practical Training", "Live Ad Campaigns", "Government Certified", "Placement Assistance"],
        whatYouWillLearn: ["Search Engine Optimization (SEO)", "Social Media Marketing (SMM)", "Pay Per Click (PPC)", "WordPress Website Building", "Data Analytics"],
        careerOpportunities: ["SEO Specialist", "Social Media Manager", "Performance Marketer", "Content Strategist"],
        syllabus: [
            { title: "SEO & SEM", icon: "Search", topics: ["On-Page SEO", "Off-Page SEO", "Google Ads", "PPC"] },
            { title: "Social Media", icon: "Users", topics: ["Facebook Ads", "Instagram Growth", "LinkedIn Marketing"] },
            { title: "Web & Content", icon: "Globe", topics: ["WordPress", "Blogging", "Email Marketing"] },
            { title: "Analytics", icon: "BarChart", topics: ["Google Analytics", "Search Console", "Reporting"] }
        ],
        tools: [
            { name: "Google Ads", logo: "/images/tech/google-ads.svg" },
            { name: "Analytics", logo: "/images/tech/ga.svg" },
            { name: "Facebook Ads", logo: "/images/tech/fb.svg" },
            { name: "WordPress", logo: "/images/tech/wordpress.svg" },
            { name: "SEMrush", logo: "/images/tech/seo.svg" }
        ],
        faqs: [
            { q: "Will I learn how to build a website?", a: "Yes, we include WordPress website creation as part of the course." },
            { q: "Does it include practical training?", a: "Yes, you will work on live ad budgets and real-world projects." }
        ]
    },
    'full-stack-development': {
        title: "Full-Stack Development Course in Mumbai | MERN & Java Training | Primezone",
        metaDescription: "Become a Full-Stack Developer in Mumbai. Learn React, Node.js, Python, and Java. 100% placement assistance and live project training.",
        description: "From front-end UI to back-end databases, master the entire web development lifecycle at Primezone.",
        whyLearn: "Full-stack developers are highly sought after because they can build entire products independently. This course makes you industry-ready for Mumbai's tech jobs.",
        image: "/images/courses/diploma/fullstack.webp",
        hint: "full stack",
        highlights: ["MERN Stack", "Java Technology", "Live Projects", "Integrated Internship"],
        whatYouWillLearn: ["Responsive UI Design", "Building REST APIs", "Database Architecture", "Server-side Rendering", "Deployment"],
        careerOpportunities: ["Full-Stack Developer", "Front-End Engineer", "Back-End Developer", "App Developer"],
        syllabus: [
            { title: "Front-End", icon: "Code", topics: ["HTML5 / CSS3", "JavaScript", "ReactJS", "Bootstrap"] },
            { title: "Back-End", icon: "Code", topics: ["Node.js", "Express.js", "Python", "Java"] },
            { title: "Databases", icon: "Settings", topics: ["MySQL", "MongoDB"] },
            { title: "Testing & Deploy", icon: "Rocket", topics: ["GitHub", "Hosting", "API Testing"] }
        ],
        tools: [
            { name: "React", logo: "/images/tech/react.svg" },
            { name: "Node.js", logo: "/images/tech/node.svg" },
            { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
            { name: "JavaScript", logo: "/images/tech/js.svg" },
            { name: "GitHub", logo: "/images/tech/github.svg" }
        ],
        faqs: [
            { q: "Which stack is best?", a: "We teach both MERN and Java to give you maximum career flexibility." },
            { q: "Is placement guaranteed?", a: "We provide 100% placement assistance and interview preparation." }
        ]
    },
    'data-analysis': {
        title: "Data Analytics Course in Mumbai | Excel, Power BI, SQL Training | Primezone",
        metaDescription: "Join the best Data Analytics Course in Mumbai. Master Power BI, Tableau, Advanced Excel, and SQL. Practical training with placement guidance.",
        description: "Turn data into decisions. Master the most powerful data tools and become a high-demand data analyst.",
        whyLearn: "Data is the new oil. Companies across all sectors need experts who can analyze trends and provide actionable business insights in 2025.",
        image: "/images/courses/diploma/dataanalysis.webp",
        hint: "data analytics",
        highlights: ["Power BI & Tableau", "Advanced Excel", "Python for Data", "Live Case Studies"],
         whatYouWillLearn: ["Data Visualization", "Statistical Analysis", "SQL Querying", "Cleaning Messy Data", "Automating Reports"],
        careerOpportunities: ["Data Analyst", "BI Developer", "Market Researcher", "MIS Specialist"],
        syllabus: [
            { title: "Advanced Excel", icon: "BarChart", topics: ["Lookups", "Pivots", "Macros", "Dashboards"] },
            { title: "BI Tools", icon: "BarChart", topics: ["Power BI", "Tableau", "Data Mapping"] },
            { title: "Coding & DB", icon: "Code", topics: ["Python Basics", "MySQL Queries", "Aggregation"] }
        ],
        tools: [
            { name: "Power BI", logo: "/images/tech/powerbi.svg" },
            { name: "Tableau", logo: "/images/tech/tableau.svg" },
            { name: "Excel", logo: "/images/tech/excel.svg" },
            { name: "MySQL", logo: "/images/tech/mysql.svg" },
            { name: "Python", logo: "/images/tech/python.svg" }
        ],
        faqs: [
            { q: "Is coding required for Data Analytics?", a: "Only basic Python and SQL are needed, which we teach from scratch." },
            { q: "Can non-IT students join?", a: "Yes, students from Commerce and Science backgrounds are welcome." }
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
        highlights: ["MS Word Mastery", "Excel Foundations", "PPT Presentations", "Internet Productivity"],
        whatYouWillLearn: ["Creating professional documents", "Basic data management in Excel", "Designing impact presentations", "Efficient email and web usage"],
        careerOpportunities: ["Front Desk Executive", "Administrative Assistant", "Office Coordinator", "Data Entry Specialist"],
        syllabus: [
            { title: "Document Handling", icon: "MonitorCheck", topics: ["MS Word Basics", "Mail Merge", "Formatting"] },
            { title: "Data Handling", icon: "BarChart", topics: ["Excel Functions", "Filtering", "Chart Basics"] },
            { title: "Web Tools", icon: "Globe", topics: ["Email Etiquette", "Cloud Storage", "Internet Security"] }
        ],
        tools: [
            { name: "Word", logo: "/images/tech/excel.svg" },
            { name: "Excel", logo: "/images/tech/excel.svg" },
            { name: "PowerPoint", logo: "/images/tech/excel.svg" }
        ],
        faqs: [{ q: "What is the duration?", a: "The course is 2 months long with flexible batch timings." }]
    },
    'ms-office': {
        title: "MS Office Course in Mumbai | Word, Excel, PowerPoint Training | Primezone",
        metaDescription: "Join the best MS Office training in Mumbai. Master Microsoft Word, Excel, and PPT for business use. 100% practical classes at Primezone.",
        description: "A deep dive into the Microsoft Office Suite. This course focuses on the advanced features of Word, Excel, and PowerPoint required for business operations.",
        whyLearn: "MS Office is the global standard for documentation and analysis. Mastering these tools ensures you can work in any office, anywhere in Mumbai or beyond.",
        image: "/images/courses/short/account/msoffice.png",
        hint: "ms office",
        highlights: ["Business Documentation", "Data Analysis", "Presentation Skills", "Outlook & OneNote"],
        whatYouWillLearn: ["Advanced Word Formatting", "Excel Pivot Tables", "Animated Slide Design", "Business Communication tools"],
        careerOpportunities: ["Back Office Executive", "Secretary", "Project Coordinator", "Support Assistant"],
        syllabus: [
            { title: "Word for Business", icon: "FileText", topics: ["Styles", "References", "Table of Contents"] },
            { title: "Excel for Work", icon: "BarChart", topics: ["Vlookup", "Countif", "Sorting & Filtering"] },
            { title: "Pro Presentations", icon: "LayoutTemplate", topics: ["Slide Masters", "Infographics", "Transitions"] }
        ],
        tools: [
            { name: "Word", logo: "/images/tech/excel.svg" },
            { name: "Excel", logo: "/images/tech/excel.svg" },
            { name: "PowerPoint", logo: "/images/tech/excel.svg" },
            { name: "Outlook", logo: "/images/tech/excel.svg" }
        ],
        faqs: [{ q: "Do I get a certificate?", a: "Yes, you receive a government-recognized certificate upon completion." }]
    },
    'advanced-excel': {
        title: "Advanced Excel Course in Mumbai | MIS Reporting & Macros Training | Primezone",
        metaDescription: "Master Advanced Excel in Mumbai. Learn VLOOKUP, Pivot Tables, and VBA Macros. Industry-oriented training for MIS roles at Primezone.",
        description: "Go beyond basic spreadsheets. Learn the powerful functions that office professionals use to handle large datasets efficiently.",
        whyLearn: "Excel is the world's most common business tool. Advanced knowledge can save you hours of work and boost your salary prospects significantly.",
        image: "/images/courses/short/account/advexcel.png",
        hint: "excel spreadsheet",
        highlights: ["Advanced Formulas", "MIS Reporting", "Macros & VBA", "Data Visualization"],
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
        faqs: [{ q: "Do I need to know math?", a: "Basic arithmetic is enough; we teach the logic behind the formulas." }]
    },
    'tally-gst': {
        title: "Tally Prime with GST Course in Mumbai | Accounting Training | Primezone",
        metaDescription: "Learn Tally Prime and GST in Mumbai. Practical accounting training with voucher entry and tax returns. Join the best Tally institute in Mumbai.",
        description: "Master India's most popular accounting software. This course covers everything from company creation to filing GST returns.",
        whyLearn: "Every business in India needs an accountant who knows Tally and GST. This is a recession-proof skill with immediate job opportunities in Mumbai.",
        image: "/images/courses/short/account/tallygst.png",
        hint: "accounting tally",
        highlights: ["Tally Prime Mastery", "GST Compliance", "Live Voucher Entry", "Bank Reconciliation"],
        whatYouWillLearn: ["Day-to-day accounting entries", "Generating GST invoices", "Inventory management", "Payroll and TDS handling"],
        careerOpportunities: ["Tally Operator", "Junior Accountant", "GST Consultant", "Accounts Executive"],
        syllabus: [
            { title: "Accounting", icon: "Landmark", topics: ["Journal Vouchers", "Ledger Groups", "Final Accounts"] },
            { title: "Taxation", icon: "FileText", topics: ["GST Invoicing", "RCM", "GST Returns"] },
            { title: "Inventory", icon: "Settings", topics: ["Stock Groups", "Godown Management", "Purchase/Sales Orders"] }
        ],
        tools: [
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
            { name: "Excel", logo: "/images/tech/excel.svg" }
        ],
        faqs: [{ q: "Is the software provided?", a: "We train you on the latest Tally Prime software in our labs." }]
    },
    'web-development': {
        title: "Web Development Course in Mumbai | Frontend & Backend Training | Primezone",
        metaDescription: "Master Web Development in Mumbai. Learn HTML, CSS, JS, and backend tech. Practical coding classes with placement assistance at Primezone.",
        description: "Learn to build complete, functional web applications from scratch using modern frameworks and technologies.",
        whyLearn: "The tech industry is always looking for skilled developers. This course gives you the practical experience needed to build a career in web development.",
        image: "/images/courses/short/programming/webdev.png",
        hint: "web development",
        highlights: ["Modern Frameworks", "Full-Stack Concepts", "Deployment Mastery", "Real-world Projects"],
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
            { name: "React", logo: "/images/tech/react.svg" }
        ],
        faqs: [{ q: "Do I need prior experience?", a: "No, we start from the very basics of coding." }]
    },
    'web-designing': {
        title: "Web Designing Course in Mumbai | HTML, CSS, JavaScript Training | Primezone",
        metaDescription: "Best Web Designing Course in Mumbai. Learn to create responsive websites using HTML, CSS, and JS. Practical training in Jogeshwari and Vile Parle.",
        description: "Learn to build visually stunning and responsive websites. This short-term course is perfect for creative individuals looking to enter the tech field.",
        whyLearn: "Web design is the foundation of the internet. Every business in Mumbai needs a designer to create its digital identity.",
        image: "/images/courses/short/programming/webdesign.png",
        hint: "web design",
        highlights: ["Responsive Design", "UI/UX Principles", "HTML/CSS Mastery", "Portfolio Building"],
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
            { name: "Figma", logo: "/images/tech/figma.svg" }
        ],
        faqs: [{ q: "How long is the course?", a: "The Web Designing course typically takes 4 months to complete." }]
    },
    'dsa': {
        title: "Data Structures & Algorithms Course in Mumbai | DSA Training | Primezone",
        metaDescription: "Master DSA in Mumbai. Learn Arrays, Linked Lists, Trees, and Algorithms. Prepare for top tech interviews at Primezone Computer Education.",
        description: "The core of computer science. Learn how to organize data and solve complex problems efficiently using algorithms.",
        whyLearn: "DSA is the most important topic for technical interviews at companies like Google, Amazon, and Microsoft. It's essential for any serious programmer.",
        image: "/images/courses/short/programming/dsa.png",
        hint: "data structures",
        highlights: ["Problem Solving", "Complexity Analysis", "Core Data Structures", "Interview Prep"],
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
        faqs: [{ q: "Which language is used?", a: "We primarily use Java or C++ for DSA implementations." }]
    },
    'python': {
        title: "Python Programming Course in Mumbai | Beginner to Advanced Training | Primezone",
        metaDescription: "Learn Python in Mumbai. Master syntax, data structures, and automation. Join the best Python coding classes at Primezone with placement assistance.",
        description: "Learn Python, the world's most versatile and beginner-friendly programming language. Used in web dev, AI, and data science.",
        whyLearn: "Python is readable, powerful, and essential for modern tech roles in 2025. It's the perfect first language for aspiring developers in Mumbai.",
        image: "/images/courses/short/programming/python.png",
        hint: "python code",
        highlights: ["Easy Syntax", "Automation Scripts", "Data Libraries", "Coding Challenges"],
        whatYouWillLearn: ["Logic & Control Flow", "OOP Concepts", "Handling APIs", "Building real-world scripts"],
        careerOpportunities: ["Python Developer", "Automation Engineer", "Back-end Developer"],
        syllabus: [
            { title: "Basics", icon: "Code", topics: ["Data Types", "Loops", "Functions"] },
            { title: "Advanced", icon: "Code", topics: ["Classes", "Modules", "Exception Handling"] }
        ],
        tools: [
            { name: "Python", logo: "/images/tech/python.svg" },
            { name: "PyCharm", logo: "/images/tech/pycharm.png" }
        ],
        faqs: [{ q: "Is Python good for non-IT students?", a: "Absolutely! It's very easy to pick up and great for data analysis in any field." }]
    },
    'seo': {
        title: "SEO Course in Mumbai | Search Engine Optimization Training | Primezone",
        metaDescription: "Best SEO Course in Mumbai. Learn On-Page, Off-Page, and Technical SEO. Master Google ranking factors at Primezone Computer Education.",
        description: "Learn how to get any website to rank on the first page of Google. This course covers the science and art of Search Engine Optimization.",
        whyLearn: "SEO is the most sustainable way to get traffic. Companies in Mumbai save millions in ad spend by hiring skilled SEO experts.",
        image: "/images/courses/short/dm/SEO.png",
        hint: "seo audit",
        highlights: ["Google Algorithm", "Keyword Research", "Link Building", "Technical SEO"],
        whatYouWillLearn: ["Finding high-volume keywords", "Optimizing content for users and bots", "Building high-quality backlinks", "SEO Audit techniques"],
        careerOpportunities: ["SEO Analyst", "Digital Marketer", "Content Strategist", "Search Manager"],
        syllabus: [
            { title: "Foundations", icon: "Search", topics: ["How Search Works", "Keyword Discovery", "Competitor Analysis"] },
            { title: "On-Page", icon: "FileText", topics: ["Meta Tags", "Content Optimization", "Internal Linking"] },
            { title: "Technical", icon: "Settings", topics: ["Sitemaps", "Robots.txt", "Page Speed", "Schema"] }
        ],
        tools: [
            { name: "Search Console", logo: "/images/tech/ga.svg" },
            { name: "Ahrefs", logo: "/images/tech/seo.svg" },
            { name: "SEMrush", logo: "/images/tech/seo.svg" }
        ],
        faqs: [{ q: "Do I need coding for SEO?", a: "Only basic HTML knowledge is needed, which is included in the course." }]
    },
    'coreldraw': {
        title: "CorelDRAW Course in Mumbai | Vector Graphic Design Training | Primezone",
        metaDescription: "Learn CorelDRAW in Mumbai. Master logo design, banners, and print layouts. Top-rated design training at Primezone in Jogeshwari.",
        description: "Master the most popular vector design software for the print industry. Ideal for creating logos, brochures, and branding material.",
        whyLearn: "CorelDRAW is widely used in the advertising and printing industry in Mumbai. It's fast, powerful, and essential for print designers.",
        image: "/images/courses/short/graphics/CorelDRAW.png",
        hint: "vector art",
        highlights: ["Logo Design", "Print Layouts", "Typography", "Vector Illustration"],
        whatYouWillLearn: ["Creating vector graphics", "Designing for print media", "Color theory for printing", "Advanced tool mastery"],
        careerOpportunities: ["DTP Operator", "Graphic Designer", "Logo Artist", "Print Media Specialist"],
        syllabus: [
            { title: "Interface", icon: "Palette", topics: ["Workspace Setup", "Tool Basics", "Object Management"] },
            { title: "Designing", icon: "Brush", topics: ["Tracing", "Logo Creation", "Brochure Layout"] },
            { title: "Production", icon: "FileText", topics: ["Color CMYK", "Exporting for Print", "Post-press basics"] }
        ],
        tools: [
            { name: "CorelDRAW", logo: "/images/tech/coreldraw.png" }
        ],
        faqs: [{ q: "Who should join this?", a: "Anyone interested in print media and graphic design should learn CorelDRAW." }]
    },
    'adobe-photoshop': {
        title: "Adobe Photoshop Course in Mumbai | Image Editing Training | Primezone",
        metaDescription: "Master Photoshop in Mumbai. Learn photo retouching, digital art, and UI assets. Job-oriented creative training at Primezone Computer Education.",
        description: "The industry standard for image editing. Learn everything from basic cropping to advanced digital painting and photo manipulation.",
        whyLearn: "Photoshop is essential for almost every creative role today. It's the most powerful tool for visual creators.",
        image: "/images/courses/short/graphics/AdobePhotoshop.png",
        hint: "photoshop editing",
        highlights: ["Photo Retouching", "Layer Management", "Compositing", "Digital Art"],
        whatYouWillLearn: ["Advanced selection tools", "Non-destructive editing", "Color correction", "Designing for web and print"],
        careerOpportunities: ["Photo Editor", "Social Media Designer", "UI Designer", "Freelance Artist"],
        syllabus: [
            { title: "Basics", icon: "Palette", topics: ["Workspace", "Layers", "Selections"] },
            { title: "Editing", icon: "Brush", topics: ["Masking", "Retouching", "Filters"] },
            { title: "Output", icon: "FileText", topics: ["File Formats", "Web Optimization", "Print Prep"] }
        ],
        tools: [{ name: "Photoshop", logo: "/images/tech/photoshop.svg" }],
        faqs: [{ q: "Is this course practical?", a: "Yes, 100% practical with hands-on projects." }]
    },
    'power-bi': {
        title: "Power BI Course in Mumbai | Data Visualization Training | Primezone",
        metaDescription: "Learn Power BI in Mumbai. Master interactive dashboards and data reporting. Top-rated BI training at Primezone in Jogeshwari and Vile Parle.",
        description: "Transform raw data into beautiful, interactive insights. Power BI is the leader in business intelligence and reporting.",
        whyLearn: "Companies need experts who can tell stories with data. Power BI is the most in-demand tool for business analysts in Mumbai's corporate world.",
        image: "/images/courses/short/programming/powerbi.png",
        hint: "powerbi dashboard",
        highlights: ["Data Modeling", "DAX Formulas", "Custom Visuals", "Live Dashboards"],
        whatYouWillLearn: ["Connecting to data sources", "Cleaning data with Power Query", "Writing complex DAX expressions", "Publishing reports to the cloud"],
        careerOpportunities: ["Business Analyst", "BI Developer", "Data Visualization Expert"],
        syllabus: [
            { title: "Data Prep", icon: "BarChart", topics: ["ETL Process", "Power Query", "Merging Data"] },
            { title: "Modeling", icon: "BarChart", topics: ["Relationships", "DAX Basics", "Measures & Columns"] },
            { title: "Reporting", icon: "Palette", topics: ["Visuals", "Formatting", "Slicers", "Dashboards"] }
        ],
        tools: [{ name: "Power BI", logo: "/images/tech/powerbi.svg" }],
        faqs: [{ q: "Is Excel knowledge needed?", a: "Basic Excel is helpful but not mandatory; we cover needed concepts." }]
    },
    // Adding more short-term courses to prevent 404s
    'taxation-auditing': {
        title: "Taxation & Auditing Course in Mumbai | Primezone",
        metaDescription: "Master Taxation and Auditing in Mumbai. Learn Income Tax, GST filing, and Audit procedures at Primezone.",
        description: "A specialized course for those looking to excel in tax consultancy and corporate auditing.",
        whyLearn: "Compliance is a massive industry in India. Skilled tax professionals are always in high demand.",
        image: "/images/courses/short/account/TaxationAuditing.png",
        hint: "tax audit",
        highlights: ["Income Tax Filing", "GST Returns", "Audit Reports", "Direct & Indirect Tax"],
        whatYouWillLearn: ["ITR forms mastery", "GST portal usage", "Bank audit basics", "Corporate audit workflows"],
        careerOpportunities: ["Tax Consultant", "Audit Assistant", "Accountant"],
        syllabus: [{ title: "Tax Laws", icon: "Landmark", topics: ["Income Tax", "GST", "TDS"] }],
        tools: [{ name: "Income Tax Portal", logo: "/images/tech/tax.png" }],
        faqs: [{ q: "Who can join?", a: "Commerce graduates or anyone interested in finance." }]
    },
    'share-market': {
        title: "Share Market Course in Mumbai | Trading & Investment | Primezone",
        metaDescription: "Learn Share Market in Mumbai. Master Technical Analysis, IPOs, and Trading strategies at Primezone Computer Education.",
        description: "Understand the mechanics of the stock market and learn how to invest wisely.",
        whyLearn: "Financial literacy is key to wealth creation. Learn the tools used by professional traders.",
        image: "/images/courses/short/account/sharemarket.png",
        hint: "stock trading",
        highlights: ["Technical Analysis", "Fundamental Analysis", "Option Trading", "Risk Management"],
        whatYouWillLearn: ["Reading charts", "Understanding market indicators", "Portfolio management", "Live trading sessions"],
        careerOpportunities: ["Stock Trader", "Investment Advisor", "Market Analyst"],
        syllabus: [{ title: "Trading", icon: "BarChart", topics: ["Candlesticks", "Indicators", "Psychology"] }],
        tools: [{ name: "TradingView", logo: "/images/tech/powerbi.svg" }],
        faqs: [{ q: "Do you give tips?", a: "No, we teach you how to analyze the market yourself." }]
    },
    'ccc': {
        title: "CCC Course in Mumbai | Course on Computer Concepts | Primezone",
        metaDescription: "Best CCC Course in Mumbai. Learn computer fundamentals for govt jobs and general proficiency at Primezone.",
        description: "A foundational course designed to impart basic level computer appreciation for common people.",
        whyLearn: "CCC is often a mandatory requirement for government job applications in India.",
        image: "/images/courses/short/account/ccc.png",
        hint: "ccc certificate",
        highlights: ["Govt Job Prep", "Basic PC Skills", "Internet Awareness", "Digital Literacy"],
        whatYouWillLearn: ["Operating systems", "Word & Excel basics", "Digital financial services", "Cybersecurity awareness"],
        careerOpportunities: ["Govt Job Eligible", "Office Assistant"],
        syllabus: [{ title: "Basics", icon: "MonitorCheck", topics: ["Windows", "Internet", "Email", "Office"] }],
        tools: [{ name: "Windows", logo: "/images/tech/excel.svg" }],
        faqs: [{ q: "Is the exam included?", a: "We prepare you for the official NIELIT CCC exam." }]
    },
    'c-programming': {
        title: "C Programming Course in Mumbai | Logic Building | Primezone",
        metaDescription: "Learn C Programming in Mumbai. The best course for logic building and coding foundations at Primezone.",
        description: "Start your coding journey with the 'mother of all languages'.",
        whyLearn: "C helps you understand how computers work at a low level, which is vital for any professional developer.",
        image: "/images/courses/short/programming/cprog.png",
        hint: "c code",
        highlights: ["Logic Building", "Memory Management", "Syntax Clarity", "Algorithm Design"],
        whatYouWillLearn: ["Loops & Arrays", "Pointers", "File I/O", "Data Structures basics"],
        careerOpportunities: ["System Programmer", "Foundation for IT Jobs"],
        syllabus: [{ title: "C Syntax", icon: "Code", topics: ["Variables", "Operators", "Functions"] }],
        tools: [{ name: "GCC", logo: "/images/tech/vscode.svg" }],
        faqs: [{ q: "Is it hard?", a: "It is challenging but very rewarding for your future coding career." }]
    },
    'c-plus-plus': {
        title: "C++ Programming Course in Mumbai | OOPS Training | Primezone",
        metaDescription: "Master C++ in Mumbai. Learn Object Oriented Programming and build fast applications at Primezone.",
        description: "Move from C to C++ and master the concepts of classes and objects.",
        whyLearn: "C++ is used in game development, high-performance systems, and complex software like browsers.",
        image: "/images/courses/short/programming/c++.png",
        hint: "c++ code",
        highlights: ["OOPS Concepts", "Inheritance", "Polymorphism", "Standard Template Library"],
        whatYouWillLearn: ["Class design", "Templates", "Exception handling", "Dynamic memory"],
        careerOpportunities: ["Game Developer", "System Architect", "Embedded Engineer"],
        syllabus: [{ title: "OOPS", icon: "Code", topics: ["Classes", "Objects", "Virtual Functions"] }],
        tools: [{ name: "VS Code", logo: "/images/tech/vscode.svg" }],
        faqs: [{ q: "Can I join after C?", a: "Yes, it is the perfect next step after learning C." }]
    },
    'adobe-illustrator': {
        title: "Adobe Illustrator Course in Mumbai | Vector Design Training | Primezone",
        metaDescription: "Learn Illustrator in Mumbai. Master logo design and vector art. Professional creative classes at Primezone.",
        description: "The gold standard for vector graphics. Create everything from simple icons to complex illustrations.",
        whyLearn: "Illustrator is used by every professional graphic designer for scalable artwork like logos.",
        image: "/images/courses/short/graphics/Illustrator.png",
        hint: "illustrator design",
        highlights: ["Logo Creation", "Typography", "Branding", "Vector Tracing"],
        whatYouWillLearn: ["Pen tool mastery", "Gradient mesh", "Artboard management", "Output for print & web"],
        careerOpportunities: ["Logo Designer", "Illustrator", "Brand Identity Designer"],
        syllabus: [{ title: "Vectors", icon: "Palette", topics: ["Paths", "Shapes", "Colors"] }],
        tools: [{ name: "Illustrator", logo: "/images/tech/illustrator.svg" }],
        faqs: [{ q: "Is it better than Photoshop?", a: "It is different; Illustrator is for vectors while Photoshop is for pixels." }]
    },
    'video-sound-editing': {
        title: "Video & Sound Editing Course in Mumbai | Primezone",
        metaDescription: "Learn Video Editing in Mumbai. Master Premiere Pro and After Effects. Professional editing classes at Primezone.",
        description: "Turn raw footage into cinematic stories with our professional editing course.",
        whyLearn: "Content is king. Every brand needs skilled video editors for their marketing campaigns.",
        image: "/images/courses/coursetrend/Video & Sound Editing.webp",
        hint: "video editing",
        highlights: ["Color Grading", "Audio Syncing", "Transitions", "Visual Effects"],
        whatYouWillLearn: ["Timeline management", "Multi-camera editing", "Title design", "Exporting for social media"],
        careerOpportunities: ["Video Editor", "YouTube Content Creator", "Post-production Specialist"],
        syllabus: [{ title: "Editing", icon: "LayoutTemplate", topics: ["Cutting", "Merging", "Sound Design"] }],
        tools: [{ name: "Premiere Pro", logo: "/images/tech/premiere.svg" }],
        faqs: [{ q: "Which software is used?", a: "We primarily use Adobe Premiere Pro and After Effects." }]
    },
    'autocad': {
        title: "AutoCAD 2D & 3D Course in Mumbai | Drafting Training | Primezone",
        metaDescription: "Learn AutoCAD in Mumbai. Master 2D drafting and 3D modeling for Civil, Mech, and Interior Design at Primezone.",
        description: "Become a pro at technical drawing and drafting with the most widely used software in engineering and architecture.",
        whyLearn: "AutoCAD is an essential skill for engineers, architects, and interior designers in Mumbai's construction boom.",
        image: "/images/courses/short/graphics/AutoCAD.png",
        hint: "autocad drafting",
        highlights: ["2D Drafting", "3D Modeling", "Building Plans", "Technical Drawing"],
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
        highlights: ["Responsive UI", "React Mastery", "CSS Frameworks", "API Integration"],
        whatYouWillLearn: ["Building complex UI components", "State management", "Routing", "Optimizing performance"],
        careerOpportunities: ["Frontend Developer", "UI Developer", "React Specialist"],
        syllabus: [{ title: "React", icon: "Code", topics: ["Hooks", "Context API", "Props"] }],
        tools: [{ name: "React", logo: "/images/tech/react.svg" }],
        faqs: [{ q: "Do I need JS?", a: "Yes, we teach JavaScript extensively before moving to React." }]
    },
    'back-end-development': {
        title: "Back-End Development Course in Mumbai | Primezone",
        metaDescription: "Master Backend Development in Mumbai. Learn Node.js, Express, and Databases. Professional classes at Primezone.",
        description: "Learn the engine behind the scenes—server logic, databases, and APIs.",
        whyLearn: "The backend is the brain of any application. High-scale apps rely on robust backend systems.",
        image: "/images/courses/short/programming/backend.png",
        hint: "backend code",
        highlights: ["Server Logic", "Database Design", "Auth & Security", "REST APIs"],
        whatYouWillLearn: ["Node.js architecture", "Handling requests", "JWT Authentication", "Middleware development"],
        careerOpportunities: ["Backend Developer", "Node.js Developer", "Database Administrator"],
        syllabus: [{ title: "NodeJS", icon: "Code", topics: ["Modules", "Events", "Express Server"] }],
        tools: [{ name: "Node.js", logo: "/images/tech/node.svg" }],
        faqs: [{ q: "Which DB is taught?", a: "We cover MySQL and MongoDB." }]
    },
    'database': {
        title: "Database Management (SQL) Course in Mumbai | Primezone",
        metaDescription: "Learn SQL and Database Management in Mumbai. Master MySQL and Data queries. Practical training at Primezone.",
        description: "Master the art of storing, retrieving, and managing large volumes of data.",
        whyLearn: "Every app has a database. Knowing how to write optimized SQL queries is a superpower for developers and analysts.",
        image: "/images/courses/short/programming/database.png",
        hint: "sql database",
        highlights: ["SQL Queries", "Joins & Unions", "Indexing", "DB Normalization"],
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
        highlights: ["OOPS", "Collections Framework", "Threading", "Exception Handling"],
        whatYouWillLearn: ["Java syntax", "Class and Objects", "Memory management", "GUI basics"],
        careerOpportunities: ["Java Developer", "Android Dev Foundation"],
        syllabus: [{ title: "Core Java", icon: "Code", topics: ["Inheritance", "Interfaces", "Packages"] }],
        tools: [{ name: "Eclipse", logo: "/images/tech/java.svg" }],
        faqs: [{ q: "Is Java still relevant?", a: "Yes, it is the standard for corporate enterprise applications." }]
    },
    'react': {
        title: "ReactJS Course in Mumbai | Frontend Training | Primezone",
        metaDescription: "Learn React in Mumbai. Master hooks, state management, and modern UI. Best frontend classes at Primezone.",
        description: "Master the most popular library for building modern user interfaces.",
        whyLearn: "React developers are the highest-paid frontend engineers in the current Mumbai market.",
        image: "/images/courses/short/programming/react.png",
        hint: "react ui",
        highlights: ["Virtual DOM", "React Hooks", "Redux", "Component Architecture"],
        whatYouWillLearn: ["JSX", "Functional components", "Effect and State hooks", "Integration with APIs"],
        careerOpportunities: ["React Developer", "Frontend Engineer"],
        syllabus: [{ title: "Modern UI", icon: "Code", topics: ["Functional Components", "State Management"] }],
        tools: [{ name: "React", logo: "/images/tech/react.svg" }],
        faqs: [{ q: "Do I need HTML/CSS?", a: "Yes, basic knowledge is required." }]
    },
    'smm': {
        title: "Social Media Marketing (SMM) Course in Mumbai | Primezone",
        metaDescription: "Learn SMM in Mumbai. Master Facebook, Instagram, and LinkedIn marketing. Professional classes at Primezone.",
        description: "Learn how to build brands and run viral campaigns on social platforms.",
        whyLearn: "Every business in Mumbai is fighting for attention on social media. Learn the strategy to win.",
        image: "/images/courses/short/dm/smm.png",
        hint: "social media",
        highlights: ["Instagram Growth", "Facebook Ads", "LinkedIn Strategy", "Content Calendars"],
        whatYouWillLearn: ["Audience targeting", "Ad creative design", "Influencer collaboration", "Analytics tracking"],
        careerOpportunities: ["Social Media Manager", "Content Specialist"],
        syllabus: [{ title: "Strategy", icon: "Users", topics: ["Engagement", "Hashtag Research", "Paid Ads"] }],
        tools: [{ name: "Meta Ads", logo: "/images/tech/fb.svg" }],
        faqs: [{ q: "Do we learn content creation?", a: "Yes, we cover basic design for social posts." }]
    },
    'sem': {
        title: "Search Engine Marketing (SEM) Course in Mumbai | Primezone",
        metaDescription: "Learn SEM and Google Ads in Mumbai. Master PPC and Paid Search. Practical training at Primezone.",
        description: "Master paid advertising on search engines like Google and Bing.",
        whyLearn: "SEM gives immediate results. Companies value experts who can generate ROI-driven leads quickly.",
        image: "/images/courses/short/dm/sem.png",
        hint: "search ads",
        highlights: ["Google Ads Mastery", "Keyword Bidding", "Conversion Tracking", "Quality Score Optimization"],
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
        highlights: ["No-Code Design", "WooCommerce", "Theme Customization", "Security & SEO Plugins"],
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
        highlights: ["Blogging", "Video Scripts", "Copywriting", "Creative Design"],
        whatYouWillLearn: ["Writing for the web", "Graphic design basics", "Video storytelling", "Building a personal brand"],
        careerOpportunities: ["Content Writer", "Digital Creator", "Brand Storyteller"],
        syllabus: [{ title: "Creation", icon: "Palette", topics: ["Storyboarding", "Editing", "Publishing"] }],
        tools: [{ name: "Canva", logo: "/images/tech/canva.png" }],
        faqs: [{ q: "Is it good for YouTubers?", a: "Yes, it covers the planning and creation aspects perfectly." }]
    },
    'facebook-google-ads': {
        title: "Facebook & Google Ads Course in Mumbai | Primezone",
        metaDescription: "Master FB and Google Ads in Mumbai. ROI-driven performance marketing training at Primezone.",
        description: "Combine the power of the two biggest ad platforms in the world.",
        whyLearn: "These platforms are where the majority of marketing budget is spent. Expertise here means high employability.",
        image: "/images/courses/short/dm/facebookgoogleads.png",
        hint: "paid advertising",
        highlights: ["Meta Ads Manager", "Google Search Ads", "Targeting & Retargeting", "Conversion Optimization"],
        whatYouWillLearn: ["Campaign structure", "A/B testing", "Scaling budgets", "Analyzing ROI"],
        careerOpportunities: ["Performance Marketer", "Ad Specialist"],
        syllabus: [{ title: "Ads Mastery", icon: "Megaphone", topics: ["Funnel Building", "Conversion Pixels"] }],
        tools: [{ name: "Google Ads", logo: "/images/tech/google-ads.svg" }, { name: "Meta Ads", logo: "/images/tech/fb.svg" }],
        faqs: [{ q: "Do we get hands-on?", a: "Yes, we run live demo campaigns." }]
    },
    'adobe-indesign': {
        title: "Adobe InDesign Course in Mumbai | Layout Design | Primezone",
        metaDescription: "Learn InDesign in Mumbai. Master book and magazine layout. Professional design classes at Primezone.",
        description: "Learn to create professional layouts for print and digital publishing.",
        whyLearn: "InDesign is the industry standard for publishers, authors, and marketing departments.",
        image: "/images/courses/short/graphics/InDesign.png",
        hint: "indesign layout",
        highlights: ["Typography", "Grid Systems", "Master Pages", "Interactive PDFs"],
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
        highlights: ["Frame-by-Frame", "Character Rigging", "Motion Tweens", "ActionScript basics"],
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
        highlights: ["V-Ray Rendering", "Interior Design", "Texturing & Lighting", "Walkthroughs"],
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
        highlights: ["Social Media Graphics", "Brand Kits", "Templates", "Presentation Design"],
        whatYouWillLearn: ["Color matching", "Font pairing", "Designing for printing", "Video creation in Canva"],
        careerOpportunities: ["Social Media Executive", "Freelance Designer"],
        syllabus: [{ title: "Quick Design", icon: "Palette", topics: ["Elements", "Effects", "Branding"] }],
        tools: [{ name: "Canva", logo: "/images/tech/canva.png" }],
        faqs: [{ q: "Is it for professional use?", a: "Yes, Canva is widely used by marketing agencies for speed and efficiency." }]
    },
    'after-effects': {
        title: "After Effects Course in Mumbai | Motion Graphics Training | Primezone",
        metaDescription: "Learn After Effects in Mumbai. Master Motion Graphics and VFX at Primezone. Best professional classes in Mumbai.",
        description: "The industry standard for motion graphics and visual effects.",
        whyLearn: "Bring static designs to life. After Effects is essential for high-end video production and commercials.",
        image: "/images/courses/short/graphics/AfterEffects.png",
        hint: "motion graphics",
        highlights: ["Motion Tracking", "VFX", "Compositing", "Logo Animation"],
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
        highlights: ["Timeline Workflow", "Color Correction", "Audio Editing", "Export Settings"],
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
        highlights: ["Prototyping", "Design Systems", "Collaboration", "Auto Layout"],
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
        highlights: ["BIM Workflow", "Floor Plans", "3D Visualization", "Families & Components"],
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
        highlights: ["Communication", "Leadership", "Conflict Resolution", "Team Building"],
        whatYouWillLearn: ["Effective office management", "Public speaking", "Strategic planning", "Managing diversity"],
        careerOpportunities: ["Manager", "Team Lead", "Admin Head"],
        syllabus: [{ title: "Leadership", icon: "Users", topics: ["Time Management", "Ethics", "Decision Making"] }],
        tools: [{ name: "Excel", logo: "/images/tech/excel.svg" }],
        faqs: [{ q: "Is it for freshers?", a: "Yes, it's great for anyone starting their career." }]
    }
};
