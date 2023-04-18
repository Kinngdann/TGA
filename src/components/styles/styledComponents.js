import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const HeaderText = styled(Typography)(({ theme }) => ({
  color: "#be8f2d",
  fontWeight: "bold",
}));

export const StyledPrimaryBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "primary.main",
  fontWeight: "600",
  color: "#fff",
  borderRadius: 1,
}));

export const StyledSecondaryBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "primary.main",
  fontWeight: "600",
  // color: "#fff",
  // border: "1px solid #fff",
}));
