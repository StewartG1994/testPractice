import capitalize from './capitalize.js'

test('All capitals One', () => {
    expect(capitalize('this should all be capitals')).toBe('THIS SHOULD ALL BE CAPITALS');
  });

  test('All capitals Two', () => {
    expect(capitalize('ThiS shoulD Be all capiTalS maTe')).toBe('THIS SHOULD BE ALL CAPITALS MATE');
  });