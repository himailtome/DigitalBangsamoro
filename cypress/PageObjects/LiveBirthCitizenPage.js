
import 'cypress-file-upload';

class LiveBirthCitizen
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
    
            // Office Selection Window

            ddOfficeSelection = ".border.rounded-2xl.outline-lime-800.py-1.px-3"
            btnNextOffice = ".inline.px-4.ml-4.my-6.py-2.next_btn"
        
        
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

            txtChildFirstName = ":nth-child(2) > .grid > :nth-child(1) > .block > .text_input_block > .input_box > input"
            txtChildMidledName = ":nth-child(2) > .grid > :nth-child(2) > .block > .text_input_block > .input_box > input"
            txtChildLastName = ":nth-child(2) > .grid > :nth-child(3) > .block > .text_input_block > .input_box > input"
            ddChildSex = ":nth-child(3) > .grid > :nth-child(1) > .block > .select_box_block > .input_box > select"
            txtHospital = ":nth-child(4) > .grid-cols-12 > .col-span-4 > .block > .text_input_block > .input_box > input"
            ddProvince =  ":nth-child(4) > .grid-cols-12 > .col-span-8 > .block > .select_box_block > .grid > :nth-child(1) > .input_box > select"
            ddMunicipality = ":nth-child(4) > .grid-cols-12 > .col-span-8 > .block > .select_box_block > .grid > .municipality_dropdown > .input_box > select"
            ddBarangay  = ":nth-child(4) > .grid-cols-12 > .col-span-8 > .block > .select_box_block > .grid > :nth-child(3) > .input_box > select"
            txtBirthType = ":nth-child(5) > .grid > :nth-child(1) > .block > .text_input_block > .input_box > input"
            txtTotalChild = ":nth-child(5) > .grid > :nth-child(2) > .block > .number_input_block > .input_box > input"
            txtBirthOrder = ":nth-child(5) > .grid > :nth-child(3) > .block > .number_input_block > .input_box > input"
            txtWeight = ":nth-child(5) > .grid > :nth-child(4) > .block > .number_input_block > .input_box > input"


            txtMotherFirstName = ":nth-child(7) > .grid > :nth-child(2) > .block > .text_input_block > .input_box > input"
            txtMotherMidleName = ":nth-child(7) > .grid > :nth-child(3) > .block > .text_input_block > .input_box > input"
            txtMotherLastName = ":nth-child(4) > .block > .text_input_block > .input_box > input"
            txtMotherCitizen = ":nth-child(8) > .grid > :nth-child(1) > .block > .select_box_block > .input_box > select"

            txtFatherFirstName = ":nth-child(13) > .grid > :nth-child(1) > .block > .text_input_block > .input_box > input"
            txtFatherMidleName = ":nth-child(13) > .grid > :nth-child(2) > .block > .text_input_block > .input_box > input"
            txtFatherLastName = ":nth-child(13) > .grid > :nth-child(3) > .block > .text_input_block > .input_box > input"
            txtFatherCitizen = ":nth-child(14) > .grid > :nth-child(1) > .block > .select_box_block > .input_box > select"
            
            btnNurse = ".flex-wrap > :nth-child(2) > input"
            
            btnSignature = ".browse_area > p"

            btnNextAR = ".inline.px-4.ml-4.my-6.py-2.next_btn"
            lblAR = ".px-3 > span"

            btnNextPS = ".next_btn"
            lblPS = ".pl-3 > :nth-child(1) > span" 
 
            btnPaymentSlip = ".fa.fa-upload"
            btnSubmit = ".inline"
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

            clickNextOffice()
            {
                cy.get(this.btnNextOffice).click()
            }
        
            verifyApplyNow()
            {
                cy.get(this.lblUD).should("have.text", "Documents Upload")
            }
        
            // Office Selection

            clickOfficeSelection(piagapo)
            {
                cy.get(this.ddOfficeSelection).select(piagapo)
            }
            clickOfficeSelectionNext()
            {
                cy.get(this.btnNextOffice).click()
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
        
            clickUploadFile4()
            {
                cy.get(this.btnUploadFile4).click()
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


            // Application Form

            setChildFirstName(ChildFirstName)
            {
                cy.get(this.txtChildFirstName).type(ChildFirstName)
            }

            setChildMidledName(ChildMidledName)
            {
                cy.get(this.txtChildMidledName).type(ChildMidledName)
            }

            setChildLastName(ChildLastName)
            {
                cy.get(this.txtChildLastName).type(ChildLastName)
            }

            setChildSex(ChildSex)
            {
                cy.get(this.ddChildSex).select(ChildSex)
            }

            setHospital(Hospital)
            {
                cy.get(this.txtHospital).type(Hospital)
            }

            setProvince(Province)
            {
                cy.get(this.ddProvince).select(Province)
            }

            setMunicipality(Municipality)
            {
                cy.get(this.ddMunicipality).select(Municipality)
            }

            setBarangay(Barangay)
            {
                cy.get(this.ddBarangay).select(Barangay)
            }

            setBirthType(BirthType)
            {
                cy.get(this.txtBirthType).type(BirthType)
            }

            setTotalChild(TotalChild)
            {
                cy.get(this.txtTotalChild).type(TotalChild)
            }

            setBirthOrder(BirthOrder)
            {
               cy.get(this.txtBirthOrder).type(BirthOrder)
            }

            setWeight(Weight)
            {
                cy.get(this.txtWeight).type(Weight)
            }

            setMotherFirstName(MotherFirstName)
            {
                cy.get(this.txtMotherFirstName).type(MotherFirstName)
            }

            setMotherMidleName(MotherMidleName)
            {
                cy.get(this.txtMotherMidleName).type(MotherMidleName)
            }

            setMotherLastName(MotherLastName)
            {
                cy.get(this.txtMotherLastName).type(MotherLastName)
            }

            setMotherCitizen(MotherCitizen)
            {
                cy.get(this.txtMotherCitizen).type(MotherCitizen)
            }

            setFatherFirstName(FatherFirstName)
            {
                cy.get(this.txtFatherFirstName).type(FatherFirstName)
            }

            setFatherMidleName(FatherMidleName)
            {
                cy.get(this.txtFatherMidleName).type(FatherMidleName)
            }

            setFatherLastName(FatherLastName)
            {
                cy.get(this.txtFatherLastName).type(FatherLastName)
            }

            setFatherCitizen(FatherCitizen)
            {
                cy.get(this.txtFatherCitizen).type(FatherCitizen)
            }

            clickNurse()
            {
                cy.get(this.btnNurse).click()
            }

            clickSignature()
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

            clickNextPS()
            {
                cy.get(this.btnNextPS).click()
            }

            verifyPaymentSlip()
            {
                cy.get(this.lblPS).should("have.text", "Payment Information")
            }

            uploadPaymentSlip()
            {
                cy.get(this.btnPaymentSlip).attachFile("test1.pdf")
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

export default LiveBirthCitizen;