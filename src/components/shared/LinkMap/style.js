import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export const Span = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
}));
