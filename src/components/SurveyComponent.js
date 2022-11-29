import React, { useState } from 'react';
import { Survey } from 'survey-react-ui';
import { StylesManager } from 'survey-core';
import { Model } from 'survey-core';
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-creator-core/survey-creator-core.css";
import 'survey-core/modern.min.css';

StylesManager.applyTheme("modern");

const surveyJson = {
	elements: [{
	  name: "Q1",
	  title: "In the past two weeks, how often have you felt that your struggles are not relatable to your peers, professors/TAs, and those around you?",
	  type: "radiogroup",
	  choices: [
		"Never",
		"Sometimes",
		"Often",
		"Very Often"
	  ]
	}, {
	  name: "Q2",
	  title: "In the past two weeks, how often have you felt isolated or alone due to a lack of a community of people that share similar identities as you and/or are accepting of your identity? (including but not limited to identities related to ethnicity, race, gender, sexuality, ability, etc)?",
	  type: "radiogroup",
	  choices: [
		"Never",
		"Sometimes",
		"Often",
		"Very Often"
	  ]
	}, {
		name: "Q3",
		title: "In the past two weeks, how often did you struggle to find support catered to your specific needs because of your identity (including but not limited to identities related to ethnicity, race, gender, sexuality, ability, etc)?",
		type: "radiogroup",
		choices: [
		  "Never",
		  "Sometimes",
		  "Often",
		  "Very Often"
		]
	  }, {
		name: "Q4",
		title: "In the past two weeks, have you felt embarrassed, ashamed, or guilty about seeking mental health help due to your identity (including but not limited to identities related to ethnicity, race, gender, sexuality, ability, etc)?",
		type: "radiogroup",
		choices: [
		  "Yes",
		  "No"
		]
	  }]
  };

function SurveyComponent() {
  
	const survey = new Model(surveyJson);
	return <Survey model={survey} />
}
export default SurveyComponent;