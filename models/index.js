const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany( Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany( Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
 
Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

Post.hasMany( Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
Comment.belongsTo(Post, {
    foreignKey: 'user_id'
});

module.exports = { User, Comment, Post  };
