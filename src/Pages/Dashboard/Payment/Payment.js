import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51LWwi2FFfeqU3bTcD1j1CCA1zhdSbiuThpxgoNc0YUASo4CdAljQVRAzOM0GgJY2bMrNdl0uRj8FH6CAnVM0LJW500knFDjwwH"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`https://reactdoctorsportal.up.railway.app/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);

  return (
    <Container>
      <Grid item lg={12}>
        <Typography sx={{ textAlign: "center" }}>
          Pay For: {appointment?.patientName}
          <br />
          Service Name: {appointment?.serviceName}
          <br />
          Pay: ${appointment?.price}
          <br />
          Time: {appointment?.time}
          <br />
          Date: {appointment?.date}
        </Typography>

        {appointment?.price && (
          <Elements stripe={stripePromise}>
            <CheckOutForm appointment={appointment} />
          </Elements>
        )}
      </Grid>
    </Container>
  );
};

export default Payment;
