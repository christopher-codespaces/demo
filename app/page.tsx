import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"; // Just for ChevronRight, if you need other icons you can use alternatives

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
          src="https://sdmntprwestus.oaiusercontent.com/files/00000000-2038-5230-9f32-c3d9aa1579f4/raw?se=2025-04-01T19%3A40%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=e3473a06-e382-56f0-bdaf-d59466f28381&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T18%3A36%3A56Z&ske=2025-04-02T18%3A36%3A56Z&sks=b&skv=2024-08-04&sig=KUiJB78LGytW3gOzifjstWoZubpxR5lMrDkAPz51N/4%3D"
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
                image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-1b2c-51f8-886c-9c757c0126b7/raw?se=2025-04-01T20%3A20%3A09Z&sp=r&sv=2024-08-04&sr=b&scid=5b78b3a3-965d-517f-945e-0bded0abd621&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T18%3A47%3A13Z&ske=2025-04-02T18%3A47%3A13Z&sks=b&skv=2024-08-04&sig=ziWQTFMGjt/QOuPgD/pHjqGH98zOAIQBuMxjRMNC7GM%3D",
              },
              {
                id: 2,
                name: "Elite Court Shoes",
                description: "Superior grip and comfort",
                price: "$179.00",
                image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-0a6c-51f8-8595-eaf854945975/raw?se=2025-04-01T20%3A21%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=5c7e46ed-ce0e-5bfd-921b-95e0c18c5e74&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T18%3A37%3A05Z&ske=2025-04-02T18%3A37%3A05Z&sks=b&skv=2024-08-04&sig=L8aJBb%2BeCAznvynSjkyWcGubEXE1e4wRpaqZHS4r/gI%3D",
              },
              {
                id: 3,
                name: "Pro Tennis Bag",
                description: "Spacious & durable for all essentials",
                price: "$129.00",
                image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-f7a0-51f8-8e9b-b6a36b1f0056/raw?se=2025-04-01T20%3A32%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=68c2e42c-36bf-52f0-8dae-8c8a25bc5fac&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T18%3A40%3A13Z&ske=2025-04-02T18%3A40%3A13Z&sks=b&skv=2024-08-04&sig=l9FeeErQuVStomGP7dgehxM0O2xGCHoUB9TNjwuif9Q%3D",
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
        "https://sdmntprwestus2.oaiusercontent.com/files/00000000-4b28-51f8-9c65-72764a0d0dd8/raw?se=2025-04-01T19%3A42%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=69d9b710-5b54-57ed-af41-3985566051e7&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T08%3A45%3A35Z&ske=2025-04-02T08%3A45%3A35Z&sks=b&skv=2024-08-04&sig=fY7xeLOKG0VUk3JXblmGTKM3Hwl7OwnF/iukhYwHsUk%3D", // Image 1
        "https://sdmntprwestus2.oaiusercontent.com/files/00000000-a8a4-51f8-afa2-0915682035c8/raw?se=2025-04-01T20%3A13%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=1650ab9d-cf29-53ee-bef6-04f6682a01f7&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T11%3A57%3A32Z&ske=2025-04-02T11%3A57%3A32Z&sks=b&skv=2024-08-04&sig=kImlIe5sQSvj0cUL9HXttG2VCZcyCuJsuZgK4tP/W5c%3D", // Image 2
        "https://sdmntprwestus2.oaiusercontent.com/files/00000000-e194-51f8-bada-dff18d3552d4/raw?se=2025-04-01T20%3A16%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=7ed17649-8c09-5914-8f92-0241ffa8ab3b&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T18%3A14%3A46Z&ske=2025-04-02T18%3A14%3A46Z&sks=b&skv=2024-08-04&sig=j38oz9/sYqOqYS4TMYd2aedxQ7FAbHIeqRul6AlIjT8%3D", // Image 3
        "https://d3p3fw3rutb1if.cloudfront.net/photos/4ee3bde9-1483-4c34-8b23-594c0dfddbb2", // Image 4
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
