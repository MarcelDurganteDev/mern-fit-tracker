import mongoose from 'mongoose';

const Schema = mongoose.Schema;
/**
 * validator library is used to validate the data that is being inserted into the database. 
 * 
 * For example if we want to insert a user into the database, we need to make sure that the user has a name, email, password and role.
 * 
 * The validator library is a JavaScript library and it is a full-fledged (fledged meaning that it is complete) Object Document Mapper tool for mapping between JavaScript objects and documents in MongoDB.
 * 
 * An exmple of how to use it is: 
 * 
 * validator.isEmail(email)
 * validator.isLength(password, {min: 6}) 
 * validator.isLength(name, {min: 2})
 * validator.isLength(role, {min: 2})
 * validator.isLength(password, {min: 6}) 
 * validator.isLength(name, {min: 2})
 * validator.isLength(role, {min: 2})   
 */
// import validator from 'validator';

const UserSchema = new Schema( {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 255,
  },
}, {
  timestamps: true,
} );

 
const User = mongoose.model('User', UserSchema);

module.exports = User;