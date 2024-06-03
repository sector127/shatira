'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import TagsList from '../../components/TagsList';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/posts');
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            } else {
                setError('Failed to fetch posts');
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
            setError('An error occurred while fetching posts');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleTagClick = async (tag) => {
        setSelectedTag(tag);
        setError('');
        setIsLoading(true);
        try {
            const response = await fetch(`/api/tags/${tag}`);
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            } else {
                setError('Failed to fetch posts for the selected tag');
            }
        } catch (error) {
            console.error('Error fetching posts by tag:', error);
            setError('An error occurred while fetching posts by tag');
        } finally {
            setIsLoading(false);
        }
    };

    const truncateContent = (content, wordLimit) => {
        const words = content.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : content;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.toLocaleDateString('en-US', { day: '2-digit' });
        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
        return { day, weekday };
    };

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <TagsList onTagClick={handleTagClick} />
                </div>
                <div className="w-full md:w-3/4">
                    {selectedTag && (
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold mb-2">Posts tagged with {selectedTag}</h2>
                            <button
                                className="text-blue-500"
                                onClick={() => {
                                    setSelectedTag('');
                                    fetchPosts(); // Reset to show all posts
                                }}
                            >
                                Show all posts
                            </button>
                        </div>
                    )}
                    {error && <p className="text-red-500">{error}</p>}
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="grid grid-cols-1 gap-8">
                            {posts.map((post) => (
                                <div key={post._id} className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-md">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-full w-16 h-16 text-center font-semibold text-lg">
                                            {formatDate(post.date).day}
                                            <br />
                                            <span className="text-sm font-normal">{formatDate(post.date).weekday}</span>
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                                            <p className="text-gray-700 mb-4">{truncateContent(post.content, 30)}</p>
                                            <Link href={`/blog/${post._id}`}>
                                                <button className="text-blue-500 font-medium">Read more</button>
                                            </Link>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
