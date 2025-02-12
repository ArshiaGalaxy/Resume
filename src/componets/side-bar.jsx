import { useContext, useState } from "react";
import { Link } from "react-router";
import { Light } from "./light";
import avatar from '../assets/images/profile.jpg';
import content from './content.json';

function SideBar() {
    const [full, setFull] = useState(false);
    const theme = useContext(Light);
    const fullToggle=()=>{
        setFull(!full);
    }
    const lightToggle=()=>{
        theme.setLight(theme.light === 'false' ? 'true' : 'false');
        console.log(theme.light);
    }
    return (
        <nav className={(theme.light === 'false' ? 'dark': '')+" px-4 py-2 lg:p-0 fixed lg:static z-30 h-20 top-0 start-0 w-screen lg:w-auto lg:h-full flex lg:flex-col bg-gray-200 dark:bg-slate-600"}>
            <div className={"flex flex-col items-center lg:mb-2 w-fit lg:w-full lg:overflow-hidden lg:"+(full ? 'p-8' : 'p-2')}>
                <div className={"rounded-full bg-white dark:bg-slate-800 shadow-lg size-16 p-0.5 "+(full ? 'lg:p-2 lg:size-36' : '')}>
                    <img className="rounded-full object-cover flex size-full aspect-square shadow-inner" src={avatar} alt={content.name}></img>
                </div>
                <span className={"lg:mt-2 overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-lg text-gray-700 dark:text-white font-bold text-center text-nowrap size-0 p-0 " +(full ? 'lg:w-36 lg:px-2 lg:py-1 lg:h-auto' : '')}>{content.name}</span>
            </div>
            <ul className={"flex flex-col flex-1 overflow-hidden lg:overflow-visible size-0 lg:size-auto "+(full ? 'fixed lg:static top-20 start-0 w-screen lg:w-auto h-screen lg:h-auto' : '')}>
                <li onClick={fullToggle}>
                    <Link to='/'>
                        <div className={"flex items-center text-gray-700 dark:text-gray-100 group relative hover:text-purple-600 bg-gray-200 dark:bg-slate-600 "+(full ? 'gap-4 px-6 py-2 hover:border-s-2 hover:border-purple-600 hover:bg-white hover:dark:bg-slate-800' : 'mb-2 p-2')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-4' : 'size-6 mx-auto drop-shadow-lg'}>
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                            <span className={"text-sm overflow-hidden text-nowrap z-20 "+(full ? '' : 'w-0 group-hover:w-32 h-8 flex group-hover:shadow-lg group-hover:rounded-e-lg absolute group-hover:top-1/2 group-hover:start-full group-hover:-translate-y-1/2 group-hover:bg-gray-200 dark:group-hover:bg-slate-600 group-hover:flex group-flex:justify-center items-center group-hover:px-4 group-hover:py-1 text-center top-1/2 -translate-y-1/2 right-full')}>مشخصات</span>
                        </div>
                    </Link>
                </li>
                <li onClick={fullToggle}>
                    <Link to='/skills/'>
                        <div className={"flex items-center text-gray-700 dark:text-gray-100 group relative hover:text-purple-600 bg-gray-200 dark:bg-slate-600 "+(full ? 'gap-4 px-6 py-2 hover:border-s-2 hover:border-purple-600 hover:bg-white hover:dark:bg-slate-800' : 'mb-2 p-2')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-4' : 'size-6 mx-auto drop-shadow-lg'}>
                                <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                            </svg>
                            <span className={"text-sm overflow-hidden text-nowrap z-20 "+(full ? '' : 'w-0 group-hover:w-32 h-8 flex group-hover:shadow-lg group-hover:rounded-e-lg absolute group-hover:top-1/2 group-hover:start-full group-hover:-translate-y-1/2 group-hover:bg-gray-200 dark:group-hover:bg-slate-600 group-hover:flex group-flex:justify-center items-center group-hover:px-4 group-hover:py-1 text-center top-1/2 -translate-y-1/2 right-full')}>مهارت ها</span>
                        </div>
                    </Link>
                </li>
                <li onClick={fullToggle}>
                    <Link to='/sample/'>
                        <div className={"flex items-center text-gray-700 dark:text-gray-100 group relative hover:text-purple-600 bg-gray-200 dark:bg-slate-600 "+(full ? 'gap-4 px-6 py-2 hover:border-s-2 hover:border-purple-600 hover:bg-white hover:dark:bg-slate-800' : 'mb-2 p-2')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-4' : 'size-6 mx-auto drop-shadow-lg'}>
                                <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clipRule="evenodd" />
                            </svg>
                            <span className={"text-sm overflow-hidden text-nowrap z-20 "+(full ? '' : 'w-0 group-hover:w-32 h-8 flex group-hover:shadow-lg group-hover:rounded-e-lg absolute group-hover:top-1/2 group-hover:start-full group-hover:-translate-y-1/2 group-hover:bg-gray-200 dark:group-hover:bg-slate-600 group-hover:flex group-flex:justify-center items-center group-hover:px-4 group-hover:py-1 text-center top-1/2 -translate-y-1/2 right-full')}>نمونه کار ها</span>
                        </div>
                    </Link>
                </li>
                <li onClick={fullToggle}>
                    <Link to='/workes/'>
                        <div className={"flex items-center text-gray-700 dark:text-gray-100 group relative hover:text-purple-600 bg-gray-200 dark:bg-slate-600 "+(full ? 'gap-4 px-6 py-2 hover:border-s-2 hover:border-purple-600 hover:bg-white hover:dark:bg-slate-800' : 'mb-2 p-2')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-4' : 'size-6 mx-auto drop-shadow-lg'}>
                                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
                            </svg>
                            <span className={"text-sm overflow-hidden text-nowrap z-20 "+(full ? '' : 'w-0 group-hover:w-32 h-8 flex group-hover:shadow-lg group-hover:rounded-e-lg absolute group-hover:top-1/2 group-hover:start-full group-hover:-translate-y-1/2 group-hover:bg-gray-200 dark:group-hover:bg-slate-600 group-hover:flex group-flex:justify-center items-center group-hover:px-4 group-hover:py-1 text-center top-1/2 -translate-y-1/2 right-full')}>سوابق کاری</span>
                        </div>
                    </Link>
                </li>
                <li onClick={fullToggle}>
                    <Link to='/contact/'>
                        <div className={"flex items-center text-gray-700 dark:text-gray-100 group relative hover:text-purple-600 bg-gray-200 dark:bg-slate-600 "+(full ? 'gap-4 px-6 py-2 hover:border-s-2 hover:border-purple-600 hover:bg-white hover:dark:bg-slate-800' : 'mb-2 p-2')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-4' : 'size-6 mx-auto drop-shadow-lg'}>
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                            <span className={"text-sm overflow-hidden text-nowrap z-20 "+(full ? '' : 'w-0 group-hover:w-32 h-8 flex group-hover:shadow-lg group-hover:rounded-e-lg absolute group-hover:top-1/2 group-hover:start-full group-hover:-translate-y-1/2 group-hover:bg-gray-200 dark:group-hover:bg-slate-600 group-hover:flex group-flex:justify-center items-center group-hover:px-4 group-hover:py-1 text-center top-1/2 -translate-y-1/2 right-full')}>تماس با من</span>
                        </div>
                    </Link>
                </li>
            </ul>
            <div className={"flex w-fit lg:w-full gap-2 lg:px-4 lg:mb-4 ms-auto "+(full ? 'justify-end' : 'items-center lg:flex-col lg:ms-0')}>
                <div className="flex justify-center items-center text-gray-700 dark:text-gray-100 p-2 cursor-pointer hover:text-purple-600" onClick={lightToggle}>
                    {
                        theme.light !== 'false' ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-6' : 'drop-shadow-lg size-6'}>
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-6' : 'drop-shadow-lg size-6'}>
                                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>
                    }
                </div>
                <div className="flex justify-center items-center text-gray-700 dark:text-gray-100 p-2 cursor-pointer hover:text-purple-600" onClick={fullToggle}>
                    {
                        full ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-6' : 'drop-shadow-lg size-6'}>
                                <path fillRule="evenodd" d="M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z" clipRule="evenodd" />
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={full ? 'size-6' : 'drop-shadow-lg size-6'}>
                                <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                    }
                </div>
            </div>
        </nav>
    );
}

export default SideBar;