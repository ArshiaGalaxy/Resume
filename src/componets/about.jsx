import avatar from '../assets/images/profile.jpg';
import content from './content.json';

function About(){
    return(
        <div className="bg-white dark:bg-slate-800 w-full h-screen">
            <div className="bg-gradient-to-tl from-purple-600 to-pink-400 h-36 relative w-full">
                <div className="absolute z-10 top-1/2 lg:top-full -translate-y-1/2 start-1/2 translate-x-1/2 lg:translate-x-0 lg:start-8 rounded-full bg-white dark:bg-slate-800 p-1 lg:p-2 size-28 lg:size-36">
                    <img className="rounded-full object-cover flex size-full aspect-square shadow-inner" src={avatar} alt={content.name}></img>
                </div>
                <h1 className="absolute z-0 top-full start-1/2 translate-x-1/2 text-nowrap lg:translate-x-0 -translate-y-1/2 lg:-translate-y-10 lg:start-40 bg-white dark:bg-slate-800 rounded-t-full lg:rounded-tr-none px-8 py-2 text-3xl font-black text-gray-800 dark:text-white mb-2">{content.name}</h1>
                <span className="absolute top-full translate-y-8 font-bold start-1/2 translate-x-1/2 lg:translate-x-0 lg:start-48 flex bg-purple-600 shadow-lg rounded-full px-6 py-1 text-sm text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-auto me-2 size-3">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <h2>دانشمند</h2>
                </span>
            </div>
            <div className="mt-20">
                <p className="text-gray-700 dark:text-gray-100 px-6">{content.about}</p>
            </div>
        </div>
    );
}

export default About;