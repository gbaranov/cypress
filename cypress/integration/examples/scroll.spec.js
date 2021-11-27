describe('Page scroll', () => {
	it('Should scroll down and up', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/')
		cy.wait(2000)
		cy.get('#submit-button').scrollIntoView()
		cy.wait(2000)
		cy.get('header').scrollIntoView()
	})
})

