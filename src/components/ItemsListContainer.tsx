type props = {
  textoBienvenida: string;
};

export default function ItemsListContainer({ textoBienvenida }: props) {
  return (
    <>
      <div className='grid grid-span-full h-screen py-5 justify-center bg-neutral-800'>
        <h1 className='text-white text-2xl'>{textoBienvenida}</h1>
      </div>
    </>
  );
}
