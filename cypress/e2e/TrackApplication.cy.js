
import TrackApplication from "../PageObjects/TrackApplicationPage";

describe('Application Tracking Test', () => {

    it('positive case without json', () => {
  
      cy.visit('https://citizen-dev.ph.orangebd.com/home')

      const ta=new TrackApplication();

      ta.clickTrackApplication()
      ta.setMobile("1795914141")
      ta.setTrackingID("2023011492")
      ta.clickSearch()
      ta.verifySearch()

      
    })


    it.only('positive case with json', () => {
  
      cy.visit('https://citizen-dev.ph.orangebd.com/home')

      cy.fixture('ApplicationTracking').then((data)=> {
       
        const ta=new TrackApplication();
        ta.clickTrackApplication()
        ta.setMobile(data.email)
        ta.setTrackingID(data.TrackingID)
        ta.clickSearch()
        ta.verifySearch()

      })


      
    })
  
  })