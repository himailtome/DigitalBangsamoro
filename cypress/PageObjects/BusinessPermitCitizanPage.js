

class BusinessPermitCitizen {

    // Citizen Login

    txtUserName = "div.block > :nth-child(1) > .relative > .block"
    txtPassword = "input[placeholder='i.e. password#123']"
    btnLogin = "button[type='submit']"



    // Search Service

    //txtSearch = "input[placeholder='Search for Services']"
    txtSearch = "input[placeholder='Search for Services']"
    btnSearchResult = "li[class='flex flex-row items-center gap-3'] a"
    lblSO = "div[class='service_overview_block rounded-xl'] div span"
    lblSN = 'h4'

    //Service Overview

    btnApplyNow = "a[class='apply_btn ml-auto sm:-mt-[45px]']"
    ApplyNowBtn = ".apply_btn"
    lblUD = ".px-3 > span"

    // //Service Selection

    btnNew = ".text-gray-900 > :nth-child(1)"
    btnRenewal = ".isolate > :nth-child(2) > :nth-child(1)"
    btnRetirement = ".isolate > :nth-child(3) > :nth-child(1)"
    btnAmendment = ".rounded-r-lg > :nth-child(1)"

    // Office Selection Window

    //btnNextOffice = "button[class='inline-flex w-full justify-center rounded-md border border-transparent bg-[#009966] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 sm:col-start-2 sm:text-sm']"
    btnNextOffice = ".mt-1 > :nth-child(2) > :nth-child(2) > div"


    // Click Select Office Button after Office Selection
    btnNextOfficeBtn = ".flex-row > .inline-flex"


    // Upload Document
  
    btnUploadFile1 = ":nth-child(1) > .flex-row > .fa"
    btnUploadFile2 = ":nth-child(2) > .flex-row > .fa"
    btnUploadFile3 = ":nth-child(3) > .flex-row > .fa"
    btnUploadFile4 = ":nth-child(4) > .flex-row > .fa"
    btnUploadFile5 = ":nth-child(5) > .flex-row > .fa"

    btnSelectFile1 = ":nth-child(1) > .text-center > .gap-2 > .flex > .fa"
    btnSelectFile2 = ":nth-child(2) > .text-center > .gap-2 > .flex > .fa"
    btnSelectFile3 = ":nth-child(3) > .text-center > .gap-2 > .flex > .fa"
    btnSelectFile4 = ":nth-child(4) > .text-center > .gap-2 > .flex > .fa"
    btnSelectFile5 = ":nth-child(5) > .text-center > .gap-2 > .flex > .fa"

    btnNextAF = "div[role='button']"
    lblAP = ".px-3 > span"


    // Application Form
    datePointer = ".dp__pointer"
    //SelectDate = "[data-test="select-button"]"
    ddPaymentMode = ":nth-child(3) > .block > .select_box_block > .input_box > select"
    //ddChooseDate = "[data-test="Sun Dec 15 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"] > .dp__cell_inner"
    ddOwnership = ":nth-child(2) > .block > .select_box_block > .input_box > select"
    txtTIN = ":nth-child(5) > .block > .number_input_block > .input_box > input"
    txtLastName = ":nth-child(11) > .block > .text_input_block > .flex > .relative > input"
    txtFirstName = ":nth-child(12) > .block > .text_input_block > .flex > .relative > input"

    txtMidleName = ":nth-child(4) > .grid-cols-12 > :nth-child(11) > .block > .text_input_block > .input_box > input"
    //txtBusinessAddress1 = ":nth-child(1) > :nth-child(2) > .text_input_block > .input_box > input"
    txtBusinessAddress1 = ":nth-child(1) > :nth-child(2) > .text_input_block > .flex > .relative > input"
    txtBusinessAddress2 = "input[placeholder='House/Unit No./Building No./Building Name']"
    //txtOwnerAddress = ":nth-child(2) > :nth-child(2) > .text_input_block > .input_box > input"

    txtOwnerAddress = ":nth-child(2) > :nth-child(2) > .text_input_block > .flex > .relative > input"

    txtNewBusinessAddress = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    txtOldBusinessAddress = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"

    txtNewBusinessName = "input[placeholder='New Business ID No.']"
    txtOldBusinessName = "input[placeholder='Old Business Name']"

    txtNewBusinessID = "input[placeholder='Please Enter New Business ID No.']"
    txtOldBusinessID = "input[placeholder='Please Enter Old Business ID No.']"

    radioMainOffice = "input[value='1']"
    txtBusinessName = "input[placeholder='Business Name']"
    txtBusinessID = "input[placeholder='Please Enter Business ID No.']"
    btnNextStep = "div[class='inline px-4 ml-auto py-2 next_btn']"




    btnNextAR = ".inline.px-4.ml-4.my-6.py-2.next_btn"
    lblAR = ".px-3 > span"

    // Application Review

    btnSubmit = ".next_btn"
    lblSuccess = "#headlessui-dialog-title-44"



    setUserName(username) {
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }

    clickLogin() {
        cy.get(this.btnLogin).click()
    }

