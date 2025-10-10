

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import imageData from "@/lib/placeholder-images.json";

const blogPosts = [
  {
    title: "The Future of Web Development in 2025",
    description: "Explore the upcoming trends in web development, from AI-powered tools to new frameworks and technologies that are shaping the future of the web. This article delves into the rise of server components, the increasing importance of edge computing, and how AI is revolutionizing the development workflow, from code generation to automated testing. We'll also look at the new features in upcoming framework releases and what they mean for developers.",
    imageId: "web-dev-future",
    author: "Karan Singh",
    date: "2024-08-20",
    link: "#"
  },
  {
    title: "A Beginner's Guide to Financial Accounting",
    description: "New to accounting? This guide breaks down the fundamental concepts of financial accounting to give you a solid foundation. We'll cover everything from double-entry bookkeeping, reading financial statements like the balance sheet and income statement, to understanding debits and credits. This guide is perfect for small business owners, students, or anyone looking to get a better handle on their finances.",
    imageId: "accounting-guide",
    author: "Vedika Singh",
    date: "2024-08-18",
    link: "#"
  },
  {
    title: "Why Python is the Top Language for Data Science",
    description: "Discover why Python has become the go-to programming language for data scientists and learn about the essential libraries you need to know. We'll explore the power of Pandas for data manipulation, NumPy for numerical operations, Matplotlib and Seaborn for data visualization, and Scikit-learn for machine learning. See practical examples of how Python is used in real-world data science projects.",
    imageId: "python-ds",
    author: "Karan Singh",
    date: "2024-08-15",
    link: "#"
  },
    {
    title: "Graphic Design Trends to Watch This Year",
    description: "Stay ahead of the curve with our roundup of the latest graphic design trends, from 3D illustrations to retro-futurism. This piece explores the resurgence of Y2K aesthetics, the use of vibrant, unconventional color palettes, and the move towards more inclusive and diverse visual storytelling. Get inspired for your next project with stunning examples from leading designers.",
    imageId: "design-trends",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const imageInfo = imageData.find(img => img.id === post.imageId);
              return (
                <Card key={post.title} className="flex flex-col overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-56">
                    {imageInfo && <Image
                      src={imageInfo.src}
                      alt={post.title}
                      width={imageInfo.width}
                      height={imageInfo.height}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                      data-ai-hint={imageInfo.hint}
                    />}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                      <CardHeader className="p-0">
                          <CardTitle className="text-xl hover:text-primary">{post.title}</CardTitle>
                          <CardDescription className="text-xs pt-2">
                              By {post.author} on {post.date}
                          </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 pt-4 flex-grow">
                          <p className="text-muted-foreground text-sm line-clamp-4">{post.description}</p>
                      </CardContent>
                        <CardFooter className="p-0 pt-6 mt-auto">
                          <Dialog>
                              <DialogTrigger asChild>
                                  <Button className="w-full bg-slate-900 text-white hover:bg-slate-800" onClick={() => setSelectedPost(post)}>Read More</Button>
                              </DialogTrigger>
                          </Dialog>
                      </CardFooter>
                  </div>
                </Card>
              )
            })}
          </div>
      </section>

      {selectedPost && (
         <Dialog open={!!selectedPost} onOpenChange={(isOpen) => !isOpen && setSelectedPost(null)}>
            <DialogContent className="max-w-3xl p-0">
                <DialogHeader className="sr-only">
                    <DialogTitle>{selectedPost.title}</DialogTitle>
                </DialogHeader>
                <div className="relative w-full h-64 mb-4">
                  {(() => {
                    const imageInfo = imageData.find(img => img.id === selectedPost.imageId);
                    return imageInfo && <Image
                        src={imageInfo.src}
                        alt={selectedPost.title}
                        fill
                        className="rounded-t-lg object-cover"
                        sizes="100vw"
                          data-ai-hint={imageInfo.hint}
                    />
                  })()}
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
                    <p className="text-xs text-muted-foreground mb-4">
                        By {selectedPost.author} on {selectedPost.date}
                    </p>
                    <div className="prose max-w-none text-muted-foreground">
                        <p>{selectedPost.description}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

    