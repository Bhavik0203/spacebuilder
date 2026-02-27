"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Shield, Users, Eye, Database, Globe } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0b1b33] via-[#13294b] to-[#1a3b6b] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-blue-100/80 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Space Builders collects, uses, and protects your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-0">
          <div className="space-y-12">
            
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Space Builders ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information Collection */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-[#4a77b5]" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may collect personal information including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>Name and contact details</li>
                    <li>Email address and phone number</li>
                    <li>Property preferences and requirements</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>IP address and browser information</li>
                    <li>Device and connection data</li>
                    <li>Pages visited and time spent</li>
                    <li>Cookies and usage analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#4a77b5]" />
                How We Use Your Information
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                  <li>Provide and maintain our real estate services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send information about our projects and developments</li>
                  <li>Personalize your website experience</li>
                  <li>Improve our services and website functionality</li>
                  <li>Communicate about offers and promotions (with consent)</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#4a77b5]" />
                Data Protection & Security
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and hosting infrastructure</li>
                  <li>Restricted access to authorized personnel only</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on privacy practices</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#4a77b5]" />
                Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Marketing cookies for personalized content</li>
                  <li>You can control cookie settings through your browser</li>
                </ul>
              </div>
            </div>

            {/* Third Party Sharing */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-[#4a77b5]" />
                Third-Party Sharing
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                  <li>Government authorities when required by law</li>
                  <li>Financial institutions for payment processing</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal advisors during business transactions</li>
                  <li>We never sell your personal information to third parties</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#4a77b5]" />
                Your Privacy Rights
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data (where applicable)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to certain data processing activities</li>
                  <li>File a complaint with data protection authorities</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us About Privacy
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Email:</strong> privacy@spacebuilders.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> +91 98765 43210
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> Space Builders & Developers, Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#4a77b5]" />
                Policy Updates
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#4a77b5] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-0 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-blue-100 mb-8">
            Ready to find your dream home? Contact our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#4a77b5] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Our Team
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4a77b5] transition-colors"
            >
              View Projects
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}