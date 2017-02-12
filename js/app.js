// var Result = require('./controllers/controller')

// $(document).ready(function() {
//     $("#roller button.add").on('click',Result.default)
//     $("#roller button.roll").on('click', Result.random)
// })



$(document).ready(function() {
    $("#roller button.add").on('click',
        function() {
            $(".dice").append('<img class="sizeImg" src="http://icon-icons.com/icons2/390/PNG/512/perspective-dice-six-faces-random_38559.png">')
        })

    $("#roller button.roll").on('click', function() {
        // console.log(document.getElementsByClassName("sizeImg")[0].src);
        $(".sizeImg").each(function(k, die) {
            var value = Math.floor((Math.random() * 6) + 1)
            if (value == 1) {
                die.src = `http://icon-icons.com/icons2/390/PNG/512/dice-six-faces-one_39564.png`
            } else if (value == 2) {
                die.src = `http://icon-icons.com/icons2/390/PNG/512/dice-six-faces-two_38562.png`
            } else if (value == 3) {
                die.src = `http://icon-icons.com/icons2/390/PNG/512/dice-six-faces-three_39562.png`
            } else if (value == 4) {
                die.src = `http://icon-icons.com/icons2/390/PNG/512/dice-six-faces-four_38563.png`
            } else if (value == 5) {
                die.src = `http://icon-icons.com/icons2/390/PNG/512/dice-six-faces-five_39565.png`
            } else {
              die.src = `http://icon-icons.com/icons2/390/PNG/512/dice-six-faces-six_39563.png`
            }
        })
    })
})
