import cover from '../assets/cover.png'

export function Header() {
  return (
    <header className="h-[296px] w-full overflow-hidden">
      <img src={cover} alt="" draggable="false" className="w-full h-full object-cover" />
    </header>
  )
}
