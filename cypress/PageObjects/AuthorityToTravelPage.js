

class AuthorityToTravel
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

    btnNextAF = ".inline.ml-auto.px-4.my-6.py-2.next_btn"
    lblAP = ".px-3 > span"

    // Application Form

    ddPurposeOfTravel = "select[name='purpose_of_travel']"
    txtNameOfApplicant = "div[class='block col-span-12 relative grid_col_block'] div:nth-child(2) div:nth-child(1) div:nth-child(2) input:nth-child(1)"
    txtNameOfOffice = ":nth-child(3) > .text_input_block > .input_box > input"
    txtDesignation = ":nth-child(4) > .text_input_block > .input_box > input"
    txtDestination = ":nth-child(5) > .text_input_block > .input_box > input"
    txtReason = "textarea[rows='3']"


    btnNextAR = ".inline.px-4.ml-4.my-6.py-2.next_btn"
    lblAR = ".px-3 > span"

    // Application Review

    btnSubmit = ".next_btn"
    lblSuccess = ".flex-col > .block"


// Citizen Login

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

    setPurposeOfTravel(purpose)
    {
        cy.get(this.ddPurposeOfTravel).select(purpose)
    }

    setNameOfApplicant(applicant)
    {
        cy.get(this.txtNameOfApplicant).type(applicant)
    }

    setNameOfOffice(office)
    {
        cy.get(this.txtNameOfOffice).type(office)
    }

    setDesignation(designation)
    {
        cy.get(this.txtDesignation).type(designation)
    }
    
    setDestination(destination)
    {
        cy.get(this.txtDestination).type(destination)
    }

    setReason(reason)
    {
        cy.get(this.txtReason).type(reason)
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

export default AuthorityToTravel;


