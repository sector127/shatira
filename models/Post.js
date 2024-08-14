import mongoose from 'mongoose';
import slugify from 'slugify';

const PostSchema = new mongoose.Schema({
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
PostSchema.pre('validate', function(next) {
    if (this.title && !this.slug) {
        this.slug = slugify(this.title, { lower: true });
    }
    next();
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
