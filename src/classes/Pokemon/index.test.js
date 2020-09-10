import Pokemon from '.';

test('It exists', () => {
  expect(Pokemon).toBeDefined();
});

test('The constructor works', () => {
  const pikachu = new Pokemon('Pikachu', 20, 5);

  expect(pikachu.name).toBe('Pikachu');
  expect(pikachu.hp).toBe(20);
  expect(pikachu.power).toBe(5);
});