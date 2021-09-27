 describe('Application flow on main page', () => {
   beforeEach(() => {
     // cy.visit("localhost:3000")
   })

   it('Should be able to choice a animal preference and start the game on a new page', () => {
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
     cy.get('.cat-image').click()
     cy.get('.cat-image').click()
     cy.get('.cat-image').click()
     cy.get('.cat-image').click()
     cy.get('.dog-image').click()
     cy.get('.dog-image').click()
     cy.get('.dog-image').click()

     cy.url().should('include', "results")

     cy.get('.result-statement').should('have.text',`Opps! You are achually not a dog person, but a cat person`)

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

   it('Should be able to show a collection of favorites', () => {
     cy.get('.favorite-button').click()

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

   it('Should be able to return back to results', () => {
     cy.get('.return-results').click()

     cy.url().should('include', "results")

     cy.get('.result-statement').should('have.text',`Opps! You are achually not a dog person, but a cat person`)

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

   it('Should be able to restart the game', () => {
     cy.get('.restart').click()
      cy.url().should('include', "/")
   })
 })
