import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-green-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Terms and Conditions</h1>
        </div>
        <div className="px-6 py-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using FARM-FRIEND AI services, including soil quality predictions and agricultural guidelines, you agree to be bound by these Terms and Conditions. If you do not agree with any part of the terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-3">2. Use of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our services aim to assist farmers with valuable insights. However, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Predictions and guidelines are based on data and models and may not be 100% accurate.</li>
              <li>Our services should supplement, not replace, professional agricultural advice.</li>
              <li>We are not liable for any crop losses or damages resulting from the use of our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-3">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed">
              You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-3">4. Data Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              We collect and use your data as outlined in our Privacy Policy. By using our services, you consent to such data processing and confirm that all information you provide is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-3">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, features, and functionality of our services are owned by FARM-FRIEND AI and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-3">6. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend your account and restrict access to our services without prior notice or liability for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-3">7. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may modify these Terms at any time. If significant changes are made, we will provide at least 30 days' notice before the new terms take effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-3">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms, please reach out to us at:
            </p>
            <address className="mt-2 not-italic text-green-700">
              FARM-FRIEND AI<br />
              Jaipur, Rajasthan<br />
              Email: support@farmfriend.com<br />
              Phone: (555) 123-4567
            </address>
          </section>
        </div>
        <div className="bg-green-100 px-6 py-4">
          <p className="text-sm text-green-800">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
          <p className="text-sm text-green-800 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="text-green-600 hover:text-green-800 transition-colors duration-200">
          Return to Home
        </Link>
      </div>
    </div>
  );
}