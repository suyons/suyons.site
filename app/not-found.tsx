import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          페이지를 찾을 수 없습니다.
        </p>
        <p className="mb-8">입력하신 주소가 정확한지 다시 한 번 확인해 주세요.</p>
        <Link
          href="/"
          className="focus:shadow-outline-cyan inline rounded-lg border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          홈페이지로 돌아가기
        </Link>
      </div>
    </div>
  )
}
