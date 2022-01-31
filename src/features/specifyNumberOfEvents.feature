Feature: Specify number of events

  Scenario: The app should display 32 events by default
    Given the user is on the homepage
	When the user hasn’t specified a number of events 
	Then 32 events will be displayed as default.

  Scenario: When the user types a number into the textbox, the number of events displayed should match the input number
    Given the user is on the homepage
	When the user inputs the desired number of events to be displayed in the designated box
	Then desired number of events will be displayed.