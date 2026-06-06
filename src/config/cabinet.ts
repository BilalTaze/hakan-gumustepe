export const CABINET_CONFIG = {
  name: "La Maison Dentaire",
  slogan: "Votre centre de soins dentaires à Strasbourg",
  subtitle: "Soins dentaires pour adultes et enfants à Strasbourg - Elsau. Centre conventionné.",
  address: "21 Rue Léonard de Vinci",
  logo: "/images/logo/logo1.webp",
  city: "Strasbourg",
  zip: "67200",
  phone: "03 88 67 72 57",
  email: "info@la-maison-dentaire.fr",
  formspreeEndpoint: "https://formspree.io/f/mnjoezrd",
  openingHours: [
    { day: "Lundi", hours: "9h - 19h" },
    { day: "Mardi", hours: "9h - 19h" },
    { day: "Mercredi", hours: "9h - 19h" },
    { day: "Jeudi", hours: "9h - 19h" },
    { day: "Vendredi", hours: "9h - 18h" },
    { day: "Samedi", hours: "Fermé" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps?q=La+Maison+Dentaire+Strasbourg&output=embed",
  placeId: "VOTRE_PLACE_ID",
  googlePlacesApiKey: "VOTRE_GOOGLE_PLACES_API_KEY",
  doctolibProfileUrl: "https://www.doctolib.fr/centre-medical-et-dentaire/strasbourg/maison-dentaire-strasbourg",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contactEmail: "info@la-maison-dentaire.fr",
  webhookUrl: "",
};

export const TEAM_MEMBERS = [
  {
    id: "dr-gumustepe",
    name: "Dr. Hakan GUMUSTEPE",
    title: "Chirurgien-Dentiste",
    specialty: "Implantologie & Esthétique",
    bio: "Diplômé de la Faculté de Chirurgie-Dentaire de Strasbourg.",
    diplomas: ["Doctorat en Chirurgie Dentaire – Université de Strasbourg"],
    approach: "Une approche douce et rassurante, avec un accent sur la communication et l'explication de chaque étape du traitement.",
    image: "male",
  },
  {
    id: "dr-joseph",
    name: "Dr. Constance JOSEPH",
    title: "Chirurgien-Dentiste",
    specialty: "Parodontologie & Soins conservateurs",
    bio: "Diplômée de la Faculté de Chirurgie-Dentaire de Strasbourg.",
    diplomas: ["Doctorat en Chirurgie Dentaire – Université de Strasbourg"],
    approach: "Un praticien à l'écoute, privilégiant les techniques mini-invasives et la prévention pour préserver au maximum les dents naturelles.",
    image: "female",
  },
    {
    id: "dr-elassad",
    name: "Dr. Ghita ELASSAD",
    title: "Chirurgien-Dentiste",
    specialty: "Parodontologie & Soins conservateurs",
    bio: "Diplômée de la Faculté de Chirurgie-Dentaire de Strasbourg.",
    diplomas: ["Doctorat en Chirurgie Dentaire – Université de Strasbourg"],
    approach: "Un praticien à l'écoute, privilégiant les techniques mini-invasives et la prévention pour préserver au maximum les dents naturelles.",
    image: "male",
  },
    {
    id: "dr-ucar",
    name: "Dr. Fatih UCAR",
    title: "Chirurgien-Dentiste",
    specialty: "Parodontologie & Soins conservateurs",
    bio: "Diplômé de la Faculté de Chirurgie-Dentaire de Strasbourg.",
    diplomas: ["Doctorat en Chirurgie Dentaire – Université de Strasbourg"],
    approach: "Un praticien à l'écoute, privilégiant les techniques mini-invasives et la prévention pour préserver au maximum les dents naturelles.",
    image: "male",
  },
    {
    id: "dr-stemmer",
    name: "Dr. Pauline STEMMER",
    title: "Chirurgien-Dentiste",
    specialty: "Parodontologie & Soins conservateurs",
    bio: "Diplômée de la Faculté de Chirurgie-Dentaire de Strasbourg.",
    diplomas: ["Doctorat en Chirurgie Dentaire – Université de Strasbourg"],
    approach: "Un praticien à l'écoute, privilégiant les techniques mini-invasives et la prévention pour préserver au maximum les dents naturelles.",
    image: "female",
  },
    {
    id: "dr-wilczynska",
    name: "Dr. Bozena WILCZYNSKA",
    title: "Chirurgien-Dentiste",
    specialty: "Parodontologie & Soins conservateurs",
    bio: "Diplômée de la Faculté de Chirurgie-Dentaire de Cracovie.",
    diplomas: ["Doctorat en Chirurgie Dentaire – Université de Cracovie"],
    approach: "Un praticien à l'écoute, privilégiant les techniques mini-invasives et la prévention pour préserver au maximum les dents naturelles.",
    image: "female",
  },
    {
    id: "dr-galfi",
    name: "Dr. Eliot GALFI",
    title: "Chirurgien-Dentiste",
    specialty: "Parodontologie & Soins conservateurs",
    bio: "Diplômé de la Faculté de Chirurgie-Dentaire de Strasbourg.",
    diplomas: ["Doctorat en Chirurgie Dentaire – Université de Strasbourg"],
    approach: "Un praticien à l'écoute, privilégiant les techniques mini-invasives et la prévention pour préserver au maximum les dents naturelles.",
    image: "male",
  },
];

export const SOINS = [
  {
    id: "parodontologie",
    title: "Parodontologie",
    icon: "ShieldCheck",
    shortDesc: "Prévention et traitement des maladies des gencives.",
    description: "La parodontologie traite les gencives et les tissus de soutien de la dent. Elle permet de prévenir, diagnostiquer et soigner les inflammations gingivales et les maladies parodontales.",
    whenToConsult: "En cas de saignement des gencives, de mauvaise haleine persistante, de sensibilité ou de déchaussement.",
    procedure: "Après un bilan complet, le praticien réalise un nettoyage ciblé et met en place un suivi adapté à votre situation.",
    duration: "30 à 45 minutes",
    comfort: "Généralement confortable, avec une prise en charge douce et progressive",
    afterCare: "Maintenir une hygiène rigoureuse et respecter les contrôles de suivi recommandés.",
  },
  {
    id: "caries",
    title: "Soins conservateurs",
    icon: "Shield",
    shortDesc: "Préserver et restaurer vos dents naturelles.",
    description: "Les soins conservateurs visent à traiter les lésions dentaires de manière précise tout en gardant un maximum de tissu sain. Ils incluent notamment le traitement des caries.",
    whenToConsult: "Douleur au chaud ou au froid, sensibilité, tache sombre sur une dent ou fracture localisée.",
    procedure: "Après anesthésie locale, la partie cariée est retirée avec précision puis la dent est restaurée à l’aide d’un composite de la couleur de votre dent pour un résultat naturel.",
    duration: "En moyenne 30 minutes à 1 heure, selon l’étendue de la lésion et le nombre de dents à traiter.",
    comfort: "Traitement sous anesthésie locale, généralement indolore.",
    afterCare: "Éviter de manger du côté traité pendant 2h. Reprendre le brossage normalement.",
  },
  {
    id: "couronnes",
    title: "Prothèses",
    icon: "Crown",
    shortDesc: "Remplacement et restauration des dents absentes ou fragilisées.",
    description: "Les prothèses dentaires permettent de restaurer l'esthétique et la fonction des dents grâce à des solutions fixes ou amovibles adaptées à chaque patient.",
    whenToConsult: "Dent très abîmée, fracturée, dévitalisée, ou besoin de remplacer une ou plusieurs dents manquantes.",
    procedure: "Nous établissons un plan de traitement personnalisé accompgné d'un devis clair et détaillé. La prothèse est ensuite conçue sur mesure avant sa pose.",
    duration: "La durée du traitement dépend du plan  de traitement établi.",
    comfort: "Anesthésie locale si nécessaire, avec une pose progressive et maîtrisée",
    afterCare: "Entretenir la prothèse selon les conseils du praticien et maintenir un brossage régulier.",
  },
  {
    id: "implants",
    title: "Implants dentaires",
    icon: "Wrench",
    shortDesc: "Une solution durable pour remplacer les dents manquantes.",
    description: "L'implant dentaire est une racine artificielle en titane posée dans l'os de la mâchoire. Il sert de support à une couronne, un bridge ou une prothèse. C'est la solution la plus fiable et durable.",
    whenToConsult: "Dent manquante, prothèse amovible inconfortable, souhait d'une solution fixe et durable.",
    procedure: "Pose chirurgicale de l’implant suivie d’une période de cicatrisation avant la réalisation de la prothèse définitive. Des étapes complémentaires peuvent être nécessaires selon la situation clinique.",
    duration: "La durée du traitement varie selon le nombre d’implants à poser et les éventuels soins complémentaires nécessaires.",
    comfort: "Intervention sous anesthésie locale, douleurs post-opératoires généralement légères et bien contrôlées.",
    afterCare: "Alimentation molle pendant 1 semaine. Hygiène rigoureuse. Suivi régulier.",
  },
  {
    id: "radiologie-dentaire",
    title: "Radiologie dentaire",
    icon: "Radio",
    shortDesc: "Imagerie numérique pour un diagnostic précis.",
    description: "La radiologie dentaire nous aide à visualiser les zones non accessibles à l'examen clinique pour établir un diagnostic fiable et planifier les soins.",
    whenToConsult: "Lors d'un bilan complet, avant certains soins ou en cas de douleur sans cause visible.",
    procedure: "Réalisation d'images ciblées avec un équipement numérique pour analyser précisément la situation.",
    duration: "Quelques minutes",
    comfort: "Examen rapide, non invasif et généralement très confortable",
    afterCare: "Aucune précaution particulière dans la majorité des cas.",
  },
  {
    id: "chirurgie",
    title: "Chirurgie",
    icon: "Stethoscope",
    shortDesc: "Des soins chirurgicaux réalisés avec précision et sécurité.",
    description: "La chirurgie dentaire regroupe les interventions nécessaires pour traiter certaines situations complexes, dans un cadre maîtrisé et rassurant.",
    whenToConsult: "Pour une extraction, une intervention préparatoire à un implant ou un soin nécessitant un geste chirurgical.",
    procedure: "Le praticien vous explique chaque étape, réalise l’intervention sous anesthésie locale, puis vous remet les consignes adaptées et assure le suivi si nécessaire.",
    duration: "Variable selon l’intervention\nLa durée dépend du type de soin, du nombre de dents concernées et de la complexité du geste.",
    comfort: "Intervention sous anesthésie locale avec priorité au confort",
    afterCare: "Respecter les consignes post-opératoires et revenir en contrôle si nécessaire.",
  },
  {
    id: "urgences",
    title: "Urgences dentaires",
    icon: "AlertCircle",
    shortDesc: "Prise en charge rapide des douleurs et urgences dentaires.",
    description: "Les urgences dentaires nécessitent une évaluation rapide pour soulager la douleur, traiter la cause et éviter toute aggravation.",
    whenToConsult: "Douleur intense, gonflement, dent cassée, abcès ou traumatisme dentaire.",
    procedure: "Nous réalisons un diagnostic rapide, un soulagement immédiat si nécessaire, puis nous organisons le traitement adapté.",
    duration: "30 minutes à 1 heure",
    comfort: "Priorité au soulagement de la douleur et à une prise en charge rassurante",
    afterCare: "Suivre les consignes données au cabinet et prévoir un contrôle si recommandé.",
  },
  {
    id: "pedodontie",
    title: "Pédodontie",
    icon: "Baby",
    shortDesc: "Des soins adaptés et bienveillants pour les plus petits.",
    description: "La pédodontie est la spécialité dédiée aux soins dentaires des enfants. Notre approche ludique et rassurante permet aux enfants de vivre une expérience positive chez le dentiste.",
    whenToConsult: "Première visite recommandée dès 3 ans, puis suivi régulier tous les 6 mois.",
    procedure: "Examen adapté à l’enfant, conseils d’hygiène, soins préventifs (scellement de sillons, fluorations) et soins curatifs si nécessaire.",
    duration: "En fonction des cas\nLa durée varie selon l’âge de l’enfant, le type de soin réalisé et sa coopération. Votre praticien vous informera en amont.",
    comfort: "Approche douce et rassurante, adaptée au rythme et à la sensibilité de chaque enfant.",
    afterCare: "Encourager le brossage régulier et limiter les sucreries.",
  },
];

export const FAQ_ITEMS = [
  { q: "Est-ce que les soins dentaires font mal ?", a: "La grande majorité des soins sont réalisés sous anesthésie locale et sont totalement indolores. Notre priorité est votre confort. N'hésitez pas à nous signaler toute appréhension." },
  { q: "À quelle fréquence dois-je consulter ?", a: "Nous recommandons une visite de contrôle tous les 6 mois à 1 an. Un suivi régulier permet de détecter et traiter les problèmes à un stade précoce." },
  { q: "Acceptez-vous les urgences ?", a: "Oui, nous réservons des créneaux pour les urgences dentaires. Appelez-nous directement par téléphone pour une prise en charge rapide." },
  { q: "Êtes-vous conventionné ?", a: "Oui, notre cabinet est conventionné secteur 1. La plupart des soins courants sont pris en charge par l'Assurance Maladie et votre mutuelle." },
  { q: "Comment se déroule une première consultation ?", a: "La première consultation dure environ 45 minutes. Elle comprend un échange sur vos attentes, un examen clinique complet, des radiographies si nécessaire, et l'élaboration d'un plan de traitement personnalisé." },
  { q: "Proposez-vous le paiement en plusieurs fois ?", a: "Oui, nous proposons des facilités de paiement pour les traitements importants. N'hésitez pas à nous en parler lors de votre consultation." },
  { q: "Les implants dentaires sont-ils remboursés ?", a: "Les implants ne sont pas remboursés par l'Assurance Maladie, mais de nombreuses mutuelles proposent une prise en charge partielle. Nous vous fournirons un devis détaillé." },
  { q: "À partir de quel âge emmener mon enfant chez le dentiste ?", a: "Nous recommandons une première visite dès l'âge de 3 ans, ou dès l'apparition des premières dents de lait si vous avez des inquiétudes." },
  { q: "Quels moyens de paiement acceptez-vous ?", a: "Nous acceptons les cartes bancaires, les chèques, les espèces et la télétransmission avec votre carte Vitale." },
  { q: "Le centre est-il accessible aux personnes à mobilité réduite ?", a: "Oui, notre cabinet est entièrement accessible aux personnes à mobilité réduite (PMR). Un accès de plain-pied et des équipements adaptés sont à votre disposition." },
];

export const BLOG_ARTICLES = [
  {
    id: "bien-se-brosser-les-dents",
    title: "Comment bien se brosser les dents ?",
    excerpt: "Découvrez les techniques de brossage recommandées par nos dentistes pour une hygiène bucco-dentaire optimale.",
    content: `Le brossage des dents est le geste fondamental de l'hygiène bucco-dentaire. Pourtant, beaucoup de personnes ne le réalisent pas correctement.\n\n La technique recommandée\n\nUtilisez une brosse à dents souple et un dentifrice fluoré. Placez la brosse à 45° par rapport à la gencive et effectuez des mouvements circulaires doux, de la gencive vers la dent.\n\n Durée et fréquence\n\nBrossez-vous les dents pendant **2 minutes minimum**, au moins **2 fois par jour** (matin et soir). Le brossage du soir est le plus important.\n\n N'oubliez pas\n\n- Changez de brosse à dents tous les 3 mois\n- Utilisez du fil dentaire ou des brossettes interdentaires\n- Complétez avec un bain de bouche si recommandé par votre dentiste`,
    category: "Hygiène",
    readTime: "3 min",
  },
  {
    id: "frequence-consultation",
    title: "À quelle fréquence consulter son dentiste ?",
    excerpt: "Un suivi régulier est essentiel pour prévenir les problèmes dentaires. Voici nos recommandations.",
    content: `Un suivi dentaire régulier est la base d'une bonne santé bucco-dentaire. Pourtant, beaucoup de patients consultent uniquement en cas de douleur — ce qui est souvent trop tard. L'UFSBD insiste sur l'importance d'un contrôle préventif annuel pour tous, quel que soit l'âge.

La fréquence recommandée

Pour un adulte en bonne santé bucco-dentaire, **une visite par an** est le minimum recommandé. Pour les enfants, les adolescents, les femmes enceintes, les fumeurs ou les patients diabétiques, **deux visites annuelles** sont préconisées. Votre dentiste adaptera le rythme à votre situation personnelle.

Pourquoi ne pas attendre la douleur ?

La carie dentaire et les maladies parodontales sont souvent **indolores à leurs débuts**. Une consultation préventive permet de les détecter tôt, quand elles sont encore simples et peu coûteuses à traiter. Une carie non traitée peut évoluer vers une infection, voire nécessiter une extraction.

Ce que comprend un bilan annuel

- **Examen clinique complet** de toutes les dents et des gencives
- **Détartrage** pour éliminer le tartre inaccessible à la brosse
- **Radiographies** ciblées ou panoramique selon les besoins
- **Dépistage** des lésions muqueuses et cancers buccaux
- **Conseils personnalisés** d'hygiène adaptés à votre situation

Le rôle clé du détartrage

Le tartre est du plaque dentaire minéralisée que le brossage seul ne peut pas éliminer. Son accumulation irrite les gencives et favorise la gingivite, puis la parodontite. Un détartrage régulier — pris en charge partiellement par l'Assurance Maladie — est indispensable pour maintenir des gencives saines.

Le programme M'T dents

Avec le programme **M'T dents tous les ans !**, l'Assurance Maladie et les complémentaires santé permettent à tous les enfants et jeunes adultes de **3 à 24 ans** de bénéficier d'un rendez-vous de prévention offert, tous les ans, chez le chirurgien-dentiste — et des soins, si nécessaire.

En résumé

- Consultez au minimum **une fois par an**
- **Deux fois par an** si vous êtes à risque (tabac, diabète, grossesse, orthodontie)
- N'attendez jamais l'apparition d'une douleur pour prendre rendez-vous
- Les enfants doivent consulter **dès l'apparition de la première dent**`,
    category: "Prévention",
    readTime: "4 min",
  },
  {
    id: "sensibilite-dentaire",
    title: "Sensibilité dentaire : causes et solutions",
    excerpt: "Douleur au chaud, au froid ? La sensibilité dentaire touche de nombreuses personnes. Découvrez comment y remédier.",
    content: `La sensibilité dentaire — ou hypersensibilité dentinaire — se manifeste par une douleur vive et brève déclenchée par le froid, le chaud, le sucré, l'acide ou parfois le simple contact. Elle touche près d'**un adulte sur trois** en France et peut altérer considérablement la qualité de vie.

Pourquoi les dents deviennent-elles sensibles ?

Chaque dent est recouverte d'émail, une couche protectrice dure et imperméable. Sous l'émail se trouve la **dentine**, un tissu parcouru de milliers de microtubules reliant la surface de la dent au nerf. Lorsque la dentine est exposée — que ce soit par érosion de l'émail ou récession gingivale —, les stimuli thermiques et chimiques atteignent directement le nerf, provoquant la douleur.

Les causes principales

- **Érosion acide** : consommation excessive de sodas, jus de fruits, aliments acides
- **Brossage trop vigoureux** avec une brosse trop dure
- **Récession gingivale** exposant les collets et les racines
- **Bruxisme** (grincement des dents) usant l'émail
- **Caries** ou fissures dentaires
- **Traitement de blanchiment** (sensibilité temporaire)
- **Soins dentaires récents** (plombage, couronne)

Que faire au quotidien ?

- Utilisez un **dentifrice spécifique sensibilité** contenant du nitrate de potassium ou du fluorure d'étain — les effets se ressentent après 2 à 4 semaines d'utilisation régulière
- Adoptez une **brosse à dents souple** et un brossage doux en mouvements circulaires
- Évitez de brosser juste après un repas acide : attendez **30 minutes**
- Limitez les aliments et boissons acides
- Utilisez une **paille** pour les boissons acides ou gazeuses afin de limiter le contact avec les dents

Quand consulter ?

Si la douleur persiste plus de quelques secondes, survient spontanément ou s'intensifie, il est impératif de consulter. Une sensibilité persistante peut signaler une **carie profonde**, une fissure, ou une pathologie pulpaire nécessitant un traitement approprié.

Les traitements disponibles au cabinet

- **Application de vernis fluoré** pour obstruer les tubules dentinaires
- **Agents de liaison** (adhésifs dentinaires) appliqués sur les zones sensibles
- **Gouttière de protection** en cas de bruxisme
- **Traitement parodontal** si la récession gingivale est en cause
- En dernier recours : **traitement canalaire** si le nerf est atteint

En résumé

- La sensibilité dentaire est fréquente mais **toujours à explorer**
- Un dentifrice adapté suffit souvent pour les formes légères
- **Ne pas ignorer** une douleur persistante ou spontanée
- Votre dentiste dispose de solutions efficaces pour chaque cause`,
    category: "Soins",
    readTime: "5 min",
  },
  {
    id: "dents-de-sagesse",
    title: "Dents de sagesse : faut-il les extraire ?",
    excerpt: "Les dents de sagesse posent souvent problème. Découvrez quand et pourquoi il peut être nécessaire de les retirer.",
    content: `Les dents de sagesse — ou troisièmes molaires — sont les dernières dents à faire leur apparition, généralement entre **17 et 25 ans**. Elles sont au nombre de quatre, une par coin de la mâchoire. Leur éruption est souvent source d'inconfort, voire de complications qui rendent leur extraction nécessaire.

Pourquoi posent-elles problème ?

Au cours de l'évolution, la mâchoire humaine a rétréci, mais le nombre de dents est resté le même. Les dents de sagesse arrivent donc souvent dans un espace insuffisant. Elles peuvent être :

- **Incluses** : restées dans l'os sans sortir
- **Semi-incluses** : partiellement sorties, coincées sous la gencive
- **En mauvaise position** : inclinées vers la dent voisine (dent de sagesse en mésioversion)

Quand l'extraction est-elle nécessaire ?

Toutes les dents de sagesse ne doivent pas être extraites. L'indication dépend d'un examen clinique et d'une **radio panoramique**. L'extraction est recommandée dans les cas suivants :

- **Péricoronarite** : infection répétée de la gencive autour d'une dent semi-incluse
- **Kyste ou tumeur** se développant autour de la dent incluse
- **Carie** inaccessible au traitement conservateur
- **Pression sur la dent adjacente** risquant d'endommager sa racine
- **Problème orthodontique** : manque de place compromettant l'alignement

Comment se déroule l'extraction ?

L'intervention se réalise sous **anesthésie locale** au cabinet. Elle peut nécessiter une incision de la gencive et, parfois, un découpage de la dent en plusieurs fragments si elle est profondément incluse. La durée varie de 15 à 60 minutes selon la complexité. Dans les cas difficiles, le praticien peut orienter vers un chirurgien maxillo-facial.

Les suites opératoires

- **Gonflement et douleur** durant 2 à 5 jours, gérés par antalgiques et anti-inflammatoires
- **Alimentation molle** pendant quelques jours
- **Pas de tabac** pendant au moins 48h (risque d'alvéolite sèche)
- Bains de bouche antiseptiques débutés après 24h selon les recommandations du praticien
- Les points de suture (résorbables ou non) disparaissent en 7 à 10 jours

Faut-il attendre ou agir préventivement ?

L'UFSBD recommande une surveillance radiologique régulière des dents de sagesse dès 16-17 ans. Une extraction préventive avant 25 ans est souvent moins complexe, car les racines ne sont pas encore entièrement formées et la cicatrisation est plus rapide.

En résumé

- Une **radio panoramique** est indispensable pour évaluer la situation
- L'extraction n'est pas systématique, mais souvent inévitable
- Mieux vaut intervenir **tôt** (avant 25 ans) pour une récupération facilitée
- En cas de douleur, gonflement ou fièvre : consultez sans délai`,
    category: "Chirurgie",
    readTime: "4 min",
  },
  {
    id: "gingivite",
    title: "Gingivite : comment la reconnaître et la traiter ?",
    excerpt: "Gencives rouges, gonflées ou qui saignent ? Il s'agit peut-être d'une gingivite. Voici comment agir.",
    content: `La gingivite est une inflammation des gencives causée par l'accumulation de plaque dentaire bactérienne à la jonction entre les dents et la gencive. C'est la forme la plus courante de maladie parodontale : elle touche près de **80 % des adultes** à un moment de leur vie. Bonne nouvelle : elle est **réversible** si elle est prise en charge à temps.

Comment la reconnaître ?

Les signes caractéristiques de la gingivite sont :

- **Gencives rouges ou violacées** (au lieu d'un rose pâle sain)
- **Saignements** lors du brossage ou au contact de la soie dentaire
- **Gencives gonflées ou douloureuses** au toucher
- **Mauvaise haleine** persistante (halitose)
- Gencives qui semblent se **rétracter** légèrement

À noter : la gingivite est souvent **indolore au repos**, ce qui explique pourquoi beaucoup de patients la négligent.

Les causes de la gingivite

- **Plaque dentaire** insuffisamment éliminée par le brossage
- **Tartre** irritant chroniquement la gencive
- **Tabac** : ralentit la cicatrisation et masque les saignements
- **Grossesse** : les variations hormonales augmentent la sensibilité des gencives
- **Diabète** mal équilibré : favorise les infections gingivales
- Certains **médicaments** (antiépileptiques, immunosuppresseurs)
- **Stress** et fatigue chronique

Gingivite ou parodontite : quelle différence ?

La gingivite touche uniquement la gencive, sans atteindre l'os alvéolaire. Si elle n'est pas traitée, elle peut évoluer en **parodontite** — une maladie plus sévère qui détruit progressivement l'os et les fibres de soutien de la dent, pouvant mener à la mobilité puis à la perte des dents.

Le traitement au cabinet

Le traitement de première intention est le **détartrage** (surfaçage radiculaire si nécessaire), réalisé par votre chirurgien-dentiste. Il permet d'éliminer le tartre supra et sous-gingival inaccessible à la brosse. Ce soin est partiellement remboursé par l'Assurance Maladie (une séance par an).

Ce que vous pouvez faire à la maison

- **Brossage minutieux** : 2 minutes minimum, 2 fois par jour, avec une brosse souple
- Utilisation quotidienne de **fil dentaire ou de brossettes interdentaires** pour nettoyer les espaces entre les dents
- **Bain de bouche** à la chlorhexidine sur prescription, en cure courte (7 à 14 jours)
- Arrêt du **tabac**, qui masque les saignements et aggrave l'inflammation

En résumé

- Des gencives qui **saignent ne sont pas normales** : c'est un signal d'alarme
- La gingivite est **guérissable** avec un bon traitement et une hygiène rigoureuse
- Sans traitement, elle évolue vers la parodontite, irréversible
- Un contrôle chez le dentiste dès les premiers signes est indispensable`,
    category: "Parodontologie",
    readTime: "4 min",
  },
  {
    id: "blanchiment-dentaire",
    title: "Blanchiment dentaire : ce qu'il faut savoir",
    excerpt: "Envie d'un sourire plus blanc ? Découvrez les options de blanchiment sûres et efficaces.",
    content: `Le blanchiment dentaire est l'un des traitements esthétiques les plus demandés. Mais entre les kits vendus en grande surface, les produits non réglementés et les techniques professionnelles, il est essentiel de savoir à qui faire confiance et ce qui est réellement efficace — et sans danger.

Comment fonctionne le blanchiment ?

Le principe repose sur l'utilisation de **peroxyde d'hydrogène** (eau oxygénée) ou de **peroxyde de carbamide**, qui pénètre dans l'émail et oxyde les molécules de pigments responsables de la coloration. En France, seuls les chirurgiens-dentistes sont autorisés à utiliser des concentrations supérieures à **6 % de peroxyde d'hydrogène**.

Les deux techniques professionnelles

**Blanchiment au fauteuil (en cabinet)**
Réalisé en une à deux séances d'environ une heure. Le praticien applique un gel à haute concentration activé par une lampe LED ou laser. Les résultats sont immédiats et peuvent durer **1 à 3 ans** selon les habitudes.

**Blanchiment à domicile (gouttières sur mesure)**
Des gouttières thermoformées personnalisées sont fabriquées à partir d'empreintes de vos dents. Vous appliquez vous-même le gel à concentration modérée **chaque nuit pendant 14 à 21 jours**. Technique progressive, résultats durables.

Qui peut en bénéficier ?

Le blanchiment est indiqué pour les dents présentant :

- Colorations liées au **café, thé, vin, tabac**
- Jaunissement naturel avec l'âge
- Taches dues à certains **médicaments** (tétracyclines légères)

Il est contre-indiqué en cas de :

- **Grossesse ou allaitement**
- Dents avec nombreuses **restaurations antérieures** (les prothèses ne blanchissent pas)
- **Hypersensibilité** dentaire sévère non traitée
- Moins de **18 ans**
- Caries ou maladies parodontales actives

Les produits en grande surface : sont-ils efficaces ?

Les dentifrices et kits blanchissants vendus en pharmacie ou supermarché contiennent des concentrations très faibles (maximum 0,1 % de peroxyde). Leur effet est essentiellement **abrasif** — ils éliminent les taches de surface — mais ils ne modifient pas la couleur intrinsèque de l'émail. Certains peuvent même fragiliser l'émail à long terme s'ils sont trop abrasifs.

Effets secondaires possibles

- **Sensibilité temporaire** pendant et après le traitement (3 à 5 jours)
- **Irritation des gencives** si le gel entre en contact avec elles
- Ces effets sont transitoires et disparaissent spontanément

Entretien et durée des résultats

Pour prolonger les effets :

- Évitez les aliments et boissons colorants pendant **48h après chaque séance**
- Limitez le café, thé et vin rouge au quotidien
- Ne fumez pas
- Maintenez une hygiène rigoureuse et des contrôles réguliers

En résumé

- Le blanchiment professionnel est **sûr et efficace** sous supervision dentaire
- Les résultats durent **1 à 3 ans** avec un bon entretien
- Traitez d'abord toute pathologie dentaire avant d'envisager un blanchiment`,
    category: "Esthétique",
    readTime: "5 min",
  },
  {
    id: "implants-dentaires-guide",
    title: "Implants dentaires : ce qu’il faut savoir",
    excerpt: "Tout ce que vous devez savoir sur les implants : procédure, durée, coût et résultats.",
    content: `L'implant dentaire est aujourd'hui considéré comme la solution de référence pour remplacer une dent manquante. Il offre un résultat esthétique et fonctionnel proche de la dent naturelle, avec une excellente stabilité dans le temps lorsqu'il est bien entretenu.
La durée de vie d'un implant dépend de nombreux facteurs (hygiène bucco-dentaire, état de santé général, suivi régulier...). Avec un entretien rigoureux et des contrôles réguliers, les implants peuvent durer de nombreuses années.

Qu'est-ce qu'un implant dentaire ?

Un implant est une **vis en titane** placée chirurgicalement dans l'os de la mâchoire, qui sert de racine artificielle. Sur cet implant est fixée une **couronne prothétique** en céramique, conçue pour ressembler et fonctionner comme une vraie dent. Le titane est choisi pour sa **biocompatibilité** exceptionnelle : l'os s'y soude naturellement, un phénomène appelé ostéo-intégration.

Quand recourir à un implant ?

- Perte d'une ou plusieurs dents suite à une extraction, un traumatisme ou une maladie parodontale
- Remplacement d'un bridge (pour préserver les dents adjacentes)
- Stabilisation d'un appareil dentaire amovible
- Réhabilitation complète de la mâchoire (technique All-on-4 ou All-on-6)

Les étapes du traitement

**1. Bilan préimplantaire**
Radio panoramique et scanner 3D (CBCT) pour évaluer le volume osseux disponible, la position des nerfs et des sinus.

**2. Pose chirurgicale de l'implant**
Réalisée sous anesthésie locale, la pose dure de 30 à 60 minutes. Dans certains cas, une greffe osseuse est nécessaire pour augmenter le volume d'os.

**3. Phase d'ostéo-intégration**
L'implant fusionne avec l'os pendant **3 à 6 mois**. Une dent provisoire peut être portée durant cette période.

**4. Pose de la couronne définitive**
Une empreinte optique permet de fabriquer une couronne sur mesure, fixée sur l'implant via un pilier (abutment).

Conditions de réussite

- Un **volume osseux suffisant** (ou une greffe préalable)
- Absence de maladies parodontales actives
- **Arrêt du tabac** : le tabac divise par deux le taux de succès implantaire
- Diabète équilibré
- Bonne hygiène bucco-dentaire au quotidien

Durée de vie et entretien

Un implant bien intégré peut offrir une excellente stabilité dans le temps lorsqu’il est bien entretenu et suivi régulièrement.
La couronne prothétique peut parfois nécessiter un remplacement après plusieurs années, selon l’usure, l’hygiène bucco-dentaire et les contraintes mécaniques.
L’entretien est similaire à celui des dents naturelles :

- Brossage deux fois par jour
- Utilisation de brossettes interdentaires adaptées
- Contrôles dentaires réguliers (1 à 2 fois par an)

Remboursement et coût

En France, les implants dentaires ne sont généralement pas pris en charge par l’Assurance Maladie, sauf dans certaines situations particulières (agénésie, séquelles d’accident, pathologies spécifiques).
Certaines complémentaires santé peuvent proposer des forfaits de remboursement pour les implants ou les prothèses associées. Un devis personnalisé permet d’évaluer précisément le reste à charge.

En résumé

- L'implant est la solution la plus **durable et confortable** pour remplacer une dent
- Le traitement dure en moyenne **6 à 12 mois** de la pose à la couronne définitive
- Le **tabac est le principal facteur d'échec** : un sevrage est fortement conseillé
- Un bilan radiologique préalable est indispensable pour évaluer votre éligibilité`,
    category: "Implantologie",
    readTime: "6 min",
  },
  {
    id: "soins-dentaires-enfants",
    title: "Soins dentaires pour les enfants : guide pour les parents",
    excerpt: "Comment prendre soin des dents de votre enfant dès le plus jeune âge.",
    content: `La santé bucco-dentaire de votre enfant se construit dès les premiers mois de vie. De bonnes habitudes prises tôt permettent de prévenir les caries, de favoriser un développement dentaire harmonieux et d'éviter l'anxiété dentaire à l'âge adulte. L'UFSBD recommande une première consultation dès l'apparition de la première dent.

La première dent : dès 6 mois

Les premières dents de lait font généralement leur apparition entre **6 et 12 mois**. Contrairement aux idées reçues, les dents de lait sont essentielles :

- Elles permettent la **mastication et la parole**
- Elles **maintiennent l'espace** pour les dents définitives
- Une carie sur une dent de lait peut infecter le germe de la dent permanente sous-jacente

Comment brosser les dents d'un jeune enfant ?

- **0 à 2 ans** : nettoyez les dents avec une compresse humide ou une brosse à dents adaptée, **sans dentifrice** ou avec une trace de dentifrice à 500 ppm de fluor
- **2 à 6 ans** : brosse souple adaptée à l'enfant + dentifrice à **500 ppm de fluor** — quantité de la taille d'un petit pois. C'est le parent qui brosse.
- **6 ans et plus** : dentifrice à **1000 ppm de fluor** — quantité de la taille d'un petit pois. L'enfant brosse, le parent vérifie jusqu'à 8-10 ans.

Le fluor : allié numéro un contre la carie

Le fluor renforce l'émail et inhibe les bactéries cariogènes. L'UFSBD recommande :

- Dès la première dent : dentifrice fluoré adapté à l'âge
- En complément : des **vernis fluorés** appliqués au cabinet (2 à 4 fois par an chez les enfants à risque)
- **Pas de suppléments fluorés systématiques** sans avis du dentiste (risque de fluorose)

La première consultation dentaire

Elle doit avoir lieu **avant 1 an** selon les recommandations actuelles, ou au plus tard à l'apparition des premières dents. Cette visite permet :

- D'évaluer le développement dentaire
- De donner des conseils personnalisés aux parents
- D'habituer l'enfant au cabinet de façon positive et détendue

Le programme M’T dents prend en charge un examen bucco-dentaire de prévention annuel chez les enfants et jeunes adultes de 3 à 24 ans.

Les habitudes à éviter

- **Biberon de jus de fruit ou de lait sucré** au coucher : le sucre reste en contact avec les dents toute la nuit
- **Sucer son pouce** ou une tétine au-delà de 3-4 ans : peut déformer la mâchoire
- **Partager les couverts** avec l'enfant : les bactéries cariogènes sont transmissibles par la salive
- Donner des **bonbons et gâteaux** à répétition entre les repas

La carie précoce du jeune enfant

La **carie du biberon** est une forme sévère qui peut toucher les bébés dès l'apparition des premières dents. Elle se manifeste par des taches blanches ou brunes sur les dents du devant. C'est une urgence dentaire : consultez rapidement si vous observez ces signes.

En résumé

- Brossez les dents **dès la première dent**, deux fois par jour
- Utilisez un **dentifrice fluoré adapté à l'âge**
- Première consultation dentaire **avant 12-18 mois**
- Évitez les sucreries entre les repas et le biberon sucré au coucher
- Profitez des **bilans M'T dents** gratuits tout au long de la croissance`,
    category: "Pédodontie",
    readTime: "5 min",
  },
];

export const TECHNOLOGIES = [
  { title: "Radio numérique", description: "Imagerie numérique haute définition pour un diagnostic rapide et précis.", benefit: "Diagnostic précis" },
  { title: "Caméra intra-orale", description: "Visualisation clinique et explication du traitement.", benefit: "Communication simplifiée" },
  { title: "Empreinte optique 3D", description: "Empreinte numérique pour plus de confort et de précision.", benefit: "Confort optimal" },
  { title: "Scanner 3D (CBCT)", description: "Imagerie 3D pour une l’analyse approfondie dans certaines situations cliniques.", benefit: "Imagerie avancée" },
  { title: "Stérilisation", description: "Protocoles de stérilisation rigoureux conformes aux normes en vigueur.", benefit: "Sécurité sanitaire" },
  { title: "Équipements du centre", description: "Fauteuils ergonomiques et matériels adaptés pour votre confort.", benefit: "Confort et performance" },
];
