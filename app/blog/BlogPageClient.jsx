import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogPosts from "@/lib/blogPosts";

const posts = Object.entries(blogPosts)
  .map(([id, post]) => ({
    id,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category,
    readTime: post.readTime,
    image: post.image,
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export default function BlogPageClient() {
  const [latest, ...rest] = posts;

  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="mx-auto max-w-7xl px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <h1 className="font-display text-5xl font-semibold text-foreground sm:text-6xl">
          The Coast Is Clear
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
          Okaloosa County real estate with the actual numbers in it. PCS moves,
          flood zones, insurance, taxes, and what the market is doing in Fort
          Walton Beach, Niceville, Crestview and Destin.
        </p>
      </header>

      {latest && (
        <section aria-label="Latest post" className="border-y border-foreground/10">
          <article className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
            <Link
              href={`/blog/${latest.id}`}
              className="relative block aspect-[16/10] overflow-hidden rounded-[14px] lg:col-span-7"
            >
              <Image
                src={latest.image}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </Link>
            <div className="lg:col-span-5">
              <p className="text-sm text-muted">
                Latest post, {latest.date}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                <Link href={`/blog/${latest.id}`} className="hover:text-reef">
                  {latest.title}
                </Link>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/75">
                {latest.excerpt}
              </p>
              <p className="mt-6">
                <Link
                  href={`/blog/${latest.id}`}
                  className="font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
                >
                  Read it
                </Link>
                <span className="ml-3 text-sm text-muted">{latest.readTime}</span>
              </p>
            </div>
          </article>
        </section>
      )}

      <section aria-label="All posts" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ul>
          {rest.map((post) => (
            <li key={post.id} className="border-b border-foreground/10">
              <article className="grid gap-5 py-10 sm:grid-cols-[1fr_12rem] sm:gap-10 lg:grid-cols-[10rem_1fr_14rem]">
                <p className="text-sm text-muted lg:pt-2">
                  <span className="block">{post.date}</span>
                  <span className="block text-steel">{post.category}</span>
                </p>
                <div>
                  <h2 className="font-display text-2xl font-semibold leading-snug text-foreground sm:text-[1.75rem]">
                    <Link href={`/blog/${post.id}`} className="hover:text-reef">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/75 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="relative hidden aspect-[4/3] overflow-hidden rounded-[10px] sm:block"
                >
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
