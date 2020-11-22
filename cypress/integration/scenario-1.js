/// <reference types="Cypress" />

describe('Hidden-Visible-UseOfParentElements', () => {
	beforeEach('Navigate to the Site', () => {
		cy.visit('http://automationpractice.com/');
	});

	/* Demonstrate the use of click function when the button is visible and hidden
	   Use of command to assert the correct category is displayed */
	it('Test-Case-1', () => {
		cy.get('.sf-with-ul').contains('Women').click();
		cy.assertCategory('Women');
		cy.get('.sf-with-ul').contains('Dresses').click({ force: true }); // use force: true click hidden element
		cy.assertCategory('Dresses');
		cy.get('[id=block_top_menu]').contains('T-shirts').click({ force: true });
		cy.assertCategory('T-shirts');
	});

	// Demonstrate use parent element to find child elements, when child elements attributes are not unique
	it('Test-2', () => {
		cy.get('[id=block_top_menu]').contains('Women').click(); // use '[id=block_top_menu]' parent element and click on child elements containing a specific text
		cy.assertCategory('Women');
		cy.get('[id=block_top_menu]').contains('Dresses').click({ force: true });
		cy.assertCategory('Dresses');
		cy.get('[id=block_top_menu]').contains('T-shirts').click({ force: true });
		cy.assertCategory('T-shirts');
	});
});
