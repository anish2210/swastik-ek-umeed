export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Swstik Old Age Home</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Swstik Old Age Home, our mission is to provide a nurturing, comfortable, and dignified
              living environment for seniors. We believe in creating a home where elderly residents can
              thrive, maintain their independence, and enjoy their golden years surrounded by care and
              compassion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Compassionate Care: Treating each resident with kindness and respect</li>
              <li>Quality Service: Maintaining high standards in all aspects of care</li>
              <li>Community: Fostering a sense of belonging and family</li>
              <li>Independence: Supporting residents' autonomy and dignity</li>
              <li>Safety: Ensuring a secure and comfortable environment</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Facilities</h2>
            <p className="text-gray-600 mb-4">
              Our state-of-the-art facility is designed to provide comfort and convenience to our
              residents. We offer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>24/7 medical care and emergency response</li>
              <li>Spacious, well-furnished private and shared rooms</li>
              <li>Nutritious meals prepared by experienced chefs</li>
              <li>Regular recreational activities and social events</li>
              <li>Physical therapy and fitness programs</li>
              <li>Beautiful gardens and outdoor spaces</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-600 mb-4">
              Our dedicated team of professionals includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Experienced caregivers and nurses</li>
              <li>Qualified medical staff</li>
              <li>Professional counselors</li>
              <li>Activity coordinators</li>
              <li>Housekeeping and maintenance staff</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-4">
              Whether you're looking for a home for yourself or a loved one, or interested in
              contributing to our mission, we welcome you to become part of the Swstik family. Contact
              us to learn more about our admission process or volunteer opportunities.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}