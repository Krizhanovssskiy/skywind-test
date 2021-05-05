import * as React from "react";

import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    // '& input:invalid + fieldset': {
    //   borderColor: 'red',
    //   borderWidth: 2,
    // },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

const AddUserForm = ({}) => {
  const [valueField, setValueField] = React.useState("");

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueField(e.target.value)
  }

  const onSubmite = () => {
    
  }

  return (
    <form 
    // className={classes.root}
      noValidate 
      autoComplete="off"
      onSubmit={onSubmite}
    >
          <ValidationTextField
            value={valueField}
            name="nameUser"
            onChange={onHandleChange}
            label="Name"
            required
            variant="outlined"
            defaultValue=""
            id="validation-outlined-input"

          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            // className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </form>
  )
}

export default AddUserForm;
