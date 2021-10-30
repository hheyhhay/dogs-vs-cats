describe('Error Handling', () => {
  beforeEach(() => {
    cy.visit("localhost:3000")
    // cy.intercept('GET',
    //     'https://api.thecatapi.com/v1/images/search',
    //     {
    //       statusCode: 400,
    //       body: {
    //         message: '500 error - Can\'t access pictures right now'}
    //     })

        cy.intercept('https://api.thecatapi.com/v1/images/search', { hostname: 'localhost'}, (req) => {
          req.body = {
            message: '500 error - Can\'t access pictures right now'
          }
        })
        cy.visit("localhost:3000")

  })

  it('Should be redirected to error page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.intercept('GET',
        'https://api.thecatapi.com/v1/images/search',
        {
          statusCode: 400,
          body: {
            message: '500 error - Can\'t access pictures right now'
          }
        })
    cy.intercept('https://api.thecatapi.com/v1/images/search', { hostname: 'localhost'}, (req) => {
      req.body = {
        message: '500 error - Can\'t access pictures right now'
      }
    })

    cy.get('[type=radio]').first().check()
    cy.get('button').click()
  })

  // it('Should be able to choice a animal preference and start the game on a new page', () => {
  //
  //  cy.get('[type=radio]').first().check()
  //  cy.get('button').click()
  //
  //  cy.url().should('eq', 'http://localhost:3000/game')
  // })
  // it('Should load an error if cannot access server', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.intercept('GET',
  //     'https://api.thecatapi.com/v1/images/search',
  //     {
  //       statusCode: 500,
  //       body: {
  //         message: '500 error - Can\'t access pictures right now'}
  //     })
  //      cy.visit('http://localhost:3000')
  // })

})
