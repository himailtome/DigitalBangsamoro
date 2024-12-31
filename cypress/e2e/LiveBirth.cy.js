
import LiveBirthCitizen from "../PageObjects/LiveBirthCitizenPage";
import LiveBirthWorkflow from "../PageObjects/LiveBirthWorkflowPage";
import 'cypress-file-upload';

describe('Certificate of Live Birth', () => {


    it.only ('Application submission', ()=> {

        cy.visit("https://citizen-dev.ph.orangebd.com/")

        cy.fixture('LiveBirth').then((data) => {
           
            const lb=new LiveBirthCitizen();
            lb.setSearch(data.service)
            cy.wait(3000)
            lb.clickSearchResult()
           // bp.verfiySearch()
        
        
            lb.clickApplyNow()
            cy.wait(3000)
        
            lb.setUserName(data.username)
            lb.setPassword(data.password)
            lb.clickLogin()
           // bp.verifyLogin()

           cy.wait(3000)
           lb.clickApplyNow()

        // Office Selection Window
           
           lb.clickOfficeSelection(data.piagapo)
           
           lb.clickOfficeSelectionNext()
           
           lb.verifyApplyNow()

           lb.clickUploadFile1()
           lb.clickSelectFile1()

           lb.clickUploadFile2()
           lb.clickSelectFile1()

           lb.clickUploadFile3()
           lb.clickSelectFile3()

           lb.clickUploadFile4()
           lb.clickSelectFile3()

            cy.wait(3000)
        
            lb.clickNextAF()
         //   lb.verifyApplicationForm()


            //Application Form

            lb.setChildFirstName(data.ChildFirstName)
            lb.setChildMidledName(data.ChildMidledName)
            lb.setChildLastName(data.ChildLastName)
            cy.wait(3000)
            lb.setChildSex(data.ChildSex)
            lb.setHospital(data.Hospital)
            lb.setProvince(data.Province)
            lb.setMunicipality(data.Municipality)
            lb.setBarangay(data.Barangay)
            cy.wait(3000)
            lb.setBirthType(data.BirthType)
            lb.setTotalChild(data.TotalChild)
            lb.setBirthOrder(data.BirthOrder)
            lb.setWeight(data.Weight)

            cy.wait(3000)
            lb.setMotherFirstName(data.MotherFirstName)
            lb.setMotherMidleName(data.MotherMidleName)
            lb.setMotherLastName(data.MotherLastName)
            cy.wait(3000)
            lb.setMotherCitizen(data.MotherCitizen)

            lb.setFatherFirstName(data.FatherFirstName)
            lb.setFatherMidleName(data.FatherMidleName)
            lb.setFatherLastName(data.FatherLastName)
            cy.wait(3000)
            lb.setFatherCitizen(data.FatherCitizen)
            lb.clickNurse()

            cy.wait(3000)
            lb.clickSignature()
            lb.clickSelectFile7()

            lb.clickNextAR()
           

            lb.clickNextPS()
            cy.wait(3000)
            lb.uploadPaymentSlip()

          lb.clickSubmit()
          //  lb.verifySubmit()



            



        

        })  
    
        })
    
    
    it ('Application Processing', ()=> {

            cy.visit("https://workflow-dev.ph.orangebd.com/")
    
            cy.fixture('LiveBirth').then((data) => {
               
                const wf=new LiveBirthWorkflow();

                
                // Desk-1: Hanifa Hadji Yasser //

                // Officer-1 Login

                wf.setOfficerID(data.officerid1)
                wf.setOfficerPassword(data.officerpassword)
                wf.clickLogin()
                wf.verifyWorkflowLogin()

                // Application Details

                wf.clickDetails()
                wf.verifyDetails()
                
                // Decision Window

                wf.clickDecision()
                wf.verifyDecisionWindow()
                wf.clickProceed1()
                wf.setNote(data.note)
                wf.clickSubmitDecision()
                cy.wait(3000)
                wf.verifyDetails()

                // Forward Window
                
                cy.wait(3000)
                wf.clickForward()
                wf.verifyForwardWindow()
                wf.clickNoraida()
                wf.clickSubmitForward()
                cy.wait(3000)
                wf.verifyForward()

                // Officer-1 Logout

                wf.clickUser()
                wf.clickLogout()
                wf.clickConfirm()
                cy.wait(3000)
                wf.verifyLogout()


                // Desk-2: Noraida Cornell //

                // Officer-2 Login

                wf.setOfficerID(data.officerid2)
                wf.setOfficerPassword(data.officerpassword)
                wf.clickLogin()
                wf.verifyWorkflowLogin()

                // Application Details

                wf.clickDetails()
                wf.verifyDetails()

                // Decision Window

                 wf.clickDecision()
                 wf.verifyDecisionWindow()
                 wf.clickProceed2()
                 wf.setNote(data.note)
                 wf.clickSubmitDecision()
                 cy.wait(3000)
                 wf.verifySubmit()


                // Forward Window

                cy.wait(5000)
                wf.clickForward()
                wf.verifyForwardWindow()
                wf.clickNanayaon()
                wf.clickSubmitForward()
                cy.wait(3000)
                wf.verifyForward()


                // Officer-2 Logout

                cy.wait(3000)
                wf.clickUser()
                wf.clickLogout()
                wf.clickConfirm()
                cy.wait(3000)
                wf.verifyLogout()



                // Desk-3: Nanayaon Manalocon //

                // Officer-3 Login

                wf.setOfficerID(data.officerid3)
                wf.setOfficerPassword(data.officerpassword)
                wf.clickLogin()
                wf.verifyWorkflowLogin()

                // Application Details

                wf.clickDetails()
                wf.verifyDetails()


                // Decision Window

                wf.clickDecision()
                wf.verifyDecisionWindow()
                wf.clickApprove()
                cy.wait(3000)
                wf.setRegNo(data.regno)
                wf.setNote(data.note)
                wf.clickSubmitDecision()
                cy.wait(3000)
                wf.verifySubmit()


                 // Officer-3 Logout

                cy.wait(3000)
                wf.clickUser()
                wf.clickLogout()
                wf.clickConfirm()
                cy.wait(3000)
                wf.verifyLogout()


            })     
        
            })

    })