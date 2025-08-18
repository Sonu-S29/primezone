
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Newspaper, Rss, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const blogPosts = [
  {
    title: "The Future of Web Development in 2025",
    description: "Explore the upcoming trends in web development, from AI-powered tools to new frameworks and technologies that are shaping the future of the web. This article delves into the rise of server components, the increasing importance of edge computing, and how AI is revolutionizing the development workflow, from code generation to automated testing. We'll also look at the new features in upcoming framework releases and what they mean for developers.",
    image: "https://placehold.co/600x400.png",
    hint: "web development future",
    author: "Karan Singh",
    date: "2024-08-20",
    link: "#"
  },
  {
    title: "A Beginner's Guide to Financial Accounting",
    description: "New to accounting? This guide breaks down the fundamental concepts of financial accounting to give you a solid foundation. We'll cover everything from double-entry bookkeeping, reading financial statements like the balance sheet and income statement, to understanding debits and credits. This guide is perfect for small business owners, students, or anyone looking to get a better handle on their finances.",
    image: "https://placehold.co/600x400.png",
    hint: "accounting guide",
    author: "Vedika Singh",
    date: "2024-08-18",
    link: "#"
  },
  {
    title: "Why Python is the Top Language for Data Science",
    description: "Discover why Python has become the go-to programming language for data scientists and learn about the essential libraries you need to know. We'll explore the power of Pandas for data manipulation, NumPy for numerical operations, Matplotlib and Seaborn for data visualization, and Scikit-learn for machine learning. See practical examples of how Python is used in real-world data science projects.",
    image: "https://placehold.co/600x400.png",
    hint: "python data science",
    author: "Karan Singh",
    date: "2024-08-15",
    link: "#"
  },
    {
    title: "Graphic Design Trends to Watch This Year",
    description: "Stay ahead of the curve with our roundup of the latest graphic design trends, from 3D illustrations to retro-futurism. This piece explores the resurgence of Y2K aesthetics, the use of vibrant, unconventional color palettes, and the move towards more inclusive and diverse visual storytelling. Get inspired for your next project with stunning examples from leading designers.",
    image: "https://placehold.co/600x400.png",
    hint: "graphic design trends",
    author: "Vedika Singh",
    date: "2024-08-12",
    link: "#"
  },
];

type BlogPost = (typeof blogPosts)[0];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="overflow-hidden group">
                <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1">
                        <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={post.hint}
                        />
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col">
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl hover:text-primary">{post.title}</CardTitle>
                            <CardDescription className="text-xs pt-2">
                                By {post.author} on {post.date}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 pt-4 flex-grow">
                            <p className="text-muted-foreground text-sm line-clamp-3">{post.description}</p>
                        </CardContent>
                         <CardFooter className="p-0 pt-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="link" className="p-0" onClick={() => setSelectedPost(post)}>Read More</Button>
                                </DialogTrigger>
                            </Dialog>
                        </CardFooter>
                    </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Search /> Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="text" placeholder="Search articles..." />
                  <Button type="submit">Search</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Rss /> Subscribe</CardTitle>
                <CardDescription>Get the latest articles delivered to your inbox.</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Your Email" />
                    <Button type="submit">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Newspaper /> Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                    {blogPosts.slice(0, 3).map(post => (
                        <li key={post.title}>
                            <Link href={post.link} className="text-sm hover:text-primary">{post.title}</Link>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {selectedPost && (
         <Dialog open={!!selectedPost} onOpenChange={(isOpen) => !isOpen && setSelectedPost(null)}>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <div className="relative w-full h-64 mb-4">
                        <Image
                            src={selectedPost.image}
                            alt={selectedPost.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                             data-ai-hint={selectedPost.hint}
                        />
                    </div>
                    <DialogTitle className="text-2xl font-bold">{selectedPost.title}</DialogTitle>
                    <CardDescription className="text-xs pt-2">
                        By {selectedPost.author} on {selectedPost.date}
                    </CardDescription>
                </DialogHeader>
                <div className="prose max-w-none">
                    <p>{selectedPost.description}</p>
                </div>
            </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
