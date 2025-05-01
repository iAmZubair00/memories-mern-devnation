import React from 'react';
import { 
    Button,
    Avatar, 
    TextField, 
    CssBaseline,
    Link, 
    Grid,
    Typography, 
    Container 
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useMutation } from '@tanstack/react-query'
import { RouteConstants } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api';
import { useAuthContext } from '../../context/AuthContext';

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));
const ButtonStyled = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export default function SignUp() {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const { mutate: submitRequest } = useMutation({
    mutationFn: (req) => signUp(req),
    onSuccess: (res) => {
      login(res.data.tokens.access.token, res.data.tokens.access.expires)
      navigate(RouteConstants.POSTS)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const inputDetails = Object.fromEntries(formData.entries());
    submitRequest(inputDetails)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div 
        style={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AvatarStyled>
          <LockOutlined />
        </AvatarStyled>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form 
          noValidate
          style={{
            width: '100%', // Fix IE 11 issue.
            marginTop: 12,
          }}  
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <ButtonStyled
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </ButtonStyled>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2" onClick={() => navigate(RouteConstants.SIGN_IN)}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}