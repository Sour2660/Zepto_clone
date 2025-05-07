export const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  };
  
  export const verifyGeneratedOtp = (storedOtp, enteredOtp) => {
    return storedOtp === enteredOtp;
  };
  // this code generate a random 6 digit OTP and verify the otp enter by the user with the stored OTP.