    verifyLogin() {
        cy.get(this.lblSO).should("have.text", "Request Process Guide")
    }

    setSearch(service) {
        cy.get(this.txtSearch).type(service)
    }

    clickSearchResult() {
        cy.get(this.btnSearchResult).click()
    }

    verfiySearch() {
        cy.get(this.lblSO).should("have.text", "Request Process Guide")
    }


    clickApplyNowBtn() {
        cy.get(this.ApplyNowBtn).click();
    }

    clickNew() {
        cy.get(this.btnNew).click()
    }

    clickRenewal() {
        cy.get(this.btnRenewal).click()
    }

    clickRetirement() {
        cy.get(this.btnRetirement).click()
    }

    clickAmendment() {
        cy.get(this.btnAmendment).click()
    }

    clickApplyNow() {
        cy.get(this.btnApplyNow).click()
    }

    verifyApplyNow() {
        cy.get(this.lblUD).should("have.text", "Documents Upload")
    }

    clickOfficeSelectionNext() {
        cy.get(this.btnNextOffice).click()
    }

    clickOfficeSelectionNextBtn() {
        cy.get(this.btnNextOfficeBtn).click()
    }

    clickUploadFile1() {
        cy.get(this.btnUploadFile1).click({ multiple: true })
    }

    clickSelectFile1() {
        cy.get(this.btnSelectFile1).click({ multiple: true })
    }

    clickUploadFile2() {
        cy.get(this.btnUploadFile2).click({ multiple: true })
    }

    clickSelectFile2() {
        cy.get(this.btnSelectFile2).click({ multiple: true })
    }

    clickUploadFile3() {
        cy.get(this.btnUploadFile3).click()
    }

    clickSelectFile3() {
        cy.get(this.btnSelectFile3).click()
    }

    clickUploadFile4() {
        cy.get(this.btnUploadFile4).click()
    }

    clickSelectFile4() {
        cy.get(this.btnSelectFile4).click()
    }

    clickUploadFile5() {
        cy.get(this.btnUploadFile5).click()
    }

    clickSelectFile5() {
        cy.get(this.btnSelectFile5).click()
    }

    clickNextAF() {
        cy.get(this.btnNextAF).click()
    }

    clickNextStep() {
        cy.get(this.btnNextStep).click()
    }

    verifyApplicationForm() {
        cy.get(this.lblAP).should("text.have", "Request Information")
    }


    // Application form

    clickDatePointer() {
        cy.get(this.datePointer).click();
    }

    ClickSelectDate() {
        cy.get(this.SelectDate).click();
    }

    setPaymentMode(paymentmode) {
        cy.get(this.ddPaymentMode).select(paymentmode)
    }


    // setDate(chooseDate) {
    //     cy.get(this.ddChooseDate).select(chooseDate)
    // }


    setOwnership(ownership) {
        cy.get(this.ddOwnership).select(ownership)
    }

    setTIN(TIN) {
        cy.get(this.txtTIN).type(TIN)
    }

    setLastName(LastName)  {

        cy.get(this.txtLastName).type(LastName)
    }
    
    setFirstName(FirstName) {
        cy.get(this.txtFirstName).type(FirstName)
    }
    
    clickMainOffice() {
        cy.get(this.radioMainOffice).click()
    }

    setMidleName(midlename) {
        cy.get(this.txtMidleName).type(midlename)
    }

    setBusinessAddress1(businessaddress) {
        cy.get(this.txtBusinessAddress1).type(businessaddress)
    }

    setBusinessAddress(businessaddress) {
        cy.get(this.txtBusinessAddress2).type(businessaddress)
    }

    setOwnerAddress(OwnerAddress) {
        cy.get(this.txtOwnerAddress).type(OwnerAddress)
    }

    setNewBusinessAddress(NewBusinessAddress) {
        cy.get(this.txtNewBusinessAddress).type(NewBusinessAddress)
    }

    setOldBusinessAddress(OldBusinessAddress) {
        cy.get(this.txtOldBusinessAddress).type(OldBusinessAddress)
    }



    setBusinessName(BusinessName) {
        cy.get(this.txtBusinessName).type(BusinessName)
    }

    setBusinessID(BusinessID) {
        cy.get(this.txtBusinessID).type(BusinessID)
    }

    setNewBusinessName(NewBusinessName) {
        cy.get(this.txtNewBusinessName).type(NewBusinessName)
    }

    setOldBusinessName(OldBusinessName) {
        cy.get(this.txtOldBusinessName).type(OldBusinessName)
    }
    setNewBusinessID() {
        cy.get(this.txtNewBusinessID).type(NewBusinessID)

    }

    setOldBusinessID(OldBusinessID) {
        cy.get(this.txtOldBusinessID).type(OldBusinessID)

    }



    clickNextAR() {
        cy.get(this.btnNextAR).click()
    }

    verifyApplicationReview() {
        cy.get(this.lblAR).should("have.text", "Application Review")
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click()
    }

    verifySubmit() {
        cy.get(this.lblSuccess).should("have.text", "Congratulations")
    }

}

export default BusinessPermitCitizen;

