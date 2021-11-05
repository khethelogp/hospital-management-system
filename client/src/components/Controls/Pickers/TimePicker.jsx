import React from 'react'
import DateFnsUtils from '@date-io/date-fns/';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'; 

const TimePickerField = ({ field, form, ...other}) => {
    const currentError = form.errors[field.name];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker 
                clearable
                disablePast
                name={field.name}
                value={field.value}
                helperText={currentError}
                error={Boolean(currentError)}
                onError={error => {
                    // handle as a side effect
                    if(error !== currentError) {
                        form.setFieldError(field.name, error);
                    }
                }}
                // if you are using custom validation schema you probably want to pass `true` as third argument
                onChange={time => form.setFieldValue(field.name, time, false)}
                {...other} 
            />
        </MuiPickersUtilsProvider>
    )
}

export default TimePickerField;
