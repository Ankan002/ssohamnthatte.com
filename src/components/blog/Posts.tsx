"use client";

import { useEffect, useState } from 'react';
import { Grid } from '@once-ui-system/core';
import Post from './Post';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

interface BlogPost {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
    tag?: string;
    team: Array<{
      name: string;
      role: string;
      avatar: string;
      linkedIn: string;
    }>;
    link?: string;
  };
  slug: string;
  content: string;
}

export function Posts({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: PostsProps) {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <Grid columns={columns} fillWidth marginBottom="40" gap="12">
                <div>Loading posts...</div>
            </Grid>
        );
    }

    const displayedBlogs = range
        ? posts.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : posts.length 
          )
        : posts;

    return (
        <>
            {displayedBlogs.length > 0 && (
                <Grid
                    columns={columns}
                    fillWidth marginBottom="40" gap="12">
                    {displayedBlogs.map((post) => (
                        <Post
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}