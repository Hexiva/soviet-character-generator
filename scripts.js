function generate(array) {
  var genNum = Math.floor(Math.random() * array.length);
  var gen = array[genNum];
  return gen;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var ethArray = ["Russian", "Ukrainian", "Armenian","Azerbaijani", "Byelorussian", "Georgian", "Kazakh", "Kyrgyz"];

var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function ageGen(){
  var ageCat = generate(["young", "old"]);
  if (ageCat === "young"){
    var age = getRandomInt(18, 41);
  } else {
    var age = getRandomInt(18, 65);
  }
  return age;
}

function filmGen(age){
  var titleStyle = generate(["X of Y","Adjective Nouns", "Name noun"]);
  if (titleStyle === "X of Y"){
    var noun1 = generate(["Queen", "King", "Lord", "Wall", "Barrier", "Judgement", "Wind", "Fire", "Flood","Flower", "Rose", "Knight", "Chronicle", "Soldier", "Ballad", "Fate", "Poem", "Time", "Father", "Tamer", "Tale", "School"]);
    var noun2 = generate(["Stone", "Ice","the Mad", "the Revolution", "Freedom", "the Gas Station", "Man", "the Sea", "the Desert", "the Arctic", "Eternity", "Humanity","Lions", "Dragons", "a Soldier", "Tigers", "Courage"]);
    var title = noun1 + " of " + noun2;
  } if (titleStyle === "Adjective Nouns"){
    var adjective = generate(["Blue","First", "Serf","Optimistic", "Golden", "Snow", "October", "White", "Deadly", "Cherry", "Third", "Wild", "Clear", "Hussar", "Scarlet", "Black","Striped", "Garnet", "Green", "Little","Russian", "Simple", "Sleepless","Splendid", "Leningrad", "Miles", "Crazy", "Immortal", "Weary","Enchanted", "Spring", "Winter", "Frigid"]);
    var nouns = generate(["Notebook","Tragedy", "Echelon", "Stars", "Nights", "Town", "Swans", "Skies", "Sails", "Journey","Bracelet", "Flame", "Hare", "Story", "Lark", "Souvenir", "Days", "Symphony", "Fire", "Queen", "Day", "Garrison", "Road", "Boy", "Voices", "Sea", "Friends"]);
    var title = "The " + adjective + " " + nouns;
  } if (titleStyle === "Name noun"){
    var name = generate(["Sasha", "Kolya", "Galya", "Anya", "Vasya", "Mitya", "Pavlik", "Tolya", "Grisha", "Ilya", "Vanya", "Kostya", "Nadia", "Nina", "Olya", "Raisa","Sveta", "Yulia", "The Comrade", "The Drummer", "The Captain", "Ivanov", "Smirnov", "Vasiliev", "Nikitin", "Golubev", "Johnson",])
    var noun = generate(["Story", "Childhood", "Brother", "Career", "Love", "Son", "Donkey", "Family", "Fate", "Wedding", "Destiny"])
    var title = name + "'s " + noun;
  }

  return title + " (" + adultEvent(age) + ") ";
}

function oriGen (){
    var oriRandom = getRandomInt(1,10);
    if (oriRandom === 1){
      var ori = "Homosexual";
    } else if (oriRandom === 2){
      var ori = "Bisexual";
    }  else if (oriRandom === 3){
      var ori = "Asexual";
    }  else {
      var ori = "Heterosexual";
    }
    return ori;
}

function persGen (job){
    var persPosArray = ["brilliant", "active", "adaptable", "agreeable", "amiable", "benevolent", "calm", "caring", "challenging", "charismatic", "cheerful", "charming", "clever", "compassionate", "conscientious", "considerate", "contemplative", "courageous", "courteous", "creative", "cultured", "curious", "daring", "debonair", "dedicated", "dignified", "disciplines", "dramatic", "dutiful", "earnest", "efficient", "elegant", "empathetic", "energetic", "enthusiastic", "faithful", "friendly", "fun-loving", "gallant", "generous", "gentle", "good-natured", "hearty", "helpful", "honest", "honorable", "humble", "humorous", "idealistic", "imaginative", "individualistic", "knowledgeable", "logical", "loyal", "methodical", "modest", "neat", "optimistic", "orderly", "passionate","patient", "peaceful", "perceptive", "perfectionist", "persuasive", "playful", "polished", "principled", "protective", "prudent", "rational", "relaxed", "responsible", "romantic", "sage", "scholarly", "selfless", "sensitive", "sentimental", "serious", "shrewd", "sociable", "spontaneous", "steadfast", "stoic", "studious", "suave", "trusting", "vivacious", "wise", "witty",  "ambitious", "artful", "breezy", "businesslike",  "competitive",  "crisp", "determined", "emotional", "enigmatic", "formal","guileless", "impassive", "impressionable", "intense", "irreverent", "mellow", "old-fashioned", "placid", "proud", "quiet", "reserved", "restrained", "retiring", "sarcastic", "self-conscious", "solemn", "stern", "strict", "stubborn","perfectionist","rebellious","absent-minded", "ascetic","competitive","obedient","sarcastic", "cautious", "naive","shy"]
    var persNeutArray = ["catty", "cocky","fussy", "gossipy", "gullible", "haughty", "humorless","grumpy", "tactless", "suspicious", "verbose","workaholic", "worrywart", "know-it-all", "intense", "outspoken", "reserved","unsentimental", "dull", "grim", "shallow","gracious"]
    var persNegArray = ["abrasive","aloof","amoral","anxious","arrogant","calculating","cantankerous","careles", "antisocial", "apathetic", "callous", "immature", "childish", "controlling", "cowardly", "cruel", "cynical","cold","gloomy","complacent","conceited","conformist","demanding", "extravagant", "fanatical", "frivolous", "greedy","gullible", "hypocritical","haughty", "ignorant", "impatient", "impulsive", "indecisive", "inflexible", "insecure", "irrational", "deeply irresponsible", "very judgemental","manipulative", "materialistic", "melodramatic", "mischievous", "morbid", "narcissistic", "narrow-minded","neurotic","nihilistic","needy","nervous", "nosy","obsessive", "paranoid", "pompous","predatory","pessimistic", "prejudiced","sadistic","secretive", "pretentious", "quirky","reactionary","repressed","reckless","self-destructive","seflish","stubborn", "subservient", "superstitious","temperamental", "timid", "vain","vindictive", "volatile","weak-willed","authoritarian","conservative", "unstable", "vacuous",]
    var persArray = persPosArray.concat(persNeutArray,persNegArray);
    var personality = generate(persArray);
    var personality = personality.substr(0,1).toUpperCase()+personality.substr(1);
    return personality;
}

function adultEvent (age) {
  var adulthood = age - 18;
  var adultInt = getRandomInt(0, adulthood);
  var adultEvent = 1963 - adultInt;
  return adultEvent;
}

    $(document).ready(function() {
      $("form").submit(function(event) {
        var age = ageGen();
        var dob = 1963 - age;
        var eth =  generate(ethArray);
        var gender = generate(["Male", "Female"]);

        var jobArray = ["Farmer", "Farm worker", "Police officer", "Factory", "Black-market trader", "Smuggler", "Professional criminal", "Doctor", "Nurse", "Director", "Writer", "Journalist", "Teacher", "Red Army", "GRU", "Painter", "Artist", "Singer", "Composer", "Navy", "Air Force", "Physicist", "Historian", "Engineer", "Rocket scientist", "Nuclear physicist", "Actor", "Musician", "Wrestler", "Football player", "Geologist","Professional chess player", "Janitor", "Builder", "Construction worker","Architect", "Clerk",  "Secretary", "Mathmetician", "Pilot", "Machinist", "Poster artist", "Satirist", "Propagandist",  "Philosopher", "Cosmonaut","Dancer", "Set designer", "Dancer", "Sex worker", "Professor",]

        if (eth === "Russian" || eth === "Ukrainian" || eth === "Armenian" || eth === "Azerbaijani" || eth === "Byelorussian" || eth === "Georgian" || eth === "Moldovan"){
          jobArray = jobArray.concat(["Diplomat", "Apparatchik","Chekist",]);
        }



        if (gender === "Male"){
          if (eth === "Russian"|| eth === "Ukrainian" || eth === "Armenian"|| eth === "Byelorussian" || eth === "Georgian" || eth === "Moldovan"){
            jobArray = jobArray.concat(["Priest", "Bishop"]);
          }
          if (eth === "Azerbaijani" || eth === "Kazakh" || eth === "Kyrgyz" || eth === "Tajik"|| eth === "Turkmen" || eth === "Uzbek"){
            jobArray = jobArray.concat(["Imam", "Travelling mullah"]);
          }

        }

        var job = generate(jobArray);
        // job = "Janitor";
        var personality = persGen(job);

        if (job === "Factory") {
          var jobClass = generate(["Worker at", "Manager of"]);
          var factClass = generate(["bicycles", "phonograph records","textiles", "tires","automobiles", "locomotives", "cameras","steel pipes", "tractors", "typewriters", "paper", "cigarettes","tanks","telephones", "film", "jewelry", "enriched uranium", "missiles",])
          job = jobClass + " a factory that manufactures " + factClass;
        } else if (job === "Black-market trader") {
          var jobClass = generate(["champagne, cognac and wine", "flowers", "foreign records", "perfumes", "chocolate", "women's shoes", "meats", "produce", "stolen jewelry","imported clothing", "cigarettes and cigars","drugs", "foreign clothing", "exotic fruit", "records etched into x-rays", "fake designer perfumes","Western currency", "watered-down perfume","religious ikons", "banned books"]);
          job = job + " who sells " + jobClass;
        } else if (job === "Smuggler") {
          var jobClass = generate(["champagne, cognac and wine", "flowers", "foreign records", "perfumes", "chocolate", "women's shoes", "meats", "produce", "imported clothing", "cigarettes and cigars","drugs", "foreign clothing", "exotic fruit", "records etched into x-rays", "fake designer perfumes","Western currency", "watered-down perfume","religious ikons", "banned books"]);
          job = job + " who trafficks in " + jobClass;
        } else if (job === "Professional criminal") {
          var jobClass = generate(["Professional criminal who makes a basic living","Professional criminal who makes a basic living", "Professional criminal who makes a basic living", "Professional criminal who is known for",  "Professional criminal who is known for", "Professional criminal who makes a basic living","Crime boss"]);
          var crimeOneClass = generate(["picking pockets", "robbing houses", "selling stolen goods", "as an enforcer"])
          var crimeTwoClass = generate(["picking pockets", "robbing houses", "selling stolen goods","working an enforcer", "carrying out contract killings",])
          if (jobClass === "Professional criminal who makes a basic living"){
            job = jobClass + " " + crimeOneClass;
          } else if (jobClass === "Professional criminal who is known for"){
            job = jobClass + " " + crimeTwoClass;
          } else if (jobClass === "Crime boss"){
            job = jobClass;
          }
        } else if (job === "Doctor") {
          var jobClass = generate(["Pediatrician", "Psychiatrist", "Neurologist", "Oncologist", "ER surgeon", "Pharmacist","Surgeon", "Anesthesiologist", "Gynecologist", "Doctor"]);
          job = jobClass;
        } else if (job === "Director") {
          var jobClass = generate(["romantic comedies", "propaganda films", "documentaries", "propagandistic documentaries", "musical films", "comedy films", "romance films", "historical dramas", "science fiction films", "animated films","avant-garde experimental films"]);
          var title = filmGen(age);
          job = "Director of " + jobClass + ", best known for the movie " + title;
        } else if (job === "Writer"){
          var jobClass = generate(["Speechwriter", "Academic writer", "Nonfiction writer","Novellist", "Writer of short stories", "Film writer", "Poet"]);
          if (jobClass === "Academic writer") {
            var country = generate(["Kazakhstan", "Azerbaijan", "Georgia", "Russia", "Armenia","Esonia", "Kirzhizia", "Latvia", "Lithuania", "Moldova", "Tajikstan", "Turkmenistan", "Ukraine", "Uzbekistan", "Germany", "the United States", "China", "Japan"]);
            var classicLit = generate(["Dostoevsky", "Tolstoy", "Shakespeare", "Charles Dickens", "Arthur Conan Doyle"])
            var animalType = generate(["fish", "deer", "bears", "cows", "newts", "rats", "mice", "dogs", "lizards", "snakes","cats", "slugs",])
            var article = generate(["the application of Marxist theory to " + classicLit, "hormone production in " + animalType, "mating behavior in " + animalType, "the history of " + country, "dialects spoken in "+ country, "the history of religion in " + country, "cancer in " + animalType, "genetic disorders in " + animalType, "genetic disorders"])
            job = "Academic writer, best known for an article on " + article;
          } else if (jobClass==="Nonfiction writer"){
              var ideology = generate(["fascism", "Marxism", "capitalism"])
              var country = generate(["Kazakhstan", "Azerbaijan", "Georgia", "Russia", "Armenia","Esonia", "Kirzhizia", "Latvia", "Lithuania", "Moldova", "Tajikstan", "Turkmenistan", "Ukraine", "Uzbekistan", "Germany", "the United States", "China", "Japan"]);
              var histFigure = generate(["Lenin", "Feliks Dzerzhinsky", "Stalin", "Krushchev","Marx",])
            var nonfiction = generate(["how to have a loving marriage", "the life of " + histFigure, "the history of " + ideology, "mathematics", "physics", "music","how to write music", "sociology", "engineering", "sewing",])
            job = "Nonfiction writer, best known for a book on " + nonfiction;
          } else if (jobClass ==="Novellist"){
            var title = filmGen(age);
            job = "Novellist, best known for " + title;
          } else if (jobClass ==="Writer of short stories"){
            var stories = generate(["mystery stories", "stories about the struggles of the working class", "historical stories", "comedic stories", "stories centered around the lives of young women", "short romantic stories", "stories for children", "science fiction stories", "stories about war", "stories about crime and espionage", "avant-garde experimental stories", "stories about rural life","stories about urban life"])
            job = jobClass + ", known for " + stories;
          } else if (jobClass ==="Film writer"){
            var title = filmGen(age);
            job = "Film writer, best known for " + title;
        } else if (jobClass ==="Poet"){
          var poetry = generate(["love poetry", "poetry about the glory of the Soviet Union", "poetry subtly critical of the regime", "tragic poetry", "comedic poetry", "poetry about war", "poetry about rural life", "poetry about urban life"]);
          job = "Poet, known for writing " + poetry;
      } else {
        job = jobClass;
      }
    } else if (job === "Teacher"){
      var teachClass = generate(["History", "Science", "Literature", "Mathematics",]);
      var cityClass = generate(["Yerevan, Armenian SSR", "Baku, Azerbaijan SSR", "Minsk, Byelorussian SSR", "Tbilisi, Georgian SSR", "Alma-Ata, Kazakh SSR",  "Riga, Latvian SSR","Moscow, Russian SSR", "Dushanbe, Tajik SSR", "Kyiev, Ukrainian SSR", "Tashkent, Uzbek SSR", "Leningrad, Russian SSR", "Stalingrad, Russian SSR", "Sverdlovsk, Russian SSR",])
      var schoolClass = generate(["the only school in a small town", "a big school in " + cityClass +",", "a small school in " + cityClass + "," + " for the children of elites"])
      job = teachClass + " teacher at " + schoolClass;
    } else if (job=== "Journalist"){
      var jobClass = generate([" a small local newspaper", "Pravda", "Izvestia", "Komsomolskaya Pravda", "Krasnaya Zvezda", "Sovetskiy Sport", "Trud", "Pionerskaya Pravda"])
      job = "Journalist at " + jobClass;
    } else if (job === "Red Army"){
              var cityClass = generate(["Yerevan, Armenian SSR", "Baku, Azerbaijan SSR", "Minsk, Byelorussian SSR", "Tbilisi, Georgian SSR", "Alma-Ata, Kazakh SSR",  "Riga, Latvian SSR","Moscow, Russian SSR", "Dushanbe, Tajik SSR", "Kyiev, Ukrainian SSR", "Tashkent, Uzbek SSR", "Leningrad, Russian SSR", "Stalingrad, Russian SSR", "Sverdlovsk, Russian SSR","East Germany", "East Berlin",])
      var borderClass= generate(["Japan", "North Korea", "China", "Mongolia", "Afghanistan", "Iran", "Turkey", "Romania", "Hungary", "Czechoslovakia", "Poland", "Lithuania", "Latvia", "Estonia", "Finland", "Norway"]);
      var stationed = generate(["in " + cityClass, "on the Berlin Wall", "on the inner German border", "on the border between the USSR and " + borderClass,])
      var rankClass = generate(["Officer", "Enlisted"]);
      var offClass = generate(["general", "colonel", "major", "major general", "lieutenant colonel", "lieutenant", "captain",]);
      var enlClass = generate(["sergeant", "corporal", "private",]);
      if (rankClass ==="Enlisted"){
        job = "Red Army " + enlClass + " stationed " + stationed;
      } else if (rankClass ==="Officer"){
        job = "Red Army " + offClass + " stationed in " + cityClass;
      }
    } else if (job === "GRU"){
        var offClass = generate(["general", "colonel", "major", "major general", "lieutenant colonel", "lieutenant", "captain",]);
        var cityClass = generate(["Yerevan, Armenian SSR", "Baku, Azerbaijan SSR", "Minsk, Byelorussian SSR", "Tbilisi, Georgian SSR", "Alma-Ata, Kazakh SSR",  "Riga, Latvian SSR","Moscow, Russian SSR", "Dushanbe, Tajik SSR", "Kyiev, Ukrainian SSR", "Tashkent, Uzbek SSR", "Leningrad, Russian SSR", "Stalingrad, Russian SSR", "Sverdlovsk, Russian SSR","East Germany", "East Berlin",]);
        var cityName = generate(["London", "Tehran", "Bonn", "Washington, DC", "Istanbul",]);
      var jobClass = generate (["under diplomatic cover at the " + cityName + " embassy", "undercover as a journalist in " + cityName, "stationed in " + cityClass]);
      job = "GRU " + offClass + " " + jobClass;
    } else if (job==="Painter"){
      var paintClass = generate(["impressionistic paintings", "surreal paintings", "paintings of rural landscapes", "paintings of sailing ships", "portraits", "paintings of animals", "paintings of beautiful woman", "paintings of handsome men",]);
      job = "Painter, known for " + paintClass;
    } else if (job ==="Artist"){
      var job = generate(["Illustrator", "Experimental artist", "Propaganda poster artist", "Book cover artist", "Scientific illustrator", "Children's book illustrator", "Animator", "Political cartoonist", "Portrait artist",])
    } else if (job ==="Singer"){
      var ecClass = generate(["popular ", "struggling "])
      job = generate([ecClass + "jazz singer", ecClass + "opera singer",ecClass +  "estrada artist", "singer in a " + ecClass + " VIA band","singer in a " + ecClass + " underground rock band",])
      job = job.substr(0,1).toUpperCase()+job.substr(1);
    } else if (job === "Composer"){
      var job = generate(["Composer of classical scores", "Composer of film scores", "Opera composer", "Composer of VIA music"]);
    } else if (job === "Navy"){
      var shipType = generate(["ship","submarine"])
      var stationed = generate(["in the Arctic", "in the Pacific Ocean", "in the Black Sea", "in the  Mediterranean Sea", "in the Baltic Sea","in the Caspian Sea"])
      var offClass = generate(["Fleet admiral", "Admiral", "Vice admiral", "Rear admiral", "Captain", "Commander", "Lieutenant commander", "Ensign", "Midshipman",]);
      var enlClass = generate(["Chief warrant officer", "Warrant officer", "Petty officer", "Seaman", "Seaman recruit"]);
      var rankClass = generate([offClass, enlClass]);
      job = rankClass + " stationed on a " + shipType + " " + stationed;
    } else if (job === "Air force"){
              var cityClass = generate(["Yerevan, Armenian SSR", "Baku, Azerbaijan SSR", "Minsk, Byelorussian SSR", "Tbilisi, Georgian SSR", "Alma-Ata, Kazakh SSR",  "Riga, Latvian SSR","Moscow, Russian SSR", "Dushanbe, Tajik SSR", "Kyiev, Ukrainian SSR", "Tashkent, Uzbek SSR", "Leningrad, Russian SSR", "Stalingrad, Russian SSR", "Sverdlovsk, Russian SSR","East Germany", "East Berlin",])
      var jobClass = generate(["general", "colonel", "major", "major general", "lieutenant colonel", "lieutenant", "captain", "sergeant", "corporal", "private",]);
      if (jobClass === "colonel" || jobClass === "major" || jobClass === "lieutenant colonel" || jobClass === "lieutenant" || jobClass === "captain"){
        var pilClass = generate(["Pilot", "Pilot", "Pilot", "Desk"]);
        if (pilClass === "Pilot"){
          var pilotType = generate(["bomber", "fighter", "cargo", "reconnaissance"])
          job = "Air force " + jobClass + " and " + pilotType + " pilot"
        } else {
          job = "Air force " + jobClass + " who flies a desk at an airbase in " + cityClass;
        }
      } else if (jobClass === "major general" || jobClass === "general") {
        job = "Air force " + jobClass + " who runs an airbase in " + cityClass;
      } else {
        job = "Air force " +jobClass + " stationed at an airbase in " + cityClass;
      }
    } else if (job ==="Historian"){
      var jobClass = generate(["religious", "Kazakh", "Azerbaijani", "Jewish", "Muslim", "Tatar", "Armenian", "Georgian", "Tajik", "Uzbek", "Lithuanian", "Estonian", "Byelorussian", "Ukrainian", "Russian", "Western", "Eastern",]);
      var eraClass = generate(["in medieval times", "in the early modern period", "around the time of the FIrst World War", "in the interwar period","recent"])
      if (eraClass ==="recent"){
        job = "Historian who specializes in recent " + jobClass + " history";
      } else {
        job = "Historian who specializes in " + jobClass + " history " + eraClass;
      }
    } else if (job === "Actor"){
      var jobClass = generate(["Theater", "Movie", "Movie", "Movie"]);
      if (jobClass === "Theater"){
        job = "Theater actor";
      } else {
        roleClass = generate(["love interest", "best friend", "villain", "detective", "hero","mentor", "comic relief"]);
        adjClass = generate(["brooding", "attractive", "witty", "brilliant", "mysterious", "wise", "charming"])
        job = "Actor, best known for playing the " + adjClass + " " + roleClass + " in the film " + filmGen(age);
              }
    }  else if (job ==="Musician"){
      var jobClass = generate(["a VIA band", "the orchestra", "an underground rock band",])
      if (jobClass === "orchestra"){
        var instrType = generate(["violin player", "percussionist", "piano player", "saxophone player", "flute player"]);
      } else {
        var instrType = generate(["guitar player", "violin player", "drummer", "piano player", "saxophone player", "flute player"]);
      }
      job = instrType + " in " + jobClass;
      job = job.substr(0,1).toUpperCase()+job.substr(1);
    } else if (job ==="Janitor"){
      var factClass = "a factory that manufactures " + generate(["bicycles", "phonograph records","textiles", "tires","automobiles", "locomotives", "cameras","steel pipes", "tractors", "typewriters", "paper", "cigarettes","tanks","telephones", "film", "jewelry", "enriched uranium", "missiles",]);
        var cityClass = generate(["Yerevan, Armenian SSR", "Baku, Azerbaijan SSR", "Minsk, Byelorussian SSR", "Tbilisi, Georgian SSR", "Alma-Ata, Kazakh SSR",  "Riga, Latvian SSR","Moscow, Russian SSR", "Dushanbe, Tajik SSR", "Kyiev, Ukrainian SSR", "Tashkent, Uzbek SSR", "Leningrad, Russian SSR", "Stalingrad, Russian SSR", "Sverdlovsk, Russian SSR","East Germany", "East Berlin",])
      var embClass = generate(["American", "British", "Chinese", "North Korean", "Iranian", "East German", "West German"]);
      var musClass = generate(["an art museum", "an anti-religious museum", "an aviation museum", "a museum of the Revolution","a military history museum"])
      var jobClass = generate(["a worker's cafeteria", factClass, "a theater", musClass, "a university in " + cityClass, "the " + embClass + " embassy in Moscow","a movie studio", "a Party office", "a workers' club"])
      job = "Janitor at "+ jobClass;
    }






        if (gender === "Male"){
          if (eth === "Russian" || eth === "Ukrainian"){
            var firstArray = ["Afanasy", "Agafon", "Alexamder", "Alexei", "Anatoli", "Andrei", "Antip", "Anton", "Aristarkh", "Arkadi","Arseni", "Artemiy", "Artur", "Bogdan", "Boris", "Borislav", "Daniil", "Demian", "Denis", "Dmitri", "Eduard", "Eldar", "Felix", "Fyodor", "Foma", "Gavril", "Gennady", "Georgi", "Gerasim", "Gleb", "Gordei", "Grigori", "Ignati", "Ilya", "Iosif", "Irakli", "Ivan", "Kirill", "Konstantin", "Lavrentiy", "Leonid", "Leontiy", "Leo", "Lev", "Maxim", "Mikhail", "Nikifor", "Nikita", "Nikolai", "Oleg", "Osip", "Pavel", "Phillip", "Pyotr","Roman", "Ruslan", "Semyon", "Sergey", "Stanislav", "Stepan", "Taras", "Timofey", "Timur", "Vadim", "Valentin", "Valeriy", "Viktor", "Vitaliy", "Vladislav", "Vasiliy", "Vyacheslav", "Vladimir", "Vsevolod", "Yakov", "Yaroslav", "Yefim", "Yefrem", "Egor", "Evgeni", "Yuri", "Zakhar"]

            var patrArray = ["Afanasye", "Agafono", "Alexandro", "Alexeye", "Anatolye", "Andreye", "Antipo", "Antono", "Aristarkho", "Arkadye", "Arsenye", "Artyomo", "Arturo", "Bogdano","Boriso", "Borislawo", "Daniilo", "Demiano", "Deniso", "Dmitriye", "Eduardo", "Eldaro", "Felixo", "Fyodoro", "Fomo", "Gavrilo", "Gennadye", "Georgie", "Gerasimo", "Glebo", "Gordeye", "Grigorye", "Ignatye", "Ilyi", "Iosifo", "Irakliye", "Ivano", "Kirillo", "Konstantino", "Lavrentiye", "Leonido", "Leontiye", "Lvo", "Maximo","Mikhailo", "Nikiforo", "Nikiti", "Nikolaye", "Olego", "Osipo", "Pavlo", "Phillipo", "Petro","Romano", "Ruslano", "Semyono", "Sergeye", "Stanislavo", "Stepano", "Taraso", "Timofeye", "Timuro", "Vadimo", "Valentino", "Valerye", "Viktoro", "Vitalye", "Vladislavo", "Vasiliye", "Vyacheslavo", "Vladimiro", "Vsevolodo", "Yakovle", "Yaroslavo", "Yefimo", "Yefremo", "Egoro", "Evgenye", "Yurie", "Zakharo"]

            var surArray = ["Aleksandrov", "Alekseev", "Andreev", "Antonov", "Bogdanov", "Bogomolov", "Borisov", "Chaykovsky", "Fedorov", "Filippov", "Fyodorov", "Ignatiev", "Ignatov", "Isaev", "Ivanov", "Konstantinov", "Kovalchuk","Kovalev", "Kovalyov", "Kozlov", "Krupin", "Kuznetsov", "Lagunov", "Lebedev", "Maksimov", "Markov", "Matveyev", "Mdeved", "Menik", "Mikhailov", "Morozov", "Nikolayev", "Novikov", "Orlov", "Pasternak", "Pavlov", "Pavlovsky", "Petrov", "Popov", "Romanov", "Shvets", "Smirnov", "Sobol", "Sokolov", "Sokolovsky", "Utkin", "Vasiliev", "Viktorov", "Vinogradov", "Volkov", "Voronin", "Yakovlev","Zima"]

            var name = generate(firstArray) + " " + generate(patrArray) + "vich " + generate (surArray);
          } else if (eth === "Armenian"){
            var firstArray = ["Aleks", "Aleksandr", "Alen", "Ara", "Aram", "Areg", "Aren", "Ari", "Arman", "Arsen", "Artur", "Avag","Avetis","Azat", "Baghdasar", "Bagrat", "Bedros", "Boghos", "Daniel", "Davit", "Eduard", "Evard", "Garegin", "Garen", "Geghard", "Gevorg", "Gor", "Grigor", "Gurgen", "Hagop", "Haig", "Haik", "Hakob", "Hamlet", "Harut", "Hayk", "Henrik", "Hovhannes", "Hovik", "Hovo", "Hovsep", "Jirair", "Karekin", "Keghart", "Kevork", "Khachatur", "Khajag", "Khazak", "Krikor", "Kristapor", "Leo", "Levon", "Manvel", "Mark", "Matevos", "Mikayel", "Narek", "Nazar", "Nazaret", "Nerses", "Ohannes", "Petros", "Poghos", "Rafayel", "Rouben", "Rudolf", "Sahak", "Samvel", "Sargis", "Sarkis", "Sergo", "Sevan", "Spartak", "Stepan", "Taniel", "Taron", "Tigran", "Toros", "Vahan", "Vardan", "Vartan", "Vazgen", "Vosgi", "Voski", "Zhirayr"]

              var surArray = ["Abrahamyan", "Adamyan", "Aleksanyan", "Arakelyan", "Arshakyan", "Arzumanyan", "Aslanyan", "Avagyan", "Avetisya", "Babayan", "Boyadjian", "Dadalyan", "Baghdasaryan", "Barseghyan", "Danielyan", "Darbinyan", "Davtyan", "Demirdjian", "Gabrielyan", "Galstyan", "Gasparyan", "Gevorgyan", "Gharibyan", "Gazaryan", "Ghukasyan", "Gigoryan", "Hakobyan", "Hambardzumyan", "Harutyunyan", "Hovhannisyan", "Hovsepyan", "Khachatryan", "Kirakosyan", "Kocharyan", "Manukyan", "Margaryan", "Martirosyan", "Melkonyan", "Mikayelyan", "Minasyan", "Mirzoyan", "Mkhitaryan", "Mkrtchyan", "Mnatsakanyan", "Muradyan", "Nazaryan", "Nersisyan", "Ohanyan", "Petrosyan", "Poghosyan", "Safaryan", "Sahakyan", "Samvelyan", "Sargsyan", "Setrakian", "Shahinyan", "Simonyan", "Soghomonyan", "Stepanyan", "Timuryan", "Tonoyan", "Torosyan", "Tovmasyan", "Vardanyan", "Voskanyan", "Yeghiazaryan", "Yesayan", "Zakaryan"]

              var name = generate(firstArray) + " " + generate (surArray);

          } else if (eth === "Azerbaijani"){
            var firstArray = ["Abdulla","Əhməd", "Əli", "Alim", "Anar", "Arif", "Aslan", "Ayaz", "Azad", "Əziz", "Baxtiyar", "Cəfər", "Davud", "Elçin", "Eldar", "Elnur", "Elşad", "Emin", "Fərhad","Fərid","Günay", "Həsən", "Hüseyn","İbrahim","İlham","İlkin","İsa","İslam","İsmayıl", "Kəmal","Lətif","Məhəmməd","Məmməd","Murad", "Nazim", "Perviz", "Qulu", "Rafiq", "Ramazan", "Ramiz","Rəşad", "Rasim", "Rizvan", "Ruslan", "Rüstəm", "Şamil", "Samir", "Shamil", "Tahir", "Telman", "Tural", "Ülvi", "Vahid", "Vüqar", "Vüsal","Yusif","Zaur"]

              var surArray = ["Mammadov", "Aliyev", "Hüseynov", "Hasanov", "Quliyev", "Ismayilov", "Ahmadov", "Abdullayev","Abbasov", "Cafarov", "Ağayev","Karimov", "Qasimov", "Cafarov", "Babayev", "Ağayev","Ibrahimov","Haciyev","Qurbanova","Bayramov","Qurbanov", "Mustafeyev", "Mirzayev","Rzayev","Valiyev", "Musayev", "Musayev","Zeynalov", "Asgarov", "Süleymanov", "Safarov", "Rahimov", "Asgarov", "Rüstamov", "Süleymanov", "Tağiyev","Bağirov","Xalilov","Rahimov", "Maharramov","Tağiyev","Allahverdiyev","Sadiqov","Muradov", "Muradov", "Maharramov", "Mehdiyev","Asadov","Mamedov","Mahmudov","Asadov","Alakbarova", "Azizov", "Orucov", "Yusifov", "Alakbarov", "Aslanov", "Kazimov", "Samadov","Isayev","Nabiyev","Şirinov","Nasirov","Dadaşov","Isgandarov","Nacafov","Nağiyev","Imanov", "Şükürov","Imanov","Rasulov", "Paşayev","Şükürov", "Cavadov","Cabbarov","Seyidov","Hamidov", "Qahramanov", "Malikov", "Salimov", "Mamedov", ]

              var name = generate(firstArray) + " " + generate (surArray);

          } else if (eth === "Byelorussian"){
            var firstArray = ["Sergey", "Andrey", "Aleksandr", "Dmitriy", "Vladimir", "Pavel", "Aleksey", "Evgeniy", "Denis", "Igor", "Nikolay", "Maksim", "Ivan", "Artyom", "Mikhail", "Nikita", "Ilya", "Oleg", "Viktor", "Roman","Anton", "Vadim", "Kiril", "Yuriy", "Vitaliy","Vladislav", "Konstantin", "Artem", "Stanslav", "Ruslan", "Artur", "Valeriya", "Vasiliy",]

            var surArray = ["Ivanov", "Novik", "Moroz", "Novikov", "Volkov", "Kravchenko", "Kovalenko", "Petrov", "Novikov", "Kotov", "Kravchenko", "Makarevich", "Kovalchuk", "Karpovich", "Pashkevich","Kozlov", "Shevchenko", "Kotov", "Morozov", "Klimovich", "Smirnov", "Romanov", "Bondarenko", "Stankevich", "Tarasevich", "Mironov", "Marchenko",  "Lukashevich", "Zaytsev", "Kot","Savchenko"]

            var name = generate(firstArray) + " " + generate (surArray);
          } else if (eth === "Georgian"){
            var firstArray = ["Giorgi","Davit", "Aleqsandre", "Irakli", "Zurab", "Levan","Nikoloz", "Mikheil", "Gocha", "Givi", "Mamuka", "Daviti", "Lasa", "Zaza","Avtandil","Nika", "Gela", "Tamaz", "Luka", "Salva", "Teimuraz", "Guram", "Nodar", "Vladimer", "Zurabi", "Levani", "Vaja", "Tornike", "Beqa", "Ivane", "Sergo", "Vakhtang", "Ilia", "Gia", "Tengiz","Amiran",]

            var surArray = ["Beridze", "Kapandze", "Gelashvili", "Maisuradze", "Giorgadze", "Tsiklauri", "Lomidze", "Nozadze", "Bolqvadze", "Abuladze", "Miqeladze","Tabatadze", "Medolishvili", "Shengelia", "Gogoladze", "Diasamidze", "Dolidze", "Maruashvili", "Tsertsvadze", "Qatamadze", "Dzneladze", "Dumbadze", "Surmanidze", "Meladze", "Sikharulidze",]

            var name = generate(firstArray) + " " + generate (surArray);
          } else if (eth === "Kazakh"){
            var firstArray = ["Sergey", "Vladimir", "Aleksandr", "Ruslan", "Andrey", "Azamat", "Viktor", "Talgat", "Nikolay", "Serik", "Dmitriy", "Nursultan", "Denis", "Ivan","Erzhan","Arman", "Timur", "Nurlan", "Alexey", "Igor", "Marat", "Erlan", "Kanat", "Evgeniy", "Mikhail", "Kuanysh", "Bakhytzhan","Pavel", "Oleg", "Nurzhan", "Roman", "Maksim", "Orken", "Dauren", "Askar", "Daulet", "Murat", "Darkhan", "Bauyrzhan", "Ertugan"]

            var surArray = ["Kenes", "Omarov", "Sultanov", "Aliev", "Akhmetov", "Umarov", "Belgibaev", "Kemelov", "Bolatbek","Ivanov", "Kambarov", "Iskakov", "Boyko", "Smagulov", "Omarov", "Ospanov", "Serikov", "Tsoy", "Suleymenov", "Karimov", "Ibragimov", "Bondarenko", "Eleusiz", "Asanov", "Petrov", "Kaliev", "Nigmashev", "Shevchenko", "Popov", "Valiev", "Muratov"]

            var name = generate(firstArray) + " " + generate (surArray);
          } else if (eth === "Kyrgyz"){
            var firstArray = ["Uulu", "Kyzy", "Aleksandr", "Nurlan", "Sergey", "azamat", "Nurbek","Vladimir", "Ruslan", "Aybek", "Ulan", "Kubanych", "Mirlan","Taalaybek", "Bakyt", "Altynbek", "Baktybek", "Nikolay", "Rustam", "Akylbek", "Kanybek","Almaz", "Zamirbek", "Almazbek", "Viktor", "Maksat", "Bakytbek", "Daniyar", "Ulanbek", "Talantbek", "Marat", "Andrey", "Adilet", "Zhanybek", "Mirbek", "Dmitriy", "Anatoliy", "Yuriy", "Kanatbek", "Aleksey", "Evgeniy", "Alisher",]

            var surArray = ["Ismailov", "Akmatov", "Abdullaev", "Osmonov", "Abdullaev", "Sulaymanov", "Isakov", "Ergeshov", "Isakov", "Kadyrov", "Aliev", "Sydykov", "Sultanov", "Sydykov", "Karimov", "Asanov", "Mamatov", "Yuldashev", "Musaev", "Abdyldaev", "Kim", "Musaev", "Zhumabaev", "Abdyldaev", "Mamytov", "Yusupov",]

            var name = generate(firstArray) + " " + generate (surArray);
          }

        }

        if (gender === "Female"){
          if (eth === "Russian" || eth === "Ukrainian"){
            var firstArray = ["Agrippina", "Albina", "Alevtina", "Alexandra", "Alina", "Alisa", "Alyona", "Alla", "Anastasia", "Anisya", "Anna", "Antonina", "Arina", "Asya", "Avdotya", "Daria", "Diana", "Dina", "Edita", "Eleonora", "Evelina", "Faina", "Falina", "Inga", "Irina", "Klara", "Kristina", "Larisa", "Lidiya", "Liliya", "Ludmila", "Lyubov", "Maya", "Margarita", "Maria", "Marina", "Matryona", "Nadezhda", "Natalya","Nina", "Olga", "Oxana", "Raisa", "Ruslana", "Serafima", "Sofia", "Svetlana", "Tatiana", "Valentina", "Valeria", "Varvara", "Vasilisa", "Vera", "Veronika", "Viktoria", "Xenia", "Ekaterina", "Yelena", "Elizaveta", "Evgeniya", "Yulia", "Zoya"]

            var patrArray = ["Afanasye", "Agafono", "Alexandro", "Alexeye", "Anatolye", "Andreye", "Antipo", "Antono", "Aristarkho", "Arkadye", "Arsenye", "Artyomo", "Arturo", "Bogdano","Boriso", "Borislawo", "Daniilo", "Demiano", "Deniso", "Dmitriye", "Eduardo", "Eldaro", "Felixo", "Fyodoro", "Fomo", "Gavrilo", "Gennadye", "Georgie", "Gerasimo", "Glebo", "Gordeye", "Grigorye", "Ignatye", "Ilyi", "Iosifo", "Irakliye", "Ivano", "Kirillo", "Konstantino", "Lavrentiye", "Leonido", "Leontiye", "Lvo", "Maximo","Mikhailo", "Nikiforo", "Nikiti", "Nikolaye", "Olego", "Osipo", "Pavlo", "Phillipo", "Petro","Romano", "Ruslano", "Semyono", "Sergeye", "Stanislavo", "Stepano", "Taraso", "Timofeye", "Timuro", "Vadimo", "Valentino", "Valerye", "Viktoro", "Vitalye", "Vladislavo", "Vasiliye", "Vyacheslavo", "Vladimiro", "Vsevolodo", "Yakovle", "Yaroslavo", "Yefimo", "Yefremo", "Egoro", "Evgenye", "Yurie", "Zakharo"]

            var surArray = ["Aleksandrov", "Alekseev", "Andreev", "Antonov", "Bogdanov", "Bogomolov", "Borisov", "Chaykovsky", "Fedorov", "Filippov", "Fyodorov", "Ignatiev", "Ignatov", "Isaev", "Ivanov", "Konstantinov", "Kovalchuk","Kovalev", "Kovalyov", "Kozlov", "Krupin", "Kuznetsov", "Lagunov", "Lebedev", "Maksimov", "Markov", "Matveyev", "Mdeved", "Menik", "Mikhailov", "Morozov", "Nikolayev", "Novikov", "Orlov", "Pasternak", "Pavlov", "Pavlovsky", "Petrov", "Popov", "Romanov", "Shvets", "Smirnov", "Sobol", "Sokolov", "Sokolovsky", "Utkin", "Vasiliev", "Viktorov", "Vinogradov", "Volkov", "Voronin", "Yakovlev","Zima"]

            var name = generate(firstArray) + " " + generate(patrArray) + "vna " + generate (surArray) + "a";
          } else if (eth==="Armenian"){
              var firstArray = ["Aghavni", "Almast", "Anahid", "Anahit", "Angelina", "Ani", "Anna", "Anoush", "Arax", "Arevig", "Arevik", "Arpi", "Berjouhi", "Elen", "Eva", "Gadar", "Gayane", "Gohar", "Hourig", "Hurik", "Karine", "Katar", "Kohar", "Lena", "Lilit", "Lucineh", "Mane", "Maral", "Margarid", "Margarit", "Mari", "Maria", "Mariam", "Marine", "Meri","Nare", "Narine", "Perchuhi", "Ruzan","Ruzanna", "Sevan", "Siran", "Siranush", "Sirvard", "Sirvart", "Sofi", "Sona", "Susanna", "Svetlana", "Taguhi", "Takouhi", "Talin", "Taline", "Tatev", "Varduhi", "Vartouhi", "Viktorya", "Vosgi", "Voski", "Yeva", "Zabel"]

              var surArray = ["Abrahamyan", "Adamyan", "Aleksanyan", "Arakelyan", "Arshakyan", "Arzumanyan", "Aslanyan", "Avagyan", "Avetisya", "Babayan", "Boyadjian", "Dadalyan", "Baghdasaryan", "Barseghyan", "Danielyan", "Darbinyan", "Davtyan", "Demirdjian", "Gabrielyan", "Galstyan", "Gasparyan", "Gevorgyan", "Gharibyan", "Gazaryan", "Ghukasyan", "Gigoryan", "Hakobyan", "Hambardzumyan", "Harutyunyan", "Hovhannisyan", "Hovsepyan", "Khachatryan", "Kirakosyan", "Kocharyan", "Manukyan", "Margaryan", "Martirosyan", "Melkonyan", "Mikayelyan", "Minasyan", "Mirzoyan", "Mkhitaryan", "Mkrtchyan", "Mnatsakanyan", "Muradyan", "Nazaryan", "Nersisyan", "Ohanyan", "Petrosyan", "Poghosyan", "Safaryan", "Sahakyan", "Samvelyan", "Sargsyan", "Setrakian", "Shahinyan", "Simonyan", "Soghomonyan", "Stepanyan", "Timuryan", "Tonoyan", "Torosyan", "Tovmasyan", "Vardanyan", "Voskanyan", "Yeghiazaryan", "Yesayan", "Zakaryan"]

              var name = generate(firstArray) + " " + generate (surArray);

          } else if (eth === "Azerbaijani"){
            var firstArray = ["Əminə", "Arzu", "Aygül","Aygün", "Aylin", "Aynur", "Aysel", "Cəmilə","Elmira", "Fatma", "Fidan", "Firuza", "Gülnar", "Gülnarə","Günay", "Günel","İradə", "Jalə", "Kəmalə","Könül", "Leyla", "Mədinə", "Maral", "Nərgiz", "Nərmin", "Nərminə", "Ofeliya", "Pərvanə", "Pərvin", "Səkinə","Sevda", "Sevinc", "Sevinj", "Tahirə","Təranə", "Ülviyyə", "Vüsalə", "Zemfira","Zeynəb"]

              var surArray = ["Mammadov", "Aliyev", "Hüseynov", "Hasanov", "Quliyev", "Ismayilov", "Ahmadov", "Abdullayev","Abbasov", "Cafarov", "Ağayev","Karimov", "Qasimov", "Cafarov", "Babayev", "Ağayev","Ibrahimov","Haciyev","Qurbanova","Bayramov","Qurbanov", "Mustafeyev", "Mirzayev","Rzayev","Valiyev", "Musayev", "Musayev","Zeynalov", "Asgarov", "Süleymanov", "Safarov", "Rahimov", "Asgarov", "Rüstamov", "Süleymanov", "Tağiyev","Bağirov","Xalilov","Rahimov", "Maharramov","Tağiyev","Allahverdiyev","Sadiqov","Muradov", "Muradov", "Maharramov", "Mehdiyev","Asadov","Mamedov","Mahmudov","Asadov","Alakbarova", "Azizov", "Orucov", "Yusifov", "Alakbarov", "Aslanov", "Kazimov", "Samadov","Isayev","Nabiyev","Şirinov","Nasirov","Dadaşov","Isgandarov","Nacafov","Nağiyev","Imanov", "Şükürov","Imanov","Rasulov", "Paşayev","Şükürov", "Cavadov","Cabbarov","Seyidov","Hamidov", "Qahramanov", "Malikov", "Salimov", "Mamedov", ]

              var name = generate(firstArray) + " " + generate (surArray) + "a";

          } else if (eth === "Byelorussian"){
            var firstArray = ["Olga", "Tatyana", "Ekaterina", "Natalya", "Elena", "Anastasiya", "Irina", "Svetlana", "Anna","Marina","Darya", "Viktoriya", "Mariya", "Yuliya","Kristina", "Alina","Veronika", "Lyudmila", "Nadezhda", "Anya", "Alyona", "Aleksandra", "Elizaveta", "Yana","Alesya", "Diana", "Valentina","Galina", "Kseniya", "Inna", "Valeriya", "Polina", "Karina", "Maria", "Oksana", "Margarita",]
            var surArray = ["Ivanova", "Novik", "Moroz", "Novikova", "Volkova", "Kravchenko", "Kovalenko", "Petrova", "Novikova", "Kotova", "Kravchenko", "Makarevich", "Kovalchuk", "Karpovich", "Pashkevich","Kozlova", "Shevchenko", "Kotova", "Morozova", "Klimovich", "Smirnova", "Romanova", "Bondarenko", "Stankevich", "Tarasevich", "Mironova", "Marchenko",  "Lukashevich", "Zaytseva", "Kot","Savchenko"]

            var name = generate(firstArray) + " " + generate (surArray);
          } else if (eth === "Georgian"){
            var firstArray = ["Nino", "Tamar", "Mariam", "Maia", "Ana", "Nana", "Natia", "Natela", "Manana", "Qetevan", "Tamari", "Mariami", "Marine", "Marina","Khatuna", "Liana", "Lia", "Lali", "Ekaterine", "Mzia", "Elene", "Meri", "Salome", "Sopio", "Irma", "Eteri", "Leila", "Teona", "Nanuli", "Lela", "Tea", "Inga", "Tina", "Nina", "Makhvala", "Lamara","Nona", "Chiala", "Shorena", "Neli", "Tinatin", "Rusudan", "Maka", "Eter", "Natalia", "Jujuna", "Lili"]

            var surArray = ["Beridze", "Kapandze", "Gelashvili", "Maisuradze", "Giorgadze", "Tsiklauri", "Lomidze", "Nozadze", "Bolqvadze", "Abuladze", "Miqeladze","Tabatadze", "Medolishvili", "Shengelia", "Gogoladze", "Diasamidze", "Dolidze", "Maruashvili", "Tsertsvadze", "Qatamadze", "Dzneladze", "Dumbadze", "Surmanidze", "Meladze", "Sikharulidze",]

            var name = generate(firstArray) + " " + generate (surArray);
          } else if (eth === "Kazakh"){
            var firstArray = ["Elena", "Natalya", "Tatyana", "Olga", "Irina", "Svetlana", "Nadezhda", "Aygerim", "Ekaterina", "Galina", "Marina","Dinara", "Anastasiya", "Madina", "Alina", "Anna", "Lyudmila", "Akmaral", "Valentina","Asel","Aydana", "Diana", "Lyubov", "Gulmira","Sultanat", "Mariya", "Kristina", "Inkar", "Aida", "Aygul", "Yulia", "Dana", "Yuliya", "Akerke", "Darya", "Zarina", "Moldir","Ayzhan",]

            var surArray = ["Kenes", "Omarova", "Sultanova", "Alieva", "Akhmetova", "Umarova", "Belgibaeva", "Kemelova", "Bolatbek","Ivanova", "Kambarova", "Iskakova", "Boyko", "Smagulova", "Omarova", "Ospanova", "Serikova", "Tsoy", "Suleymenova", "Karimova", "Ibragimova", "Bondarenko", "Eleusiz", "Asanova", "Petrova", "Kalieva", "Nigmasheva", "Shevchenko", "Popova", "Valieva", "Muratova"]

            var name = generate(firstArray) + " " + generate (surArray);
          } else if (eth === "Kyrgyz"){
            var firstArray = ["Gulmira", "Aynura", "Gulnara", "Tatyana", "Aygul", "Natalya", "Nazgul", "Baktygul", "Elena", "Elmira", "Nargiza", "Olga", "Svetlana", "Asel", "Nazira", "Nurgul", "Dinara", "Irina", "Valentina", "Aida", "Galina", "Zhyldyz", "Lyudmila", "Zamira", "Gulzat", "Venera", "Cholpon", "Mariya", "Anara", "Chynara", "Lyuobov", "Meerim", "Nadezhda", "Makhabat", "Aynagul"]

            var surArray = ["Ismailova", "Akmatova", "Abdullaeva", "Osmonova", "Abdullaeva", "Sulaymanova", "Isakova", "Ergeshova", "Isakova", "Kadyrova", "Alieva", "Sydykova", "Sultanova", "Sydykova", "Karimova", "Asanova", "Mamatova", "Yuldasheva", "Musaeva", "Abdyldaeva", "Kim", "Musaeva", "Zhumabaeva", "Abdyldaeva", "Mamytova", "Yusupova",]

            var name = generate(firstArray) + " " + generate (surArray);
          }

        }


        console.log(name);

        $("#char1").show();
        $(".name").html(name);
        $(".ori").text(oriGen());
        $(".gender").text(gender);
        $(".eth").text(eth);
        $(".pers").text(personality);
        $(".age").text(age);
        $(".job").text(job);
        $(".dob").text(generate(monthArray) + " " + getRandomInt(1, 28) + ", " + dob);


        // $(".word1").text(generate(totalWords));
        // $(".word2").text(generate(totalWords));
        // $(".word3").text(generate(totalWords));
        // $(".word4").text(generate(totalWords));
        // $(".dialogue").text(generate(dialogueArray1));
        // $(".dialogue2").text(generate(dialogueArray1));




    event.preventDefault();
  })



});
