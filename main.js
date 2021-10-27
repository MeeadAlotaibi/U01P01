let arr = JSON.parse(localStorage.getItem("arr")) || [
  {
    id: 0,
    imageFile: "images/squidGame.jpeg",
    name: "Squid Game",
    type: "Drama",
    story:
      "The series revolves around a contest where 456 players in deep financial debt put their lives at risk to play a series of children's games for the chance to win a ₩45.6 billio",
    creators: "Hwang Dong-hyuk",
    stars: " Seong Gi-hun , Cho Sang-wo , Hwang Jun-ho",
    episodeGuide: "9 episodes",
    media: "https://www.youtube.com/embed/oqxAJKy0ii4", //Done
    isFav: false,
  },
  {
    id: 1,
    imageFile: "images/How.jpg",
    name: "How to get away with a murderer",
    type: "Drama",
    story:
      "A group of ambitious law students and their brilliant criminal defense professor become involved in a twisted murder plot that promises to change the course of their lives.",
    creators: "Peter Nowalk",
    stars: "Viola Davis, Billy Brown, Jack Falahee",
    episodeGuide: "90 episodes",
    media: "https://www.youtube.com/embed/dkb-aBaxkVk", //Done
    isFav: false,
  },
  {
    id: 2,
    imageFile: "images/Vikings.jpg",
    name: "Vikings",
    type: "Action",
    story:
      "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
    creators: " Michael Hirst",
    stars: "Katheryn Winnick, Gustaf Skarsgård, Alexander Ludwig",
    episodeGuide: "93 episodes",
    media: "https://www.youtube.com/embed/Auzs95InJzo", //Done
    isFav: false,
  },
  {
    id: 3,
    imageFile: "images/lacasa.jpg",
    name: "La casa de papel",
    type: "Action",
    story:
      "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    creators: "Álex Pina",
    stars: "Ursula Corbero, Alvaro Morte, Itziar Ituno",
    episodeGuide: "32 episodes",
    media: "https://www.youtube.com/embed/To_kVMMu-Ls", //Done
    isFav: false,
  },
  {
    id: 4,
    imageFile: "images/haunting.jpg",
    name: "The haunting of hill house",
    type: "Horror",
    story:
      "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
    creators: "William Davies",
    stars: "Amir Wilson, Ruby Ashbourne Serkis, Thaddea Graham",
    episodeGuide: "6 episodes",
    media: "https://www.youtube.com/embed/3eqxXqJDmcY", //Done
    isFav: false,
  },
  {
    id: 5,
    imageFile: "images/dark.jpg",
    name: "Dark",
    type: "Horror",
    story:
      "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes therelationships among four families.",
    creators: "Baran bo Odar, Jantje Friese.",
    stars: "Louis Hofmann, Karoline Eichhorn, Lisa Vicari",
    episodeGuide: "26 episodes",
    media: "https://www.youtube.com/embed/BZ5OCIJVErw", //Done
    isFav: false,
  },
  {
    id: 6,
    imageFile: "images/The_Umbrella_Academy.jpg",
    name: "The umbrella academy",
    type: "Comedy",
    story:
      "A family of former child heroes, now grown apart, must reunite to continue to protect the world",
    creators: "Steve Blackman, Jeremy Slater",
    stars: "Elliot Page, Tom Hopper, David Castaneda",
    episodeGuide: "30 episodes",
    media: "https://www.youtube.com/embed/0DAmWHxeoKw", //Done
    isFav: false,
  },
  {
    id: 7,
    imageFile: "images/friends.jpg",
    name: "Friends",
    type: "Comedy",
    story:
      "Follows the personal and professional lives of six twenty to thirty something-year-old friends living in Manhattan.",
    creators: "David Crane, Marta Kauffman",
    stars: "Jennifer Aniston, Courteney Cox, Lisa Kudrow",
    episodeGuide: "235 episodes",
    media: "https://www.youtube.com/embed/hDNNmeeJs1Q", //Done
    isFav: false,
  },
  {
    id: 8,
    imageFile: "images/stranger.jpg",
    name: "Stranger things",
    type: "Horror",
    story:
      "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    creators: "Matt Duffer, Ross Duffer",
    stars: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
    episodeGuide: "34 episodes",
    media: "https://www.youtube.com/embed/mnd7sFt5c3A", //Done
    isFav: false,
  },
  {
    id: 9,
    imageFile: "images/therain.jpg",
    name: "The rain",
    type: "Action",
    story:
      "After a brutal virus wipes out most of the population, two young siblings embark on a perilous search for safety.",
    creators: "Jannik Tai Mosholt, Christian Potalivo, Esben Toft Jacobsen",
    stars: "Alba August, Lucas Lynggaard Tønnesen, Mikkel Boe Folsgaard",
    episodeGuide: " 20 episodes",
    media: "https://www.youtube.com/embed/st6r-8mLW_o", //Done
    isFav: false,
  },
  {
    id: 10,
    imageFile: "images/Ironfist.jpg",
    name: "Iron fist",
    type: "Drama",
    story:
      "A young man is bestowed with incredible martial arts skills and a mystical force known as the Iron Fist.",
    creators: "Scott Buck",
    stars: "Finn Jones, Jessica Henwick, Jessica Stroup",
    episodeGuide: "23 episodes",
    media: "https://www.youtube.com/embed/f9OKL5no-S04", //Done
    isFav: false,
  },
  {
    id: 11,
    imageFile: "images/Theletter.jpg",
    name: "The Letter for the King",
    type: "Drama",
    story:
      "Tiuri, a teenage squire, answers a call for help that sends him on a perilous mission across the three kingdoms to deliver a secret letter to the King.",
    creators: "William Davies",
    stars: "Amir Wilson, Ruby Ashbourne Serkis, Thaddea Graham",
    episodeGuide: "6 episodes",
    media: "https://www.youtube.com/embed/DcSuK7-ICGw", //Done
    isFav: false,
  },
  {
    id: 12,
    imageFile: "images/sabrina.jpg",
    name: "Sabrina",
    type: "Horror",
    story:
      "As her 16th birthday nears, Sabrina must choose between the witch world of her family and the human world of her friends. Based on the Archie comic.",
    creators: "Roberto Aguirre-Sacasa",
    stars: "Kiernan Shipka, Ross Lynch, Lucy Davis",
    episodeGuide: "36 episodes",
    media: "https://www.youtube.com/embed/gENO66DUgaQ", //Done
    isFav: false,
  },
  {
    id: 13,
    imageFile: "images/reasonswhynetflix.jpg",
    name: "13 Reasons why",
    type: "Drama",
    story:
      "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.",
    creators: "Brian Yorkey",
    stars: "Dylan Minnette, Katherine Langford, Christian Navarro",
    episodeGuide: "49 episodes",
    media: "https://www.youtube.com/embed/poUq9ypynKs", //Done
    isFav: false,
  },
  {
    id: 14,
    imageFile: "images/Extracurricular.jpg",
    name: "Extracurricular",
    type: "Action",
    story:
      "A model high school student who's steeped in a world of serious crime finds his double life upended when a classmate takes an interest in his secret.",
    creators: "Kim Dong-Hee",
    stars: "Park Joo-Hyun, Da-bin Jung",
    episodeGuide: "10 episodes",
    media: "https://www.youtube.com/embed/aV_DBz2rKsI", //Done
    isFav: false,
  },
  {
    id: 15,
    imageFile: "images/Dead.jpg",
    name: "Dead to me",
    type: "Drama",
    story:
      "A series about a powerful friendship that blossoms between a tightly wound widow and a free spirit with a shocking secret.",
    creators: "Liz Feldman",
    stars: "Christina Applegate, Linda Cardellini, Sam McCarthy",
    episodeGuide: "21 episodes",
    media: "https://www.youtube.com/embed/BwYBw1raC2o", //Done
    isFav: false,
  },
  {
    id: 16,
    imageFile: "images/barry.jpg",
    name: "Barry",
    type: "Drama",
    story:
      "A hit man from the Midwest moves to Los Angeles and gets caught up in the city's theatre arts scene.",
    creators: "Alec Berg, Bill Hader",
    stars: "Bill Hader, Stephen Root, Sarah Goldberg",
    episodeGuide: "17 episodes",
    media: "https://www.youtube.com/embed/BKaL8jiAGuI", //Done
    isFav: false,
  },
  {
    id: 17,
    imageFile: "images/anne.jpg",
    name: "Anne with an e",
    type: "Drama",
    story:
      "The adventures of a young orphan girl living in the late 19th century. Follow Anne as she learns to navigate her new life on Prince Edward Island, in this new take on L.M. Montgomery's classic novels",
    creators: " Moira Walley-Beckett",
    stars: "Amybeth McNulty, Geraldine James, R.H. Thomson",
    episodeGuide: "27 episodes",
    media: "https://www.youtube.com/embed/S5qJXYNNINo", //Done
    isFav: false,
  },
  {
    id: 18,
    imageFile: "images/centaurworld.jpg",
    name: "Centaur world",
    type: "Animation",
    story:
      "A hardened war horse transported away from battle finds herself in a land that's inhabited by silly, singing centaurs of all shapes and sizes.",
    creators: "Megan Dong",
    stars: "Roman Engel",
    episodeGuide: "20 episodes",
    media: "https://www.youtube.com/embed/ZvB7VwapZ68&feature=emb_title", //Done
    isFav: false,
  },
  {
    id: 19,
    imageFile: "images/HayopKa_KA.jpg",
    name: "Hayop ka",
    type: "Animation",
    story:
      "In this adult animation, perfume sales cat Nimfa is torn between her macho askal boyfriend and a charming, philandering business dog.",
    creators: "Avid Liongoren",
    stars: "Angelica Panganiban, Robin Padilla, Sam Milby",
    episodeGuide: "1h 13min",
    media: "https://www.youtube.com/embed/k2EDRB7U6_I", //Done
    isFav: false,
  },
  {
    id: 20,
    imageFile: "images/gnome-alone.jpg",
    name: "Gnome alone",
    type: "Animation",
    story:
      "When Chloe discovers that her new home's garden gnomes are not what they seem, she must decide between the pursuit of a desired high school life and taking up the fight against the Troggs.",
    creators: "Peter Lepeniotis",
    stars: "Becky G, Josh Peck, Tara Strong",
    episodeGuide: "1h 25min",
    media: "https://www.youtube.com/embed/0ikzndgTn_c", //Done
    isFav: false,
  },
  {
    id: 21,
    imageFile: "images/afterlife.jpg",
    name: "After life",
    type: "Comedy",
    story:
      "After Tony's wife dies unexpectedly, his nice-guy persona is altered into an impulsive, devil-may-care attitude; taking his old world by storm.",
    creators: "Ricky Gervais",
    stars: "Ricky Gervais, Tom Basden, Tony Way",
    episodeGuide: "18 episodes",
    media: "https://www.youtube.com/embed/eIGGKSHMQOM", //Done
    isFav: false,
  },
  {
    id: 22,
    imageFile: "images/French.jpeg",
    name: "The French Dispatch",
    type: "Romantic",
    story:
      "A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in The French Dispatch Magazine",
    creators: "Adrien Brody",
    stars: " Benicio Del Toro, Adrien Brody, Tilda Swinton, Léa Seydoux",
    episodeGuide: "1h 30min",
    media: "https://www.youtube.com/watch?v=TcPk2p0Zaw4", //Done
    isFav: false,
  },
  {
    id: 23,
    imageFile: "images/Princess.jpeg",
    name: "The Princess Bride",
    type: "Romantic",
    story:
      "The story is a classic tale of love and adventure as the beautiful Buttercup, engaged to the odious Prince Humperdinck, is kidnapped and held against her will in order to start a war, It is up to Westley (her childhood beau, now returned as the Dread Pirate Roberts) to save her",
    creators: "Rob Reiner",
    stars: "Rob Reiner , Cary Elwes , Robin",
    episodeGuide: "2h",
    media: "https://www.youtube.com/watch?v=O3CIXEAjcc8", //Done
    isFav: false,
  },
];

