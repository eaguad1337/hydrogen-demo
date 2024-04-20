export default function ApplyThanks() {
  return (
    <div className="container flex flex-col gap-5 px-10 mx-auto justify-center my-10 shadow dark:bg-gray-900 m-4 bg-white rounded-lg p-4 min-h-[300px]">
      <h1 className="text-2xl font-bold">Postulación recibida.</h1>
      <p>Revisaremos tus datos y te serás contactado lo antes posible.</p>

      <a
        href="/"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm max-w-fit px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        ir al home
      </a>
    </div>
  );
}
