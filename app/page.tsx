import { Appbar } from "./components/Appbar";





  import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Music, Play, Users, Radio, Heart, ChevronRight, Headphones, ArrowRight } from "lucide-react"
import { ThemeToggle } from "./components/themetoggle";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">FanTunes</span>
            <Appbar/>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-purple-500">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-purple-500">
              How It Works
            </Link>
            <Link href="#creators" className="text-sm font-medium transition-colors hover:text-purple-500">
              For Creators
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-purple-500">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Log in
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">Sign Up Free</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg-hero">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Let Your Fans Choose the Music for Your Stream
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect with your audience on a deeper level by letting them control your stream's soundtrack.
                    Create unforgettable experiences together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    See How It Works
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Music streaming platform interface"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 gradient-bg-features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold">
                  <span className="text-purple-600 dark:text-purple-400">Features</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need to Engage Your Audience
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform provides all the tools creators need to build deeper connections with their fans through
                  music.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/50">
                  <Play className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold dark:glow-purple">Fan Song Requests</h3>
                <p className="text-center text-muted-foreground">
                  Let your fans submit and vote on songs to play during your stream.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/50">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold dark:glow-purple">Community Playlists</h3>
                <p className="text-center text-muted-foreground">
                  Create collaborative playlists that your community can contribute to.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/50">
                  <Radio className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold dark:glow-purple">Live DJ Sessions</h3>
                <p className="text-center text-muted-foreground">
                  Host interactive DJ sessions where fans can influence the mix in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/50">
                  <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold dark:glow-purple">Fan Favorites</h3>
                <p className="text-center text-muted-foreground">
                  Track which songs your audience loves most to better understand their preferences.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/50">
                  <Headphones className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold dark:glow-purple">Stream Integration</h3>
                <p className="text-center text-muted-foreground">
                  Seamlessly integrates with all major streaming platforms and services.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/50">
                  <Music className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold dark:glow-purple">Music Library</h3>
                <p className="text-center text-muted-foreground">
                  Access millions of licensed tracks to play on your stream without copyright issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get started in minutes and transform how you connect with your audience through music.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-center text-muted-foreground">
                  Create your account and connect your streaming platform of choice.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Set Up Your Music Room</h3>
                <p className="text-center text-muted-foreground">
                  Customize your music room settings and share the link with your fans.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  3
                </div>
                <h3 className="text-xl font-bold">Go Live</h3>
                <p className="text-center text-muted-foreground">
                  Start your stream and watch as fans begin to interact with your music in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="creators" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Creator using the platform"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold">
                    <span className="text-purple-600 dark:text-purple-400">For Creators</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Boost Engagement and Build Deeper Connections
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Music is a powerful way to connect with your audience. Our platform helps you leverage that
                    connection to create more engaging streams.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Increase viewer retention by 40% with interactive music</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Drive higher donations through music-based engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Create memorable moments that keep fans coming back</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Discover your community's musical taste</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700">Join as Creator</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Loved by Creators</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See what streamers and content creators are saying about our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "Since using FanTunes, my stream engagement has gone through the roof. My viewers love being able to
                    influence the music, and it's created some amazing moments."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-100 p-1 dark:bg-purple-900/50">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Alex Rivers</p>
                    <p className="text-xs text-muted-foreground">Gaming Streamer, 250K followers</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The collaborative playlists feature has been a game-changer for my art streams. My community has
                    created the perfect soundtrack for my creative process."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-100 p-1 dark:bg-purple-900/50">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Maya Chen</p>
                    <p className="text-xs text-muted-foreground">Art Streamer, 120K followers</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "I've seen a 35% increase in viewer retention since implementing FanTunes. The music connection has
                    transformed my relationship with my audience."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-100 p-1 dark:bg-purple-900/50">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Jordan Taylor</p>
                    <p className="text-xs text-muted-foreground">Variety Creator, 500K followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your streaming needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-4xl font-bold">$0</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Basic song request functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Up to 50 songs in queue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Standard music library</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-purple-600 p-6 shadow-sm dark:border-purple-500 dark:gradient-border dark:glow-card relative overflow-hidden">
                <div className="absolute -right-12 -top-12 h-24 w-24 rotate-45 bg-purple-600 dark:bg-purple-500"></div>
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                    Popular
                  </div>
                  <h3 className="text-2xl font-bold">Creator</h3>
                  <p className="text-muted-foreground">For serious streamers</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-4xl font-bold">$9.99</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Advanced song request features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Unlimited song queue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Premium music library</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Community playlists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe Now</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6 shadow-sm dark:gradient-border dark:glow-card">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">For professional creators</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-4xl font-bold">$24.99</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Everything in Creator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Go Pro</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg-cta text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Streams?</h2>
                <p className="max-w-[900px] text-purple-100 md:text-xl">
                  Join thousands of creators who are building deeper connections with their audience through music.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100 dark:animate-pulse-glow">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-700">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">FanTunes</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} FanTunes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


 
