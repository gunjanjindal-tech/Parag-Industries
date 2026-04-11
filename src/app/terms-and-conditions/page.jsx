export default function TermsPage() {
  return (
    <section className="min-h-screen px-6 py-16 
    bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_25%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)]">

      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-10 space-y-8">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Terms & Conditions
        </h1>

        <p className="text-gray-300">
          By accessing this website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">Use of Website</h2>
          <p className="mt-2 text-gray-300">
            The content on this website is for general information purposes only. Unauthorized use of this website may give rise to a claim for damages.
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">Products & Services</h2>
          <p className="mt-2 text-gray-300">
            We strive to ensure that all product descriptions and specifications are accurate. However, variations may occur depending on customization and project requirements.
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">Quotations & Orders</h2>
          <p className="mt-2 text-gray-300">
            All quotations are subject to change based on project scope and material costs. Orders are confirmed only after mutual agreement and payment terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">Intellectual Property</h2>
          <p className="mt-2 text-gray-300">
            All content including text, images, and design is the property of Parag Industries and may not be reproduced without permission.
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">Limitation of Liability</h2>
          <p className="mt-2 text-gray-300">
            We are not liable for any direct or indirect damages arising from the use of our website or services.
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xlfont-semibold text-yellow-400">External Links</h2>
          <p className="mt-2 text-gray-300">
            Our website may include links to third-party websites. We are not responsible for their content or practices.
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">Changes to Terms</h2>
          <p className="mt-2 text-gray-300">
            We reserve the right to update these terms at any time without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-400">Governing Law</h2>
          <p className="mt-2 text-gray-300">
            These terms shall be governed by and interpreted in accordance with the laws of India.
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">Contact Information</h2>
          <p className="mt-2 text-gray-300">
            Parag Industries <br />
            Email: info@paragindustries.com <br />
            Phone: +91 98290 80341
          </p>
        </div>

      </div>
    </section>
  );
}