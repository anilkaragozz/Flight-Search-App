import { useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from "primereact/checkbox";
import { Card } from "primereact/card";
import { TextInput } from "./text-input";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


export const SearchForm = () => {

  const [isOneWay, setIsOneWay] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const SearchFormSchema = Yup.object().shape({
    departDate: Yup.date().required('Depart date is required'),
    returnDate: Yup.date().when('isOneWay', {
      is: false,
      then: (schema) => schema.required("Retun date is required")
      .min(Yup.ref('departDate'), 'Return Date must be after Depart Date')
      .test('departDate','Return Date cannot be same as Depart Date.', (value, context) => value > context.parent.departDate),
      otherwise: (schema) => schema.notRequired(),
    })
    .min(Yup.ref('departDate'), 'Return Date must be after Depart Date'),
    fromLocation: Yup.object().typeError("").required('From location is required'),
    toLocation: Yup.object().typeError("").required('To location is required'),
    travelers: Yup.number().min(1, 'Must be at least 1').required('Number of travelers is required').positive('shoul be a positive'),
    cabinClass: Yup.string().required('Cabin class is required'),
  });

  const initialValues = {
      departDate: '',
      returnDate: '',
      fromLocation: '',
      toLocation: '',
      travelers: '',
      cabinClass: '',
  };

  const handleSubmit = (props) => {
    props == searchResults;
    setSearchResults(props)
  }
  return (
    <Formik
     initialValues={initialValues}
     validationSchema={SearchFormSchema}
     onSubmit={handleSubmit}
    >
     {(props) => (
    <Card className="bg-transparent bg-image w-full">
      <Form className="grid grid-rows-2 grid-flow-col gap-2 justify-center items-center">
    
      <div className='flex flex-col min-h-16'>
        <TextInput
         id="fromLocation"
         name="fromLocation" 
         placeholder="From" 
         className="h-10 border border-cobalt-700 rounded-md"
         value={props.values.fromLocation}
         onChange={props.handleChange}
         onBlur={props.handleBlur} 
        />
        <small className="text-red-600">{props.errors.fromLocation}</small>
      </div>

      <div className='flex flex-col min-h-16'>
        <TextInput
          id="toLocation"
          name="toLocation" 
          placeholder="To" 
          className="h-10 border border-cobalt-700 rounded-md"
          value={props.values.toLocation}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <small className="text-red-600">{props.errors.toLocation}</small>
      </div>

      <div className='flex flex-col min-h-16'>
        <Calendar 
          type="date" 
          inputId="departDate" 
          name="departDate" 
          placeholder="Depart Date" 
          className="h-10 w-52 border border-cobalt-700 rounded-md"
          value={props.values.departDate}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          dateFormat="dd/mm/yy"
        />
        <small className="text-red-600">{props.errors.departDate}</small>
      </div>

      <div className='flex flex-col min-h-16'>
        <Calendar 
          type="date" 
          inputId="returnDate" 
          name="returnDate"
          placeholder="Return Date" 
          className="h-10 w-52 border border-cobalt-700 rounded-md"
          value={props.values.returnDate}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          disabled={isOneWay === true}
          dateFormat="dd/mm/yy"
        />
        <small className="text-red-600">{props.errors.returnDate}</small>
      </div>
      <div className='flex flex-col min-h-16'>
        <InputText
          id="travelers" 
          name="travelers" 
          placeholder="Number of Travelers" 
          className="h-10 w-52 border border-cobalt-700 rounded-md"
          value={props.values.travelers}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <small className="text-red-600">{props.errors.travelers}</small>
      </div>
      <div className='flex flex-col min-h-16'>
        <Dropdown
          inputId="cabinClass"
          name="cabinClass"
          value={props.values.cabinClass}
          options={['Economy', "Business"]}
          placeholder="Cabin Class"
          className="h-10 w-52 border border-cobalt-700 rounded-md items-center"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <small className="text-red-600">{props.errors.cabinClass}</small>
      </div>
      <div className="mb-3">
          <Checkbox onChange={e => setIsOneWay(e.checked)} checked={isOneWay} className="color-cobalt-700" />
          <label htmlFor="isOneWay" className="text-slate-900"> Tek Yön Uçuş Ara</label>
        </div>
      <div className='flex flex-col min-h-16'>
        <Button className="border border-cobalt-700 text-cobalt-700 bg-cobalt-100 px-4 py-2 rounded-md" type="submit" label="Search" />
      </div>
      </Form>
    </Card>
     )}
   </Formik>
  )
}

