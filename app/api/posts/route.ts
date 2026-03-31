import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';

export async function POST(req: Request) {
    try {
        await connectToDatabase();

        const { title, image, content, tags } = await req.json();

        if (!title || !content) {
            return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
        }

        try {
            const newPost = new Post({ title, image, content, tags });
            await newPost.save();
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
        const posts = await Post.find({}).sort({ date: -1 });
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
    }
}
