import {useState} from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from "primereact/checkbox";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const SearchForm = () => {

  const [isOneWay, setIsOneWay] = useState(false);

  const SearchFormSchema = Yup.object().shape({
    departDate: Yup.date().required('Departure date is required'),
    returnDate: Yup.date(),
    fromLocation: Yup.string().required('From location is required'),
    toLocation: Yup.string().required('To location is required'),
    travelers: Yup.number().min(1, 'Must be at least 1').required('Number of travelers is required').positive(),
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
  
    const handleSubmit = () => {
      console.log("selam")
    };
  

  return (
     <Formik
     initialValues={initialValues}
     validationSchema={SearchFormSchema}
     onSubmit={handleSubmit}
    >
     {(props) => (
      <Form className="w-screen grid grid-rows-1 grid-flow-col gap-4 justify-center items-center bg-transparent">
              
        <div className="absolute top-32 left-60">
          <Checkbox onChange={e => setIsOneWay(e.checked)} checked={isOneWay} className="color-cobalt-700" />
          <label htmlFor="isOneWay"> Tek Yön Uçuş Ara</label>
        </div>

        <InputText 
          id="fromLocation" 
          name="fromLocation" 
          placeholder="From" 
          className="h-12 w-52 border border-cobalt-700 rounded-md"
          value={props.values.fromLocation}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />

        <InputText 
          id="toLocation"
          name="toLocation" 
          placeholder="To" 
          className="h-12 w-52 border border-cobalt-700 rounded-md"
          value={props.values.toLocation}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        
        <Calendar 
          type="date" 
          inputId="departDate" 
          name="departDate" 
          placeholder="Depart Date" 
          className="h-12 w-52 border border-cobalt-700 rounded-md"
          value={props.values.departDate}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />

  
        <Calendar 
          type="date" 
          inputId="returnDate" 
          name="returnDate"
          placeholder="Return Date" 
          className="h-12 w-52 border border-cobalt-700 rounded-md"
          value={props.values.returnDate}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          disabled={isOneWay === true}
        />

        <InputText
          id="travelers" 
          name="travelers" 
          placeholder="Number of Travelers" 
          className="h-12 w-52 border border-cobalt-700 rounded-md"
          value={props.values.travelers}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />

        <Dropdown
          inputId="cabinClass"
          name="cabinClass"
          value={props.values.cabinClass}
          options={['Economy', "Business", "First Class"]}
          placeholder="Cabin Class"
          className="h-12 w-52 border border-cobalt-700 rounded-md"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <Button className="border border-cobalt-700 text-cobalt-700 bg-cobalt-100 px-4 py-2 rounded-md" type="submit">Search</Button>
      </Form>
     )}
   </Formik>
  )
}

