import Player from '.';

test('It exists', () => {
  expect(Player).toBeDefined();
});

test('The constructor works', () => {
  const tahm = new Player('Tahm', 15);

  expect(tahm.name).toBe('Tahm');
  expect(tahm.id).toBe(15);
});