let favorite = [];

let filteredArr = [...arr];

let globalGenre;

$(".showAll").click(() => {
  showAll();
});
$(".drama").click(() => {
  drama();
});
$(".horror").click(() => {
  herror();
});
$(".comedy").click(() => {
  comedy();
});
$(".animation").click(() => {
  animation();
});
$(".action").click(() => {
  action();
});
$(".romantic").click(() => {
  romantic();
});

///////////////////////////////////////////////////////////////////// is Favorite Function

const render = (genre) => {
  filteredArr = [...arr];

  if (genre) {
    filteredArr = arr.filter((item, i) => {
      return item.type == genre;
    });
  }

  $(".bodyContent").html("");
  filteredArr.forEach((item, i) => {
    $(".bodyContent").append(`<div class="movie">
     <img src='${item.imageFile}'/>
     <p id='dec-${i}'>${item.name}</p>
     <button class="favBtnbtn-${i} btn btn-secondary btn-sm " ><span>&starf;</span >${
      item.isFav ? "Remove from to Favorite" : "Add to Favorite"
    }</btutton>
     <button class="read-${i}" > Read more</btutton>
   </div>`);

    $(".favBtnbtn-" + i).click(() => {
      isFavorite(item.id);
    });

    $(".read-" + i).click(() => showDescription(item));

    if (item.isFav) {
      $(".favBtnbtn-" + i).text("Remove from Favorite");
    }
  });

  favorite = arr.filter((item) => item.isFav);
};

