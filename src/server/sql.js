var sql = {
  user: {
    login: 'select * from user where userName = ? and password = ?',
    queryUserList: 'select * from user',
    createUser: 'insert into user (userId, userName, password) values (?, ?, ?)'
  },
  book: {
    queryBookList: 'select * from book',
    queryById: 'select * from book where bookId = ?',
    createBook: 'insert into book (bookId, bookName, press, bookDescribe) values(?, ?, ?, ?)',
    delete: 'delete from book where bookId = ?'
  }
}

module.exports = sql;
