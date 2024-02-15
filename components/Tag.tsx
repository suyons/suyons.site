import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-sm font-medium uppercase leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 xl:block"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
