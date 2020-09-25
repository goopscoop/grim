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
    kult: ['Hey, Allie.', 'Yeah? Anything on layered universe theory?', 'Shit. I\'ll need to break through again when I have the chance.']
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
    kult: ['A world of oil slick sunsets...', '...toxic spore storms...', '...and unimaginable veil sign.']
  }
};

export default function getSpeechStrings(key) {
  return speechStrings[key];
};

export const getAllieDefaultText = () => getSpeechStrings('default').allie[0];
