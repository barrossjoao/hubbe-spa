import PageConnected from './PageConnected';

test('PageConnected renderiza corretamente', () => {
  const container = document.createElement('div');
  const heading = document.createElement('h1');
  const paragraph = document.createElement('p');

  heading.textContent = 'Parabéns ☺';
  paragraph.textContent = 'Você está acessando a página segura.';

  container.appendChild(heading);
  container.appendChild(paragraph);

  const result = PageConnected();

  expect(result.type).toBe('div');
  expect(result.props.children[0].props.children).toBe('Parabéns ☺');
  expect(result.props.children[1].props.children).toBe('Você está acessando a página segura.');
});
