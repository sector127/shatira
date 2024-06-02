import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongoose';
import Post from '../../../models/Post';

export async function GET() {
    try {
        await connectToDatabase();
        const posts = await Post.find({}, 'tags');
        const tags = [...new Set(posts.flatMap(post => post.tags))]; // Get unique tags
        return NextResponse.json(tags, { status: 200 });
    } catch (error) {
        console.error('Error fetching tags:', error);
        return NextResponse.json({ error: 'Error fetching tags' }, { status: 500 });
    }
}
