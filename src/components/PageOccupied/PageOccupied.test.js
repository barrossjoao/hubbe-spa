import PageOccupied from './PageOccupied';

test('PageOccupied renderiza corretamente', () => {
  const container = document.createElement('div');
  const heading = document.createElement('h1');
  const paragraph = document.createElement('p');

  heading.textContent = 'Lamento... ☹';
  paragraph.textContent = 'A página está ocupada por outro usuário. Aguarde..';

  container.appendChild(heading);
  container.appendChild(paragraph);

  const result = PageOccupied();

  expect(result.type).toBe('div');
  expect(result.props.children[0].props.children).toBe('Lamento... ☹');
  expect(result.props.children[1].props.children).toBe('A página está ocupada por outro usuário. Aguarde..');
});
