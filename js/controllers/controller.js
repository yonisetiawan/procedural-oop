var Images = require('../models/model')

var Result = {
  random: function() {
      // console.log(document.getElementsByClassName("sizeImg")[0].src);
      $(".sizeImg").each(function(k, die) {
          var value = Math.floor((Math.random() * 6) + 1)
          if (value == 1) {
              die.src = `${Images.satu()}`
          } else if (value == 2) {
              die.src = `${Images.dua()}`
          } else if (value == 3) {
              die.src = `${Images.tiga()}`
          } else if (value == 4) {
              die.src = `${Images.empat()}`
          } else if (value == 5) {
              die.src = `${Images.lima()}`
          } else {
            die.src = `${Images.eman()}`
          }
      })
  },
  default: function() {
      $(".dice").append(`<img class="sizeImg" src=${Images.default()}>`)
  }
}

module.exports = Result
