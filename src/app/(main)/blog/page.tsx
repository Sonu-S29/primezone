
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";

const blogPosts = [
  {
    title: "How Computer Education Shapes Successful Students",
    description: `
10 Reasons Why All Students Should Learn How to Use Computers

Computer education isn't just a subject anymore; it's a skill you need for life. If you want to get a job, go to school, or go to college, learning how to use a computer can help you in many ways. Technology is now a necessary part of every job, from keeping track of data to making creative graphics.

We at Primezone Computer Education think that learning about computers gives students the tools they need to think more clearly, work more quickly, and get more done. Here are the top ten reasons why every student should learn how to use a computer in 2025 and beyond! 💡

**💡 1. Knowing how to use a computer is the most important skill for any job.**
In every field, from business to design to finance to marketing to education, computers are used. From making presentations to looking at reports, every job needs to know the basics of computers. If you start early, you'll always be ahead.

**💼 2. Increases Job Opportunities**
Open More Doors Let’s be real—recruiters notice when you’re computer savvy. Tools like Tally, Photoshop, and Excel make you stand out in interviews. The more you know, the quicker you’ll find a job you actually want.

**💰 3. Helps You Earn More**
Start Earning Sooner Freelancing, digital marketing, running an online business—none of these work without computer skills. If you can design, create content, or use accounting software, you don’t have to wait until graduation to make money. Turn what you know into real income.

**🎨4. Encourages Creativity and Innovation**
Fuels Creativity and Fresh Ideas Programs like Photoshop, Illustrator, and CorelDRAW let you do way more than just follow directions. They give you the tools to make things that actually matter to you—and look good while you’re at it.

**🤝 5. Improves Communication and Collaboration**
Makes Communication and Teamwork Smoother Email, Google Docs, Zoom, social media—these tools changed everything. Once you’re comfortable with computers, it’s way easier to work with others and keep in touch, whether you’re teaming up on a project or just checking in with friends and mentors.

Ready to Kick Off Your Computer Learning Journey? At Primezone Computer Education, we’re all about real-world skills.
Our courses cover: Tally | MS Word | Excel | PowerPoint Photoshop | Illustrator | CorelDRAW Digital Marketing | Financial Accounting.
Every course is hands-on, job-focused, and comes with a government-recognized certificate—so you walk away ready for the workplace.

Join Us and Take Charge of Your Future!
Vile Parle Branch: +91 9702570087
Jogeshwari Branch: +91 9769730087
A Few Last Words These days, knowing computers isn’t just nice to have—it’s a must. The sooner you start, the better prepared you’ll be for whatever comes next. Don’t just wait around for things to happen. Make your own luck. Build your skills. Learn. Grow. Succeed. With Primezone Computer Education.
`,
    image: "/images/blogs/computerEducationShapes.png",
    hint: "computer education",
    author: "Karan Singh",
    date: "2024-08-22",
    link: "#"
  },
  {
    title: "Top 5 Computer Courses That Guarantee Better Job Opportunities in 2025",
    description: `
Having the proper computer skills has become crucial in today's rapidly evolving job market. Gaining proficiency in in-demand computer courses can lead to a ‘GALAXY’ of opportunities for advancement, regardless of your status as a student, graduate, or professional.
Primezone Computer Education has helped thousands of students transform their skills into lucrative careers. This blog post will go over the top five computer courses for 2025 and how each one can help you land your dream job faster. 🚀

### Tally with GST: An Essential for Accounting Careers
If you have an interest in finance, accounting, or business management, learning Tally with GST is a perfect plus. Why Tally? It is the most celebrated accounting software in India and is used across all sizes of companies. There is a high demand for experts managing accounts using Tally. In time, you will get easy with financial statements, tax reports, payroll, and GST filing, which are the lifeblood of any business.
- **Job Opportunities:** Accountant, Tax Consultant, Finance Executive
- **Average Pay Scale:** ₹2.5 – ₹6 LPA
The Tally course offered by Primezone gives you a comprehensive training program, covering GST updates, along with practical case studies.

### Advanced MS Excel: The Ultimate Tool in Data and Office Work
Excel experts are needed in every industry. Why Learn Excel? It is helping you in effective organizing, analyzing, and presenting data at work. You will learn formulas, charting, pivot tables, dashboards, and automation tools. Finance, HR, marketing, logistics, and operations use Excel.
- **Job Opportunities:** Data Analyst, Office Executive, MIS Executive.
- **Average Salary Range:** ₹3 – ₹8 LPA
Our Advanced Excel course employs AI-based tools to help you work more efficiently.

### Graphic Design (Photoshop, Illustrator & CorelDRAW): A Creative Career Path
Graphic Design is a great career for someone possessing creativity, having flexibility, and being financially rewarding. Why Learn Graphic Design? Demand for creative personnel in social media, brand design, and digital advertising is growing by the day. Freelancing, working in agencies or even establishing your design company is an opportunity. You will learn to use industry-specific software such as Adobe Photoshop, Illustrator, and CorelDRAW.
- **Career Opportunities:** Graphic Designer, UI Designer, Social Media Designer
- **Average Salary Range:** ₹3 – ₹10 LPA (Freelancers have a better chance to go door-to-door)
Primezone features hands-on design projects and portfolio-building guidance.

### Digital Marketing, The Skill of the Future:
Every business today wants to grow online. They need skilled digital marketers to make it happen.
Why Learn Digital Marketing?
- It includes SEO, Google Ads, Social Media Marketing, Email Campaigns, and more.
- You can work for companies or offer freelance marketing services.
- It’s one of the highest-paying and fastest-growing fields in India.
- **Job opportunities:** Digital Marketing Executive, SEO Analyst, Social Media Manager.
- **Average Salary Range:** ₹4 – ₹9 LPA

### Financial Accounting & Business Management: The Complete Career Combo
For those who dream of managing businesses or starting their own, this course is ideal.
Why Learn Financial Accounting?
- You will learn practical business skills, bookkeeping, and financial decision-making.
- It’s ideal for students with B. Com, BMS, or MBA backgrounds.
- With government-recognized certification, your chances of getting hired increase.
- **Job opportunities:** Accountant, Business Manager, Auditor, Entrepreneur
- **Average Salary Range:** ₹3 to ₹8 LPA

### Why Choose Primezone Computer Education?
At Primezone Computer Education, we don’t just teach. We prepare you for real success.
- Government Recognized Certificates
- 100% Practical Training
- Experienced Faculty & Modern Labs
- Job Assistance & Internship Opportunities

We offer professional courses in:
Tally, Excel, PowerPoint, Word, Photoshop, Illustrator, CorelDRAW, Digital Marketing, Financial Accounting
For more details contact:
Vile Parle Branch: +91 9702570087
Jogeshwari Branch: +91 9769730087

Take the First Step Toward a Brighter Future.
Don’t wait for opportunities. Create them with computer skills!
Join Primezone Computer Education today and start building a career that’s future-ready, high-paying, and in demand globally.
`,
    image: "/images/blogs/Top5.png",
    hint: "job opportunities",
    author: "Vedika Singh",
    date: "2024-08-25",
    link: "#"
  },
  {
    title: "CorelDRAW vs Illustrator: Which One Should You Learn First in 2025?",
    description: `
If you love design, logos, or digital art, you might wonder whether to learn CorelDRAW or Adobe Illustrator first. Both are powerful vector graphic tools used by designers worldwide. However, which software is the best fit for your goals and career?
At Primezone Computer Education, we teach students how to use both CorelDRAW and Illustrator. Today, we will help you decide the best starting point for your design journey.

### What Are CorelDRAW and Illustrator?
Before we compare them, let’s look at the basics:
- **CorelDRAW** is a vector-based design software known for being simple, fast, and suitable for printing. It's popular in the printing, branding, and advertising industries.
- **Adobe Illustrator** is part of Adobe’s Creative Cloud. It’s known for its precision, versatility, and professional design tools. It's widely used for digital, web, and motion graphics.
Both tools are excellent, but your decision should depend on your design goals, workflow, and career focus.

### CorelDRAW vs Illustrator: A Detailed Comparison

| Feature | CorelDRAW | Adobe Illustrator |
|---|---|---|
| **Ease of Use** | Beginner-friendly, intuitive interface | Slightly complex, but more powerful |
| **Industry Usage** | Popular in printing, signage, logo design | Preferred in creative agencies, digital media, and branding |
| **File Compatibility** | Works best with Corel and Windows formats | Integrates smoothly with Adobe apps like Photoshop and InDesign |
| **Performance** | Fast on mid-range PCs | Requires higher specs for smooth performance |
| **Design Tools** | Great for vector illustrations and layouts | Ideal for precise artwork, web icons, and complex graphics |
| **Learning Curve** | Easier for beginners | Better for intermediate to advanced designers |

### When to Choose CorelDRAW First?
Choose CorelDRAW if you:
- Want a career in printing, logo design, or branding
- Prefer an easy-to-learn tool that delivers quick results
- Mainly work on Windows systems
- Want to quickly learn design basics
CorelDRAW helps you understand layout, color, and typography. It’s perfect for beginners in graphic design.

### When to Choose Illustrator First
Choose Adobe Illustrator if you:
- Want to work in advertising agencies, digital media, or animation studios
- Plan to create high-quality digital artwork, illustrations, and brand assets
- Already use Adobe tools like Photoshop or Premiere Pro
- Aim to become a professional graphic designer or creative director
Illustrator offers more control and flexibility for advanced creative projects.

### Which One Do Employers Prefer in 2025?
In 2025, employers will look for multi-skilled designers who can use both CorelDRAW and Illustrator.
> Printing firms prefer CorelDRAW for its speed and compatibility.
> Digital agencies favor Illustrator for brand and creative work.
> Freelancers who are skilled in both tools can attract more clients and earn better.
Learning both gives you a significant edge, and that’s what we provide at Primezone Computer Education.

### Learn CorelDRAW and Illustrator Together at Primezone Computer Education
At Primezone Computer Education, we offer professional design training that gets you ready for the industry.
Our Graphic Design Course Includes:
- CorelDRAW (Logo, Print & Vector Design)
- Adobe Illustrator (Brand & Digital Design)
- Photoshop (Image Editing & Retouching)
- Real-time Creative Projects
- Government Recognized Certification
- 100% Practical Training
- Experienced Faculty
- Creative Portfolio Guidance
- Affordable Course Fee

Vile Parle Branch: +91 9702570087
Jogeshwari Branch: +91 9769730087
`,
    image: "/images/blogs/corelvsadobe.png",
    hint: "design software",
    author: "Karan Singh",
    date: "2024-08-24",
    link: "#"
  },
  {
    title: "The Future of Web Development in 2025",
    description: "Explore the upcoming trends in web development, from AI-powered tools to new frameworks and technologies that are shaping the future of the web. This article delves into the rise of server components, the increasing importance of edge computing, and how AI is revolutionizing the development workflow, from code generation to automated testing. We'll also look at the new features in upcoming framework releases and what they mean for developers.",
    image: "/images/blogs/web.png",
    hint: "web development future",
    author: "Karan Singh",
    date: "2024-08-20",
    link: "#"
  },
  {
    title: "A Beginner's Guide to Financial Accounting",
    description: "New to accounting? This guide breaks down the fundamental concepts of financial accounting to give you a solid foundation. We'll cover everything from double-entry bookkeeping, reading financial statements like the balance sheet and income statement, to understanding debits and credits. This guide is perfect for small business owners, students, or anyone looking to get a better handle on their finances.",
    image: "/images/blogs/account.png",
    hint: "accounting guide",
    author: "Vedika Singh",
    date: "2024-08-18",
    link: "#"
  },
  {
    title: "Why Python is the Top Language for Data Science",
    description: "Discover why Python has become the go-to programming language for data scientists and learn about the essential libraries you need to know. We'll explore the power of Pandas for data manipulation, NumPy for numerical operations, Matplotlib and Seaborn for data visualization, and Scikit-learn for machine learning. See practical examples of how Python is used in real-world data science projects.",
    image: "/images/blogs/python.png",
    hint: "python data science",
    author: "Karan Singh",
    date: "2024-08-15",
    link: "#"
  },
  {
    title: "Graphic Design Trends to Watch This Year",
    description: "Stay ahead of the curve with our roundup of the latest graphic design trends, from 3D illustrations to retro-futurism. This piece explores the resurgence of Y2K aesthetics, the use of vibrant, unconventional color palettes, and the move towards more inclusive and diverse visual storytelling. Get inspired for your next project with stunning examples from leading designers.",
    image: "/images/blogs/graphicrends.png",
    hint: "graphic design trends",
    author: "Vedika Singh",
    date: "2024-08-12",
    link: "#"
  },
];

