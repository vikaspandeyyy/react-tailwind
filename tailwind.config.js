module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': {'min': '300px', 'max': '479px'},
      'xs': {'min': '480px', 'max': '575px'},
      'sm': {'min': '576px', 'max': '767px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px'},
    },
    colors:{
      transparent: 'transparent',
      yellow:'#ffd400',
      white:'#f9fafb',
      dullwhite:'#ffffff91',
      lightpurple:'#7E078F',
      purple:'#540964',
      slickcolor:'#e578f4', 
      headerbutton:'#9e13b2',
      quizbg:'#070325',
      quizcolor:'#FFFFFF78',
      tutorialbg:'#0F0749',
      searchcolor:'#ffffff91',
      tutorialheading:'#FFFFFFA3',
      logincolor:'#070325',
      registrationcolor:'#ffffffa6',
      formtxt:'#ffffff99',
      loginunderline:'#0066ff',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] ,
      'bebas':[ 'bebas neue','Sans-serif'],
      'pop':['Poppins'],
    },
    // fontSize:{
    //   '10xl':'7.5rem',
    // },
    extend: {}, 
  },
  plugins: [],
}