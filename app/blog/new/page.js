'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useSession } from 'next-auth/react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function NewPost() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');


        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    image,
                    content,
                    tags: tags.split(',').map(tag => tag.trim()),
                }),
            });

            if (response.ok) {
                setSuccess('Post created successfully!');
                setTitle('');
                setImage('')
                setContent('');
                setTags('');
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error creating post:', error);
            setError('An error occurred while creating the post');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Image Src"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded"
                />
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    className="bg-white"
                    theme="snow"
                    modules={{
                        toolbar: [
                            [{'header': '1'}, {'header': '2'}, {'font': []}],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            ['bold', 'italic', 'underline'],
                            ['link', 'image'],
                            [{'align': []}],
                            [{'color': []}, {'background': []}],
                            ['clean']
                        ]
                    }}
                    formats={[
                        'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'link', 'image', 'align', 'color', 'background'
                    ]}
                />
                <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Create Post
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </form>
        </div>
    );
}
