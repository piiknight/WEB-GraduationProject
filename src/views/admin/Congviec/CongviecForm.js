import React from "react";
import { withFormik } from "formik";
import * as EventBus from "eventing-bus";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button/Button";
// Services or Utilities
import { CongviecService } from "services/CongviecService";
import { ResponseHandling } from "utilities/ResponseHandling";

const CongviecForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    isSubmitting,
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      {/*name*/}
      <TextField
        required
        margin="normal"
        id="name"
        onChange={handleChange}
        label="Name"
        fullWidth
        value={values.name}
        error={errors.name && touched.name}
        helperText={errors.name}
      />

      {/*Salary*/}
      <TextField
        required
        margin="normal"
        id="salary"
        onChange={handleChange}
        label="Salary"
        fullWidth
        value={values.salary}
        error={errors.salary && touched.salary}
        helperText={errors.salary}
      />

      {/*Work Time*/}
      <TextField
        required
        margin="normal"
        id="workTime"
        onChange={handleChange}
        label="Work Time"
        fullWidth
        value={values.workTime}
        error={errors.workTime && touched.workTime}
        helperText={errors.workTime}
      />

      {errors.responseError && (
        <p style={{ color: "red" }}>{errors.responseError}</p>
      )}
      <Button type={"submit"} disabled={isSubmitting} color="primary">
        Save
      </Button>
      <Button onClick={values.onClose} color="primary">
        Cancel
      </Button>
    </form>
  );
};

const convertToObject = values => {
  let object = {
      idCV: values.idCV,
      name: values.name,
      salary: values.salary,
      workTime: values.workTime
  };

  return object;
};

const mapPropsObjectToValues = object => {
  let values = {
      idCV: object.idCV,
      name: object.name,
      salary: object.salary,
      workTime: object.workTime
  };

  return values;
};

export const CongviecValidatedForm = withFormik({
  mapPropsToValues: props => {
    console.log("Tadaskd: " + JSON.stringify(props.congviec));
    return {
      ...mapPropsObjectToValues(props.congviec),
      onClose: props.onClose,
      responseError: ""
    };
  },

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.salary) {
      errors.salary = "Salary is required";
    }

    if (!values.workTime) {
      errors.workTime = "WorkTime is required";
    }

    return errors;
  },

  handleSubmit: (values, { setErrors, setSubmitting }) => {
    const object = convertToObject(values);

    const snack = {
      open: true,
      place: "bc",
      color: "",
      message: ""
    };

    const handleResponse = res => {
      if (res.error) {
        snack.color = "warning";
        snack.message = `${snack.message} fail`;
        handleError(res.error);
      } else {
        snack.color = "success";
        snack.message = `${snack.message} successfully`;
        handleSuccess();
      }
    };

    const handleError = error => {
      const errors = {
        responseError: ResponseHandling.extractErrorMessage(error)
      };
      setSubmitting(false);
      setErrors(errors);
    };

    const handleSuccess = () => {
      EventBus.publish("snack", snack);
      EventBus.publish("updateDataList");

      setSubmitting(true);
      values.onClose();
    };

    if (object.idCV) {
      console.log("Update: " + JSON.stringify(object));
      CongviecService.updateOne(object).then(res => {
        snack.message = "Update";
        handleResponse(res);
      });
    } else {
      console.log("Create: " + JSON.stringify(object));
      CongviecService.addOne(object).then(res => {
        snack.message = "Create";
        handleResponse(res);
      });
    }
  }
})(CongviecForm);
