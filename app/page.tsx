import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"; // Just for ChevronRight, if you need other icons you can use alternatives
import Hero from "../public/hero.png"
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
            {/* Account Icon */}
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

            {/* Cart Icon */}
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
  src="/hero.png" // No need for "../public"
  alt="Padel player in action"
  fill
  className="object-cover brightness-50 transition-all duration-500 ease-in-out"
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

      <section className="bg-white py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-black mb-12 text-center">PREMIUM GEAR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Carbon Pro Racket",
                description: "Professional-grade performance",
                price: "$249.00",
                image: "./prod1.png",
              },
              {
                id: 2,
                name: "Elite Court Shoes",
                description: "Superior grip and comfort",
                price: "$179.00",
                image: "./prod2.png",
              },
              {
                id: 3,
                name: "Pro Tennis Bag",
                description: "Spacious & durable for all essentials",
                price: "$129.00",
                image: "./prod3.png",
              },
            ].map((product) => (
              <div key={product.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-black">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-black">{product.price}</span>
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
                src="https://images.pexels.com/photos/1165002/pexels-photo-1165002.jpeg"
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
  {[
    "/comm2.png", // Image 1 (from public folder)
    "/comm3.png", // Image 2 (external URL)
    "/community.png",
    "/community1.png",
  ].map((imageSrc, index) => (
    <div key={index} className="overflow-hidden rounded-lg">
      <Image
        src={imageSrc}
        alt={`Community ${index + 1}`}
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
    </div>
  ))}
</div>
    <div className="mt-8 flex justify-center space-x-4">
      <Link href="#" className="text-black hover:text-red-600">
        <i className="fab fa-instagram h-6 w-6"></i>
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="text-black hover:text-red-600">
        <i className="fab fa-facebook h-6 w-6"></i>
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-black hover:text-red-600">
        <i className="fab fa-twitter h-6 w-6"></i>
        <span className="sr-only">Twitter</span>
      </Link>
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
            {/* Footer content */}
          </div>
        </div>
      </footer>
    </div>
  );
}
