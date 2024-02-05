import Contact from "./components/Contact";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="p-4 w-screen md:h-screen h-full bg-slate-950 text-white">
        <div className="w-full h-full flex  md:flex-row flex-col gap-4 ">
          <div className="md:w-[22%] md:h-full h-[700px] flex flex-col gap-4 ">
            <div className="md:h-[40%] h-[300px] w-full bg-slate-900 ">
              {/* Profile */}
              <Profile />
            </div>
            <div className="md:h-[60%] h-[400px] w-full bg-slate-900">
              {/* Intro & Contact */}
              <Contact />
            </div>
          </div>
          <div className="md:w-[78%] bg-slate-900">
            {/* skills */}
            {/* Projects */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
