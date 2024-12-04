import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  Star,
  Check,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <main className="flex-1">
        <section className="hidden md:block w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
          <div className="w-[95%] mx-auto container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn Without Limits
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Advance your career with over 5,000 courses, professional
                    certificates, and degrees offered by renowned Platforms and
                    leading Mentors.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="inline-flex items-center">
                    Join for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Explore Web Yatra Now <ChevronDown />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Check className="mr-1 h-4 w-4 text-primary" />
                    <span>Flexible learning</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-1 h-4 w-4 text-primary" />
                    <span>Expert instruction</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-1 h-4 w-4 text-primary" />
                    <span>Career-focused</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg"
                    width={550}
                    height={550}
                    alt="Students learning online"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
                  />
                  <div className="absolute -bottom-4 -left-4 rounded-lg bg-background p-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-primary" />
                      <div className="text-sm font-medium">
                        Join 1M+ learners
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 rounded-lg bg-background p-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <div className="text-sm font-medium">
                        100+ Pro Mentors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="visible md:hidden md:h-0 w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
          <div className="w-[95%] mx-auto container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg"
                    width={550}
                    height={600}
                    alt="Students learning online"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full lg:aspect-square h-[250px]"
                  />
                  <div className="absolute -bottom-4 -left-4 rounded-lg bg-background p-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <div className="text-sm font-medium">
                        Join 1M+ learners
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 rounded-lg bg-background p-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <div className="text-sm font-medium">
                        100+ Pro Mentors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-5 mt-5">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tighter text-4xl xl:text-6xl/none">
                    Learn Without Limits
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Advance your career with over 5,000 courses, professional
                    certificates, and degrees offered by renowned Platforms and
                    leading Mentors.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="inline-flex items-center">
                    Join for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Explore Web Yatra Now <ChevronDown />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="relative border border-black rounded-xl p-4 text-center bg-background">
                    <MdVerified className="absolute -top-2 -left-2 h-6 w-6" />
                    Flexible learning
                  </div>
                  <div className="relative border border-black rounded-xl p-4 text-center bg-background">
                    <MdVerified className="absolute -top-2 -left-2 h-6 w-6" />
                    Expert instruction
                  </div>
                  <div className="relative border border-black rounded-xl p-4 text-center bg-background">
                    <MdVerified className="absolute -top-2 -left-2 h-6 w-6" />
                    Career-focused
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Courses
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Introduction to AI</CardTitle>
                    <CardDescription>
                      Learn the basics of Artificial Intelligence
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={`/placeholder.svg`}
                      width={400}
                      height={200}
                      alt={`Course ${i}`}
                      className="w-full object-cover h-[300px]"
                    />
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Stanford University
                      </p>
                      <p className="font-medium">4.8 ⭐️ (3.2k reviews)</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose Web Yatra?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Learn Anything",
                  description:
                    "Access a vast library of courses on various subjects",
                },
                {
                  icon: Users,
                  title: "Learn Together",
                  description:
                    "Join a global community of learners and instructors",
                },
                {
                  icon: Award,
                  title: "Learn from the Best",
                  description:
                    "Take courses from top universities and companies",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <item.icon className="h-10 w-10 mb-2" />
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Explore Hot Topics
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Briefcase, title: "Business" },
                { icon: GraduationCap, title: "Computer Science" },
                { icon: Globe, title: "Languages" },
                { icon: BookOpen, title: "Data Science" },
                { icon: Users, title: "Social Sciences" },
                { icon: Star, title: "Personal Development" },
                { icon: Award, title: "Health & Fitness" },
                { icon: Briefcase, title: "Marketing" },
              ].map((category, i) => (
                <Card
                  key={i}
                  className="flex flex-col items-center p-6 text-center"
                >
                  <category.icon className="h-12 w-12 mb-4" />
                  <CardTitle>{category.title}</CardTitle>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Achieve Your Goals with Web Yatra
            </h2>
            <Tabs defaultValue="individual" className="w-full">
              <TabsList className="grid md:w-[50%] w-full mx-auto grid-cols-2">
                <TabsTrigger value="individual">For Individuals</TabsTrigger>
                <TabsTrigger value="business">For Business</TabsTrigger>
              </TabsList>
              <TabsContent value="individual" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Advance Your Career</CardTitle>
                    <CardDescription>
                      Learn the latest skills to boost your career prospects.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Access 5,000+ courses from top institutions</li>
                      <li>Learn at your own pace</li>
                      <li>Earn certificates and degrees</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="business" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upskill Your Workforce</CardTitle>
                    <CardDescription>
                      Provide your employees with the skills they need to
                      succeed.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Custom learning programs</li>
                      <li>Analytics and reporting</li>
                      <li>Enterprise-grade security</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Success Stories
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>Web Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      "Web Yatra helped me transition from a non-tech job to a
                      successful career in web development. The courses were
                      comprehensive and the support was amazing."
                    </p>
                  </CardContent>
                  <CardContent className="flex items-center">
                    <Image
                      src={`/placeholder.svg`}
                      width={50}
                      height={50}
                      alt={`John Doe`}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">
                        Course: Full-Stack Web Development
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Completed in 6 months
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Mentors
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg`}
                  width={120}
                  height={60}
                  alt={`Partner ${i}`}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Start Learning Today
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 md:w-[60%] wifull mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Front End Development</CardTitle>
                  <CardDescription>Learn at your own pace</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access to 5,000+ courses</li>
                    <li>Flexible schedule</li>
                    <li>Certificate upon completion</li>
                  </ul>
                </CardContent>
                <CardContent>
                  <Link href="/pages/CoursesVideoPage">
                    <Button className="w-full">Explore Courses</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Back End Development</CardTitle>
                  <CardDescription>Master a specific skill</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Series of related courses</li>
                    <li>Hands-on projects</li>
                    <li>In-depth knowledge</li>
                  </ul>
                </CardContent>
                <CardContent>
                  <Button className="w-full">Find Specializations</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  q: "How do Web Yatra courses work?",
                  a: "Web Yatra courses are entirely online and self-paced. You can start learning immediately after enrollment and complete the course at your own speed.",
                },
                {
                  q: "Are Web Yatra courses accredited?",
                  a: "Many Web Yatra courses are accredited and offer certificates or degrees upon completion. Check the specific course details for accreditation information.",
                },
                {
                  q: "How much does Web Yatra cost?",
                  a: "Web Yatra offers a range of pricing options, from free courses to paid specializations and degrees. Prices vary depending on the course and program.",
                },
                {
                  q: "Can I get financial aid?",
                  a: "Yes, Web Yatra offers financial aid for many courses and programs. You can apply for financial aid during the enrollment process.",
                },
              ].map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Start Learning?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join millions of learners and start your journey to success
                today.
              </p>
              <Button size="lg" variant="secondary">
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
