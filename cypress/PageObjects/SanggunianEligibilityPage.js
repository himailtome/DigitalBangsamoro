

class SanggunianEligibility
{
    
    // Citizen Login

    txtUserName = "input[type='text']"
    txtPassword = "input[type='password']"
    btnLogin = "div[role='button'] span"
   
    

    // Search Service

    txtSearch = "input[placeholder='Search for Services']"
    btnSearchResult = "li[class='flex flex-row items-center gap-3']"
    lblSO = ".service_overview_block > :nth-child(1) > .flex > span"
    lblSN = 'h4'
    
    //Service Overview

    btnApplyNow = ".apply_btn.ml-auto"
    lblUD = ".px-3 > span"


    // Upload Document

    btnUploadFile1 = ":nth-child(1) > .flex-row > .hidden"
    btnUploadFile2 = ":nth-child(2) > .flex-row > .hidden"
    btnUploadFile3 = ":nth-child(3) > .flex-row > .hidden"
    btnUploadFile4 =  ":nth-child(4) > .flex-row > .hidden"

    btnSelectFile1 =":nth-child(3) > .text-center > .gap-2 > .flex > .text_overflow"
    btnSelectFile3 = ":nth-child(4) > .text-center > .gap-2 > .flex > .text_overflow"
    btnSelectFile7 = ":nth-child(1) > .text-center > .gap-2 > .flex > .text_overflow"

    btnNextAF = ".inline.ml-auto.px-4.my-6.py-2.next_btn"
    lblAP = ".px-3 > span"

    // Application Form

    ddPurpose = ""
    txtNameOfClient = ""
    txtNameOfOrganization = ""
    txtID = ""
    txtContactDetails = ""
    btnSignature = "div[class='browse_area'] p"


    btnNextAR = ".inline.px-4.ml-4.my-6.py-2.next_btn"
    lblAR = ".px-3 > span"

    // Application Review

    btnSubmit = ".next_btn"
    lblSuccess = ".flex-col > .block"




    setUserName(username)
    {
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }

    clickLogin()
    {
        cy.get(this.btnLogin).click()
    }

    verifyLogin()
    {
        cy.get(this.lblSO).should("have.text", "Request Process Guide")
    }

    setSearch(service)
    {
        cy.get(this.txtSearch).type(service)
    }
    
    clickSearchResult()
    {
        cy.get(this.btnSearchResult).click()
    }

    verfiySearch()
    {
        cy.get(this.lblSO).should("have.text", "Request Process Guide")
    }

    clickApplyNow()
    {
        cy.get(this.btnApplyNow).click()
    }

    verifyApplyNow()
    {
        cy.get(this.lblUD).should("have.text", "Documents Upload")
    }

    clickUploadFile1()
    {
        cy.get(this.btnUploadFile1).click()
    }

    clickSelectFile1()
    {
        cy.get(this.btnSelectFile1).click()
    }

    clickUploadFile2()
    {
        cy.get(this.btnUploadFile2).click()
    }

    clickSelectFile3()
    {
        cy.get(this.btnSelectFile3).click()
    }

    clickUploadFile3()
    {
        cy.get(this.btnUploadFile3).click()
    }

    clickSelectFile3()
    {
        cy.get(this.btnSelectFile3).click()
    }

    clickNextAF()
    {
        cy.get(this.btnNextAF).click()
    }

    verifyApplicationForm()
    {
        cy.get(this.lblAP).should("text.have", "Request Information")
    }

    setPurpose(purpose)
    {
        cy.get(this.ddPurpose).select(purpose)
    }

    setNameOfClient(client)
    {
        cy.get(this.txtNameOfClient).type(client)
    }

    setNameOfOrganization(organization)
    {
        cy.get(this.txtNameOfOrganization).type(organization)
    }

    setID(id)
    {
        cy.get(this.txtID).type(id)
    }
    
    setContactDetails(contact)
    {
        cy.get(this.txtContactDetails).type(contact)
    }

  uploadSignature()
  {
    cy.get(this.btnSignature).click()
  }

  clickSelectFile7()
  {
      cy.get(this.btnSelectFile7).click()
  }

    clickNextAR()
    {
        cy.get(this.btnNextAR).click()
    }

    verifyApplicationReview()
    {
        cy.get(this.lblAR).should("have.text", "Application Review")
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }

    verifySubmit()
    {
        cy.get(this.lblSuccess).should("have.text", "Congratulations")
    }
}

export default SanggunianEligibility;