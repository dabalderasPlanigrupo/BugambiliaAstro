interface Props {
  image?: any;
  title: string;
  categoria: string;
  color: string;
  horario: string;
}

const DirectorioItem = ({ image, title, categoria, color, horario }: Props) => {
  return (
    <div className='group bg-white outline outline-1 outline-gray-200 aspect-square flex flex-col items-center relative justify-center p-8'>
      {image && image.src && (
        <img
          className=''
          src={image.src}
          alt={`${title}-logo`}
          width={200}
          height={150}
        />
      )}
      <div className='absolute inset-0 flex flex-col justify-between items-start'>
        <span
          className={`py-2 px-4 mt-4 ml-auto text-sm font-semibold rounded-s-md text-black bg-gray-200`}
        >
          {title}
        </span>
        <p
          className={`py-2 px-4 mb-4 mr-4 text-sm text-white opacity-0 transition-all font-semibold rounded-e-md group-hover:opacity-100 ${color}`}
          dangerouslySetInnerHTML={{ __html: horario }}
        ></p>
      </div>
    </div>
  );
};

export default DirectorioItem;
