import Image from "next/image";

type ImageCardProps = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

export default function ImageCard({ title, text, image, alt }: ImageCardProps) {
  return (
    <article className="group overflow-hidden rounded-[0.5rem] border border-ink/10 bg-white shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/[0.42] via-transparent to-transparent opacity-80" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{title}</h3>
        <p className="mt-3 leading-7 text-charcoal/[0.76]">{text}</p>
      </div>
    </article>
  );
}
