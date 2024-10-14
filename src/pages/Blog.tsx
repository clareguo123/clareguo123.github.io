import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    coverImage?: string;
  };
  content: string;
}

interface BlogModule {
  frontmatter: BlogPost['frontmatter'];
  default: string;
}

const importImage = (imagePath: string) => {
  return new URL(`/src/blog-posts/images/${imagePath}`, import.meta.url).href;
};

const BlogList: React.FC<{ posts: BlogPost[] }> = ({ posts }) => (
  <div className="container mx-auto py-6">
    <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.slug}>
          <CardHeader>
            <CardTitle>
              <Link to={`/blog/${post.slug}`} className="hover:underline">
                {post.frontmatter?.title || 'Untitled Post'}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{post.frontmatter?.date || 'No date'}</p>
            {post.frontmatter?.coverImage && (
              <img 
                src={importImage(post.frontmatter.coverImage)} 
                alt={post.frontmatter.title} 
                className="mt-4 rounded-md w-full h-48 object-cover"
              />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const BlogPost: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="container mx-auto py-6">Post not found</div>;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-2">{post.frontmatter.title}</h1>
      <p className="text-sm text-muted-foreground mb-4">Published on: {post.frontmatter.date}</p>
      {post.frontmatter.coverImage && (
        <img 
          src={importImage(post.frontmatter.coverImage)} 
          alt={post.frontmatter.title} 
          className="mt-4 mb-6 rounded-md w-full h-64 object-cover"
        />
      )}
      <Separator className="my-4" />
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            img: ({node, ...props}) => (
              <img 
                {...props} 
                src={importImage(props.src || '')}
                className="rounded-md max-w-full h-auto"
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <Separator className="my-4" />
      <Button asChild>
        <Link to="/blog">Back to all posts</Link>
      </Button>
    </div>
  );
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const modules = import.meta.glob<BlogModule>('/src/blog-posts/*.md');
      const blogPosts: BlogPost[] = [];

      for (const path in modules) {
        const mod = await modules[path]();
        const slug = path.split('/').pop()?.replace('.md', '');
        if (slug) {
          blogPosts.push({
            slug,
            frontmatter: mod.frontmatter,
            content: mod.default,
          });
        }
      }

      setPosts(blogPosts.sort((a, b) => 
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
      ));
    };

    fetchPosts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<BlogList posts={posts} />} />
      <Route path=":slug" element={<BlogPost posts={posts} />} />
    </Routes>
  );
};

export default Blog;