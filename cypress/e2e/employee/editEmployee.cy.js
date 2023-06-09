import baseEditEmployee from "../../support/PageObject/employee/baseEditEmployee.cy.js"
const editEmployeeData = require("../../fixtures/employee/dataEditEmployee.json")
import '../../support/commands.js'

describe('edit employee', () => {

  const BaseEditEmployee = new baseEditEmployee()
    it('success edit employee', () => {
    // login
      cy.login();

      cy.get(BaseEditEmployee.pimButton).click()
      cy.get(BaseEditEmployee.editKlik).click()
      cy.get(BaseEditEmployee.employeeIdInput).clear().type(BaseEditEmployee.generateRandomEmployeeId())
      cy.get(BaseEditEmployee.DlnInput).clear().type(editEmployeeData.driversLicenseNumber)
      cy.get(BaseEditEmployee.LedInput).clear().type(editEmployeeData.licenseExpiryDate).click()
      cy.get(BaseEditEmployee.SinnInput).clear().type(editEmployeeData.sinNumber)
      cy.get(BaseEditEmployee.nationalityKlik).click()
      cy.get(BaseEditEmployee.indonesiaSelect).click()
      cy.get(BaseEditEmployee.msKlik).click()
      cy.get(BaseEditEmployee.singleSelect).click()
      cy.get(BaseEditEmployee.dobKlik).clear().type(editEmployeeData.dateOfBirth).click({ force: true })
      cy.get(BaseEditEmployee.genderRadio).click({force: true})
      cy.get(BaseEditEmployee.saveButton1).click({force: true})
      cy.get(BaseEditEmployee.popupSuccess).should('contain.text', editEmployeeData.success)

      cy.get(BaseEditEmployee.btKlik).click()
      cy.get(BaseEditEmployee.oSelect).click()
      cy.get(BaseEditEmployee.saveButton2).click()
      cy.get(BaseEditEmployee.popupSuccess).should('contain.text', editEmployeeData.success)

      cy.get(BaseEditEmployee.showButtonAttacment).click()
      cy.get(BaseEditEmployee.selectFile).selectFile(editEmployeeData.file, {force: true})
      cy.get(BaseEditEmployee.commentInput).type(editEmployeeData.comment)
      cy.get(BaseEditEmployee.saveButton3).click()

    })

    it('empty first name edit employee', () => {
    // login
      cy.login();

      cy.get(BaseEditEmployee.pimButton).click()
      cy.get(BaseEditEmployee.editKlik).click()
      cy.get(BaseEditEmployee.firstNameInput).clear()
      cy.get(BaseEditEmployee.DlnInput).clear().type(editEmployeeData.driversLicenseNumber)
      cy.get(BaseEditEmployee.LedInput).clear().type(editEmployeeData.licenseExpiryDate).click()
      cy.get(BaseEditEmployee.SinnInput).clear().type(editEmployeeData.sinNumber)
      cy.get(BaseEditEmployee.nationalityKlik).click()
      cy.get(BaseEditEmployee.indonesiaSelect).click()
      cy.get(BaseEditEmployee.msKlik).click()
      cy.get(BaseEditEmployee.singleSelect).click()
      cy.get(BaseEditEmployee.dobKlik).clear().type(editEmployeeData.dateOfBirth).click({ force: true })
      cy.get(BaseEditEmployee.genderRadio).click({ force: true })
      cy.get(BaseEditEmployee.saveButton1).click({force: true})
      cy.get(BaseEditEmployee.requiredInfo).should('contain.text', editEmployeeData.required)

      cy.get(BaseEditEmployee.btKlik).click()
      cy.get(BaseEditEmployee.oSelect).click()
      cy.get(BaseEditEmployee.saveButton2).click()
        
      cy.get(BaseEditEmployee.showButtonAttacment).click()
      cy.get(BaseEditEmployee.selectFile).selectFile(editEmployeeData.file, {force: true})
      cy.get(BaseEditEmployee.commentInput).type(editEmployeeData.comment)
      cy.get(BaseEditEmployee.saveButton3).click()
    })

    it('empty last name edit employee', () => {
    // login
      cy.login();

      cy.get(BaseEditEmployee.pimButton).click()
      cy.get(BaseEditEmployee.editKlik).click()
      cy.get(BaseEditEmployee.lastnameInput).clear()
      cy.get(BaseEditEmployee.DlnInput).clear().type(editEmployeeData.driversLicenseNumber)
      cy.get(BaseEditEmployee.LedInput).clear().type(editEmployeeData.licenseExpiryDate).click()
      cy.get(BaseEditEmployee.SinnInput).clear().type(editEmployeeData.sinNumber)
      cy.get(BaseEditEmployee.nationalityKlik).click()
      cy.get(BaseEditEmployee.indonesiaSelect).click()
      cy.get(BaseEditEmployee.msKlik).click()
      cy.get(BaseEditEmployee.singleSelect).click()
      cy.get(BaseEditEmployee.dobKlik).clear().type(editEmployeeData.dateOfBirth).click({ force: true })
      cy.get(BaseEditEmployee.genderRadio).click({ force: true })
      cy.get(BaseEditEmployee.saveButton1).click({force: true})
      cy.get(BaseEditEmployee.lastNameRequired).should('contain.text', editEmployeeData.required)

      cy.get(BaseEditEmployee.btKlik).click()
      cy.get(BaseEditEmployee.oSelect).click()
      cy.get(BaseEditEmployee.saveButton2).click()

      cy.get(BaseEditEmployee.showButtonAttacment).click()
      cy.get(BaseEditEmployee.selectFile).selectFile(editEmployeeData.file, {force: true})
      cy.get(BaseEditEmployee.commentInput).type(editEmployeeData.comment)
      cy.get(BaseEditEmployee.saveButton3).click()
    })

    it('employee id more than 10 edit employee', () => {
    // login
      cy.login();

      cy.get(BaseEditEmployee.pimButton).click()
      cy.get(BaseEditEmployee.editKlik).click()
      cy.get(BaseEditEmployee.employeeIdInput).type(BaseEditEmployee.generateRandomEmployeeId2())
      cy.get(BaseEditEmployee.DlnInput).clear().type(editEmployeeData.driversLicenseNumber)
      cy.get(BaseEditEmployee.LedInput).clear().type(editEmployeeData.licenseExpiryDate).click()
      cy.get(BaseEditEmployee.SinnInput).clear().type(editEmployeeData.sinNumber)
      cy.get(BaseEditEmployee.nationalityKlik).click()
      cy.get(BaseEditEmployee.indonesiaSelect).click()
      cy.get(BaseEditEmployee.msKlik).click()
      cy.get(BaseEditEmployee.singleSelect).click()
      cy.get(BaseEditEmployee.dobKlik).clear().type(editEmployeeData.dateOfBirth).click({ force: true })
      cy.get(BaseEditEmployee.genderRadio).click({ force: true })
      cy.get(BaseEditEmployee.saveButton1).click({ force: true })
      cy.get(BaseEditEmployee.employeeIdMore).should('contain.text', editEmployeeData.moreCharacter)

      cy.get(BaseEditEmployee.btKlik).click()
      cy.get(BaseEditEmployee.oSelect).click()
      cy.get(BaseEditEmployee.saveButton2).click({ force: true})

      cy.get(BaseEditEmployee.showButtonAttacment).click({ force: true })
      cy.get(BaseEditEmployee.selectFile).selectFile(editEmployeeData.file, {force: true})
      cy.get(BaseEditEmployee.commentInput).type(editEmployeeData.comment)
      cy.get(BaseEditEmployee.saveButton3).click()
    })
    it('Drivers License Number more than 30 character edit employee', () => {
    // login
      cy.login();

      cy.get(BaseEditEmployee.pimButton).click()
      cy.get(BaseEditEmployee.editKlik).click()
      cy.get(BaseEditEmployee.DlnInput).clear().type(editEmployeeData.driversMore)
      cy.get(BaseEditEmployee.LedInput).clear().type(editEmployeeData.licenseExpiryDate).click()
      cy.get(BaseEditEmployee.SinnInput).clear().type(editEmployeeData.sinNumber)
      cy.get(BaseEditEmployee.nationalityKlik).click()
      cy.get(BaseEditEmployee.indonesiaSelect).click()
      cy.get(BaseEditEmployee.msKlik).click()
      cy.get(BaseEditEmployee.singleSelect).click()
      cy.get(BaseEditEmployee.dobKlik).clear().type(editEmployeeData.dateOfBirth).click({ force: true })
      cy.get(BaseEditEmployee.genderRadio).click({ force: true })
      cy.get(BaseEditEmployee.saveButton1).click({ force: true })
      cy.get(BaseEditEmployee.dlnMore).should('contain.text', editEmployeeData.moreThanCharacter)

      cy.get(BaseEditEmployee.btKlik).click()
      cy.get(BaseEditEmployee.oSelect).click()
      cy.get(BaseEditEmployee.saveButton2).click({ force: true })

      cy.get(BaseEditEmployee.showButtonAttacment).click({ force: true })
      cy.get(BaseEditEmployee.selectFile).selectFile(editEmployeeData.file, {force: true})
      cy.get(BaseEditEmployee.commentInput).type(editEmployeeData.comment)
      cy.get(BaseEditEmployee.saveButton3).click()
    })
    it('SIN Number more than 30 character edit employee', () => {
    // login
      cy.login();

      cy.get(BaseEditEmployee.pimButton).click()
      cy.get(BaseEditEmployee.editKlik).click()
      cy.get(BaseEditEmployee.DlnInput).clear().type(editEmployeeData.driversLicenseNumber)
      cy.get(BaseEditEmployee.LedInput).clear().type(editEmployeeData.licenseExpiryDate).click()
      cy.get(BaseEditEmployee.SinnInput).clear().type(editEmployeeData.sinMore)
      cy.get(BaseEditEmployee.nationalityKlik).click()
      cy.get(BaseEditEmployee.indonesiaSelect).click()
      cy.get(BaseEditEmployee.msKlik).click()
      cy.get(BaseEditEmployee.singleSelect).click()
      cy.get(BaseEditEmployee.dobKlik).clear().type(editEmployeeData.dateOfBirth).click({ force: true })
      cy.get(BaseEditEmployee.genderRadio).click({ force: true })
      cy.get(BaseEditEmployee.saveButton1).click({ force: true })
      cy.get(BaseEditEmployee.sinnMore).should('contain.text', editEmployeeData.moreThanCharacter)

      cy.get(BaseEditEmployee.btKlik).click()
      cy.get(BaseEditEmployee.oSelect).click()
      cy.get(BaseEditEmployee.saveButton2).click({ force: true })

      cy.get(BaseEditEmployee.showButtonAttacment).click({ force: true })
      cy.get(BaseEditEmployee.selectFile).selectFile(editEmployeeData.file, {force: true})
      cy.get(BaseEditEmployee.commentInput).type(editEmployeeData.comment)
      cy.get(BaseEditEmployee.saveButton3).click()
    })
  })
  
  