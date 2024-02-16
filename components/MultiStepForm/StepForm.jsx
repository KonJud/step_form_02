"use client"

import React from 'react'
import PersonalInfoForm from './StepForms/PersonalInfoForm'
import EducationBackgroundForm from './StepForms/EducationBackgroundForm'
import ProgrammingExperienceForm from './StepForms/ProgrammingExperienceForm'
import PreferredLanguageForm from './StepForms/PreferredLanguageForm'
import TechnicalSkillsForm from './StepForms/TechnicalSkillsForm'
import FormConfirmation from './StepForms/FormConfirmation'

export default function StepForm() {

  // Render a form based on the step
  const currentStep = 1
  function renderFormByStep (step) {
    if (step === 1) {
      return (
        <PersonalInfoForm />
      )
    } else if (step === 2) {
      return (
        <EducationBackgroundForm />
      )
    } else if (step === 3) {
      return (
        <ProgrammingExperienceForm />
      )
    } else if (step === 4) {
      return (
        <PreferredLanguageForm />
      )
    } else if (step === 5) {
      return (
        <TechnicalSkillsForm />
      )
    } else if (step === 6) {
      return (
        <FormConfirmation />
      )
    }
  }
  return (
    <> 
      {renderFormByStep(currentStep)}
    </>
  )
}
