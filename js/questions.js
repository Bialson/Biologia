// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Ekologicznym pojazdem jest: ",
    answer: "Rower",
    options: [
      "Rower",
      "Samochód osobowy",
      "Skuter",
      "Samolot"
    ]
  },
    {
    numb: 2,
    question: "Symbolem Ligi Ochrony przyrody jest: ",
    answer: "Żubr",
    options: [
      "Kozica",
      "Łoś",
      "Koza",
      "Żubr"
    ]
  },
    {
    numb: 3,
    question: "Dzień Ziemi obchodzimy w: ",
    answer: "Kwietniu",
    options: [
      "Wrześniu",
      "Marcu",
      "Lipcu",
      "Kwietniu"
    ]
  },
    {
    numb: 4,
    question: "Recykling to: ",
    answer: "Odzyskiwanie surówców wtórnych",
    options: [
      "Odzyskiwanie surówców wtórnych",
      "Oczysczanie ścieków",
      "Rekultywacja hałd",
      "Pozyskiwanie energii słonecznej"
    ]
  },
    {
    numb: 5,
    question: "Kwaśne deszcze powodują: ",
    answer: "Zakwaszenie gleb i niszczenie zabytków",
    options: [
      "Ocieplenie klimatu",
      "Oczyszczanie rzek i jezior z drobnoustrojów",
      "Rozwój roślin",
      "Zakwaszenie gleb i niszczenie zabytków"
    ]
  },
  {
    numb: 6,
    question: "Dziura ozonowa wywołuje u ludzi: ",
    answer: "Nowotwory skóry",
    options: [
      "Nowotwory skóry",
      "Szybsze opalanie",
      "Lepsze samopoczucie",
      "Złe samopoczucie"
    ]
  },
  {
    numb: 7,
    question: "Ile obecnie w Polsce mamy parków narodowych: ",
    answer: "23",
    options: [
      "20",
      "17",
      "34",
      "23"
    ]
  },
  {
    numb: 8,
    question: "Pestycydy to: ",
    answer: "Chemiczne środki ochrony roślin",
    options: [
      "Detergenty",
      "Chemiczne środki ochrony roślin",
      "Pyły azbestowe",
      "Środki chwastobójcze"
    ]
  },
  {
    numb: 9,
    question: "Pod pojęciem „Zielone płuca Ziemi” rozumiemy: ",
    answer: "Lasy",
    options: [
      "Pola",
      "Łąki",
      "Lasy",
      "Góry"
    ]
  },
  {
    numb: 10,
    question: "Jak należy segregować odpady: ",
    answer: "Metale, szkło, papier, tworzywa sztuczne wkładać do osobnych pojemników",
    options: [
      "Nie trzeba ich segregować",
      "Wyrzucać je w foliowych workach, aby nie mieszały się",
      "Metale, szkło, papier, tworzywa sztuczne wkładać do osobnych pojemników",
      "---"
    ]
  },
  {
    numb: 11,
    question: "Jak zmniejszyć ilość śmieci: ",
    answer: "Kupować tylko potrzebne rzeczy i segregować odpadki",
    options: [
      "Kupować tylko potrzebne rzeczy i segregować odpadki",
      "Zaraz wyrzucać je do śmietnika",
      "Nie da się zmniejszyć",
      "---"
    ]
  },
  {
    numb: 12,
    question: "Jak nazywa się proces przetwarzania zużytych surowców na nowe produkty: ",
    answer: "Recykling",
    options: [
      "Restrukturyzacja",
      "Rekonwalescencja",
      "Recykling",
      "---"
    ]
  },
  {
    numb: 13,
    question: "Najmocniejsze kości w naszym organizmie to: ",
    answer: "Kości udowe",
    options: [
      "Kości obojczykowe",
      "Kości stopy",
      "Kości czaszki",
      "Kości udowe"
    ]
  },
  {
    numb: 14,
    question: "Najmniejsza kość w ludzkim ciele to: ",
    answer: "Strzemiączko",
    options: [
      "Kość gnykowa",
      "Kość ogonowa",
      "Młoteczek",
      "Strzemiączko"
    ]
  },
  {
    numb: 15,
    question: "Ile średnio waży cały układ kostny dorosłego mężczyzny: ",
    answer: "12 kg",
    options: [
      "12 kg",
      "Nie więcej niż 10 kg",
      "20 kg",
      "24 kg"
    ]
  },
  {
    numb: 16,
    question: "Z ilu odcinków składa się kręgosłup?",
    answer: "Z pięciu",
    options: [
      "Z czterech",
      "Z pięciu",
      "Z siedmiu",
      "Z dwunastu"
    ]
  },
  {
    numb: 17,
    question: "Połączenia ruchome kości to: ",
    answer: "Stawy",
    options: [
      "Mięśnie",
      "Stawy",
      "Ścięgna",
      "Chrząstki"
    ]
  },
  {
    numb: 18,
    question: "Z ilu kręgów składa się kręgosłup?",
    answer: "33-34 kręgów ",
    options: [
      "33-34 kręgów ",
      "35-36 kręgów",
      "38-39 kręgów",
      "40-41 kręgów"
    ]
  },
  {
    numb: 19,
    question: "Łukowate wygięcie kręgosłupa w stronę grzbietową to?",
    answer: "Kifoza",
    options: [
      "Skolioza",
      "Lordoza",
      "Kifoza",
      "Ortoza"
    ]
  },
  {
    numb: 20,
    question: "Ile kości liczy szkielet dorosłego człowieka: ",
    answer: "206",
    options: [
      "206",
      "Dokładnie 193",
      "347",
      "69"
    ]
  },
  {
    numb: 21,
    question: "Serce składa się z: ",
    answer: "Z dwóch przedsionków i dwóch komór ",
    options: [
      "206 przedsionków i komór",
      "Z dwóch przedsionków i trzech komór",
      "Z dwóch przedsionków i dwóch komór",
      "Z pięciu przedsionków i dwóch komór "
    ]
  },
  {
    numb: 22,
    question: "Gruczoł w przedniej części szyi to: ",
    answer: "Tarczyca",
    options: [
      "Grasica",
      "Szyszynka",
      "Chrząstka",
      "Tarczyca"
    ]
  },
  {
    numb: 23,
    question: "Rogówka, twardówka i tęczówka to części: ",
    answer: "Oka",
    options: [
      "Oka",
      "Mózgu",
      "Paznokci",
      "Włosów"
    ]
  },
  {
    numb: 24,
    question: "Kość potyliczna to część: ",
    answer: "Czaszki",
    options: [
      "Miednicy",
      "Klatki piersiowej",
      "Nogi",
      "Czaszki"
    ]
  },
  {
    numb: 25,
    question: "Mózg składa się z dwóch: ",
    answer: "Półkuli",
    options: [
      "Zwojów",
      "Półkuli",
      "Części",
      "Płatów"
    ]
  },
  {
    numb: 26,
    question: "Mięsień zwany bicepsem to część: ",
    answer: "Ramienia",
    options: [
      "Ramienia",
      "Pośladka",
      "Uda",
      "Brzucha"
    ]
  },
  {
    numb: 27,
    question: "Co oznacza nazwa „Homo erectus”: ",
    answer: "Człowiek wyprostowany",
    options: [
      "Człowiek rozumny",
      "Człowiek pierwotny",
      "Człowiek zdolny",
      "Człowiek wyprostowany"
    ]
  },
  {
    numb: 28,
    question: "Zmienność występująca w gronie osobników należących do jednej populacji to różnorodność: ",
    answer: "Genetyczna",
    options: [
      "Genetyczna",
      "Gatunkowa",
      "Indywidualna",
      "Ekosystemowa"
    ]
  },
  {
    numb: 29,
    question: "Który z wymienionych organizmów nie jest pasożytem zewnętrznym: ",
    answer: "Glista ludzka",
    options: [
      "Wesz",
      "Glista ludzka",
      "Pchła",
      "Pijawka"
    ]
  },
  {
    numb: 30,
    question: "Ile zębów stałych posiada dorosły człowiek: ",
    answer: "32",
    options: [
      "32",
      "44",
      "102",
      "3"
    ]
  },
];