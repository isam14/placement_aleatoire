// $("#btn").click(function(){
//     console.log("hello");
//         $.ajax({
//         dataType: "json",
//         url: 'https://spreadsheets.google.com/feeds/list/1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ/od6/public/values?alt=json',
//         success: function (data) {
//             console.log(data);

//         }
//     })
// });
// var array = [];
// $.getJSON("https://spreadsheets.google.com/feeds/list/1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ/od6/public/values?alt=json", function (data) {
//     console.log(data);
//     for (var i = 0; i < array.length; i++) {
//         array.push([data.feed.entry[i].gsx$prénoms.$t, data.feed.entry[i].gsx$noms.$t, data.feed.entry[i].gsx$url.$t]);
//         $("#spot" + i).html(array[i][0] + '<br><img src="' + array[i][1] + '">');
//     }
//     console.log(array);
// });


var array = [];
$.getJSON("https://spreadsheets.google.com/feeds/list/1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ/od6/public/values?alt=json", function (data) {
console.log(data);
for (var i = 0; i < 15; i++) {
    array.push([data.feed.entry[i].title.$t, data.feed.entry[i].gsx$url.$t]);
    $("#spot" + i).html(array[i][0] + '<br><img src="' + array[i][1] + '">');
}
console.log(array);
});


$("#shuffle").click(function () {
    var arrayAleat = shuffle(array)
    for (var i = 0; i < 15; i++) {
        $("#spot" + i).html(arrayAleat[i][0] + '<br><img src="' + arrayAleat[i][1] + '">');
    }
});


//copié-collé de nicolas car je n'y arrivais pas....
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // Tant qu'il reste des éléments du tableau non shuffle
    while (0 !== currentIndex) {
        
        //Sélectionne un élément restant
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        // Et swap avec l'élément actuel
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}
