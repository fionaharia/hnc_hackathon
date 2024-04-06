import Language from '../data/Language'; 

const FlagCard = () => {

  return (
    <div>
    <div className="text-white text-center p-16 text-4xl">Choose a Language!</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pr-6 md:grid-cols-3 lg:grid-cols-5 pl-6 gap-4">
        {Language.map((language, index) => (
          <button className="bg-white p-4 rounded-lg shadow-md" key={index}>
            <h3 className="text-lg text-center font-semibold">{language.name}</h3>
        </button>
      ))}
    </div>
    </div>
  )
}

export default FlagCard




