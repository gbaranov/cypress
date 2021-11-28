class BasePage {
	static loadHomePage() {
		cy.visit('http://devexpress.github.io/testcafe/example/')
	}

	static wait(number) {
		cy.wait(number)
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView()
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView()
	}
}

describe('Abstraction with classes', () => {

	before(function() {
		HomePage.loadHomePage()
	})

	beforeEach(function() {
		cy.clearCookies()
	})

	it('Write into JSON', () => {
		HomePage.scrollToBottom()
		HomePage.wait(2000)
		HomePage.scrollToTop()
		HomePage.wait(2000)
	})

	after(function() {
		cy.clearCookies()
	})


})

