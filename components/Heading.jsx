import Search from '../components/Search'
import Logo from './Logo'
import DescriptionIcons from './DescriptionIcons'

const Heading = () => {
  return (
    <header className="flex flex-col justify-center items-center flex-1 w-sm mt-0">
      <h1 className="text-4xl w-full text-center">
        <Logo text='YouTube' /> Descript
      </h1>
      <DescriptionIcons />
      <Search />
    </header>
  )
}

export default Heading
