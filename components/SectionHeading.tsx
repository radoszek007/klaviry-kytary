type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl ${light ? "text-ivory" : "text-ink"}`}>{title}</h2>
      {text ? <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-ivory/[0.72]" : "text-charcoal/[0.74]"}`}>{text}</p> : null}
    </div>
  );
}
