/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/componentes.html')
  cy.reload
})

describe('Work with basic elements', () => {
  it('Text', () => {
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })

  it('Link', () => {
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })

  it('Text field fill name', () => {
    cy.get('#formNome').type('Cypress test')
    cy.get('#formNome').should('have.value', 'Cypress test')
  })

  it('Text area fill sugestions', () => {
    cy.get('#elementosForm\\:sugestoes')
      .type('Text area')
      .should('have.value', 'Text area')
  })

  it('Text field fill input', () => {
    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
      .type('Input field')
      .should('have.value', 'Input field')
  })

  it('Sending keyboard commands', () => {
    cy.get('#formNome')
      .type('Name cypressss{backspace}{backspace}')
      .should('have.value', 'Name cypress')
  })

  it('Clear text area', () => {
    cy.get('#elementosForm\\:sugestoes')
      .type('Text area')
      .clear()
      .type('New text area')
      .should('have.value', 'New text area')
  })

  it('Radio button', () => {
    cy.get('#formSexoFem')
      .click()
      .should('be.checked')

    cy.get('#formSexoMasc')
      .should('not.be.checked')

    cy.get('[name=formSexo]')
      .should('have.length', 2)
  })

  it('Checkbox', () => {
    cy.get('#formComidaPizza')
      .click()
      .should('be.checked')

    cy.get('[name=formComidaFavorita]')
      .click({ multiple: true })

    cy.get('#formComidaPizza')
      .should('not.be.checked')

    cy.get('#formComidaFrango')
      .should('be.checked')
  })

  it('Combobox', () => {
    cy.get('[data-test="dataEscolaridade"]')
      .select('Mestrado')
      .should('have.value', 'mestrado')
  })

  it.only('Combobox multiple option', () => {
    cy.get('[data-testid="dataEsportes"]')
      .select(['natacao', 'Corrida'])
  })
})