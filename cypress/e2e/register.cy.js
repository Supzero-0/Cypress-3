describe('register', () => {
  beforeEach('connexion', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.url().should('include', '/register')
    cy.clearCookies()
    cy.contains('C\'est OK pour moi').click()
  })

  it('passes', () => {
    cy.get('#firstName').click()
    cy.wait(2000)
    cy.get('#firstName').type("Mathieu")
    cy.get('#lastName').type("Lecanu")
    cy.get('#signup-email').type("mat.lecanu@free.fr")
    cy.get('#signup-password').type("Abcdefg123456")
    cy.contains('Enchantés !').click()
  })
  it('fail', () => {
    cy.get('#firstName').type('Mathieu')
    cy.get('#lastName').type('Lecanu')
    cy.get('#signup-email').type('mat.lecanu@free.fr')
    cy.contains('Enchantés !').click()
    cy.contains('Le champ mot de passe est obligatoire')
  })
})

describe('connexion', () => {
  beforeEach('connexion', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.url().should('include', '/register')
    cy.clearCookies()
    cy.contains('C\'est OK pour moi').click()
  })

  it('passes', () => {
    cy.get('#signin-email').type('mat.lecanu@free.fr')
    cy.get('#signin-password').type('5&3@hNTfX?5i@Fsr')
    cy.contains('Welcome Back!').click()
  })
  it('fail', () => {
    cy.get('#signin-email').type('mat.lecanu@free.fr')
    cy.get('#signin-password').type('WrongPassword')
    cy.contains('Welcome Back!').click()
    cy.contains('Saisissez un e-mail et un mot de passe valides.')
  })
})