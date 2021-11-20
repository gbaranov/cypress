describe('Browser actions', () => {
		it('Should load books website', () => {
				cy.visit('http://books.toscrape.com/index.html')
				cy.url().should('include', 'index.html')
		})

		it('Click on Travel category', () => {
			cy.get('a').contains('Travel').click()
			cy.get('h1').contains('Travel')
		})

		it('Should display correct number of books', () => {
			cy.get('.product_pod').its('length').should('equal', 11)
		})


})