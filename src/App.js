function App() {
  document.body.style.backgroundColor = "#f3f0f0"
  return (
    <>
      <div className="container block md:w-9/12 md:flex mt-32 mx-auto justify-center items-center">
        <div className="left md:w-2/4 md:mx-auto mx-4 my-2">
          <img src="/images/fb-logo.svg" className="w-48 m-auto md:w-72 md:m-0" alt="facebook" />
          <p className="text-xl w-11/12 mx-auto md:text-3xl md:mx-7 md:w-auto">Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className="right shadow-lg flex flex-col relative mx-auto md:w-80 lg:w-96 md:p-4  bg-white p-2 rounded-xl w-60">
          <input type="text" className="px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg" placeholder="Email address or phone number" />
          <input type="password" className="px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg" placeholder="Password" />
          <input type="submit" className="bg-purple-600 text-white cursor-pointer p-3 font-bold my-2 rounded-lg text-xl" value="Log in" />
          <span className="text-center my-2 cursor-pointer text-blue-600 hover:underline">Forgoten password?</span>
          <hr />
          <button className="btn bg-green-600 font-bold p-4 my-2 mt-5 rounded-lg w-fit px-4 mx-auto  text-white">Create New Acconunt</button>
          <span className="absolute -bottom-12 text-sm"><span className="hover:cursor-pointer hover:underline font-bold"> Create a Page</span> for a celebrity, brand or business.</span>
        </div>
      </div>

    </>
  );
}

export default App;
