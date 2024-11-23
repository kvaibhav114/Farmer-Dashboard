import React from 'react';
import LoginPage, { Email, Password, Welcome, Banner, Submit, Title, Logo, Reset } from '@react-login-page/page3';
import defaultBannerImage from '@react-login-page/page3/bg.jpeg';
import { useNavigate } from 'react-router-dom';

const styles = { height: 740, width: 1530 };
const css = {
    '--login-bg': '#f3f2f2',
    '--login-color': '#333',
    '--login-logo': '#fff',
    '--login-inner-bg': '#fff',
    '--login-banner-bg': '#fbfbfb',
    '--login-input': '#333',
    '--login-input-icon': '#dddddd',
    '--login-input-bg': 'transparent',
    '--login-input-border': 'rgba(0, 0, 0, 0.13)',
    '--login-input-placeholder': '#999999',
    '--login-btn': '#fff',
    '--login-btn-bg': '#b08bf8',
    '--login-btn-bg-focus': '#b08bf8',
    '--login-btn-bg-hover': '#b08bf8',
    '--login-btn-bg-active': '#b08bf8',
  };

const Demo = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // You can add form validation or authentication logic here
    navigate('/dashboard'); // Redirect to dashboard upon successful submit
  };
return (
<div className='LoginContainer'>
  <div style={styles} className='logincontainer'>
    <LoginPage style={{...css}} onSubmit={handleSubmit}>
      <Banner style={{ backgroundImage: `url(${defaultBannerImage})` }} />
      <Email name="userUserName" />
      <Password placeholder="Password" label="" name="userPassword" />
      <Submit type='submit'>Submit</Submit>
      <Reset disabled>Reset</Reset>
      <Welcome>Welcome to NurtureWise Agro!</Welcome>
      <Title visible={false} />
      <LoginPage.ButtonAfter>
        Forgot Password?
      </LoginPage.ButtonAfter>

      <Logo>🌱</Logo>
    </LoginPage>
  </div>
</div>
);
};

export default Demo;