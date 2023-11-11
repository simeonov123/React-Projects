

export default function Register(){


  return(

    <div className = "bg-slate-500 w-full h-screen">
      <h1 className = "text-4xl text-center pt-8 flex items-center justify-center">My attempt</h1>

      <form className = "flex-auto mt-8">
        <h1 className = "text-3xl mb-9">Some text</h1>
        <ul>
          <li>
            <label>First Name</label>
            <input></input>
          </li>
          <li>
            <label>Last Name</label>
            <input></input>
          </li>
          <li>
            <label>Email</label>
            <input></input>
          </li>
          <li>
            <label>Password</label>
            <input></input>
          </li>
          <button>Submit</button>
        </ul>
      </form>
    </div>

  );

}