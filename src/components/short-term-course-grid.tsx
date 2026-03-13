
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle, Clock, BookOpen, Download, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BrochureDownloadForm from "@/components/brochure-download-form";
import Image from "next/image";
import type { ShortTermCourseCategory } from "@/lib/course-data";

export default function ShortTermCourseGrid({ courseData }: { courseData: ShortTermCourseCategory[] }) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = activeFilter
    ? courseData.find((category) => category.id === activeFilter)?.courses || []
    : courseData.flatMap((category) => category.courses);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-col items-center mb-12">
          {/* Mobile Filter Button */}
          <Button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden w-full mb-4"
          >
              <Filter className="mr-2 h-4 w-4" />
              Filter
          </Button>

          {/* Desktop Filters (always visible) */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
               <Button
                  onClick={() => setActiveFilter(null)}
                  variant={activeFilter === null ? "default" : "outline"}
                  className="h-10"
              >
                  All
              </Button>
              {courseData.map((category) => (
                  <Button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className="h-10"
                  >
                  <div className="flex items-center gap-3 p-2">
                      {category.icon}
                      <div className="text-left">
                      <p className="font-bold">{category.name}</p>
                      </div>
                  </div>
                  </Button>
              ))}
          </div>

          {/* Mobile Filters (conditionally rendered) */}
          {showFilters && (
              <div className="md:hidden flex flex-nowrap overflow-x-auto justify-start gap-2 pb-2 w-full animate-scale-in-center">
                  <Button
                      onClick={() => {setActiveFilter(null); setShowFilters(false);}}
                      variant={activeFilter === null ? "default" : "outline"}
                      className="h-10 flex-shrink-0"
                  >
                      All
                  </Button>
                  {courseData.map((category) => (
                      <Button
                      key={category.id}
                      onClick={() => {setActiveFilter(category.id); setShowFilters(false);}}
                      variant={activeFilter === category.id ? "default" : "outline"}
                      className="h-10 flex-shrink-0"
                      >
                      {category.name}
                      </Button>
                  ))}
              </div>
          )}
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredCourses.map((course) => (
          <Card key={course.title} className="bg-white flex flex-col justify-between overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl">
              <div className="relative h-40 w-full p-4 bg-white rounded-t-2xl">
                  <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      style={{objectFit: "contain"}}
                      data-ai-hint={course.hint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className=""
                  />
              </div>
              <CardHeader className="space-y-1 pb-2">
                  <div className="flex justify-between items-center">
                       <div className="flex items-center text-xs font-medium text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {course.duration}
                      </div>
                      <Dialog>
                          <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-7 text-xs px-2 text-accent hover:text-accent/80">View Topics</Button>
                          </DialogTrigger>
                          <DialogContent className="bg-white/80 backdrop-blur-sm">
                              <DialogHeader>
                                  <DialogTitle>{course.title}</DialogTitle>
                                  <DialogDescription>Key topics you will learn in this certification program:</DialogDescription>
                              </DialogHeader>
                              <ul className="space-y-2 pt-2">
                                  {course.topics.map(topic => (
                                      <li key={topic} className="flex items-center text-sm">
                                          <CheckCircle className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                                          <span>{topic}</span>
                                      </li>
                                  ))}
                              </ul>
                              <CardFooter className="flex-col items-stretch gap-2 p-0 pt-4">
                                   <Button asChild>
                                      <Link href={`/courses/details/${course.slug}`}>Go to Detailed Page</Link>
                                  </Button>
                                  <Dialog>
                                  <DialogTrigger asChild>
                                      <Button variant="secondary"><Download className="mr-2 h-4 w-4"/> Download Brochure</Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                      <DialogHeader>
                                          <DialogTitle>Download Brochure</DialogTitle>
                                          <DialogDescription>
                                              Please provide your details to receive the brochure.
                                          </DialogDescription>
                                      </DialogHeader>
                                      <BrochureDownloadForm />
                                  </DialogContent>
                                  </Dialog>
                              </CardFooter>
                          </DialogContent>
                      </Dialog>
                  </div>
                  <CardTitle className="text-xl font-bold pt-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2 min-h-[40px]">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                  <Button asChild variant="outline" size="sm" className="w-full mt-2 group border-accent text-accent hover:bg-accent hover:text-white">
                      <Link href={`/courses/details/${course.slug}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                  </Button>
              </CardContent>
              <CardFooter className="bg-blue-50 text-blue-900 p-3 rounded-b-2xl flex justify-between items-center text-sm font-medium mt-auto">
                  <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.modules} Modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>{course.topics.length} Topics</span>
                  </div>
              </CardFooter>
          </Card>
      ))}
      </div>
    </>
  );
}
