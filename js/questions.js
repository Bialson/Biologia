// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Końcowy odcinek jelita grubego to: ",
    answer: "Odbyt",
    options: [
      "Odbyt",
      "Wyrostek robaczkowy",
      "Jelito czcze",
      "Okrężnica"
    ]
  },
    {
    numb: 2,
    question: "Początkowy odcinek jelita cienkiego to: ",
    answer: "Dwunastnica",
    options: [
      "Trzustka",
      "Okrężnica",
      "Dwunastnica",
      "Odźwiernik"
    ]
  },
    {
    numb: 3,
    question: "Jaką funkcję pełni wyrostek robaczkowy?",
    answer: "Jest magazynem pożytecznych bakterii",
    options: [
      "Magazynuje wszystkie odpady trawienne",
      "Żadnej, to pozostałość ewolucyjna",
      "Wytwarza enzymy trawienne",
      "Jest magazynem pożytecznych bakterii"
    ]
  },
    {
    numb: 4,
    question: "Wskaż prawidłową kolejność układu pokarmowego.",
    answer: "Jama ustna, gardło, jelito cienkie, jelito grube, odbyt",
    options: [
      "Jama ustna, krtań, jelito cienkie, jelito grube, odbyt",
      "Jama ustna, gardło, jelito cienkie, jelito grube, odbyt",
      "Jama ustna, gardło dwunastnica, żołądek, jelito cienkie",
      "Jama ustna, krtań, okrężnica, jelito cienkie, odbyt"
    ]
  },
    {
    numb: 5,
    question: "Które z wymienionych posiada Pęcherz rektalny?",
    answer: "Pająki",
    options: [
      "Ryby",
      "Szczury",
      "Gołębie",
      "Pająki"
    ]
  },
  {
    numb: 6,
    question: "Który enzym trawi tłuszcze w dwunastnicy?",
    answer: "Lipaza",
    options: [
      "Lipaza",
      "Trypsyna",
      "Pepsyna",
      "W dwunastnicy nie ma enzymów trawiących tłuszcze "
    ]
  },
  {
    numb: 7,
    question: "Jeden obieg krwi mają:",
    answer: "Ryby",
    options: [
      "Ptaki",
      "Gady",
      "Płazy",
      "Ryby"
    ]
  },
  {
    numb: 8,
    question: "Mały obieg krwi rozpoczyna się w: ",
    answer: "Prawej komorze serca",
    options: [
      "Prawym przedsionku serca",
      "Lewym przedsionku serca",
      "Prawej komorze serca",
      "Lewej komorze serca"
    ]
  },
  {
    numb: 9,
    question: "Do której części ciała nie dociera krew?",
    answer: "Rogówka oka",
    options: [
      "Szpiku kostnego",
      "Jelita grubego",
      "Pięty",
      "Rogówka oka"
    ]
  },
  {
    numb: 10,
    question: "Co jest skutkiem niedotlenienia mięśnia sercowego?",
    answer: "Zawał ",
    options: [
      "Miażdzyca",
      "Zawał ",
      "Przerost mięśnia",
      "Wylew"
    ]
  },
  {
    numb: 11,
    question: "Prostata umiejscowiona jest:",
    answer: "Pod pęcherzem",
    options: [
      "Pod pęcherzem",
      "Obok najądrza",
      "W zespoleniu łonowym",
      "W ciałach jamistych prącia"
    ]
  },
  {
    numb: 12,
    question: "W pęcherzykach płucnych występuje nabłonek:",
    answer: "Jednowarstwowy plaski",
    options: [
      "Jednowarstwowy szescienny",
      "Jednowarstwowy wielorzedowy",
      "Jednowarstwowy walcowaty",
      "Jednowarstwowy plaski"
    ]
  },
  {
    numb: 13,
    question: "Około ilu pęcherzyków płucnych posiada człowiek?",
    answer: "300–500 milionów",
    options: [
      "600-700 tysięcy",
      "ponad 900 tysięcy",
      "300–500 milionów",
      "500-800 milionów"
    ]
  },
  {
    numb: 14,
    question: "Z ilu płatów składa się wątroba?",
    answer: "4 płatów",
    options: [
      "1 głównego prawego",
      "2 płatów",
      "3 płatów bocznych",
      "4 płatów"
    ]
  },
  {
    numb: 15,
    question: "Staw skokowy górny to inaczej?",
    answer: "Staw skokowo-goleniowy",
    options: [
      "Staw skokowo-goleniowy",
      "Staw skokowy przedni",
      "Staw skokowo-piętowo-łódkowy",
      "Staw kolanowo-udowy"
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
    question: "Co należy do szkieletu osiowego?",
    answer: "Czaszka, kręgosłup, klatka piersiowa",
    options: [
      "Kości kończyn, klatka piersiowa, czaszka",
      "Czaszka, kręgosłup, klatka piersiowa, kości ręki",
      "Czaszka i kręgosłup",
      "Czaszka, kręgosłup, klatka piersiowa"
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
    question: "Ile przeciwstawnych palców posiada człowiek?",
    answer: "4 palce",
    options: [
      "1 u lewej dłoni",
      "2 palce",
      "4 palce",
      "5 palców"
    ]
  },
];