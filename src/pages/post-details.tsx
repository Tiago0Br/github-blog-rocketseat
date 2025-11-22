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
import { Loading } from '@/components/ui/loading'
import { Skeleton } from '@/components/ui/skeleton'
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

  if (!post && !isLoading) return <h1>Post não encontrado</h1>

  return (
    <div>
      <Header />
      <main className="px-3 md:px-0 mx-auto max-w-[864px] flex flex-col items-center gap-12 pb-8">
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
              href={post ? post.html_url : '#'}
              target={post ? '_blank' : '_self'}
              rel="noopener"
              className="text-sm text-brand uppercase flex items-center gap-1"
            >
              Ver no Github
              <SquareArrowOutUpRight className="size-3 text-brand" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {post ? (
              <h1 className="text-xl md:text-3xl text-base-title">{post.title}</h1>
            ) : (
              <Skeleton className="h-[36px] w-[280px]" />
            )}

            <div className="flex flex-col md:flex-row gap-1 md:gap-6">
              <span className="flex items-center gap-1">
                <Github className="size-4" />{' '}
                {post ? (
                  <span>{post.user.login}</span>
                ) : (
                  <Skeleton className="h-[22px] w-[68px]" />
                )}
              </span>

              <span className="flex items-center gap-1">
                <CalendarDays className="size-4" />{' '}
                {post ? (
                  <span>{dayjs(post.created_at).fromNow()}</span>
                ) : (
                  <Skeleton className="h-[22px] w-[68px]" />
                )}
              </span>

              <span className="flex items-center gap-1">
                <MessageCircle className="size-4" />{' '}
                {post ? (
                  <span>
                    {post.comments} {post.comments === 1 ? 'comentário' : 'comentários'}
                  </span>
                ) : (
                  <Skeleton className="h-[22px] w-[68px]" />
                )}
              </span>
            </div>
          </div>
        </div>

        {post ? <p className="text-base-text">{post.body}</p> : <Loading />}
      </main>
    </div>
  )
}
