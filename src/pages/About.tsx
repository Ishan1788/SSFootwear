import { useEffect } from 'react';
import { SectionHeading } from '../components/Shared/SectionHeading';
import pawanImg from '../assets/pawan.png';
import shyamImg from '../assets/Shyam.jpeg';

export default function About() {
  useEffect(() => {
    document.title = 'About – SS Footwear';
  }, []);

  const values = [
    {
      title: 'Trust',
      text: 'We believe long-term relationships are built on reliability, consistency, and honest service.',
    },
    {
      title: 'Craftsmanship',
      text: 'Every pair is made with care, blending practical design with skilled production methods.',
    },
    {
      title: 'Modern Manufacturing',
      text: 'We continuously invest in better technology and production methods to improve quality and efficiency.',
    },
    {
      title: 'Comfort',
      text: 'Our footwear is designed with everyday comfort in mind, ensuring confidence with every step.',
    },
    {
      title: 'Durability',
      text: 'We carefully select materials and manufacturing techniques that make our products last.',
    },
    {
      title: 'Quality',
      text: 'Quality is built into every stage of production—from raw materials to the finished product.',
    },
  ];

  const directors = [
    {
      name: 'Shyam Sundar Khetan',
      role: 'Managing Director & Co-Founder',
      image: shyamImg,
      description:
        'As Co-Founder and Managing Director, Shyam Sundar Khetan has played a key role in building SS Footwear through his commitment to quality manufacturing, business integrity, and continuous improvement.',
    },
    {
      name: 'Pawan Khetan',
      role: 'Managing Director & Co-Founder',
      image: pawanImg,
      description:
        'As Co-Founder and Managing Director, Pawan Khetan leads with a customer-focused vision, helping drive innovation, product development, and sustainable growth across the company.',
    },
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <SectionHeading
        label="// ABOUT"
        title="Built for Comfort. Designed for Confidence."
        description="Founded in July 2009 by brothers Shyam Sundar Khetan and Pawan Khetan, SS Footwear has grown into a trusted Nepalese footwear manufacturer dedicated to quality, comfort, and innovation."
      />

      {/* OUR STORY */}
      <section className="mt-16">
        <div className="max-w-4xl">
          <h2 className="font-heading text-headline-lg text-primary mb-6">
            Our Story
          </h2>

          <p className="font-body text-body-md text-text-secondary mb-6 leading-8">
            Founded in July 2009, SS Footwear was established by brothers
            <span className="font-semibold text-primary">
              {' '}
              Shyam Sundar Khetan
            </span>{' '}
            and
            <span className="font-semibold text-primary">
              {' '}
              Pawan Khetan
            </span>{' '}
            with a shared vision of producing footwear that combines quality,
            comfort, durability, and affordability for customers across Nepal.
            What began as a family partnership has steadily grown into a trusted
            footwear manufacturer known for dependable products and lasting
            customer relationships.
          </p>

          <p className="font-body text-body-md text-text-secondary mb-6 leading-8">
            Together, both founders continue to lead the company as Managing
            Directors, combining years of industry experience with a commitment
            to innovation, modern manufacturing, and ethical business
            practices. Their leadership has enabled SS Footwear to serve
            retailers, schools, institutions, and businesses throughout the
            country.
          </p>

          <p className="font-body text-body-md text-text-secondary leading-8">
            Every product reflects our dedication to craftsmanship, consistent
            quality, and continuous improvement. From sourcing raw materials to
            final production, we strive to deliver footwear that customers can
            rely on every day.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mt-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-sm text-primary">
            Meet Our Leadership
          </h2>

          <p className="font-body text-body-md text-text-secondary mt-4 max-w-2xl mx-auto">
            The vision and leadership of our founders continue to guide SS Footwear
            toward innovation, quality, and long-term customer trust.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {directors.map((director) => (
            <div
              key={director.name}
              className="group w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface-container-low hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 mb-4">
                  <span className="text-primary text-xs font-medium">
                    {director.role}
                  </span>
                </div>

                <h3 className="font-heading text-headline-md text-primary mb-3">
                  {director.name}
                </h3>

                <p className="font-body text-body-sm text-text-secondary leading-7">
                  {director.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-border mt-20 pt-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-sm text-primary">
            What We Stand For
          </h2>

          <p className="font-body text-body-md text-text-secondary mt-4 max-w-2xl mx-auto">
            Every decision we make is guided by the principles that have shaped
            SS Footwear since its founding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface-container-low p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-heading text-headline-md text-primary mb-4">
                {item.title}
              </h3>

              <p className="font-body text-body-md text-text-secondary leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="mt-20">
        <div className="rounded-3xl bg-surface-container-low border border-border p-10 md:p-14">
          <h2 className="font-heading text-display-sm text-primary mb-6">
            Our Promise
          </h2>

          <p className="font-body text-body-md text-text-secondary leading-8 max-w-4xl">
            At SS Footwear, our promise is to create footwear that combines
            comfort, durability, and modern design without compromising on
            quality. Guided by the vision of our founders, Shyam Sundar Khetan
            and Pawan Khetan, we continue to invest in skilled craftsmanship,
            advanced manufacturing, and long-term relationships with our
            customers, distributors, and business partners.
          </p>
        </div>
      </section>
    </div>
  );
}