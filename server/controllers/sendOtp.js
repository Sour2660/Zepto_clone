import axios from 'axios';


//This code sends OTP to user's phone and temporarily stores OTP session ID
const otpStore = {}; //IN-Memory store for OTP

export const sendOtp = async (req, res) =>{
    const { phone } = req.body;

 try{
    const response = await axios.get(`https://2factor.in/API/V1/1d4f1d1d-22b5-11f0-8b17-0200cd936042/SMS/${phone}/AUTOGEN`);
    console.log(`Sent OTP API:` , response.data);
   
    otpStore[phone] = response.data.Details; // store th OTP in Session 

    res.json({ success: true, message: `OTP SENT SUCCESSFULLY`});

 }
    catch(error){
        console.error(`ERROR SENDING OTP:`, error);
        res. status(500).json({ success: false, message: `FAILED TO SEND OTP`});

        
    };
}
    export  {otpStore}; 