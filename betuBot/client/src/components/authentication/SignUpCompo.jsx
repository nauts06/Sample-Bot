import React, { useState } from "react";
import Navbar from "../pages/Navbar";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpCompo = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
      userName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("First Name is required Required!"),
      lastName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Last Name is required Required!"),
      userName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("User Name is required Required!"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required(" Password is Required!"),
      // confirm_password: Yup.string()
      //   .oneOf([Yup.ref("password")], "Password's not match")
      //   .required("Required!")
      mobile: Yup.number()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Mobile No is required Required!"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      console.log("signUp", values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Typography component="div" variant="h5" align="center">
          Create your account
        </Typography>
        <div className=" md:grid grid-cols-2 gap-2 ">
          <Grid sx={{ mt: 2 }}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            {/* {formik.errors.firstName && formik.touched.firstName && (
              <p>{formik.errors.firstName}</p>
            )} */}
          </Grid>
          <Grid sx={{ mt: 2 }}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          
          </Grid>
          <Grid sx={{ mt: 2 }}>
            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
          
          </Grid>
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
          <Grid sx={{ mt: 2 }}>
            <TextField
              label="Mobile No"
              variant="outlined"
              fullWidth
              id="mobile"
              name="mobile"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.mobile}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
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
            Already have account?
            <Button
              style={{ cursor: "pointer" }}
              onClick={() => props.setToggle(false)}
            >
              Log in
            </Button>
          </Typography>
        </Grid>
      </form>
    </div>
  );
};

export default SignUpCompo;
