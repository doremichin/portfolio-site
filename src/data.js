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
        description: [
          'Unsplash public API를 이용해 개발했습니다.',
          '사용자는 원하는 사진을 검색 할 수 있고 색이나 모양별로 필터링을 할 수 있습니다.',
          '프로젝트가 점점 커지고 컴포넌트의 깊이가 깊어지면서 상태를 전달하기가 번거로워졌고 불필요한 리렌더링이 많이 발생 했습니다. 그래서 redux 사용해 상태관리를 했고 redux-saga를 사용해 api 요청 등 비동기처리를 했습니다.',
          '사용자가 스크롤 할 때 지연 없이 새로운 컨텐츠를 불러올 수 있도록 Intersection Obsever를 사용해서 무한 스크롤을 구현 했습니다.',
          '검색한 페이지에서 사진을 필터링 하는 기능은 쿼리스트링으로 필터링 데이터를 전달해서 리렌더링 하는 방식으로 구현 했습니다.',
          '모바일에서도 이용할 수 있도록 반응형 제작을 했습니다.',
        ],
        url: 'https://optimistic-panini-bf13f1.netlify.app',
        imageUrl: 'https://myeoni-portfolio.s3.ap-northeast-2.amazonaws.com/images/unsplash+view.png',
        tags: ['React', 'Redux', 'Redux-Saga', 'Styled-Components', 'ESlint'],
        github: 'https://github.com/doremichin/unsplash-proto',
        jira: '',
        startDate: '/ 2021.10.08~',
        hasLink: true,
      },
      {
        name: 'Youtube',
        description: [
          'Youtube public API를 이용해 개발했습니다.',
          '사용자는 원하는 영상을 검색하고 시청할 수 있습니다.',
          '영상을 클릭 했을 때 플레이어와 채널 정보, 관련 영상 리스트, 댓글 등을 보여주기 위해 각각의 섹션을 나누어 따로 데이터를 불러오도록 개발 했습니다.',
          '이전에 다뤘던 API보다 복잡하게 느껴졌던 Youtube API를 빠르고 쉽게 테스트 하기 위해 Postman을 사용했고, 응답 받은 데이터를 보고 컴포넌트 구조를 나누어 설계 했습니다.',
          'Redux-Toolkit을 사용하면 액션과 리듀서를 하나의 객체에 담을 수 있고 코드양을 줄일 수 있다는 글을 보고 프로젝트에 적용했습니다.',
          '모바일에서도 이용할 수 있도록 반응형 제작을 했습니다.',
        ],
        url: 'https://affectionate-meninsky-85c58e.netlify.app/',
        imageUrl: 'https://myeoni-portfolio.s3.ap-northeast-2.amazonaws.com/images/Youtube+view.png',
        tags: ['React', 'Redux', 'Redux-toolkit', 'Styled-Components', 'ESlint'],
        github: 'https://github.com/doremichin/youtube-proto',
        jira: '',
        startDate: '/ 2021.11.02~',
        hasLink: true,

      },
      {
        name: 'Etc..',
        description: [
          '프로젝트 공통사항으로 Jira, Github를 사용해서 프로젝트 버전관리를 했습니다.',
          'Jira의 스크럼 템플릿을 사용해서 명시적으로 이슈를 나누어 개발을 했습니다.',
          'ESLint를 사용해 코드의 문법적 오류를 미리 막고 통일된 스타일로 포맷 했습니다.',
          '현재 이 포트폴리오 사이트는 Next.js를 사용해 제작 했습니다.',
          'Firebase를 이용해 blog 사이트를 만들어보면서 CRUD 구현을 공부했습니다.',
        ],
        url: '#;',
        imageUrl: 'https://myeoni-portfolio.s3.ap-northeast-2.amazonaws.com/images/youtube-jira.png',
        tags: [],
        github: '',
        jira: '',
        hasLink: false,

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
