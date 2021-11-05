import React from 'react'
import DateFnsUtils from '@date-io/date-fns/';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'; 

const DatePickerField = ({ field, form, ...other}) => {
    const currentError = form.errors[field.name];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker 
                clearable
                disablePast
                name={field.name}
                value={field.value}
                format="dd/MM/yyyy"
                helperText={currentError}
                error={Boolean(currentError)}
                onError={error => {
                    // handle as a side effect
                    if(error !== currentError) {
                        form.setFieldError(field.name, error);
                    }
                }}
                // if you are using custom validation schema you probably want to pass `true` as third argument
                onChange={date => form.setFieldValue(field.name, date, false)}
                {...other} 
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePickerField;
