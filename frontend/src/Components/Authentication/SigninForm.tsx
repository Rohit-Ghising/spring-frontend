import { Button, Grid, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../Store/Auth/Action";

export default function SigninForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalis email").required("email is requies"),
    password: Yup.string().required("Password is requied"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      action="
    "
    >
      <Grid spacing={2} padding={2} className="space-y-2">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            size="large"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            variant="outlined"
            size="large"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12} className="mt-20">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
            size="large"
          >
            Sign in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
