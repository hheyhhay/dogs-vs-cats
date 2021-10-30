describe('Application for results spec', () => {
  
  it('Should be able to get results after 7 rounds', () => {
    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random', "cat", 'https://api.thecatapi.com/v1/images/search')

    cy.visit("http://whodoyoulove.surge.sh/")

    cy.get('[type=radio]')
      .first()
      .check()

    cy.get('button').click()

    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random', "cat", 'https://api.thecatapi.com/v1/images/search')

    cy.get('.cat-image')
      .click()

    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random', "cat", 'https://api.thecatapi.com/v1/images/search')

    cy.get('.cat-image')
      .click()

    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random', "cat", 'https://api.thecatapi.com/v1/images/search')

    cy.get('.cat-image')
      .click()

    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random', "cat", 'https://api.thecatapi.com/v1/images/search')

    cy.get('.cat-image')
      .click()

    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random', "cat", 'https://api.thecatapi.com/v1/images/search')

    cy.get('.dog-image')
      .click()

    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random', "cat", 'https://api.thecatapi.com/v1/images/search')

    cy.get('.dog-image')
      .click()

    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random', "cat", 'https://api.thecatapi.com/v1/images/search')

    cy.get('.dog-image')
      .click()

    cy.url()
      .should('eq', 'http://whodoyoulove.surge.sh/results')
  })

  it('Should be able to tell you if you were right on guessing if you are a cat or dog person', () => {
    cy.get('.result-statement')
      .should('have.text', 'You are not a dog person, but a cat person')

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
      cy.get('.favorite-button')
        .click()

      cy.url()
        .should('eq', 'http://whodoyoulove.surge.sh/favorites')
    })

    it('Should be able to take test again', () => {
      cy.visit("http://whodoyoulove.surge.sh/results")

      cy.get('.restart')
        .click()

      cy.url()
        .should('eq', 'http://whodoyoulove.surge.sh/')
    })

})
