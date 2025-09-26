/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:"#B33791",
        secondary:"#0077b6",
        grey:"#D3D3D3",
        background: "#F7F7F7",
      },
      fontFamily:{
        mthin:["Montserrat-Thin"],
        mextralight:["Montserrat-ExtraLight"],
        mlight:["Montserrat-Light"],
        mregular:["Montserrat-Regular"],
        mmedium:["Montserrat-Medium"],
        msemibold:["Montserrat-SemiBold"],
        mbold:["Montserrat-Bold"],
        mextrabold:["Montserrat-ExtraBold"],
        mblack:["Montserrat-black"]
      }
    },
  },
  plugins: [],
}