import mongoose, { Document, Model, Schema } from 'mongoose';
import slugify from 'slugify';

export interface IPost extends Document {
    title: string;
    image: string;
    content: string;
    tags: string[];
    date: Date;
    slug: string;
    author: string;
}

const PostSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        default: 'Giorgi Shatirishvili',
    },
});

// Middleware to generate slug before saving
PostSchema.pre('validate', function(this: IPost, next) {
    if (this.title && !this.slug) {
        this.slug = slugify(this.title, { lower: true });
    }
    next();
});

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);

export default Post;
