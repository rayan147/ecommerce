import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const { Schema } = mongoose;
const userSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
},{
    timestamps: true
})
// Methods are added to the model by default.
userSchema.methods = {
    async comparePassword(candidatePassword) {
        return await bcrypt.compare(candidatePassword, this.password);
    }
}
// RUNS BEFORE EACH SAVE
// A function to hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next()
    }
  
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
  })
    
const User = mongoose.model('User', userSchema);



export default User;
