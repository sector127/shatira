import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongoose';
import Post from '../../../../models/Post';

export async function GET(req, { params }) {
    const { slug } = params;

    try {
        await connectToDatabase();
        const post = await Post.findOne({ slug });

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error('Error fetching post:', error);
        return NextResponse.json({ error: 'Error fetching post' }, { status: 500 });
    }
}
