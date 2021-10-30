Cypress.Commands.add('interceptAPI', (fixtureDog, urlDog, fixtureCat, urlCat) => {
  cy.intercept(`${urlDog}`, {
    fixture: `${fixtureDog}_test_data.json`
  })
  cy.intercept(`${urlCat}`, {
    fixture: `${fixtureCat}_test_data.json  `
  })
})
