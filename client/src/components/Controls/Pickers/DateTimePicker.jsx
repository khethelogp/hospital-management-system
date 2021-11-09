import React from 'react'
import DateFnsUtils from '@date-io/date-fns/';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'; 
import { Alarm, Snooze } from '@material-ui/icons';
import { InputAdornment, IconButton, CssBaseline } from '@mui/material';

const DateTimePickerField = ({ field, form, ...other}) => {
    const currentError = form.errors[field.name];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <CssBaseline />
            <DateTimePicker 
                autoOk
                clearable
                disablePast
                ampm={false}
                allowKeyboardControl={true}
                leftArrowIcon={<Alarm />}
                leftArrowButtonProps={{ "aria-label": "Prev month" }}
                rightArrowButtonProps={{ "aria-label": "Next month" }}
                rightArrowIcon={<Snooze />}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <Alarm />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                name={field.name}
                value={field.value}
                minDate={new Date("2021-01-01")}
                // format="dd/MM/yyyy"
                helperText={String(currentError)}
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

export default DateTimePickerField;
