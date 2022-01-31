import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from "../NumberOfEvent";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('The app should display 32 events by default', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is on the homepage', () => {
            AppWrapper = mount(<App />);
        });

        when('the user hasn’t specified a number of events', () => {
            AppWrapper.update();
        });

        then(/^(\d+) events will be displayed as default.$/, (arg0) => {
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });

    test('When the user types a number into the textbox, the number of events displayed should match the input number', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is on the homepage', () => {
            AppWrapper = mount(<App />);
        });

        when('the user inputs the desired number of events to be displayed in the designated box', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            const newNumber = { target: { value: 10 } }
            NumberOfEventsWrapper.find(".number").simulate("change", newNumber);
        });

        then('desired number of events will be displayed.', () => {
            expect(AppWrapper.state("numberOfEvents")).toEqual(10);
        });
    });

});