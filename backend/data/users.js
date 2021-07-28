import bcrypt from 'bcryptjs';
const users = [
  {
      name: 'admin',
      password: bcrypt.hashSync('admin',10),
      email: 'admin@example.com',
      isAdmin: true,
  },
  {
      name: 'user1',
      password: bcrypt.hashSync('admin',10),
      email: 'user1@example.com',
    
  },
  {
      name: 'user2',
      password: bcrypt.hashSync('admin',10),
      email: 'user2@example.com',
  },
]
export default users;