/// <reference types="cypress" />

context('Top bar e2e tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Visit about tab', () => {
        cy.get('a').contains('About').click()
        cy.get('.credentials').should('be.visible')
    })

    it('Visit anime tab', () => {
        cy.get('a').contains('Anime Page').click()
        cy.get('.quiz').should('be.visible')
    })

    it('Tabs walkthrough', () => {
        cy.get('a').contains('Anime Page').click()
        cy.get('a').contains('Back to home').click()
        cy.get('a').contains('About').click()
        cy.get('a').contains('Back to home').click()
        cy.get('.message').should('be.visible')
    })
})
