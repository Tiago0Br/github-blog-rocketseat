import { Building, Github, SquareArrowOutUpRight, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import cover from './assets/cover.png'
import { api } from './lib/axios'
import { dayjs } from './lib/dayjs'

interface GithubProfileData {
  login: string
  name: string
  bio: string
  company: string | null
  followers: number
  avatar_url: string
}

interface ProjectIssues {
  total_count: number
  items: {
    title: string
    number: number
    body: string
    created_at: string
  }[]
}

const perPage = 10

export function App() {
  const [profileData, setProfileData] = useState<GithubProfileData | undefined>(undefined)
  const [projectIssues, setProjectIssues] = useState<ProjectIssues | undefined>(undefined)
  const [pagination, setPagination] = useState(perPage)

  useEffect(() => {
    api.get('/users/Tiago0Br').then((res) => setProfileData(res.data))

    api
      .get('/search/issues', {
        params: {
          q: 'is:issue state:open repo:Tiago0Br/testlab',
        },
      })
      .then((res) => setProjectIssues(res.data))
  }, [])

  function handleShowMore() {
    setPagination((current) => current + perPage)
  }

  return (
    <>
      {profileData ? (
        <div>
          <header className="h-[296px] w-full overflow-hidden">
            <img
              src={cover}
              alt=""
              draggable="false"
              className="w-full h-full object-cover"
            />
          </header>

          <main className="mx-auto max-w-[864px] flex flex-col items-center gap-12 pb-8">
            <div className="w-full -mt-20 bg-base-profile rounded-md flex gap-6 py-6 px-8">
              <div className="size-[148px]">
                <img
                  src={profileData.avatar_url}
                  alt="Foto de perfil do usuário"
                  draggable="false"
                  className="rounded-md"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <strong className="text-base-title text-2xl">{profileData.name}</strong>
                  <a
                    href={`https://github.com/${profileData.login}`}
                    target="_blank"
                    rel="noopener"
                    className="uppercase text-brand text-sm flex items-center gap-1.5"
                  >
                    <span>Github</span>
                    <SquareArrowOutUpRight className="size-3 text-brand" />
                  </a>
                </div>

                <p className="text-justify line-clamp-3 max-w-[612px]">
                  {profileData.bio}
                </p>

                <div className="flex gap-6">
                  <span className="flex items-center gap-1">
                    <Github className="size-4" /> {profileData.login}
                  </span>
                  {profileData.company && (
                    <span className="flex items-center gap-1">
                      <Building className="size-4" /> {profileData.company}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Users className="size-4" /> {profileData.followers} seguidores
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-10">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between w-full">
                  <strong>Publicações</strong>
                  {projectIssues && (
                    <span className="text-base-span">
                      {projectIssues.total_count} publicações
                    </span>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Buscar conteúdo"
                  className="border border-base-border rounded-md p-2"
                />
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectIssues?.items.slice(0, pagination).map((post) => (
                  <div
                    key={post.number}
                    className="p-6 bg-base-post rounded-lg flex flex-col gap-2 cursor-pointer hover:bg-base-profile transition-all"
                  >
                    <div className="flex justify-between">
                      <h2 className="text-xl text-base-title line-clamp-2 max-w-[270px]">
                        {post.title}
                      </h2>

                      <span className="text-base-span text-sm">
                        {dayjs(post.created_at).fromNow()}
                      </span>
                    </div>

                    <p className="line-clamp-4">{post.body}</p>
                  </div>
                ))}
              </div>

              {projectIssues && pagination < projectIssues.items.length && (
                <div>
                  <button
                    type="button"
                    onClick={handleShowMore}
                    className="p-3 rounded-lg bg-brand text-white font-semibold cursor-pointer hover:bg-blue-400 transition-colors"
                  >
                    Carregar mais
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center text-3xl">
          Carregando...
        </div>
      )}
    </>
  )
}
