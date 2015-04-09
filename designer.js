(function(KendoButton) {
	'use strict';

	KendoButton.setWidth('130');
	KendoButton.setHeight('22');
	
	KendoButton.addEvent({
		'name':'click'
	});
	
	KendoButton.setPanelStyle({
	        'fClass': true,
	        'text': true,
	        'background': true,
	        'border': true,
	        'sizePosition': true,
	        'label': true,
	        'disabled': ['border-radius']
    	});

});
