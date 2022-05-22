module.exports = {
  mode:"JIT",
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      fontFamily:{
        'popins': 'Poppins,sans-serif',
      },
      colors:{
        'mygreen':'#02897A',
        'myblue':'#4D8DFF',
        'mypurple':'#740A76',
        'mygrey':'#22343D',
        'myred':'#F03E3D',
        'darkprimary':'#1F2E35',
        'darksecondary':'#30444E',
        'lightdark':'#475E69',
        'logo':'#173A56',

      },
      maxWidth: {
        '1170': '1170px',
      }
  
    },
  },
  plugins: [],
}
