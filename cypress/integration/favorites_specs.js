describe('Application flow for Favorites page', () => {
  it('Should be able to show all the favorite photos', () => {
    cy.visit("localhost:3000")
    cy.get('[type=radio]').first().check()
    cy.get('button').click()

    cy.get('.cat-image').click()
    cy.get('.cat-image').click()
    cy.get('.cat-image').click()
    cy.get('.cat-image').click()
    cy.get('.dog-image').click()
    cy.get('.dog-image').click()
    cy.get('.dog-image').click()

    cy.get('.favorite-button').click()
    cy.url().should('include', 'favorites')
  })

  it('Should be able to show a collection of favorites', () => {

    cy.get('img').should(($image) => {
      expect($image).to.have.length(7)

      const classes = $image.map((i, el) => {
        return Cypress.$(el).attr('class')
      })

      expect(classes.get()).to.deep.eq([
        'cat-image',
        'cat-image',
        'cat-image',
        'cat-image',
        'dog-image',
        'dog-image',
        'dog-image'
        ])
      })
    })

    it('Should be able to return to results page', () => {
      cy.get('.return-results').click()
      cy.url().should('include', "results")
    })

    it('Should be able to take test again', () => {
      cy.visit("localhost:3000/favorites");
      cy.get('.restart').click()
      cy.url().should('include', "/")
    })
})
