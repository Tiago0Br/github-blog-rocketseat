import { useQuery } from '@tanstack/react-query'
import {
  CalendarDays,
  ChevronLeft,
  Github,
  MessageCircle,
  SquareArrowOutUpRight,
} from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '@/components/header'
import { Loading } from '@/components/loading'
import { getIssueDetails } from '@/http/get-issue-details'
import { dayjs } from '@/lib/dayjs'

export function PostDetailsPage() {
  const params = useParams()
  const number = Number(params.number)

  const navigate = useNavigate()

  const { data: post, isLoading } = useQuery({
    queryKey: ['get-issue-details', number],
    queryFn: () => getIssueDetails({ project: 'Tiago0Br/testlab', issueNumber: number }),
  })

  if (isLoading) return <Loading />

  return (
    <div>
      {post ? (
        <>
          <Header />
          <main className="mx-auto max-w-[864px] flex flex-col items-center gap-12 pb-8">
            <div className="w-full -mt-20 bg-base-profile rounded-md flex flex-col gap-6 py-6 px-8">
              <div className="w-full flex items-center justify-between">
                <button
                  type="button"
                  className="text-sm uppercase text-brand flex items-center gap-1 cursor-pointer"
                  onClick={() => navigate('/')}
                >
                  <ChevronLeft className="size-4 text-brand" />
                  Voltar
                </button>

                <a
                  href={post.html_url}
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-brand uppercase flex items-center gap-1"
                >
                  Ver no Github
                  <SquareArrowOutUpRight className="size-3 text-brand" />
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-3xl text-base-title">{post.title}</h1>

                <div className="flex gap-6">
                  <span className="flex items-center gap-1">
                    <Github className="size-4" /> {post.user.login}
                  </span>

                  <span className="flex items-center gap-1">
                    <CalendarDays className="size-4" /> {dayjs(post.created_at).fromNow()}
                  </span>

                  <span className="flex items-center gap-1">
                    <MessageCircle className="size-4" /> {post.comments}{' '}
                    {post.comments === 1 ? 'comentário' : 'comentários'}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-base-text">{post.body}</p>
          </main>
        </>
      ) : (
        <h1>Post não encontrado</h1>
      )}
    </div>
  )
}
