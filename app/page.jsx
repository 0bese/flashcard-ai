import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Auth from "@/components/Auth";

export default function Landingpage() {
  const { userId } = auth();
  if (userId) {
    redirect("/home");
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <ActivityIcon className="h-6 w-6" />
          <span className="sr-only">FlashcardAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Learning Potential with FlashcardAI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Personalized learning algorithms, spaced repetition, and
                    advanced analytics to help you master any subject.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/home"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <Image
                src="/hero.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Learning Potential
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FlashcardAI&apos;s advanced features help you learn faster and
                  more effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Learning
                      </h3>
                      <p className="text-muted-foreground">
                        Our AI-powered algorithms adapt to your learning style
                        and pace, ensuring you master the material.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Spaced Repetition</h3>
                      <p className="text-muted-foreground">
                        Optimize your study time with our spaced repetition
                        system, which helps you retain information long-term.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Advanced Analytics</h3>
                      <p className="text-muted-foreground">
                        Gain insights into your learning progress with
                        comprehensive analytics and performance tracking.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/ft.png"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about how FlashcardAI has
                  transformed their learning experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="bg-muted p-6 shadow-md">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;FlashcardAI has been a game-changer for my learning
                    process. The personalized algorithms and spaced repetition
                    have helped me retain information much more
                    effectively.&quot;
                  </p>
                </div>
              </Card>
              <Card className="bg-muted p-6 shadow-md">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground">
                        Medical Student
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;I&apos;ve tried countless flashcard apps, but
                    FlashcardAI is by far the most effective. The analytics and
                    insights have helped me optimize my study time and achieve
                    my learning goals.&quot;
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <h1 className="text-2xl font-bold tracking-tight">
                Pricing Plans
              </h1>
              <p className="text-muted-foreground">
                Choose the plan that fits your needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 items-start">
              <Card className="p-6 grid gap-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">Starter</h3>
                  <p className="text-muted-foreground">
                    Perfect for individuals and small teams.
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$5</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="grid gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />5 GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Unlimited bandwidth
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />1 user
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </Card>
              <Card className="p-6 grid gap-6 bg-primary text-primary-foreground">
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">Pro</h3>
                  <p className="text-primary-foreground">
                    Ideal for growing teams and businesses.
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-primary-foreground">/month</span>
                </div>
                <ul className="grid gap-2 text-primary-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary-foreground" />
                    50 GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary-foreground" />
                    Unlimited bandwidth
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary-foreground" />5
                    users
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary-foreground" />
                    Priority email support
                  </li>
                </ul>
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Get Started
                </Button>
              </Card>
              <Card className="p-6 grid gap-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">Enterprise</h3>
                  <p className="text-muted-foreground">
                    Tailored for large teams and organizations.
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$13</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="grid gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />1 TB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Unlimited bandwidth
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Unlimited users
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    24/7 phone and email support
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join the FlashcardAI Community
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up today to start unlocking your learning potential with
                our AI-powered flashcard system.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2"
                  prefetch={false}
                >
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 FlashcardAI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
