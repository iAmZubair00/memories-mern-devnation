import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const Heading = styled('h2')({
  color: "rgba(0,183,255, 1)",
});

export const Image = styled('img')({
  marginLeft: "15px",
});

export default { Image, Heading, AppBarWrapper }
