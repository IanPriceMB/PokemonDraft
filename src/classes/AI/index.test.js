import AI from '.';

test('It exists', () => {
  expect(AI).toBeDefined();
});

test('The constructor works', () => {
  const tahm = new AI('Tahm', 15);

  expect(tahm.name).toBe('Tahm');
  expect(tahm.id).toBe(15);
});