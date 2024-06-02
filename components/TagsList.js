'use client';
import { useEffect, useState } from 'react';

const TagsList = ({ onTagClick }) => {
    const [tags, setTags] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch('/api/tags');
                if (response.ok) {
                    const data = await response.json();
                    setTags(data);
                } else {
                    setError('Failed to fetch tags');
                }
            } catch (error) {
                console.error('Error fetching tags:', error);
                setError('An error occurred while fetching tags');
            }
        };

        fetchTags();
    }, []);

    const handleTagClick = (tag) => {
        onTagClick(tag);
    };

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded cursor-pointer"
                        onClick={() => handleTagClick(tag)}
                    >
            # {tag}
          </span>
                ))}
            </div>
        </div>
    );
};

export default TagsList;
