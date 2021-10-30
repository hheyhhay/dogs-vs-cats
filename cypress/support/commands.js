Cypress.Commands.add('interceptAPI', (fixture, url) => {
  cy.intercept(`${url}`, {
    fixture: `${fixture}_test_data.json`
  })
})
