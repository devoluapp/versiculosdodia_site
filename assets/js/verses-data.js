// Dados usados pelo mini-app da home: versículo do dia + seletor de sentimento.
// Textos mantidos consistentes com as páginas de categoria em /versiculos/.
var VERSICULO_GERAL = [
  { text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.", ref: "João 3:16" },
  { text: "O Senhor é o meu pastor; de nada terei falta.", ref: "Salmos 23:1" },
  { text: "Confie no Senhor de todo o seu coração e não se apoie no seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas.", ref: "Provérbios 3:5-6" },
  { text: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.", ref: "Josué 1:9" },
  { text: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" },
  { text: "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.", ref: "Romanos 8:28" },
  { text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro.", ref: "Jeremias 29:11" },
  { text: "Não tema, pois estou com você; não se desanime, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o sustentarei com minha justa destra.", ref: "Isaías 41:10" },
  { text: "Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.", ref: "Salmos 46:1" },
  { text: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.", ref: "Mateus 11:28" },
  { text: "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!", ref: "2 Coríntios 5:17" },
  { text: "Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio.", ref: "Gálatas 5:22-23" },
  { text: "Elevo os meus olhos para os montes; de onde vem o meu socorro? O meu socorro vem do Senhor, que fez os céus e a terra.", ref: "Salmos 121:1-2" },
  { text: "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.", ref: "Hebreus 11:1" },
  { text: "Agrade-se do Senhor, e ele atenderá aos desejos do seu coração.", ref: "Salmos 37:4" },
  { text: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.", ref: "Mateus 6:33" },
  { text: "Que o Deus da esperança os encha de toda alegria e paz, por vocês crerem nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo.", ref: "Romanos 15:13" },
  { text: "O Senhor é a minha luz e a minha salvação; a quem temerei?", ref: "Salmos 27:1" },
  { text: "Agora, pois, permanecem a fé, a esperança e o amor, essas três virtudes; mas a maior delas é o amor.", ref: "1 Coríntios 13:13" },
  { text: "Mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.", ref: "Isaías 40:31" },
  { text: "Provem e vejam que o Senhor é bom. Como é feliz o homem que nele se refugia!", ref: "Salmos 34:8" },
  { text: "Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.", ref: "João 14:6" },
  { text: "Àquele que é capaz de fazer infinitamente mais do que tudo o que pedimos ou pensamos, de acordo com o seu poder que atua em nós.", ref: "Efésios 3:20" },
  { text: "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.", ref: "Salmos 118:24" },
  { text: "As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim. Renovam-se cada manhã; grande é a tua fidelidade.", ref: "Lamentações 3:22-23" },
  { text: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.", ref: "Filipenses 4:6-7" },
  { text: "Pois Deus não nos deu o espírito de temor, mas de poder, de amor e de equilíbrio.", ref: "2 Timóteo 1:7" },
  { text: "Aquele que habita no abrigo do Altíssimo e descansa à sombra do Todo-poderoso pode dizer ao Senhor: Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio.", ref: "Salmos 91:1-2" },
  { text: "E eu estarei sempre com vocês, até o fim dos tempos.", ref: "Mateus 28:20" },
  { text: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz.", ref: "Números 6:24-26" }
];

// 5-6 versículos por categoria — usados na revelação do seletor de sentimento.
// O app tem ~100 versículos completos por categoria; aqui é só uma amostra.
var VERSICULOS_CATEGORIA = {
  ansiedade: {
    emoji: "😟", label: "Ansiedade", href: "/versiculos/ansiedade.html",
    verses: [
      { text: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.", ref: "Filipenses 4:6-7" },
      { text: "Lancem sobre ele toda a sua ansiedade, pois ele tem cuidado de vocês.", ref: "1 Pedro 5:7" },
      { text: "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. Basta a cada dia o seu próprio mal.", ref: "Mateus 6:34" },
      { text: "Deixo-lhes a paz, dou-lhes a minha paz. Não a dou como o mundo a dá. Não se turbe o coração de vocês, nem tenham medo.", ref: "João 14:27" },
      { text: "Tu guardarás em perfeita paz aquele cujo propósito é firme, porque em ti confia.", ref: "Isaías 26:3" }
    ]
  },
  tristeza: {
    emoji: "😢", label: "Tristeza", href: "/versiculos/tristeza.html",
    verses: [
      { text: "O Senhor está perto dos que têm o coração partido e salva os que estão com o espírito abatido.", ref: "Salmos 34:18" },
      { text: "O seu furor dura apenas um momento, mas a sua benevolência, a vida toda. O choro pode durar uma noite, mas a alegria vem de manhã.", ref: "Salmos 30:5" },
      { text: "Bem-aventurados os que choram, pois serão consolados.", ref: "Mateus 5:4" },
      { text: "Por que estás tão abatida, ó minha alma? Espera em Deus, pois ainda o louvarei; ele é meu Salvador e meu Deus.", ref: "Salmos 42:5" },
      { text: "A dar-lhes uma coroa em vez de cinzas, óleo de alegria em vez de luto, manto de louvor em vez de espírito angustiado.", ref: "Isaías 61:3" }
    ]
  },
  luto: {
    emoji: "🕊️", label: "Luto", href: "/versiculos/luto.html",
    verses: [
      { text: "O Senhor está perto dos que têm o coração partido e salva os que estão com o espírito abatido.", ref: "Salmos 34:18" },
      { text: "Ele enxugará toda lágrima dos seus olhos. Não haverá mais morte, nem choro, nem lamento, nem dor, pois a antiga ordem já passou.", ref: "Apocalipse 21:4" },
      { text: "Mesmo que eu ande pelo vale da sombra da morte, não temerei mal nenhum, pois tu estás comigo; o teu cajado e o teu báculo me consolam.", ref: "Salmos 23:4" },
      { text: "Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai misericordioso e Deus de todo consolo, que nos consola em todas as nossas tribulações.", ref: "2 Coríntios 1:3-4" },
      { text: "Ele sara os de coração partido e cuida das suas feridas.", ref: "Salmos 147:3" }
    ]
  },
  medo: {
    emoji: "😨", label: "Medo", href: "/versiculos/medo.html",
    verses: [
      { text: "Pois Deus não nos deu o espírito de temor, mas de poder, de amor e de equilíbrio.", ref: "2 Timóteo 1:7" },
      { text: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.", ref: "Josué 1:9" },
      { text: "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é o meu forte refúgio; de quem me recearei?", ref: "Salmos 27:1" },
      { text: "Mas, quando eu estiver com medo, em ti porei a minha confiança.", ref: "Salmos 56:3" },
      { text: "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará.", ref: "Deuteronômio 31:6" }
    ]
  },
  raiva: {
    emoji: "😠", label: "Raiva", href: "/versiculos/raiva.html",
    verses: [
      { text: "Quando ficarem irados, não pequem. Que o sol não se ponha estando vocês ainda irados.", ref: "Efésios 4:26" },
      { text: "A resposta calma desvia a fúria, mas a palavra ríspida provoca a ira.", ref: "Provérbios 15:1" },
      { text: "Cada um seja pronto para ouvir, tardio para falar, tardio para se irar; pois a ira do homem não produz a justiça de Deus.", ref: "Tiago 1:19-20" },
      { text: "O insensato dá vazão à sua ira, mas o sábio no final a controla.", ref: "Provérbios 29:11" },
      { text: "Melhor é o homem paciente do que o guerreiro, mais vale controlar o espírito do que conquistar uma cidade.", ref: "Provérbios 16:32" }
    ]
  },
  oracao: {
    emoji: "🤲", label: "Oração", href: "/versiculos/oracao.html",
    verses: [
      { text: "Orem continuamente.", ref: "1 Tessalonicenses 5:17" },
      { text: "A oração de um justo é poderosa e eficaz.", ref: "Tiago 5:16" },
      { text: "Portanto eu digo a vocês: tudo o que vocês pedirem em oração, creiam que já o receberam, e assim lhes será concedido.", ref: "Marcos 11:24" },
      { text: "Peçam, e será dado a vocês; busquem, e encontrarão; batam, e a porta será aberta.", ref: "Mateus 7:7" },
      { text: "O Senhor está perto de todos os que o invocam, de todos os que o invocam em verdade.", ref: "Salmos 145:18" }
    ]
  },
  perdao: {
    emoji: "🤝", label: "Perdão", href: "/versiculos/perdao.html",
    verses: [
      { text: "Sejam bondosos e compassivos uns para com os outros, perdoando-vos uns aos outros, assim como Deus os perdoou em Cristo.", ref: "Efésios 4:32" },
      { text: "Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou.", ref: "Colossenses 3:13" },
      { text: "Não julguem, e vocês não serão julgados. Não condenem, e não serão condenados. Perdoem, e serão perdoados.", ref: "Lucas 6:37" },
      { text: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.", ref: "1 João 1:9" },
      { text: "Assim como o Oriente está distante do Ocidente, ele afastou de nós as nossas transgressões.", ref: "Salmos 103:12" }
    ]
  },
  solidao: {
    emoji: "💭", label: "Solidão", href: "/versiculos/solidao.html",
    verses: [
      { text: "Nunca o deixarei, nunca o abandonarei.", ref: "Hebreus 13:5" },
      { text: "Deus dá um lar aos solitários.", ref: "Salmos 68:6" },
      { text: "e ensinando-as a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.", ref: "Mateus 28:20" },
      { text: "Não os deixarei órfãos; voltarei para vocês.", ref: "João 14:18" },
      { text: "Quando você atravessar as águas, eu estarei com você; quando você atravessar os rios, eles não o encobrirão.", ref: "Isaías 43:2" }
    ]
  },
  gratidao: {
    emoji: "🙌", label: "Gratidão", href: "/versiculos/gratidao.html",
    verses: [
      { text: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para vocês.", ref: "1 Tessalonicenses 5:18" },
      { text: "Deem graças ao Senhor, pois ele é bom; o seu amor leal dura para sempre.", ref: "Salmos 107:1" },
      { text: "Entrai pelas suas portas com ação de graças; por seus átrios, com louvor; dai-lhe graças; bendizei-lhe o nome.", ref: "Salmos 100:4" },
      { text: "Sempre e por tudo dando graças a Deus Pai, em nome de nosso Senhor Jesus Cristo.", ref: "Efésios 5:20" },
      { text: "Louvarei o Senhor de todo o coração; contarei todas as tuas maravilhas.", ref: "Salmos 9:1" }
    ]
  },
  fe: {
    emoji: "🙏", label: "Fé", href: "/versiculos/fe.html",
    verses: [
      { text: "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.", ref: "Hebreus 11:1" },
      { text: "Disse Jesus: Se podes? Para quem crê, tudo é possível.", ref: "Marcos 9:23" },
      { text: "Confie no Senhor de todo o seu coração e não se apoie no seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas.", ref: "Provérbios 3:5-6" },
      { text: "Ora, sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa os que o buscam.", ref: "Hebreus 11:6" },
      { text: "A fé vem pelo ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo.", ref: "Romanos 10:17" }
    ]
  },
  proposito: {
    emoji: "🧭", label: "Propósito", href: "/versiculos/proposito.html",
    verses: [
      { text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro.", ref: "Jeremias 29:11" },
      { text: "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.", ref: "Romanos 8:28" },
      { text: "Pois somos criação de Deus realizada em Cristo Jesus para fazermos boas obras, as quais Deus preparou de antemão para que nós as praticássemos.", ref: "Efésios 2:10" },
      { text: "Muitos são os planos no coração do homem, mas prevalece o propósito do Senhor.", ref: "Provérbios 19:21" },
      { text: "Estando convictos de que aquele que começou boa obra em vocês vai completá-la até o dia de Cristo Jesus.", ref: "Filipenses 1:6" }
    ]
  }
};

var SENTIMENTOS = [
  { key: "luto", label: "Perdi alguém querido", emoji: "💔" },
  { key: "ansiedade", label: "Estou ansioso(a)", emoji: "😟" },
  { key: "tristeza", label: "Estou triste ou desanimado(a)", emoji: "😢" },
  { key: "medo", label: "Estou com medo", emoji: "😨" },
  { key: "raiva", label: "Sinto raiva ou mágoa", emoji: "😠" },
  { key: "perdao", label: "Preciso perdoar ou ser perdoado", emoji: "🤝" },
  { key: "solidao", label: "Me sinto sozinho(a)", emoji: "💭" },
  { key: "oracao", label: "Quero fortalecer minha oração", emoji: "🤲" },
  { key: "gratidao", label: "Estou grato(a) hoje", emoji: "🙌" },
  { key: "fe", label: "Quero fortalecer minha fé", emoji: "🙏" },
  { key: "proposito", label: "Busco direção e propósito", emoji: "🧭" }
];
