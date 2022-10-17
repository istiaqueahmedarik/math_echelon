import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Value from './Value';
function Main() {
    const [values,setValue] = useState(3)
    const initialValues = { rows:3 };
    console.log(values);
  return (
    <div className='main'>
        <div className='title'>
            Echelon Form Generator
        </div>
        
        <Formik
        initialValues={initialValues}
        onSubmit={async (values) => setValue(values.rows)}
      >
        <div className="section">
          
          <Form className='form__container'>
            
              <Field name="rows" type="number" className="form__input"/>
            
            <button className='form__button__rows' type="submit">Please type Unknown variable number and click here</button>
          </Form>
        </div>
      </Formik>
    <Value rows={values}/>
    </div>
  )
}

export default Main