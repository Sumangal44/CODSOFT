import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student','recruiter'],
        default: 'student',
        required: true
    },
    profile: {
        bio:{
            type: String,
            default: 'Tell us about yourself'
        },
        skills: [{type: String}],
        // experience: [{type: String}],
        // education: [{type: String}],
        // projects: [{type: String}],
        // languages: [{type: String}],
        // certifications: [{type: String}],
        // achievements: [{type: String}],
        // awards: [{type: String}],
        // hobbies: [{type: String}],
        // interests: [{type: String}],
        // references: [{type: String}],
        resume: {
            type: String
        },//url to resume
        resumeOriginalName: {
            type: String
        },
        company: {type:mongoose.Schema.Types.ObjectId, ref: 'Company'},
        profileImage: {
            type: String,
            default:"",
        },
        
}
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);
