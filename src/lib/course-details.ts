
export const courseDetails: { [key: string]: any } = {
    // --- DIPLOMA COURSES ---
    'computer-application': {
        title: "Diploma In Computer Application (DCA) Course in Mumbai | Primezone",
        metaDescription: "Best DCA Course in Mumbai. Learn MS Office, Tally, Graphic Design, and Web Design in one comprehensive diploma. Job-oriented training in Jogeshwari and Vile Parle.",
        description: "The Diploma in Computer Application (DCA) at Primezone is a comprehensive 1-year program covering everything from basic office tools to advanced graphic and web design.",
        whyLearn: "DCA is the perfect foundation for any office-based career. It combines administrative skills with creative design, making you a versatile candidate for various industries.",
        image: "/images/courses/diploma/dca.webp",
        hint: "computer application",
        highlights: ["Office Automation", "Advanced Excel", "Graphic Designing", "Web Designing"],
        whatYouWillLearn: [
            "Proficiency in MS Office (Word, Excel, PowerPoint).",
            "Accounting basics with Tally Prime and GST.",
            "Graphic design using Photoshop and Illustrator.",
            "Web layout and coding fundamentals.",
            "Internet and Windows management."
        ],
        careerOpportunities: ["Office Administrator", "Graphic Designer", "Data Entry Operator", "Web Designer", "Accountant Assistant"],
        syllabus: [
            { title: "Office Automation", icon: "MonitorCheck", topics: ["Typing Speed", "MS Word", "MS Excel", "MS PowerPoint", "Internet usage"] },
            { title: "Advanced Excel", icon: "BarChart", topics: ["V-Lookup", "H-Lookup", "Pivot Tables", "Macros", "MIS Reporting"] },
            { title: "Tally Prime (GST)", icon: "FileText", topics: ["Basics of Accounting", "GST Setup", "TDS", "Inventory Management"] },
            { title: "Graphic Designing", icon: "Palette", topics: ["CorelDRAW", "Photoshop", "Illustrator", "InDesign", "Canva"] },
            { title: "Web Designing", icon: "Globe", topics: ["HTML / CSS", "JavaScript", "Adobe Animate", "Web Hosting"] }
        ],
        tools: [
            { name: "Excel", logo: "/images/tech/excel.svg" },
            { name: "Tally Prime", logo: "/images/tech/tally.png" },
            { name: "Photoshop", logo: "/images/tech/photoshop.svg" },
            { name: "Illustrator", logo: "/images/tech/illustrator.svg" },
            { name: "HTML5", logo: "/images/tech/html.svg" }
        ],
        faqs: [
            { q: "Is DCA a government-recognized course?", a: "Yes, Primezone provides government-recognized certification for the DCA program." },
            { q: "Who can join this course?", a: "Students who have completed 10th or 12th grade can enroll in this diploma." }
        ]
    },
    'financial-management': {
        title: "Diploma In Financial & Management Course in Mumbai | Primezone",
        metaDescription: "Master Finance and Management in Mumbai. Comprehensive training in Accounting, Tally, Taxation, and Share Market. Enroll at Primezone today.",
        description: "This advanced diploma focuses on the financial backbone of businesses, covering accounting, taxation, auditing, and even share market fundamentals.",
        whyLearn: "Financial management is critical for every business. Mastering Tally, GST, and investment strategies ensures high-paying roles in finance departments.",
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
        faqs: [{ q: "Do you teach live taxation cases?", a: "Yes, we use real-world scenarios for GST and Income Tax training." }]
    },
    'programming-course': {
        title: "Diploma In Programming Course in Mumbai | C, C++, Java, Python | Primezone",
        metaDescription: "Learn to code in Mumbai. Master Python, Java, C++, and Web Development. Practical coding classes with placement assistance at Primezone Computer Education.",
        description: "Our Diploma in Programming is designed to turn beginners into expert coders by covering the world's most popular programming languages.",
        whyLearn: "Software development is the highest-paying industry globally. Building logic in C/C++ and mastering Python and Java opens doors to top tech companies.",
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
        faqs: [{ q: "Which language do we start with?", a: "We start with C to build strong logic foundations before moving to advanced languages." }]
    },
    'graphic-animation': {
        title: "Diploma In Graphic & Animation Course in Mumbai | Photoshop, 3ds Max | Primezone",
        metaDescription: "Best Graphic Design and Animation Course in Mumbai. Learn Photoshop, Illustrator, 3ds Max, and Video Editing. Job-oriented creative training.",
        description: "Explore the world of visual storytelling. From logo design to 3D architectural walkthroughs, this course covers it all.",
        whyLearn: "The creative economy is booming. Skilled animators and designers are needed for social media, film, architecture, and advertising.",
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
        faqs: [{ q: "Do I need a high-end PC?", a: "While learning, you can use our state-of-the-art labs equipped with high-performance systems." }]
    },
    'ethical-hacking': {
        title: "Diploma In Ethical Hacking Course in Mumbai | Cybersecurity Training | Primezone",
        metaDescription: "Learn Cybersecurity in Mumbai. Master Penetration Testing, Network Security, and Hacking Countermeasures. Join the best Ethical Hacking course.",
        description: "Protect the digital world. Our Ethical Hacking diploma teaches you how to identify and patch vulnerabilities before malicious hackers find them.",
        whyLearn: "Cybersecurity is a top priority for every government and corporation. Skilled ethical hackers are in massive demand to protect sensitive data.",
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
        faqs: [{ q: "Is this course legal?", a: "Yes, we teach Ethical Hacking for defense and security purposes only." }]
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
        faqs: [{ q: "Will I learn how to build a website?", a: "Yes, we include WordPress website creation as part of the course." }]
    },
    'full-stack-development': {
        title: "Full-Stack Development Course in Mumbai | MERN & Java Training | Primezone",
        metaDescription: "Become a Full-Stack Developer in Mumbai. Learn React, Node.js, Python, and Java. 100% placement assistance and live project training.",
        description: "From front-end UI to back-end databases, master the entire web development lifecycle at Primezone.",
        whyLearn: "Full-stack developers are highly sought after because they can build entire products independently. This course makes you industry-ready.",
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
        faqs: [{ q: "Which stack is best?", a: "We teach both MERN and Java to give you maximum career flexibility." }]
    },
    'data-analysis': {
        title: "Data Analytics Course in Mumbai | Excel, Power BI, SQL Training | Primezone",
        metaDescription: "Join the best Data Analytics Course in Mumbai. Master Power BI, Tableau, Advanced Excel, and SQL. Practical training with placement guidance.",
        description: "Turn data into decisions. Master the most powerful data tools and become a high-demand data analyst.",
        whyLearn: "Data is the new oil. Companies across all sectors need experts who can analyze trends and provide actionable business insights.",
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
        faqs: [{ q: "Is coding required for Data Analytics?", a: "Only basic Python and SQL are needed, which we teach from scratch." }]
    },

    // --- SHORT TERM COURSES ---
    'office-automation': {
        title: "Office Automation Course in Mumbai | MS Office & Internet Skills | Primezone",
        metaDescription: "Best Office Automation Course in Mumbai. Learn MS Word, Excel, PowerPoint, and Web usage. Job-oriented training in Jogeshwari East & West.",
        description: "Master the essential software used in every office environment. Our 2-month Office Automation course turns you into a productive professional.",
        whyLearn: "Office automation is the most basic yet vital skill for any white-collar job. Being fast with Word and Excel is non-negotiable in 2025.",
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
        whyLearn: "MS Office is the global standard for documentation and analysis. Mastering these tools ensures you can work in any office, anywhere in the world.",
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
    'web-designing': {
        title: "Web Designing Course in Mumbai | HTML, CSS, JavaScript Training | Primezone",
        metaDescription: "Best Web Designing Course in Mumbai. Learn to create responsive websites using HTML, CSS, and JS. Practical training in Jogeshwari and Vile Parle.",
        description: "Learn to build visually stunning and responsive websites. This short-term course is perfect for creative individuals looking to enter the tech field.",
        whyLearn: "Web design is the foundation of the internet. Every business needs a designer to create its digital identity.",
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
    'advanced-excel': {
        title: "Advanced Excel Course in Mumbai | MIS Reporting & Macros Training | Primezone",
        metaDescription: "Master Advanced Excel in Mumbai. Learn VLOOKUP, Pivot Tables, and VBA Macros. Industry-oriented training for MIS roles at Primezone.",
        description: "Go beyond basic spreadsheets. Learn the powerful functions that office professionals use to handle large datasets efficiently.",
        whyLearn: "Excel is the world's most common business tool. Advanced knowledge can save you hours of work and boost your salary prospects.",
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
        whyLearn: "Every business in India needs an accountant who knows Tally and GST. This is a recession-proof skill with immediate job opportunities.",
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
    'python': {
        title: "Python Programming Course in Mumbai | Beginner to Advanced Training | Primezone",
        metaDescription: "Learn Python in Mumbai. Master syntax, data structures, and automation. Join the best Python coding classes at Primezone with placement assistance.",
        description: "Learn Python, the world's most versatile and beginner-friendly programming language. Used in web dev, AI, and data science.",
        whyLearn: "Python is readable, powerful, and essential for modern tech roles. It's the perfect first language for aspiring developers.",
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
            { name: "PyCharm", logo: "/images/tech/pycharm.png" },
            { name: "Jupyter", logo: "/images/tech/jupyter.png" }
        ],
        faqs: [{ q: "Is Python good for non-IT students?", a: "Absolutely! It's very easy to pick up and great for data analysis in any field." }]
    },
    'seo': {
        title: "SEO Course in Mumbai | Search Engine Optimization Training | Primezone",
        metaDescription: "Best SEO Course in Mumbai. Learn On-Page, Off-Page, and Technical SEO. Master Google ranking factors at Primezone Computer Education.",
        description: "Learn how to get any website to rank on the first page of Google. This course covers the science and art of Search Engine Optimization.",
        whyLearn: "SEO is the most sustainable way to get traffic. Companies save millions in ad spend by hiring skilled SEO experts.",
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
        whyLearn: "CorelDRAW is widely used in the advertising and printing industry in India. It's fast, powerful, and essential for print designers.",
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
    }
};
