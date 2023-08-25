import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Acerca de
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Actualmente estoy buscando mi primer trabajo en el mundo IT.
            
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contacto
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Por cualquier consulta no dude en contactarme por {" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                .
              </p>
            </div>
            
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Redes
            </h1>
            <div className="mt-4 ml-4">
              
              
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Habilidades técnicas
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/518977ed5e52020624daf41cf644046368af610f19a7b1220dd1d58377d08288/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656163742d6f726967696e616c2d776f72646d61726b2e737667"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/3b7cd4f410391d1f43e0b4545192c5a403432194cd256be40bf25e74519248f2/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6e6578746a732e706e67"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/3523bd4e344ec5909336e3891b7511da62905e8953381f6fa69c11983e8fd9f6/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f626f6f7473747261702d706c61696e2e737667"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/48c9507b62d83559dc3aef4f3951293b15ab2f5fa1029bdf6ec42f9fa062e775/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6e6f64656a732d6f726967696e616c2d776f72646d61726b2e737667"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/93acca6a99de2894799bf5e78396c83a682e46a4b1d98aa3127ae7b25c3754b6/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f657870726573732d6f726967696e616c2d776f72646d61726b2e737667"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/86407466428babbb148803dc69dc4d11cacc4f73bbb7b04a5cfa1274084521bb/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f7374726170692e737667"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/ddc853c2f9e0dc4538d5f3500880e557ab03f9ea8050b5152d0ef61d042f7d01/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f706f737467726573716c2d6f726967696e616c2d776f72646d61726b2e737667"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://camo.githubusercontent.com/da33ce63f1e78ececdc5f65879560a5e8d3ac805670af8934eea5d1b0cd9a5b7/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f616d617a6f6e77656273657276696365732d6f726967696e616c2d776f72646d61726b2e737667"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wordpress_Blue_logo.png/600px-Wordpress_Blue_logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/ngx-semantic/ngx-semantic-docs/master/src/assets/images/logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
