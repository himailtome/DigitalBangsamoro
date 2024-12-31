
import SanggunianEligibility from "../PageObjects/SanggunianEligibilityPage"

describe('Sanggunian Eligibility', () => {


    it ('Application submission', ()=> {

        cy.visit("https://citizen-dev.ph.orangebd.com/")

        cy.fixture('SanggunianEligibility').then((data) => {
           
            const se=new SanggunianEligibility();
            se.setSearch(data.service)
            cy.wait(3000)
            se.clickSearchResult()
            //se.verfiySearch()
            
        
            se.clickApplyNow()
            cy.wait(3000)
        
            se.setUserName(data.username)
            se.setPassword(data.password)
            se.clickLogin()

            cy.wait(3000)
          //  se.verifyLogin()
        
            se.clickApplyNow()
            se.verifyApplyNow()
        
            se.clickUploadFile1()
            se.clickSelectFile1()

            se.clickUploadFile2()
            se.clickSelectFile3()
        
            se.clickUploadFile3()
            se.clickSelectFile3()
        
            cy.wait(3000)
        
            se.clickNextAF()
           // a2t.verifyApplicationForm()
        
        
        //    a2t.setPurposeOfTravel(data.purpose)
        //    a2t.setNameOfApplicant(data.client)
        //    a2t.setNameOfOffice(data.organization)
        //    a2t.setDesignation(data.id)
        //    a2t.setDestination(data.contact)
        //    a2t.uploadSignature()
        //    a2t.clickSelectFile7()
        
        //    a2t.clickNextAR()
        //    a2t.verifyApplicationReview
        
        //    a2t.clickSubmit()
        
        //    cy.wait(8000)
        
        //    a2t.verifySubmit()

        })
    
        
    
        })
  
  })