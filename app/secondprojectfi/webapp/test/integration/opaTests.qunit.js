sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'secondprojectfi/test/integration/FirstJourney',
		'secondprojectfi/test/integration/pages/EscalationsList',
		'secondprojectfi/test/integration/pages/EscalationsObjectPage',
		'secondprojectfi/test/integration/pages/CommentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EscalationsList, EscalationsObjectPage, CommentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('secondprojectfi') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEscalationsList: EscalationsList,
					onTheEscalationsObjectPage: EscalationsObjectPage,
					onTheCommentsObjectPage: CommentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);