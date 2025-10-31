/** biome-ignore-all lint/suspicious/noArrayIndexKey: <temp> */

import { Building, Github, SquareArrowOutUpRight, Users } from 'lucide-react'
import cover from './assets/cover.png'

export function App() {
  return (
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
              src="http://github.com/Tiago0Br.png"
              alt="Foto de perfil do usuário"
              draggable="false"
              className="rounded-md"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <strong className="text-base-title text-2xl">Tiago Tavares Lopes</strong>
              <a
                href="http://github.com/Tiago0Br"
                target="_blank"
                rel="noopener"
                className="uppercase text-brand text-sm flex items-center gap-1.5"
              >
                <span>Github</span>
                <SquareArrowOutUpRight className="size-3 text-brand" />
              </a>
            </div>

            <p className="text-justify line-clamp-3 max-w-[612px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem
              distinctio enim placeat quidem! Laboriosam, magni nihil consequuntur, unde
              reiciendis sequi dolores aliquam suscipit eligendi officiis, molestias
              numquam enim neque.
            </p>

            <div className="flex gap-6">
              <span className="flex items-center gap-1">
                <Github className="size-4" /> Github
              </span>
              <span className="flex items-center gap-1">
                <Building className="size-4" /> Rocketseat
              </span>
              <span className="flex items-center gap-1">
                <Users className="size-4" /> 32 seguidores
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between w-full">
              <strong>Publicações</strong>
              <span className="text-base-span">6 publicações</span>
            </div>

            <input
              type="text"
              placeholder="Buscar conteúdo"
              className="border border-base-border rounded-md p-2"
            />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 6 }).map((_item, index) => (
              <div
                key={index}
                className="p-4 bg-base-post rounded-lg flex flex-col gap-2"
              >
                <div className="flex justify-between">
                  <h2 className="text-xl text-base-title line-clamp-2 max-w-[300px]">
                    JavaScript data types and data structures
                  </h2>

                  <span className="text-base-span text-sm">Há 1 dia</span>
                </div>

                <p className="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error atque
                  ipsam sunt qui doloremque quo nihil voluptate corrupti rerum, dolor
                  tempore soluta eveniet quos totam deserunt magni laboriosam sit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
