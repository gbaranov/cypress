describe('Browser actions', () => {
		it('Should load books website', () => {
			cy.visit('http://books.toscrape.com/index.html')
			cy.url().should('include', 'index.html')
			cy.log('Before Reload')
			cy.reload()
			cy.log('After reload')
		})

		it('Click on Travel category', () => {
			cy.get('a').contains('Travel').click()
			cy.get('h1').contains('Travel')
		})

		it('Should display correct number of books', () => {
			cy.get('.product_pod').its('length').should('equal', 11)
		})

		it('Should click Poetry category', () => {
			cy.get('a').contains('Poetry').click()
		})

		it('Should click on Olio book detail', () => {
			cy.get('a').contains('Olio').click()
		})

		it('Verify the 23.88 price value', () => {
			cy.get('.price_color').contains('23.88')
		})


})