import axios from "axios";
import User from "../models/User.js";
import { otpStore } from "./sendOtp.js";
import jwt from "jsonwebtoken";

export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ success: false, message: "Phone and OTP are required" });
  }

  try {
    const sessionID = otpStore[phone];

    if (!sessionID) {
      return res.status(400).json({ success: false, message: "OTP NOT SENT. PLEASE REQUEST OTP" });
    }

    // Call 2Factor Verify API with timeout
    const response = await axios.get(
      `https://2factor.in/API/V1/1d4f1d1d-22b5-11f0-8b17-0200cd936042/SMS/VERIFY/${sessionID}/${otp}`,
      { timeout: 10000 }
    );

    if (response.data.Status === "Success") {
      // OTP Verified Successfully

      let user = await User.findOne({ phone });

      if (!user) {
        // Create new user if not exists
        user = await User.create({
          phone,
          name: "New User",  // ✅ Add default name
          profileImage: "",  // ✅ Add default profile image if you want
          orders: [],        // ✅ Empty orders initially
        });
      }

      const token = jwt.sign(
        { id: user._id, phone: user.phone },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.json({
        success: true,
        token,
        user: {
          _id: user._id,
          phone: user.phone,
          name: user.name || "New User",    // ✅ send name
          profileImage: user.profileImage || "/Profile_image.jpg",  // ✅ default image
          orders: user.orders || [],
        },
        message: "OTP VERIFIED SUCCESSFULLY"
      });
    } else {
      console.error('2Factor Response:', response.data);
      return res.json({ success: false, message: "INVALID OTP" });
    }
  } catch (error) {
    console.error("ERROR VERIFYING OTP:", error.response?.data || error.message || error);
    return res.status(500).json({ success: false, message: "FAILED TO VERIFY OTP" });
  }
};
