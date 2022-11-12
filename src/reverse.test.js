import reverse from './reverse.js'

test('reverse string one', () => {
    expect(reverse('backwards')).toBe('sdrawkcab');
  });

test('reverse string two', () => {
     expect(reverse('this should all be in reverse jokes')).toBe('sekoj esrever ni eb lla dluohs siht');
  });