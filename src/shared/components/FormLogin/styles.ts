import { styled } from "@mui/material";
import { Card, Box, TextField, Button, Typography, Alert } from "@mui/material";
import colors from "../../../utils/colors";

export const LoginCard = styled(Card)({
  width: "500px",
  height: "570px",
  padding: "20px",
  marginTop: "8%",
  backgroundColor: colors.light,
  borderRadius: "10px",
  boxShadow: '-1px 4px 8px 2px rgba(0, 0, 0, 0.2)',
});

export const LoginTitle = styled(Typography)({
  marginTop: "25px",
  color: colors.dark,
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center",
});

export const LoginBoxInputs = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "25px",
});

export const LoginBoxActions = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
});

export const LoginTextField = styled(TextField)({
  width: "400px",
  borderRadius: "8px",
});

export const Text = styled(Typography)({
  color: colors.dark,
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
});

export const LoginAlert = styled(Alert)({
    width: "320px",
    marginTop: "-20px",
    marginBottom: "-18px",
    backgroundColor: "transparent",
});

export const LoginContentForgotPassword = styled(Box)({
  display: "flex",
  width: "500px",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  marginTop: "15px",
  marginBottom: "15px",
  marginRight: "28%"
});

export const ContentTextAndLink = styled(Box)({
  display: "flex",
  width: "100%",
  marginTop: "10px", 
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const LoginButton = styled(Button)({
  width: "320px",
  height: "44px",
  fontSize: "16px",
  borderRadius: "8px",
  fontWeight: 600,
  marginTop: "20px",
  color: colors.light,
  backgroundColor: colors.blueDark,
  transition: "all 0.3s ease-in-out",
  textTransform: "none",

  "&:hover": {
    opacity: 0.6,
    backgroundColor: colors.blueDark,
  },
});

export const LoginLink = styled('a')({
  color: colors.blueDark,
  width: "30%",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "underline",
  cursor: "pointer",
  textAlign: "right",
  transition: "all 0.3s ease-in-out",
  marginTop: "15px",

  '&:hover': {
    opacity: 0.7,
  },
});

