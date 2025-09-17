import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4">Send Professional Proposals in Minutes</h1>
        <p className="text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
          QuoteStack helps contractors close more jobs with polished{" "}
          <span className="font-semibold">Good / Better / Best</span> proposals
          and instant Stripe deposits. Close 1 more deal → it pays for itself.
        </p>
        <Button size="lg" className="px-8 py-4 text-lg">Join the Founder Program</Button>
        <p className="text-sm mt-2 text-gray-500">$49/mo – Locked in for early adopters • First 100 contractors only</p>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-semibold text-xl mb-2">1️⃣ Create</h3>
          <p>Build a proposal in under 5 minutes with mobile-first design, line item templates, and auto-calculated pricing tiers.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">2️⃣ Send</h3>
          <p>Deliver via PDF, text, or email. Clients see Good / Better / Best options side by side.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">3️⃣ Get Paid</h3>
          <p>Clients accept and pay deposits instantly through Stripe. No more waiting for checks.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Simple Pricing</h2>
        <div className="flex justify-center">
          <Card className="max-w-sm border-2 border-blue-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Founder Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-4xl font-bold">$49<span className="text-lg font-normal">/mo</span></p>
              <p className="text-gray-600">Unlimited proposals • Stripe deposits • Branding • Early adopter lock-in</p>
              <Button size="lg" className="w-full">Start Free Trial – No Credit Card</Button>
              <p className="text-xs text-gray-500">Cancel anytime. Price locked for life.</p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-6 text-gray-600">Only 100 contractors will get the lifetime $49/mo deal.</p>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
        <p className="text-gray-700 mb-8">We’re just getting started. Join now and grow with us:</p>
        <ul className="grid md:grid-cols-2 gap-6 text-left text-gray-800">
          <li>✅ QuickBooks Online sync</li>
          <li>✅ Save common line items</li>
          <li>✅ Proposal templates library</li>
          <li>✅ Multi-user support</li>
          <li>✅ Analytics & acceptance insights</li>
          <li>✅ SMS/email share links</li>
        </ul>
      </section>

      {/* Social Proof (Placeholder) */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">What Early Contractors Are Saying</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          “QuoteStack saves me hours each week. Clients love the side-by-side options, and I get deposits the same day.” – Pilot User
        </p>
      </section>

      {/* CTA Footer */}
      <footer className="bg-blue-600 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Be one of the first 100 contractors to lock in your rate</h2>
        <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">Join the Founder Program</Button>
        <p className="text-sm mt-2">$49/mo – Early adopter lifetime pricing</p>
      </footer>
    </div>
  );
}
