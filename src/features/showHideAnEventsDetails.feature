Feature: Show/hide and event's details

  Scenario: When the user has not clicked on an event, each event element should be collapsed.
    Given the user just landed on the homepage
	When an event is displayed
	Then the event details will be collapsed.

  Scenario: When the user clicks on a collapsed event element, the element should expand.
    Given the user sees a lists of events
	When a user clicks on an single event
	Then the event details will display.

  Scenario: When the user clicks on an expanded event element, the element should collapse.
    Given the users has clicked an event to display details
	When the user clicks “close”
	Then the event details will be hidden.
