describe('Xpaths', ()=> {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('Should use Xpath', () => {
		cy.xpath('//button[@id="signin_button"]').should('be.visible')
	})
})