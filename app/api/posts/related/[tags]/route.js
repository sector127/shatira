import { NextResponse } from 'next/server';
import connectToDatabase from "@/lib/mongoose";
import Post from "@/models/Post";

export async function GET(req, { params }) {
    try {
        await connectToDatabase();
        const { tags } = params;
        const tagsArray = tags.split(',');

        const relatedPosts = await Post.find({ tags: { $in: tagsArray } }).limit(5); // Limit the number of related posts if needed

        return NextResponse.json(relatedPosts, { status: 200 });
    } catch (error) {
        console.error('Error fetching related posts:', error);
        return NextResponse.json({ error: 'Error fetching related posts' }, { status: 500 });
    }
}
