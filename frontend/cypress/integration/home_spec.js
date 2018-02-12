describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/')
  })

  it('.should() - assert that <title> is correct', function () {
    cy.visit('/')
    cy.title().should('include', '650Stories')
  })

  context('Querying', function () {
    beforeEach(function () {
      // Visiting our app before each test removes any state build up from
      // previous tests. Visiting acts as if we closed a tab and opened a fresh one
      cy.visit('/')
    })

    it('cy.get() - query DOM elements', function () {
      cy.get('.page-title').should('contain', '650 Stories')
    })

    it('cy.get() - query DOM elements', function () {
      cy.get('.interview-title').should('contain', "Micah's new title 123")
    })
  })
})