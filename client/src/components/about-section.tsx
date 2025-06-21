import image2 from "@assets/image1_1750538376575.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">Bhoomi Nyay Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are a land and revenue consulting firm built on <strong className="text-primary">30+ years of experience</strong>{" "}
              in government systems. We help individuals and families solve land disputes, verify title ownership, 
              correct revenue records, and navigate complex legal matters—all with full transparency and reliability.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-gray-600 font-medium">Cases Resolved</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Transparency</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={image2}
              alt="Professional consultation scene with land experts reviewing documents with clients in rural setting"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
