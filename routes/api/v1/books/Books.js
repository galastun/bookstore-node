/**
 * Handles all the Book API functions.
 */
class Books {
  /**
   * Handles GET requests for Books.
   *
   * @static
   * @param {HTTPRequest} req
   * @param {HTTPResponse} res
   */
  static get(req, res) {
    // add connection to database later
    res.json({
      data: {
        books: [
          {
            id: 1,
            title: 'The Hobbit',
            isbn: '9780547928227',
            pages: 320,
            category: 'Fantasy',
            author: 'J.R.R. Tolkien',
            publisher: 'Houghton Mifflin Harcourt',
          },
          {
            id: 2,
            title: 'The Fellowship of the Ring',
            isbn: '9780547928210',
            pages: 432,
            category: 'Fantasy',
            author: 'J.R.R. Tolkien',
            publisher: 'Houghton Mifflin Harcourt',
          },
          {
            id: 3,
            title: 'The Two Towers',
            isbn: '9780547928203',
            pages: 352,
            category: 'Fantasy',
            author: 'J.R.R. Tolkien',
            publisher: 'Houghton Mifflin Harcourt',
          },
          {
            id: 4,
            title: 'The Return of the King',
            isbn: '9780547928197',
            pages: 432,
            category: 'Fantasy',
            author: 'J.R.R. Tolkien',
            publisher: 'Houghton Mifflin Harcourt',
          },
          {
            id: 5,
            title: 'If You Give a Mouse a Cookie',
            isbn: '9780547928197',
            pages: 32,
            category: 'Childrens',
            author: 'Laura Numeroff',
            publisher: 'HarperCollins Publishers',
          },
          {
            id: 6,
            title: 'If You Give a Pig a Pancake',
            isbn: '9780064436632',
            pages: 32,
            category: 'Childrens',
            author: 'Laura Numeroff',
            publisher: 'HarperCollins Publishers',
          },
          {
            id: 7,
            title: 'If You Give a Moose a Muffin',
            isbn: '9780064433662',
            pages: 32,
            category: 'Childrens',
            author: 'Laura Numeroff',
            publisher: 'HarperCollins Publishers',
          },
          {
            id: 8,
            title: 'If You Give a Cat a Cupcake',
            isbn: '9780060283247',
            pages: 32,
            category: 'Childrens',
            author: 'Laura Numeroff',
            publisher: 'HarperCollins Publishers',
          },
          {
            id: 9,
            title: 'If You Give a Dog a Donut',
            isbn: '9780060266837',
            pages: 32,
            category: 'Childrens',
            author: 'Laura Numeroff',
            publisher: 'HarperCollins Publishers',
          },
          {
            id: 10,
            title: 'The Silmarillion',
            isbn: '9780808521402',
            pages: 442,
            category: 'Fantasy',
            author: 'J.R.R. Tolkien',
            publisher: 'Turtleback Books',
          },
        ],
      },
    });
  }
}

module.exports = Books;
