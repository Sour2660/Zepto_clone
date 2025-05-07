import axios from 'axios';


// In-memory store for OTPs
const otpStore = {}; 

/**
 * i had created sendOtp Function to send OTP to user's phone number
 * -----------------------------------------------
 *
 *  When user enters their mobile number (for login/signup),
 *  this function sends an OTP (One Time Password) to that number.
 *  It uses 2Factor.in API to send OTP via SMS.
 *  The OTP session ID (not the OTP itself) is temporarily stored in memory
 *   (inside 'otpStore') to verify later when the user enters the received OTP.
 * 
 *
 *  We need to verify the identity of the user using their mobile number.
 *  OTP verification ensures that the user owns that mobile number.
 *  Storing the OTP session ID helps us validate the user later when they submit OTP.
 */
export const sendOtp = async (req, res) => {
    // Extract the phone number from the incoming request body
    const { phone } = req.body;

    try {
        // Call the 2Factor API to send an OTP SMS to the given phone number
        const response = await axios.get(`https://2factor.in/API/V1/1d4f1d1d-22b5-11f0-8b17-0200cd936042/SMS/${phone}/AUTOGEN`);
        
        console.log(`OTP sent via 2Factor API:`, response.data);

        // Store the OTP session ID in memory, mapped by the phone number
        // (We will use this stored value later during OTP verification)
        otpStore[phone] = response.data.Details; 

        // Send a success response back to the frontend
        res.json({ success: true, message: `OTP SENT SUCCESSFULLY` });
    }
    catch (error) {
        // If any error occurs during the API call
        console.error(`ERROR SENDING OTP:`, error);

        // Send an error response to user
        res.status(500).json({ success: false, message: `FAILED TO SEND  OTP` });
    }
};