type BlogPost = (typeof blogPosts)[0];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const getTruncatedDescription = (description: string) => {
    if (!description) return '';
    const firstParagraph = description.trim().split('\n\n')[0];
    if (!firstParagraph) return '';
    if (firstParagraph.length > 200) {
      return firstParagraph.substring(0, 200) + '...';
    }
    return firstParagraph;
  };

  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, trends, and insights from the world of technology and education.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="flex flex-col overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    data-ai-hint={post.hint}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl hover:text-primary">{post.title}</CardTitle>
                        <CardDescription className="text-xs pt-2">
                            By {post.author} on {post.date}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pt-4 flex-grow">
                        <p className="text-muted-foreground text-sm line-clamp-4">{getTruncatedDescription(post.description)}</p>
                    </CardContent>
                      <CardFooter className="p-0 pt-6 mt-auto">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="w-full" onClick={() => setSelectedPost(post)} aria-label={`Read more about ${post.title}`}>Read More</Button>
                            </DialogTrigger>
                        </Dialog>
                    </CardFooter>
                </div>
              </Card>
            ))}
          </div>
      </section>

      {selectedPost && (
         <Dialog open={!!selectedPost} onOpenChange={(isOpen) => !isOpen && setSelectedPost(null)}>
            <DialogContent className="max-w-3xl p-0">
                <DialogHeader className="sr-only">
                    <DialogTitle>{selectedPost.title}</DialogTitle>
                </DialogHeader>
                <div className="relative w-full h-64 mb-4">
                  <Image
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      fill
                      className="rounded-t-lg object-cover"
                      sizes="100vw"
                      data-ai-hint={selectedPost.hint}
                  />
                </div>
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
                    <p className="text-xs text-muted-foreground mb-4">
                        By {selectedPost.author} on {selectedPost.date}
                    </p>
                    <div className="prose max-w-none text-muted-foreground">
                        <ReactMarkdown>{selectedPost.description}</ReactMarkdown>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
