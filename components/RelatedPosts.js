'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const RelatedPosts = ({ tags, currentPostSlug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchRelatedPosts = async () => {
            setIsLoading(true);
            try {
                const tagsQueryString = tags.join(',');
                const response = await fetch(`/api/posts/related/${tagsQueryString}/${currentPostSlug}`);
                if (response.ok) {
                    const data = await response.json();
                    setRelatedPosts(data);
                } else {
                    setError('Failed to fetch related posts');
                }
            } catch (error) {
                console.error('Error fetching related posts:', error);
                setError('An error occurred while fetching related posts');
            } finally {
                setIsLoading(false);
            }
        };

        if (tags.length > 0) {
            fetchRelatedPosts();
        }
    }, [tags, currentPostSlug]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (relatedPosts.length === 0) {
        return <p>No related posts found.</p>;
    }

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
            <ul>
                {relatedPosts.map((post) => (
                    <li key={post._id} className="mb-2">
                        <Link href={`/blog/${post.slug}`}>
                            <p className="text-blue-500 font-medium">{post.title}</p>
                        </Link>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {post.tags.map((tag) => (
                                <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedPosts;
