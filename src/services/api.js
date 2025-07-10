// In a real application, you would fetch data from your backend API here.
// For now, we'll use mock data.

const mockCards = [
  {
    _id: '1',
    name: 'Black Lotus',
    manaCost: '{0}',
    cmc: 0,
    colors: [],
    type: 'Artifact',
    text: 'Sacrifice Black Lotus: Add three mana of any one color.',
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382866&type=card',
    set: 'Vintage Masters',
    rarity: 'Mythic'
  },
  {
    _id: '2',
    name: 'Ancestral Recall',
    manaCost: '{U}',
    cmc: 1,
    colors: ['Blue'],
    type: 'Instant',
    text: 'Target player draws three cards.',
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382841&type=card',
    set: 'Vintage Masters',
    rarity: 'Mythic'
  },
  {
    _id: '3',
    name: 'Time Walk',
    manaCost: '{1}{U}',
    cmc: 2,
    colors: ['Blue'],
    type: 'Sorcery',
    text: 'Take an extra turn after this one.',
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383131&type=card',
    set: 'Vintage Masters',
    rarity: 'Mythic'
  }
];

export const searchCards = async (searchTerm) => {
  console.log('Searching for:', searchTerm);
  // Simulate an API call
  return new Promise(resolve => {
    setTimeout(() => {
      const results = mockCards.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      resolve(results);
    }, 500);
  });
};
