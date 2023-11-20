import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignInCompo = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required(" Password is Required!"),
      // confirm_password: Yup.string()
      //   .oneOf([Yup.ref("password")], "Password's not match")
      //   .required("Required!")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("values", values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Typography component="div" variant="h5" align="center">
          Welcome back
        </Typography>
        <div className="md:grid grid-cols-2 gap-2 ">
          <Grid sx={{ mt: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid sx={{ mt: 2 }}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
        </div>
        <Grid sx={{ mt: 2 }}>
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
        <Grid>
          <Typography align="center">
            Don't have an account?
            <Button
              style={{ cursor: "pointer" }}
              onClick={() => props.setToggle(true)}
            >
              Sign Up
            </Button>
          </Typography>
        </Grid>
      </form>
    </div>
  );
};

export default SignInCompo;
