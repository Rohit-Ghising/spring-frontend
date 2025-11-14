import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUser } from "../../Store/Auth/Action";

export default function SignupForm() {
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [{ value: 1, label: "January" }];

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalis email").required("email is requies"),
    password: Yup.string().required("Password is requied"),
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
    },
    validationSchema,
    onSubmit: (values) => {
      const { day, month, year } = values.dateOfBirth;
      const dateOfBirth = `${year}- ${month}-${day}`;
      console.log("values", values);
      values.dateOfBirth = dateOfBirth;
      dispatch(registerUser(values));
    },
  });
  const handleDateChange = (name) => (event) =>
    formik.setFieldValue("dateOfBirth", {
      ...formik.values.dateOfBirth,
      [name]: event.target.value,
    });

  return (
    <form
      onSubmit={formik.handleSubmit}
      action="
    "
    >
      <Grid padding={2} spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Fullname"
            name="fullname"
            variant="outlined"
            size="large"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
            helperText={formik.touched.fullname && formik.errors.fullname}
          />
        </Grid>
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

        {/*  */}

        <Grid item xs={4}>
          <InputLabel>Date</InputLabel>
          <Select
            fullWidth
            name="day"
            onBlur={formik.handleBlur}
            onChange={handleDateChange("day")}
            value={formik.values.dateOfBirth.day}
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        {/* -------- */}
        <Grid item xs={4}>
          <InputLabel>Month</InputLabel>
          <Select
            fullWidth
            name="month"
            onBlur={formik.handleBlur}
            onChange={handleDateChange("month")}
            value={formik.values.dateOfBirth.month}
          >
            {months.map((month) => (
              <MenuItem key={month.label} value={month.value}>
                {month.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        {/* =-------- */}
        <Grid item xs={4}>
          <InputLabel>Year</InputLabel>
          <Select
            fullWidth
            name="year"
            onBlur={formik.handleBlur}
            onChange={handleDateChange("year")}
            value={formik.values.dateOfBirth.year}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} className="mt-20">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
            size="large"
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
