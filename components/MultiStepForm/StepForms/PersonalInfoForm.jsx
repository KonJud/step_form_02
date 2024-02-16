import TextInput from '@/components/FormInputs/TextInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function PersonalInfoForm() {

  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm()
  async function processData(data) {
    console.log(data)
  }
  return (
    <form
      className='px-12 py-4'
      onSubmit={handleSubmit(processData)}
    >
      <div className='mb-8'>
        <h5 className='text-xl md:text-3xl font-bold text-gray-900 dark:text-white'>
          Personal Info
        </h5>
        <p>Please provide your name, email and phone number.</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <TextInput
          label={"Full Name"}
          name='fullName'
          type='text'
          register={register}
          errors={errors}
        />
        <TextInput
          label={"Email Address"}
          name={"email"}
          type='email'
          register={register}
          errors={errors}
        />
        <TextInput
          label={"Phone Number"}
          name={"phone"}
          type='number'
          register={"register"}
          errors={errors}
        />
      </div>

    </form>
  )
}
