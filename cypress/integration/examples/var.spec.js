describe('$ Function', ()=> {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('Expose jQuery element', () => {
		const signInButton = Cypress.$('#signin_button')
		signInButton.click()
	})
})