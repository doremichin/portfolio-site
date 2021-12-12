export const appData = {
  visual: {
    title: '',
    slogan: '',
  },
  about: {
    title: 'About Me',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ullam.',
    story: 'wwLorem ipsum dolor sit amet, consectetur adipisicing elit. In, ullam.',
  },
  works: {
    title: 'Recent Works',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ullam.',
    list: [
      {
        name: 'Unsplash',
        description: ['Unsplash public API를 이용해 개발했습니다.', '유저는 원하는 사진을 검색 할 수 있고 색이나 모양별로 필터링을 할 수 있습니다.', 'redux, redux-saga 를 이용해 상태관리와 비동기처리를 했습니다.', 'Intersection Obsever를 사용해 무한 스크롤을 구현 했습니다.'],
        url: 'https://optimistic-panini-bf13f1.netlify.app',
        imageUrl: ['https://drive.google.com/uc?id=1faIYYWWDDDlHQy_xnDXG5K1nvQVaNaLg'],
        tags: ['React', 'Redux', 'Redux-Saga', 'Styled-Components', 'ESlint'],
        github: 'https://github.com/doremichin/unsplash-proto',
        jira: '',
        startDate: '/ 2021.10.08~',
      },
      {
        name: 'Youtube',
        description: ['Youtube public API를 이용해 개발했습니다.', '유저는 원하는 영상을 검색하고 시청할 수 있습니다.', '영상을 클릭하면 해당 영상의 디테일과 연관 영상 리스트, 댓글 등을 볼 수 있습니다.', 'Redux-Toolkit을 사용하여 보일러플레이트 코드양을 줄였습니다.'],
        url: 'https://affectionate-meninsky-85c58e.netlify.app/',
        imageUrl: ['https://drive.google.com/uc?id=1Tc5KiSe4JfTXZH8mEJ-5gKPLTWc9k1eA'],
        tags: ['React', 'Redux', 'Redux-toolkit', 'Styled-Components', 'oauth', 'ESlint'],
        github: 'https://github.com/doremichin/youtube-proto',
        jira: '',
        startDate: '/ 2021.11.02~',

      },
      {
        name: 'Common..',
        description: ['프로젝트 공통사항으로 Jira, Github를 사용해서 프로젝트 버전관리를 했습니다.', 'Jira의 스크럼 템플릿을 사용해서 명시적으로 이슈를 나누어 개발을 했습니다.', 'ESLint를 사용해 코드의 문법적 오류를 미리 막고 통일된 스타일로 포맷팅 했습니다.'],
        url: '#;',
        imageUrl: ['https://drive.google.com/uc?id=1fYUvV0ZcGq_KAE85AOncSM1TOJtHxN1b'],
        tags: [],
        github: '',
        jira: '',
      },
    ],
  },

}
export const frontSkills = [
  {
    title: 'react',
    thumbnails: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png',
  },
  {
    title: 'javascript',
    thumbnails: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  },
  {
    title: 'next.js',
    thumbnails: 'https://blog.kakaocdn.net/dn/cwO2es/btrdDwL8Gum/ceUSfBcd5f7UvBOW7SrW7K/img.png',
  },
]
export const softSkills = [
  {
    title: 'github',
    thumbnails: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  {
    title: 'jira',
    thumbnails: 'https://assets.website-files.com/6064b31ff49a2d31e0493af1/610d74bcf9677ddc924f314d_jira.svg',
  },
]
