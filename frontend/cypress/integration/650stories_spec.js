describe('650Stories', function () {
  it('.should() - assert that <title> is correct', function () {
    // https://on.cypress.io/visit
    cy.visit('http://localhost:4200')

    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.

    // https://on.cypress.io/should
    // https://on.cypress.io/and

    // https://on.cypress.io/title
    cy.title().should('include', '650Stories')
    //   ↲               ↲            ↲
    // subject        chainer      value
  })
  context('Querying', function () {
    beforeEach(function () {
      // Visiting our app before each test removes any state build up from
      // previous tests. Visiting acts as if we closed a tab and opened a fresh one
      cy.visit('http://localhost:4200')
    })

    // Let's query for some DOM elements and make assertions
    // The most commonly used query is 'cy.get()', you can
    // think of this like the '$' in jQuery

    it('cy.get() - query DOM elements', function () {
      // https://on.cypress.io/get

      // Get DOM elements by id
      cy.get('.page-title').should('contain', '650 Stories')

    })

  //   it('cy.contains() - query DOM elements with matching content', function () {
  //     // https://on.cypress.io/contains
  //     cy.get('.query-list')
  //       .contains('bananas').should('have.class', 'third')

  //     // we can pass a regexp to `.contains()`
  //     cy.get('.query-list')
  //       .contains(/^b\w+/).should('have.class', 'third')

  //     cy.get('.query-list')
  //       .contains('apples').should('have.class', 'first')

  //     // passing a selector to contains will yield the selector containing the text
  //     cy.get('#querying')
  //       .contains('ul', 'oranges').should('have.class', 'query-list')

  //     // `.contains()` will favor input[type='submit'],
  //     // button, a, and label over deeper elements inside them
  //     // this will not yield the <span> inside the button,
  //     // but the <button> itself
  //     cy.get('.query-button')
  //       .contains('Save Form').should('have.class', 'btn')
  //   })

  //   it('.within() - query DOM elements within a specific element', function () {
  //     // https://on.cypress.io/within
  //     cy.get('.query-form').within(function () {
  //       cy.get('input:first').should('have.attr', 'placeholder', 'Email')
  //       cy.get('input:last').should('have.attr', 'placeholder', 'Password')
  //     })
  //   })

  //   it('cy.root() - query the root DOM element', function () {
  //     // https://on.cypress.io/root
  //     // By default, root is the document
  //     cy.root().should('match', 'html')

  //     cy.get('.query-ul').within(function () {
  //       // In this within, the root is now the ul DOM element
  //       cy.root().should('have.class', 'query-ul')
  //     })
  //   })
  })

  // context('Traversal', function () {
  //   beforeEach(function () {
  //     cy.visit('http://localhost:4200')
  //   })

  //   // Let's query for some DOM elements and make assertions

  //   it('.children() - get child DOM elements', function () {
  //     // https://on.cypress.io/children
  //     cy.get('.traversal-breadcrumb').children('.active')
  //       .should('contain', 'Data')
  //   })

  //   it('.closest() - get closest ancestor DOM element', function () {
  //     // https://on.cypress.io/closest
  //     cy.get('.traversal-badge').closest('ul')
  //       .should('have.class', 'list-group')
  //   })

  //   it('.eq() - get a DOM element at a specific index', function () {
  //     // https://on.cypress.io/eq
  //     cy.get('.traversal-list>li').eq(1).should('contain', 'siamese')
  //   })

  //   it('.filter() - get DOM elements that match the selector', function () {
  //     // https://on.cypress.io/filter
  //     cy.get('.traversal-nav>li').filter('.active').should('contain', 'About')
  //   })

  //   it('.find() - get descendant DOM elements of the selector', function () {
  //     // https://on.cypress.io/find
  //     cy.get('.traversal-pagination').find('li').find('a')
  //       .should('have.length', 7)
  //   })

  //   it('.first() - get first DOM element', function () {
  //     // https://on.cypress.io/first
  //     cy.get('.traversal-table td').first().should('contain', '1')
  //   })

  //   it('.last() - get last DOM element', function () {
  //     // https://on.cypress.io/last
  //     cy.get('.traversal-buttons .btn').last().should('contain', 'Submit')
  //   })

  //   it('.next() - get next sibling DOM element', function () {
  //     // https://on.cypress.io/next
  //     cy.get('.traversal-ul').contains('apples').next().should('contain', 'oranges')
  //   })

  //   it('.nextAll() - get all next sibling DOM elements', function () {
  //     // https://on.cypress.io/nextall
  //     cy.get('.traversal-next-all').contains('oranges')
  //       .nextAll().should('have.length', 3)
  //   })

  //   it('.nextUntil() - get next sibling DOM elements until next el', function () {
  //     // https://on.cypress.io/nextuntil
  //     cy.get('#veggies').nextUntil('#nuts').should('have.length', 3)
  //   })

  //   it('.not() - remove DOM elements from set of DOM elements', function () {
  //     // https://on.cypress.io/not
  //     cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain', 'Disabled')
  //   })

  //   it('.parent() - get parent DOM element from DOM elements', function () {
  //     // https://on.cypress.io/parent
  //     cy.get('.traversal-mark').parent().should('contain', 'Morbi leo risus')
  //   })

  //   it('.parents() - get parent DOM elements from DOM elements', function () {
  //     // https://on.cypress.io/parents
  //     cy.get('.traversal-cite').parents().should('match', 'blockquote')
  //   })

  //   it('.parentsUntil() - get parent DOM elements from DOM elements until el', function () {
  //     // https://on.cypress.io/parentsuntil
  //     cy.get('.clothes-nav').find('.active').parentsUntil('.clothes-nav')
  //       .should('have.length', 2)
  //   })

  //   it('.prev() - get previous sibling DOM element', function () {
  //     // https://on.cypress.io/prev
  //     cy.get('.birds').find('.active').prev().should('contain', 'Lorikeets')
  //   })

  //   it('.prevAll() - get all previous sibling DOM elements', function () {
  //     // https://on.cypress.io/prevAll
  //     cy.get('.fruits-list').find('.third').prevAll().should('have.length', 2)
  //   })

  //   it('.prevUntil() - get all previous sibling DOM elements until el', function () {
  //     // https://on.cypress.io/prevUntil
  //     cy.get('.foods-list').find('#nuts').prevUntil('#veggies')
  //   })

  //   it('.siblings() - get all sibling DOM elements', function () {
  //     // https://on.cypress.io/siblings
  //     cy.get('.traversal-pills .active').siblings().should('have.length', 2)
  //   })
  // })

})