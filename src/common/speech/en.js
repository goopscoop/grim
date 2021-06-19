const speechStrings = {
  /*
    convoName: {
      kult: [string(s)]
      allie: [string(s)]
    }
  */
  default: {
    kult: [],
    allie: ['What can I do for you, Kult?']
  },
  terminal1: {
    allie: ['Hello Kult, what can I *chrt* do for you?', 'I have several topics\'s loaded into my databanks.', 'There\'s a firewall blocking the undercity network.'],
    kult: ['Hey, Allie.', 'Yeah? Anything on layered universe theory?', 'Shit. I\'ll need to hack through again when I have the chance.']
  },
  terminal2: {
    allie: ['Can I help you find more information, Kult?'],
    kult: ['I have this weird feeling that I\'m missing something.']
  },
  veilSignHover: {
    kult: ['Veil sign...']
  },
  veilClick1: {
    kult: ['...something from another reality saying hello.', 'I knew it existed.']
  },
  titleHover: {
    kult: ['Grim Curio...']
  },
  titleClick0: {
    kult: ['A world of oil slick sunsets...', '...toxic spore storms...', '...and unimaginable veil sign.']
  },
  titleClick1: {
    kult: ['I\'m not just looking for some disease.', 'It acts like a disease, but it\'s veil sign, I know it.', 'Now I just need to prove it...', 'Fuck...']
  },
  scbarrusHover: {
    kult: ['Who\'s this S.C. Barrus guy?']
  },
  scbarrusClick0: {
    allie: ['S.C. Barrus is the author.', 'Yes. Would you like more information?', 'Loading...'],
    kult: ['Author?', 'Yeah. Get me everything you have on him.']
  },
  whatIsVeilSignHover: {
    kult: ['I wonder if there\'s any info on veil sign in the archives...']
  },
  whatIsVeilSignClick0: {
    allie: ['There is very little information on veil sign.', 'All logs are authored by Dao-Tai Yen.', 'Should I display the logs?'],
    kult: ['...', 'I didn\'t honestly think anything I\'d written would end up in the databanks anyway.', 'No... It\'s fine.']
  },
  nihilistHover: {
    kult: ['Nihilists destroyed my favorite pub. Allie, is there any new info on them?']
  },
  nihilistClick0: {
    kult: ['That sounds promising. Bring that up for me.'],
    allie: ['The government dispatched an updated memo on "The Nihilist Situation".', 'Loading...']
  },
  fringesHover: {
    kult: [`I should learn everything about the fringes I can before I go there...`]
  },
  fringesClick0: {
    kult: ['Anything on the naturalists in Clayton, specifically?', `He must be the expert. What has he written?`],
    allie: [`The fringes consist of the land and settlements outside the city of Refuge.`, `There are several logs written by a Doctor Simon Skelton in the archives.`, `Loading...`]
  }
};

export default function getSpeechStrings(key) {
  return speechStrings[key];
};

export const getAllieDefaultText = () => getSpeechStrings('default').allie[0];
