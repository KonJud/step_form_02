import React from 'react'

export default function StepForm() {

  // Render a form based on the step
  const currentStep = 2
  function renderFormByStep (step) {
    if (step === 1) {
      return (
        <p>Personal Info Form</p>
      )
    } else if (step === 2) {
      return (
        <p>Education Bg Form</p>
      )
    }
  }
  return (
    <>
      {renderFormByStep(currentStep)}
    </>
  )
}
