interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  rightElement?: React.ReactNode;
}

export const SectionHeading = ({ label, title, description, rightElement }: SectionHeadingProps) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-border/20 pb-4">
      <div>
        {label && (
          <span className="font-technical text-label-technical uppercase tracking-widest text-text-secondary block mb-2">
            {label}
          </span>
        )}
        <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary">
          {title}
        </h2>
        {description && (
          <p className="font-body text-body-md text-text-secondary mt-2 max-w-xl">
            {description}
          </p>
        )}
      </div>
      {rightElement && <div className="mt-4 md:mt-0">{rightElement}</div>}
    </div>
  );
};