 describe('Application flow on main page', () => {


   it('Should be able to choice a animal preference and start the game on a new page', () => {
    cy.visit("localhost:3000")
    cy.get('[type=radio]').first().check()
    cy.get('button').click()
    cy.url().should('include', "game")
   })
   it('Should load an error if cannot access server', () => {
     cy.visit('http://localhost:3000/')
     cy.intercept('GET',
       'https://api.thecatapi.com/v1/images/search',
       {
         statusCode: 500,
         body: {
           message: '500 error - Can\'t access pictures right now'}
       })
        cy.visit('http://localhost:3000')
   })

 })
