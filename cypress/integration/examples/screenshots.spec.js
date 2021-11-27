describe('Screenshots', () => {
	it('Full page screenshot', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/')
		cy.screenshot({capture: 'fullPage'})
	})

	it('Single element screenshot', () => {
		cy.get('header').screenshot()
	})

})

