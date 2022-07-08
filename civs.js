let $body = document.body;
let $container = $("#container");
let $submit = $("#submit");
let $gridItem = $(".grid-item")
let $mainPage = $("mainPage")
let $civ = $("#civilizations")



$submit.on("click", () => {
  // console.log("click");
  let $input = $("select[name = civs]");
  let $userInput = $input.val();
  showInfo($userInput);
  $(container).empty()
});

// $gridItem.on("click", () => {
//     console.log("click");
//     let $input = $($gridItem)
//     console.log($input)
//     let $userInput = $input.val();
//     $($mainPage).empty();
//     showInfo($userInput);
// })

function showInfo($userInput) {
  let URL =
    "https://cryptic-temple-75197.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" + $userInput;
  $.get(URL, (data) => {
    console.log(data);
    createCivsList(data);
  });
}

function createCivsList(data) {
  const civsData = data;
  $container = $("#container");
  console.log(civsData);
  // for(let i = 0; i < civsData.length; i++) {
  let $h1 = $("<h1 class = 'Civ-Name'></h1>");
  $h1.text(civsData.name);
  $h1.appendTo($container);

  let $p = $("<p class = expansion></p>");
  $p.text(civsData.expansion);
  $p.appendTo($container);

  let $p2 = $("<p class = armyType></p>");
  $p2.text(civsData.army_type);
  $p2.appendTo($container);

  let $p3 = $("<p class = civBonus></p>");
  $p3.text(civsData.civilization_bonus);
  $p3.appendTo($container);

  let $p4 = $("<p class = teamBonus></p>");
  $p4.text(civsData.team_bonus);
  $p4.appendTo($container);

  console.log($h1);
  console.log($p);
  console.log($p2);
  console.log($p3);
}
// }
