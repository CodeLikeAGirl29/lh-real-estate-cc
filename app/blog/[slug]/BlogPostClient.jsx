import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPostClient({ post, morePosts = [] }) {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article>
        <header className="mx-auto max-w-3xl px-4 pt-32 sm:px-6 lg:pt-40">
          <p className="text-sm text-muted">
            <Link
              href="/blog"
              className="font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
            >
              The Coast Is Clear
            </Link>
            <span className="ml-3">{post.category}</span>
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.5rem]">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-6 text-xl leading-relaxed text-foreground/75">
              {post.excerpt}
            </p>
          )}
          <div className="mt-8 flex items-center gap-4 border-t border-foreground/10 pt-6">
            <div className="relative size-11 overflow-hidden rounded-full">
              <Image
                src="/images/lindsey-profile.jpg"
                alt=""
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <p className="text-sm leading-snug">
              <span className="block font-semibold text-foreground">Lindsey Howard</span>
              <span className="text-muted">
                {post.date}, {post.readTime}
              </span>
            </p>
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[14px]">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose-coast mx-auto max-w-[42rem] px-4 py-14 sm:px-6">
          {post.content}
        </div>
      </article>

      {/* Author note */}
      <aside className="mx-auto max-w-[42rem] px-4 sm:px-6">
        <div className="flex flex-col gap-6 rounded-[14px] bg-paper p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/lindsey-profile.jpg"
              alt="Lindsey Howard"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              Questions about your situation?
            </p>
            <p className="mt-2 leading-relaxed text-ink/75">
              I&apos;m Lindsey, a REALTOR® with eXp Realty in Fort Walton
              Beach. Text or call and I&apos;ll give you a straight answer.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="tel:+18505335877"
                className="rounded-full bg-reef px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
              >
                Call (850) 533-5877
              </a>
              <a
                href="mailto:lindsey.howard.re@outlook.com"
                className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink/50"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </aside>

      {morePosts.length > 0 && (
        <section aria-labelledby="more-posts" className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
          <h2 id="more-posts" className="font-display text-3xl font-semibold text-foreground">
            Keep reading
          </h2>
          <ul className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {morePosts.map((p) => (
              <li key={p.id}>
                <Link href={`/blog/${p.id}`} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[10px]">
                    <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <p className="mt-4 text-sm text-muted">{p.date}</p>
                  <p className="mt-1 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-reef">
                    {p.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Footer />
    </main>
  );
}
