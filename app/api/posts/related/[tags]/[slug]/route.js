import { NextResponse } from 'next/server';
import connectToDatabase from "@/lib/mongoose";
import Post from "@/models/Post";

export async function GET(req, { params }) {
    try {
        await connectToDatabase();
        const { tags, slug } = params;
        const tagsArray = tags.split(',');

        const relatedPosts = await Post.find({
            tags: { $in: tagsArray },
            slug: { $ne: slug }  // Exclude the current post
        }).limit(5);

        return NextResponse.json(relatedPosts, { status: 200 });
    } catch (error) {
        console.error('Error fetching related posts:', error);
        return NextResponse.json({ error: 'Error fetching related posts' }, { status: 500 });
    }
}
