import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Users, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Senior residents enjoying their time"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Welcome to Swstik Old Age Home
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 px-4">
              Providing compassionate care and a loving home for seniors. Join our community where every
              resident is family.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/admission" className="flex items-center justify-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Admit Resident</span>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link to="/donation" className="flex items-center justify-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Make a Donation</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Swstik?</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 px-4">
              We provide comprehensive care with a focus on dignity and comfort.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">24/7 Professional Care</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Our experienced staff provides round-the-clock care with dedication and compassion.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">Engaging Activities</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Daily activities and events to keep residents active, social, and mentally stimulated.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Info className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">Modern Facilities</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                State-of-the-art facilities designed for comfort, safety, and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 sm:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Join Our Community?</h2>
          <p className="mt-4 text-base sm:text-xl text-gray-100 px-4">
            Take the first step towards providing your loved ones with the care they deserve.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}