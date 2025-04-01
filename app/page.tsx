import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Instagram, Facebook, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            Wilson <span className="text-red-600">Paddle Club</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-white hover:text-red-600 transition-colors">
              SHOP
            </Link>
            <Link href="#" className="text-sm font-medium text-white hover:text-red-600 transition-colors">
              EXPERIENCES
            </Link>
            <Link href="#" className="text-sm font-medium text-white hover:text-red-600 transition-colors">
              COMMUNITY
            </Link>
            <Link href="#" className="text-sm font-medium text-white hover:text-red-600 transition-colors">
              ABOUT
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-white hover:text-red-600">
              <span className="sr-only">Account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
            <Link href="#" className="text-white hover:text-red-600">
              <span className="sr-only">Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://d3p3fw3rutb1if.cloudfront.net/photos/35c23784-905b-4cd3-a818-c41a7ca77427"
          alt="Padel player in action"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            WHERE PADEL MEETS <span className="text-red-600">LUXURY</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Experience the perfect blend of sport, style, and sophistication
          </p>
          <Button className="mt-8 bg-red-600 hover:bg-red-700 text-white">
            SHOP COLLECTION
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-black mb-12 text-center">PREMIUM GEAR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src="https://sdmntprwestus.oaiusercontent.com/files/00000000-afc8-5230-82d6-8e41c603acf9/raw?se=2025-04-01T12%3A35%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=9ee1a3da-02c9-5b0f-b0e3-5b6ec56e2a62&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-31T18%3A11%3A22Z&ske=2025-04-01T18%3A11%3A22Z&sks=b&skv=2024-08-04&sig=d8XrJUHCHundoUgD7r1SYxx6lzyY0L6djsCsZpugfYc%3D"
                    alt={`Product ${item}`}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-black">Carbon Pro Racket</h3>
                  <p className="mt-1 text-sm text-gray-600">Professional-grade performance</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-black">$249.00</span>
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              VIEW ALL PRODUCTS
            </Button>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="relative py-20 bg-black">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                EXCLUSIVE <span className="text-red-600">EXPERIENCES</span>
              </h2>
              <p className="text-white/80 mb-8">
                Combine your passion for padel with curated luxury experiences. From wine tastings after matches to
                exclusive tournaments at premium locations, we bring together the best of sport and leisure.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                EXPLORE EXPERIENCES
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://sdmntprwestus.oaiusercontent.com/files/00000000-2038-5230-9f32-c3d9aa1579f4/raw?se=2025-04-01T12%3A57%3A23Z&sp=r&sv=2024-08-04&sr=b&scid=ca23257b-fc4a-5954-bc75-e83b2901d26d&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-31T18%3A04%3A55Z&ske=2025-04-01T18%3A04%3A55Z&sks=b&skv=2024-08-04&sig=d/FGY6fzuyWnByxyfGhYmoup9TZ3je1RKkMAxlxvB7w%3D"
                alt="Luxury padel experience"
                width={1280}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-black mb-12 text-center">
            JOIN OUR <span className="text-red-600">COMMUNITY</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt={`Community ${item}`}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="#" className="text-black hover:text-red-600">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-black hover:text-red-600">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-black hover:text-red-600">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-red-600">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">STAY UPDATED</h2>
            <p className="text-white/90 mb-6 max-w-2xl">
              Subscribe to our newsletter for exclusive offers, events, and the latest in padel luxury.
            </p>
            <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 rounded-md border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 sm:flex-1"
                required
              />
              <Button className="h-10 bg-white text-red-600 hover:bg-white/90">SUBSCRIBE</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="text-xl font-bold text-white">
                PADEL<span className="text-red-600">LUXE</span>
              </Link>
              <p className="mt-4 text-sm text-white/60">
                The ultimate destination for padel enthusiasts seeking premium experiences.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-4">SHOP</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Rackets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Apparel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Limited Editions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#" className="hover:text-red-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-4">LEGAL</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Returns & Refunds
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Wilson Paddle Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

