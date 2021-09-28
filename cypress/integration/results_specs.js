describe('Application for results spec', () => {
  it('Should be able to get results after 7 rounds', () => {
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

    cy.url().should('include', "results")
  })

  it('Should be able to tell you if you were right on guessing if you are a cat or dog person', () => {
    cy.get('.result-statement').should('have.text', 'You are not a dog person, but a cat person')

    cy.get('img').should(($image) => {
      expect($image).to.have.length(4)

      const classes = $image.map((i, el) => {
        return Cypress.$(el).attr('class')
      })

      expect(classes.get()).to.deep.eq([
        'cat-image',
        'cat-image',
        'cat-image',
        'cat-image'
        ])
      })
    })

    it('Should be able to see favorites', () => {
      cy.get('.favorite-button').click()
      cy.url().should('include', 'favorites')
    })

    it('Should be able to take test again', () => {
      cy.visit("localhost:3000/results")
      cy.get('.restart').click()
      cy.url().should('include', "/")
    })

})
