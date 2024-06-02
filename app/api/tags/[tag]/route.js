import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongoose';
import Post from '../../../../models/Post';

export async function GET(req, { params }) {
    try {
        await connectToDatabase();
        const { tag } = params;
        const posts = await Post.find({ tags: tag });
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Error fetching posts by tag:', error);
        return NextResponse.json({ error: 'Error fetching posts by tag' }, { status: 500 });
    }
}
