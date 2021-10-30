describe('Application flow for game', () => {

  it('Should be able to start the game and be routed to new page', () => {
    cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
    cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
    cy.visit("localhost:3000")

    cy.get('[type=radio]').first().check()
    cy.get('button').click()
    cy.url().should('include', "game")

  })
  it('Should prompt the player to choose between two images of which is cuter', () => {

    cy.get('img').should(($image) => {
      expect($image).to.have.length(2)

      const classes = $image.map((i, el) => {
        return Cypress.$(el).attr('class')
      })

      expect(classes.get()).to.deep.eq([
        'cat-image',
        'dog-image'
      ])
    })
  })

  it('Should have 7 rounds of images and will show results', () => {

      cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
      cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
      cy.get('.cat-image').click()

      cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
      cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
      cy.get('.cat-image').click()

      cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
      cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
      cy.get('.cat-image').click()

      cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
      cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
      cy.get('.cat-image').click()

      cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
      cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
      cy.get('.dog-image').click()

      cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
      cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
      cy.get('.dog-image').click()

      cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
      cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
      cy.get('.dog-image').click()

      cy.url().should('include', "results")

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

    it('Should be able to click the favorites button', () => {
      cy.get('.favorite-button')
        .click()

      cy.url().should('eq', 'http://localhost:3000/favorites')
    })

    it('Should be able to go restart quiz from results page', () => {
      cy.get('[href="/"] > .result-button')
        .click()

      cy.url().should('eq', 'http://localhost:3000/')

    })

})
