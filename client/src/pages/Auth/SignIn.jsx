import React from 'react';
import { 
    Button,
    Avatar, 
    TextField, 
    CssBaseline, 
    FormControlLabel, 
    Checkbox, 
    Link, 
    Grid, 
    Typography, 
    Container 
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../../constants';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api';
import { useAuthContext } from '../../context/AuthContext';

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));
const ButtonStyled = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export default function SignIn() {
  const navigate = useNavigate()
  const { login: saveAuthInfo } = useAuthContext()

  const { mutate: submitRequest } = useMutation({
    mutationFn: (req) => login(req),
    onSuccess: (res) => {
      saveAuthInfo(res.data.tokens.access.token, res.data.tokens.access.expires)
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
          Sign in
        </Typography>
        <form 
          noValidate
          style={{
            width: '100%', // Fix IE 11 issue.
            marginTop: 12,
          }}
          onSubmit={handleSubmit}  
        >          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <ButtonStyled
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </ButtonStyled>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" onClick={() => navigate(RouteConstants.SIGN_UP)}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}