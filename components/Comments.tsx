'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export default function Comments() {
  const { resolvedTheme } = useTheme()
  return (
    <>
      <Giscus
        id="comments"
        repo="suyons/suyons.site"
        repoId="R_kgDOLOqmNQ"
        categoryId="DIC_kwDOLOqmNc4CdNvO"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        theme={resolvedTheme}
        lang="ko"
        loading="lazy"
      />
    </>
  )
}

/* import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {!loadComments && <button onClick={() => setLoadComments(true)}>Load Comments</button>}
      {siteMetadata.comments && loadComments && (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </>
  )
} */
