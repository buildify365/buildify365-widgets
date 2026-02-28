BuildifyTOC.render('test', {
  title: 'test',
  subtitle: '',
  icon: '📋',
  accent: '#1a1a1a',
  bg: '#f9fafb',
  highlightCurrent: true,
  collapsible: true,
  defaultOpen: true,
  animation: true,
  showPrevNext: true,
  pnStyle: 'full',
  listMode: 'all',
  maxVisible: 5,
  linkTarget: '_blank',
  items: [
    { num:'01', title:'여기에 글 제목을 적습니다', sub:'여기에 글 부제목을 적습니다.', url:'여기에 글 url 주소를 적습니다.' },
    { num:'02', title:'여기에 글 제목을 적습니다2', sub:'여기에 글 부제목을 적습니다.2', url:'여기에 글 url 주소를 적습니다.2' }
  ]
});