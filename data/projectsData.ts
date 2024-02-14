interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Clickcloud',
    description: `Google Maps에서 주요 도시의 날씨 실황을 아이콘으로 표시합니다.
    매 시간마다 주요 도시의 날씨 데이터를 업데이트합니다.`,
    imgSrc: '/static/images/clickcloud.png',
    href: 'https://github.com/suyons/clickcloud',
  },
  {
    title: 'Strangechat',
    description: `로컬 네트워크 내에서 이용 가능한 GUI 채팅 앱입니다.
    Java의 Swing을 이용하여 개발하였습니다.`,
    imgSrc: '/static/images/strangechat.png',
    href: 'https://github.com/suyons/strangechat',
  },
]

export default projectsData
