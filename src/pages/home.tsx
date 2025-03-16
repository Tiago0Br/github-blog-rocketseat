import coverHeader from '../assets/cover-header.png'

export function Home() {
  return (
    <main className="bg-base-background min-h-screen">
      <header>
        <img src={coverHeader} alt="" draggable={false} />
      </header>
      <div className="flex flex-col items-center">
        <article className="-mt-24 max-w-[864px] min-h-[212px] bg-base-profile flex items-center gap-8 rounded-md py-4 px-6">
          <img
            src="https://github.com/Tiago0Br.png"
            alt="Foto de perfil"
            draggable={false}
            className="size-[148px] rounded-md"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-base-title text-2xl">Tiago Tavares Lopes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              impedit accusamus cupiditate tempore, quo at voluptate maxime
              magni debitis eum error adipisci minus?
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
