import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {

    const {form, name, label, disabled} = props;
    const {setError, formState} = form;
    const hasError = formState.touchedFields[name] && setError[''];
    console.log(setError[''], formState.touchedFields[name] );

    return (
        <Controller
            name={name}
            control={form.control}
            // as={TextField}

            render = {({ field})=> (
                <TextField
                    {...field}
                    fullWidth
                    label={label}
                    disabled={disabled}

                    error={!!hasError}
                    helperText="Loi roi nef"
                />
            )}

            // fullWidth
            // lable = {label}
            // disabled = {disabled}
        />
            
    );
}

export default InputField;