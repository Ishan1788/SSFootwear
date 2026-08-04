import { useEffect } from 'react';
import { SectionHeading } from '../components/Shared/SectionHeading';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact – SS Footwear';
  }, []);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <SectionHeading
        label="// CONTACT"
        title="Get in Touch"
        description="Reach out to SS Footwear for inquiries, partnerships, orders, or general support."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <div>
          <h3 className="font-heading text-headline-lg text-primary mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="bg-surface-container-low p-6 rounded-xl border border-border">
              <span className="block font-technical text-label-technical uppercase text-primary mb-2">
                Phone
              </span>
              <a
                href="tel:+9779825907213"
                className="font-body text-body-md text-text-secondary hover:text-primary transition-colors"
              >
                +977 982-3802030
              </a>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl border border-border">
              <span className="block font-technical text-label-technical uppercase text-primary mb-2">
                Email
              </span>
              <a
                href="mailto:khetankishan04@gmail.com"
                className="font-body text-body-md text-text-secondary hover:text-primary transition-colors"
              >
                khetankishan04@gmail.com
              </a>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl border border-border">
              <span className="block font-technical text-label-technical uppercase text-primary mb-2">
                Factory / Business Presence
              </span>
              <p className="font-body text-body-md text-text-secondary">
                Mechinagar-6, Kakarvitta, Jhapa, Nepal
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low border border-border rounded-2xl p-8">
          <h3 className="font-heading text-headline-lg text-primary mb-6">
            Send a Message
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block font-body text-body-sm text-text-secondary mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-body text-body-sm text-text-secondary mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-body text-body-sm text-text-secondary mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block font-body text-body-sm text-text-secondary mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 bg-surface-container-low border border-border rounded-2xl p-8">
        <h3 className="font-heading text-headline-lg text-primary mb-4">
          Business Hours
        </h3>
        <p className="font-body text-body-md text-text-secondary">
          Sunday to Friday: 10:00 AM – 6:00 PM
        </p>
        <p className="font-body text-body-md text-text-secondary">
          Saturday: Closed
        </p>
      </div>
    </div>
  );
}