// const about = document.querySelector('#about')
// const contact = document.querySelector('#contact')
// const aboutContent = document.querySelector('#about-content')
// const contactContent = document.querySelector('#contact-content')

const txtBox = document.querySelector('#textBox')
const aboutContent = document.querySelector('#about-content')



// about.addEventListener('click', () => {
//   const aboutBox = new WinBox({
//     title: 'About Me',
//     // modal: true,
//     width: '400px',
//     height: '400px',
//     top: 50,
//     right: 50,
//     bottom: 50,
//     left: 50,
//     mount: aboutContent,
//     onfocus: function () {
//       this.setBackground('#00aa00')
//     },
//     onblur: function () {
//       this.setBackground('#777')
//     },
//   })
// })

// contact.addEventListener('click', () => {
//   const contactBox = new WinBox({
//     title: 'Contact Me',
//     width: '400px',
//     height: '400px',
//     top: 150,
//     right: 50,
//     bottom: 50,
//     left: 250,
//     mount: contactContent,
//     onfocus: function () {
//       this.setBackground('#00aa00')
//     },
//     onblur: function () {
//       this.setBackground('#777')
//     },
//   })
// })



$(".fa-search").click(function () {
  if (!$(".search").hasClass("active")) {
    $(".search").addClass("active");
  }
});

$(".fa-close").click(function () {
  $(".search").removeClass("active");
});



// const txtBox = document.querySelector('#textBox')
// const aboutContent = document.querySelector('#about-content')

// Main Function
function commandProcessor(e) {

  //Check if the enter key is pressed
  if (e.keyCode == 13) {

    // txtBox.addEventListener(() => {
    const txtBoxCMD = new WinBox({
      title: 'About Me',
      // modal: true,
      width: '400px',
      height: '400px',
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },

    })
    // })


    document.getElementById('injected').innerHTML = "";
    var i = document.getElementById("txtBox").value
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.43.174/cgi-bin/pythonfiles/main.py?x=" + i, false)
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("injected").innerHTML = output;

    //Clear input text box
    document.getElementById('txtBox').value = "";


  }
}




about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


