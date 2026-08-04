import { useEffect } from 'react';
import { SectionHeading } from '../components/Shared/SectionHeading';

export default function DealerPortal() {
  useEffect(() => {
    document.title = 'Dealer Portal – SS Footwear';
  }, []);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <SectionHeading
        label="// B2B PARTNERSHIPS"
        title="Elevate Your Retail Experience"
        description="Join the premier network of SS Footwear distributors. Gain access to priority inventory lines, dedicated architectural retail support, and uncompromising technical precision."
        rightElement={
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-technical text-label-technical uppercase tracking-widest hover:bg-primary/90">Partner Now</button>
            <button className="border border-primary text-primary px-8 py-3 rounded-full font-technical text-label-technical uppercase tracking-widest hover:bg-primary/10">View Security</button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        {[
          { title: 'Priority Inventory', desc: 'Access our vibrant collection within global retailers. Secure essential stock levels for high-demand archival footwear lines.' },
          { title: 'Security Support', desc: 'Secure the inventory requirements for logistics and distribution locations.' },
          { title: 'News & Updates', desc: 'Access to premium design assets and innovative new design innovations.' },
        ].map((item, i) => (
          <div key={i} className="border border-border p-6">
            <h3 className="font-heading text-headline-lg-mobile text-primary mb-2">{item.title}</h3>
            <p className="font-body text-body-md text-text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-16">
        <h2 className="font-heading text-headline-lg text-primary mb-8">Global Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Tokyo (JPN)', 'Amsterdam (NLD)', 'Montreal (CAN)'].map(city => (
            <div key={city} className="bg-surface-container-low p-6 text-center">
              <span className="font-technical text-label-technical uppercase text-primary">{city}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border mt-16 pt-16">
        <h2 className="font-heading text-headline-lg text-primary mb-8">Dealer Application</h2>
        <p className="font-body text-body-md text-text-secondary max-w-2xl mb-8">
          Our technical compliance evaluates all dealer partners for alignment with SS Footwear’s initiatives and partnerships.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <input type="text" placeholder="Company Name" className="border border-border px-4 py-3 text-sm" />
          <input type="email" placeholder="Email Address" className="border border-border px-4 py-3 text-sm" />
          <input type="tel" placeholder="Phone Number" className="border border-border px-4 py-3 text-sm" />
          <select className="border border-border px-4 py-3 text-sm bg-white">
            <option>Select Dealer Type</option>
            <option>Dealer Visa</option>
            <option>4.0 Venue Dealer</option>
            <option>Dealer Card</option>
          </select>
          <div className="md:col-span-2">
            <textarea rows={4} placeholder="Message" className="w-full border border-border px-4 py-3 text-sm"></textarea>
          </div>
          <button className="md:col-span-2 bg-primary text-white px-8 py-4 rounded-full font-technical text-label-technical uppercase tracking-widest hover:bg-primary/90">Submit Application</button>
        </form>
      </div>
    </div>
  );
}