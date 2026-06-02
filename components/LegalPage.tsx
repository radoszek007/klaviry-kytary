import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LegalPageProps = {
  children: React.ReactNode;
  intro: string;
  title: string;
};

export default function LegalPage({ children, intro, title }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <section className="bg-ink pb-16 pt-32 text-ivory sm:pt-36">
          <div className="section-shell">
            <p className="eyebrow text-brass">Právní dokument</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/[0.76]">{intro}</p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="section-shell">
            <article className="mx-auto max-w-4xl rounded-[0.5rem] border border-ink/10 bg-white p-6 shadow-card sm:p-10">
              <div className="legal-content">{children}</div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
