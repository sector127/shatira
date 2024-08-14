import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongoose';
import Post from '../../../models/Post';

export async function POST(req) {
    try {
        await connectToDatabase();
        console.log('Connected to database');

        const { title,image, content, tags } = await req.json();
        console.log('Request body:', { title, image, content, tags });

        if (!title || !content) {
            console.error('Validation Error: Title and content are required');
            return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
        }

        try {
            const newPost = new Post({ title, image, content, tags });
            await newPost.save();
            console.log('Post created:', newPost);
            return NextResponse.json(newPost, { status: 201 });
        } catch (error) {
            console.error('Error creating post:', error);
            return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
        }
    } catch (error) {
        console.error('Database connection error:', error);
        return NextResponse.json({ error: 'Database connection error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const posts = await Post.find({});
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
    }
}
