 describe('Application flow on main page', () => {
   beforeEach(() => {
     cy.visit("http://whodoyoulove.surge.sh")
     cy.interceptAPI("cat", 'https://api.thecatapi.com/v1/images/search')
     cy.interceptAPI("dog", 'https://dog.ceo/api/breeds/image/random')
     cy.visit("http://whodoyoulove.surge.sh")
   })

   it('Should go to main page on page load', () => {
     cy.url().should('eq', 'http://whodoyoulove.surge.sh/')
   })
   it('Should be able to choice a animal preference and start the game on a new page', () => {

    cy.get('[type=radio]').first().check()
    cy.get('button').click()

    cy.url().should('eq', 'http://whodoyoulove.surge.sh/game')
   })
 })
