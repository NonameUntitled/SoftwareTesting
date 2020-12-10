/// <reference types="cypress" />

context('Anime quiz e2e test', () => {

    it('Typing wrong answer', () => {
        cy.visit('http://localhost:8080/animePage')
        cy.get('#input_field')
            .type('An incorrect answer').should('have.value', 'An incorrect answer')

        cy.get('#incorrect_answer').should('be.visible')
    })

    it('Typing no answer', () => {
        cy.visit('http://localhost:8080/animePage')
        cy.get('#input_field')
            .type('An incorrect answer').should('have.value', 'An incorrect answer')

        cy.get('#incorrect_answer').should('be.visible')
    })

})
