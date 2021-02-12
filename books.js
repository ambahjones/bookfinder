 let genres = {
    thrillerMystery: [
     "Winter Counts - David Heska Wanbli Weiden", 
     "The Wife Upstairs - Rachel Hawkins", 
     "Home Before Dark - Riley Sager", 
     "Long Bright River - Liz Moore", 
     "The Sun Down Motel - Simone St. James", 
     "One By One - Ruth Ware", 
     "The Silent Patient - Alex Michaelides", 
     "The Whisper Man - Alex North", 
     "My Sister The Serial Killer - Oyinkan Braithwaite", 
     "The Turn of the Key - Ruth Ware", 
     "I’ll Never Tell - Cathering McKenzie", 
     "The Survivors - Jane Harper"
    ],
    fantasy: [
     "Ninth House - Leigh Bardugo", 
     "The Starless Sea - Erin Morgenstern", 
     "The Priory of the Orange Tree - Samantha Shannon", 
     "Black Leopard Red Wolf - Marlon James", 
     "Magic For Liars - Sarah Gailey", 
     "Holy Sister - Mark Lawrence", 
     "The Invisible Life of Addie LaRue - V.E. Schwab", 
     "The House in the Cerulean Sea - TJ Klune", 
     "The Once and Future Witches - Alex E. Harrow", 
     "Crescent City - Sarah J. Maas", 
     "The Empress of Salt and Fortune - Nghi Vo", 
     "Piranesi - Susanna Clarke"
    ],
    romance: [
     "The Dating Plan - Sarah Desai", 
     "In A Holidaze - Christina Lauren", 
     "Red, White & Royal Blue - Casey McQuiston", 
     "The Bride Test - Helen Hoang", 
     "The Friend Zone - Abby Jimenez", 
     "Regretting You - Colleen Hoover", 
     "One To Watch - Kate Stayman-London", 
     "Sweet Temptation - Cora Reilly", 
     "Something to Talk About - Meryl Wilsner", 
     "You Had Me At Hola - Alexis Daria", 
     "Beach Read - Emily Henry", 
     "This Time Next Year - Sophie Cousens" 
    ],
    horror: [
     "The Institute - Stephen King", 
     "Imaginary Friend - Stephen Chbosky", 
     "Full Throttle - Joe Hill", 
     "Cosmology of Monsters - Shaun Hamill", 
     "Growing Things - Paul Tremblay", 
     "The Remaking - Clay McLeod Chapman", 
     "The Need - Helen Phillips", 
     "Mexican Gothic - Silvia Moreno-Garcia", 
     "The Southern Book Club’s Guide to Slaying Vampires - Grady Hendrix", 
     "Plain Bad Heroines - Emily M. Danforth", 
     "The Only Good Indians - Stephen Graham Jones", 
     "Survivor Song - Paul Tremblay", 
     "If It Bleeds - Stephen King"
    ]
 }

 //chooses random item from arrays
 function getRandomItem(array) {
    return Math.floor(Math.random() * array.length)
 };


 //stores result of for in
 let recommendations = [];

 for(let genre in genres) {
    let randomBook = getRandomItem(genres[genre]);
     switch(genre) {
         case "thrillerMystery":
             recommendations.push(`If you like the intrigue of mysteries and thrillers, check out ${genres[genre][randomBook]}`);
             break;
         case "fantasy":
             recommendations.push(`If you like to explore the worlds of fantasy, check out ${genres[genre][randomBook]}.`);
             break;
         case "romance":
             recommendations.push(`If you like a little bit of romance, check out ${genres[genre][randomBook]}.`);
             break;
         case "horror":
             recommendations.push(`If you want a bit of a scare check out ${genres[genre][randomBook]}, from popular horror.`);
             break;
         default:
             recommendations.push('Give any book a try, just keep reading!');
             break;
     }
 }

 recommendations.forEach(item => console.log(item));



