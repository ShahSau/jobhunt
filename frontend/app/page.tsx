'use client'
import { useEffect,useState } from "react";
import Header from "./components/Header";
import { useTheme } from "./providers/ThemeProvider";
import { decryptData } from "./utils/cryptoToken";
import { useUser } from './providers/AuthProvider'
import Image from "next/image";
import LogoAnimation from "./components/LogoAnimation";


const Home=()=> {
  const { theme } = useTheme();
  const [token, setToken] = useState<string | null>(null);

  const { userSignedIn } = useUser()
  console.log(userSignedIn,"DDDD",token, theme)


  useEffect(() => {
    const tokenString = window.localStorage.getItem('token');
    const salt = process.env.NEXT_PUBLIC_SALT|| '';
    const token = tokenString ? decryptData(tokenString, salt) : null;
    setToken(token);
  }, []);

  const [jobType, setJobType] = useState<string[]>([])

  const handleJobTypeChange = (type: string) => {
    setJobType(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  const people=[
    {
      id:1,
      image:"https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213931/avatar-kyla-clay_bijmu1.jpg"
    },
    {
      id:2,
      image:"https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213653/avatar-harry-bender_pktko6.jpg"
    },
    {
      id:3,
      image:"https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213700/avatar-isabelle-hartman_xwlce7.jpg"
    },
    {
      id:4,
      image:"https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213778/avatar-noel-baldwin_o6gdux.jpg"
    },
    {
      id:5,
      image:"https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213538/avatar-caleb-monroe_udwzjt.jpg"
    },
    {
      id:6,
      image:"https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213750/avatar-erica-wyatt_bebovc.jpg"
    }
  ]
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4">
              Join the best tech<br />startups in the <span className="bg-gradient-to-r from-indigo-800 via-blue-500 to-violet-500 inline-block text-transparent bg-clip-text -rotate-2">industry</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our landing page template works on all devices, so you only have to set it<br />up once, and get beautiful results forever.
            </p>
            <div className="flex items-center justify-center">
              <div className="flex -space-x-2">
                {people.map((person, i) => (
                  <Image key={i} src={person.image} alt="Profile" width={40} height={40} className="rounded-full border-2 border-white" />
                ))}
              </div>
              <span className="ml-4 text-gray-600">Reach 100K+ Professionals</span>
            </div>
          </section>

          {/** logo animation*/}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Trusted by</h2>
            <div className="flex justify-between items-center">
              <LogoAnimation />
            </div>
          </section>

          {/** Jobs */}
          <section className="flex gap-8">
            <div className="flex-grow">
              <h2 className="text-4xl font-bold mb-8">Latest jobs</h2>
              {/* <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 rounded-full p-3 mr-4">
                    <span className="text-2xl">Q</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Engineering Manager Developer Experience</h3>
                    <p className="text-gray-600">Qonto</p>
                  </div>
                  <span className="ml-auto text-gray-500">22d</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>$75K - $100K</span>
                  <span>🇬🇧 London, UK</span>
                </div>
              </div> */}
              {/**http://localhost:3000/favourite */}
            </div>
            <div className="w-64">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Job Type</h3>
                  <button className="text-indigo-600" onClick={() => setJobType([])}>Clear</button>
                </div>
                {['Full-time', 'Part-time', 'Intership', 'Contract / Freelance', 'Co-founder'].map((type) => (
                  <label key={type} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                      checked={jobType.includes(type)}
                      onChange={() => handleJobTypeChange(type)}
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>
          {/*https://pulsefit-snowy.vercel.app/ => what our customer say about us */}
        </div>
    </div>
    </div>

  );
}

export default Home;
