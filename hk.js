var ctx = document.getElementById("linechart").getContext("2d");

var myChart = new Chart(ctx, {

    type: "bar",


    data: {

        labels: ["17/4", "18/4", "19/4", "20/4", "21/4", "22/4", "23/4", "24/4"],

        datasets: [

            {

                label: "New Covid-19 Cases",

                data: [260778, 275306, 256947, 294290, 315802, 332503, 345147, 349313],


                backgroundColor: [
                    "rgb(255, 166, 1)", "rgb(255, 166, 1)", "rgb(255, 166, 1)", "rgb(255, 166, 1)", "rgb(255, 166, 1)", "rgb(255, 166, 1)", "rgb(255, 166, 1)", "rgb(255, 166, 1)"
                ],
                //           {
                //data: [123, 233, 1233, 133, 19345],
                // },
            },
            {
                label: "New Recoveries",
                data: [138205, 143754, 154372, 166643, 179543, 192200, 220513, 215962],
                backgroundColor: ["green", "green",
                    "green",
                    "green",
                    "green",
                    "green",
                    "green",
                    "green",
                ],
            },
        ],
    },

    options: {
        responsive: false,
        layout: {
            right: 660,

        },
    },

});