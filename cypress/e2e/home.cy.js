/* eslint-disable no-undef */
describe('Inicial Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('Open Page', () => {
    cy.visit('http://localhost:3000')
  })

  it('The page render movies', () => {
    cy.get('[data-testid="movie-card"]').first().should('contain', 'Castle in the Sky')
  })

  it('Filter by title', () => {
    cy.get('[data-testid="input-seach-by-title"]').type('grave');
    cy.get('[data-testid="button-seach-by-title"]').click();
    cy.get('[data-testid="movie-card"]').first().should('contain', 'Grave of the Fireflies')
  })

  it('Remove filter', () => {
    cy.get('[data-testId="button-remove-filter"]').click();
    cy.get('[data-testid="button-seach-by-title"]').click();
    cy.get('[data-testid="movie-card"]').first().should('contain', 'Castle in the Sky');
  })

  it('Filter by rate - maior', () => {
    cy.get('[data-testid="comparation-filter"]').find('option:selected').should('have.value', 'maior');
    cy.get('[data-testid="rate-input"]').type('99');
    cy.get('[data-testid="search-rate-button"]').click();
    cy.get('[data-testid="movie-card"]').first().should('contain', 'Only Yesterday');
  })

  it('Filter by rate - menor', () => {
    cy.get('[data-testid="comparation-filter"]').select('menor')
    cy.get('[data-testid="comparation-filter"]').find('option:selected').should('have.value', 'menor');
    cy.get('[data-testid="rate-input"]').type('50');
    cy.get('[data-testid="search-rate-button"]').click();
    cy.get('[data-testid="movie-card"]').first().should('contain', 'Tales from Earthsea');
  })

  it('Filter by rate - igual', () => {
    cy.get('[data-testid="comparation-filter"]').select('igual')
    cy.get('[data-testid="comparation-filter"]').find('option:selected').should('have.value', 'igual');
    cy.get('[data-testid="rate-input"]').type('30');
    cy.get('[data-testid="search-rate-button"]').click();
    cy.get('[data-testid="movie-card"]').first().should('contain', 'Earwig and the Witch');
  })
})