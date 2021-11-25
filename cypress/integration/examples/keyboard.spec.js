describe('Keyboard press simulation', () => {
	it('Search box submission by pressing Enter key', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#searchTerm').type('Some text {Enter}')
	})
})