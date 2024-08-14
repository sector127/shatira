'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RelatedPosts from "@/components/RelatedPosts";
import Image from "next/image";

export default function PostPage({ params }) {
    const { slug } = params;
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/posts/${slug}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                    setImgSrc(data.image)
                } else {
                    setError('Failed to fetch the post');
                }
            } catch (error) {
                setError('An error occurred while fetching the post');
            }
        };

        fetchPost();
    }, [slug]);

    const handleImageError = () => {
        setImgSrc("/assets/images/default-fallback-image.png");
    };

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <Image
                src={imgSrc}
                alt="Description of the image"
                width={800}
                height={600}
                onError={handleImageError}
            />
            <div
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="flex flex-wrap gap-2 mb-4">
                {post.tags?.map((tag) => (
                    <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-500 mb-2">Author: {post.author}</p>
            <p className="text-sm text-gray-500">Published on {new Date(post.date).toLocaleDateString()}</p>

            <RelatedPosts tags={post.tags} currentPostSlug={post.slug} />
        </div>
    );
}
