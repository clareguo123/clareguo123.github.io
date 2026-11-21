import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface BlogPostData {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    coverImage?: string;
  };
  content: string;
}

interface BlogModule {
  frontmatter: BlogPostData["frontmatter"];
  default: string;
}

const importImage = (imagePath: string) => {
  const cleanPath = imagePath.replace(/^images\//, "");
  return new URL(`/src/blog-posts/images/${cleanPath}`, import.meta.url).href;
};

const BlogList: React.FC<{ posts: BlogPostData[] }> = ({ posts }) => (
  <div className="space-y-10">
    <header className="space-y-3 border-b border-border/60 pb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Writing
      </p>
      <h1 className="text-fluid-h1 font-medium tracking-tight">Notes &amp; Essays</h1>
      <p className="max-w-xl text-fluid-body text-muted-foreground">
        Thoughts on product management, engineering collaboration, and data.
      </p>
    </header>

    <div className="divide-y divide-border/60">
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={`/blog/${post.slug}`}
          className="group flex flex-col justify-between gap-2 py-6 transition-colors sm:flex-row sm:items-baseline"
        >
          <div className="space-y-1">
            <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
              {post.frontmatter?.title || "Untitled Post"}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">
              {post.frontmatter?.date || "No date"}
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const BlogPostView: React.FC<{ posts: BlogPostData[] }> = ({ posts }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="space-y-6 py-8">
        <p className="text-muted-foreground">Post not found.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-2xl space-y-8">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All posts
      </Link>

      <header className="space-y-3 border-b border-border/60 pb-6">
        <p className="font-mono text-xs text-muted-foreground">
          {post.frontmatter?.date}
        </p>
        <h1 className="text-fluid-h1 font-medium tracking-tight">
          {post.frontmatter?.title}
        </h1>
      </header>

      {post.frontmatter?.coverImage && (
        <img
          src={importImage(post.frontmatter.coverImage)}
          alt={post.frontmatter.title}
          className="w-full rounded-lg object-cover"
        />
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed">
        <ReactMarkdown
          components={{
            img: ({ ...props }) => (
              <img
                {...props}
                src={importImage(props.src || "")}
                className="my-6 h-auto max-w-full rounded-lg"
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const modules = import.meta.glob<BlogModule>("/src/blog-posts/*.md");
      const blogPosts: BlogPostData[] = [];

      for (const path in modules) {
        const mod = await modules[path]();
        const slug = path.split("/").pop()?.replace(".md", "");
        if (slug) {
          blogPosts.push({
            slug,
            frontmatter: mod.frontmatter,
            content: mod.default,
          });
        }
      }

      setPosts(
        blogPosts.sort(
          (a, b) =>
            new Date(b.frontmatter?.date || 0).getTime() -
            new Date(a.frontmatter?.date || 0).getTime()
        )
      );
    };

    fetchPosts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<BlogList posts={posts} />} />
      <Route path=":slug" element={<BlogPostView posts={posts} />} />
    </Routes>
  );
};

export default Blog;
