import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('When the user has not clicked on an event, each event element should be collapsed.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user just landed on the homepage', () => {
            AppWrapper = mount(<App />);
            AppWrapper.update();
        });

        when('an event is displayed', () => {

        });

        then('the event details will be collapsed.', () => {
            expect(AppWrapper.find('.details-view')).toHaveLength(0);

        });
    });

    test('When the user clicks on a collapsed event element, the element should expand.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user sees a lists of events', async () => {
            AppWrapper = await mount(<App />);
        });

        when('a user clicks on an single event', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.show-details')).toHaveLength(2);
            AppWrapper.find('.show-details').at(0).simulate('click');

        });

        then('the event details will display.', () => {
            expect(AppWrapper.find('.hide-details')).toHaveLength(1);

        });
    });

    test('When the user clicks on an expanded event element, the element should collapse.', ({ given, when, then }) => {
        let AppWrapper;
        given('the users has clicked an event to display details', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.show-details').at(0).simulate('click');
        });

        when('the user clicks “close”', () => {
            AppWrapper.find('.hide-details').at(0).simulate('click');
            expect(AppWrapper.find('.hide-details')).toHaveLength(0);
        });

        then('the event details will be hidden.', () => {
            expect(AppWrapper.find('.hide-details')).toHaveLength(0);
        });
    });

});