render();

///////////////////////////////////////////////////////////////////// is Favorite Function

const isFavorite = (id) => {
  arr = arr.map((item) => {
    if (item.id === id) {
      return { ...item, isFav: !item.isFav };
    } else {
      return item;
    }
  });

  localStorage.setItem("arr", JSON.stringify(arr));
  render(globalGenre);
};

///////////////////////////////////////////////////////////////////// is Search Function



/////////////////////////////////////////////////////////////////////////////// (PopUp) Modal Function
const modalContent = document.querySelector(".modalContent");
const closeBtn = document.querySelector(".close");

function showDescription(item) {
  modalContent.style.display = "block";
  modalContent.innerHTML = `<div class="modal-content">
          <span class="close">&times;</span>
          <h3 class="title">${item.name}</h3>
          <iframe src="${item.media}" title="description" class="video"></iframe>
          <p class="desc">${item.story}</p>
        </div>`;

  $(".close").click(() => (modalContent.style.display = "none"));
}

//////////// Show All Button

function showAll() {
  filteredArr = [...arr];
  $(".movie").show();
  globalGenre = undefined;
  render();
}

//////////// Show Drama Button
function drama() {
  $(".movie").hide();
  globalGenre = "Drama";
  render("Drama");
}

////////// Show Horror Button
function herror() {
  $(".movie").hide();
  globalGenre = "Horror";
  render("Horror");
}

////////// Show Comedy Button    1
function comedy() {
  $(".movie").hide();
  globalGenre = "Comedy";
  render("Comedy");
}

////////// Show Animation Button    2
function animation() {
  $(".movie").hide();
  globalGenre = "Animation";
  render("Animation");
}

////////// Show action Button    3
function action() {
  $(".movie").hide();
  globalGenre = "Action";
  render("Action");
}

////////// Show Romantic Button    4
function romantic() {
  $(".movie").hide();
  globalGenre = "Romantic";
  render("Romantic");
}
