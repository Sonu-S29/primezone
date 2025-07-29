import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Target, Award, BookOpen, User, Calendar, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const featuredCourses = [
  {
    title: "Diploma in Computer Application",
    description: "A comprehensive course covering the fundamentals of computer applications.",
    duration: "12 Months",
    image: "https://placehold.co/600x400.png",
    hint: "computer code"
  },
  {
    title: "Advanced Tally Prime with GST",
    description: "Master accounting with Tally Prime and understand the GST framework.",
    duration: "6 Months",
    image: "https://placehold.co/600x400.png",
    hint: "accounting software"
  },
  {
    title: "Web Development",
    description: "Learn to build modern, responsive websites and web applications.",
    duration: "6 Months",
    image: "https://placehold.co/600x400.png",
    hint: "web development"
  },
  {
    title: "Diploma in Graphic Designing",
    description: "Unleash your creativity with graphic design principles and software.",
    duration: "6 Months",
    image: "https://placehold.co/600x400.png",
    hint: "graphic design"
  },
  {
    title: "C & C++ Programming",
    description: "Build a strong foundation in programming with two powerful languages.",
    duration: "3 Months",
    image: "https://placehold.co/600x400.png",
    hint: "c++ code"
  },
  {
    title: "Python for Data Science",
    description: "An introduction to Python for data analysis and visualization.",
    duration: "4 Months",
    image: "https://placehold.co/600x400.png",
    hint: "data science dashboard"
  },
];

const testimonials = [
  {
    name: "John Doe",
    course: "Web Development",
    avatar: "https://placehold.co/100x100.png",
    hint: "smiling student",
    story: "Primezone provided me with the skills I needed to land my dream job as a web developer. The instructors are fantastic and the curriculum is top-notch."
  },
  {
    name: "Jane Smith",
    course: "Diploma in Computer Application",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional woman",
    story: "The diploma course gave me a solid foundation in computer applications. I feel much more confident in my technical abilities now. Highly recommended!"
  },
  {
    name: "Samuel Green",
    course: "Advanced Tally Prime",
    avatar: "https://placehold.co/100x100.png",
    hint: "happy person",
    story: "The Tally Prime course was incredibly practical. I was able to apply what I learned directly to my business. The hands-on approach is excellent."
  },
];

const sliderImages = [
  {
    src: "https://placehold.co/1920x1080.png",
    alt: "Students learning in a modern classroom",
    hint: "modern classroom students",
    tagline: "Unlock Your Potential",
    subline: "World-class training to shape your future in technology."
  },
  {
    src: "https://placehold.co/1920x1080.png",
    alt: "A student focused on coding",
    hint: "student coding",
    tagline: "Learn from the Best",
    subline: "Industry experts guiding you every step of the way."
  },
  {
    src: "https://placehold.co/1920x1080.png",
    alt: "A group of students collaborating on a project",
    hint: "students collaborating",
    tagline: "Your Future Starts Here",
    subline: "Join a community of learners and innovators."
  }
];

const whyChooseUsItems = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Commitment',
      description: 'We are dedicated to providing the highest quality education and fostering a learning environment where students can thrive and achieve their career goals.',
      details: ['Quality First', 'Student Success', 'Continuous Improvement']
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Our Focus',
      description: 'Our focus is on practical, hands-on training that equips students with the skills and knowledge demanded by the industry today.',
      details: ['Industry Aligned', 'Practical Skills', 'Project-based Learning']
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Our Goal',
      description: 'Our goal is to empower our students to become skilled professionals and leaders in the tech industry, ready to take on new challenges.',
      details: ['Empowerment', 'Leadership', 'Future-Ready']
    }
  ];

const welcomeFeatures = [
    "Award Winning",
    "Professional Staff",
    "Free Counseling",
    "Fair Prices"
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
            {sliderImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[80vh]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{objectFit: "cover"}}
                    className="opacity-80"
                    data-ai-hint={image.hint}
                  />
                   <div className="absolute inset-0 bg-primary/60" />
                   <div className="absolute inset-0 flex items-center justify-center text-center text-primary-foreground z-10">
                      <div className="container mx-auto px-4">
                          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline animate-fade-in-down">
                              {image.tagline}
                          </h1>
                          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-up">
                              {image.subline}
                          </p>
                          <div className="space-x-4 animate-fade-in-up">
                              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                              <Link href="/courses/diploma">Explore Courses</Link>
                              </Button>
                              <Button asChild size="lg" variant="secondary">
                              <Link href="/contact">Contact Us</Link>
                              </Button>
                          </div>
                      </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </section>
      
      {/* Why Choose Us Section */}
        <section className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Us?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Our commitment to excellence and student success sets us apart.
            </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUsItems.map((item, index) => (
                    <div key={index} className="flip-card h-80">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card className="text-center glass-effect h-full flex flex-col justify-center">
                                    <CardHeader>
                                        <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit">
                                            {item.icon}
                                        </div>
                                        <CardTitle className="mt-4">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flip-card-back">
                                <Card className="text-center glass-effect h-full flex flex-col justify-center">
                                    <CardHeader>
                                        <CardTitle className="mt-4">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-left">
                                            {item.details.map((detail, i) => (
                                                <li key={i} className="flex items-center">
                                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Welcome Section */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Welcome to Primezone Computer Education</h2>
                    <div className="w-24 h-1 bg-accent mt-2"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    PRIMEZONE COMPUTER EDUCATION was founded in 2020. It was instrumental in bringing computer education within the reach of common people, supporting students to add professional skills and achieve higher goals in life.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {welcomeFeatures.map(feature => (
                        <div key={feature} className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-6 items-center pt-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent text-accent-foreground rounded-full">
                           <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-muted-foreground">Call to ask any question</p>
                            <a href="tel:+919769730087" className="text-lg font-bold text-primary hover:underline">+91 9769730087</a>
                        </div>
                    </div>
                    <Button asChild size="lg">
                        <Link href="/contact">Request A Quote</Link>
                    </Button>
                </div>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x600.png"
                alt="Primezone Education Crest"
                width={600}
                height={600}
                className="rounded-lg shadow-xl mx-auto"
                data-ai-hint="education logo"
              />
            </div>
          </div>
        </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Courses</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Kickstart your career with our most popular courses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden group glass-effect">
                <Image 
                  src={course.image} 
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={course.hint}
                />
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild>
              <Link href="/courses/diploma">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Success Stories</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Hear what our students have to say about their journey with us.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-effect">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.story}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
       {/* Call to Action for Brochure */}
       <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4 font-headline">Ready to Start Your Journey?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Download our brochure to get detailed information about all our courses, fee structures, and admission process.
            </p>
            <Button size="lg" variant="secondary">
                <a href="/brochure.pdf" download>Download Brochure</a>
            </Button>
        </div>
       </section>

    </div>
  );
}
