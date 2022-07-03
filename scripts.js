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



var ethArray = ["Russian", "Ukrainian", "Armenian","Azerbaijani"];

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

        var jobArray = ["Farmer", "Farm worker", "Police", "Factory", "Black-market trader", "Smuggler", "Professioanl criminal", "Doctor", "Nurse", "Director", "Writer", "Journalist", "Teacher", "Red Army", "GRU", "Painter", "Artist", "Singer", "Composer", "Navy", "Air Force", "Physicist", "Historian", "Engineer", "Rocket scientist", "Nuclear physicist", "Journalist", "Actor", "Musician", "Wrestler", "Football player", "Poet", "Surgeon", "Geologist","Professional chess player", "Janitor", "Builder", "Construction worker","Architect", "Clerk", "Factory manager", "Secretary", "Mathmetician", "Pilot", "Machinist", "Poster artist", "Satirist", "Propagandist",  "Philosopher", "Cosmonaut","Dancer", "Set designer", "Dancer", "Sex worker", "Professor",]

        if (eth === "Russian" || eth === "Ukrainian" || eth === "Armenian" || eth === "Azerbaijani"){
          jobArray = jobArray.concat(["Diplomat", "Intelligence officer", "Apparatchik","Chekist", "Ambassador",]);
        }


        var job = generate(jobArray);
        // job = "Navy";

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
      var enlClass = generate(["Sergeant", "Corporal", "Private",]);
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
      var job = generate(["Composer of classical scores", "Composer of film scores", "Opera composer"]);
    } else if (job === "Navy"){
      var shipType = generate(["ship","submarine"])
      var stationed = generate(["in the Arctic", "in the Pacific Ocean", "in the Black Sea", "in the  Mediterranean Sea", "in the Baltic Sea","in the Caspian Sea"])
      var offClass = generate(["Fleet admiral", "Admiral", "Vice admiral", "Rear admiral", "Captain", "Commander", "Lieutenant commander", "Ensign", "Midshipman",]);
      var enlClass = generate(["Chief warrant officer", "Warrant officer", "Petty officer", "Seaman", "Seaman recruit"]);
      var rankClass = generate([offClass, enlClass]);
      job = rankClass + " stationed on a " + shipType + " " + stationed;
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

          }

        }


        console.log(name);

        $("#char1").show();
        $(".name").html(name);
        $(".ori").text(oriGen());
        $(".gender").text(gender);
        $(".eth").text(eth);
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
