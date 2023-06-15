import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/inputField';

const schema = yup.object({
  title: yup.string().required('Please enter title'),
//   age: yup.number().positive().integer().required(),
}).required();

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {

    const form = useForm({
        defaultValues: {
            title: '123',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log ('TODO FORM ', values);
    }


    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
           <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default
TodoForm;