import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';

export default function HeroForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        nickname: 'Superman2123' + Math.random(),
        originDescription: "He isn't batman!2123" + Math.random(),
        catchPhrase: 'This looks like a job for Superman!2123' + Math.random(),
        realName: 'Clark Kent2132' + Math.random(),
      }}
      onSubmit={(values, formikBag) => {
        onSubmit(values);
        formikBag.resetForm();
      }}
    >
      {formik => (
        <Form>
          <Field name="nickname" />
          <Field name="originDescription" />
          <Field name="catchPhrase" />
          <Field name="realName" />
          <button type="submit">create hero</button>
          <button type="reset">reset</button>
        </Form>
      )}
    </Formik>
  );
}

HeroForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/*
Trying to be a full-stack is like being
 on an unforgiving journey to Mordor.
  You put in the work and just HOPE you'd make it alive at the end..
*/
