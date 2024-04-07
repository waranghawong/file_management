import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import useLocalStorage from 'use-local-storage';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [theme, setTheme] = useLocalStorage("isDark",false);

    if(theme == false){
        document.body.classList.remove('dark');
    }
    else{
        document.body.classList.add('dark');
    }

    function setDarkMode(){
        setTheme(false)
    }

    function setLight(){
      
        setTheme(true)
    }


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 ">
            <nav id="header"  class="bg-white dark:bg-slate-800  fixed w-full z-10 top-0 shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pb-3 md:pb-0">
            <div class="w-1/2 mt-5 md:pl-0 ">
                {
                    theme 
                    ? 
                   <a class="text-gray-900 dark:text-white flex-grow lg:flex lg:items-center  lg:w-auto lg:block mt-2 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#" onClick={setDarkMode }>
                    <img src='http://localhost:8000/222.PNG' style={{height:25, width:25}} className="mr-2"/><i class="fas fa-moon text-blue-600  pr-3"></i> Admin Night Mode
                    </a> 
                    : 
                    <a class="text-gray-900 dark:text-white flex-grow lg:flex lg:items-center  lg:w-auto lg:block mt-2 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#" onClick={ setLight }>
                    <img src='http://localhost:8000/222.PNG' style={{height:25, width:25}} className="mr-2"/><i class="fas fa-sun text-pink-600  pr-3"></i> Admin Day Mode
                    </a>
                }
                
            </div>
            <div class="w-1/2 pr-2">
                <div class="flex relative inline-block float-right">
                    <div class="relative text-sm">
                     <Dropdown>
                        <Dropdown.Trigger>
                            <button id="userButton" class="flex items-center focus:outline-none mr-3">
                                <img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of User" /> <span class="hidden md:inline-block dark:text-white">Hi, {user.name} </span>
                                <svg class="pl-2 h-2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                                    <g>
                                        <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                                    </g>
                                </svg>
                            </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>


                    <div class="block lg:hidden pr-4">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>


                        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                       
                      


                    
                    </div>
                     </div>
                </div>

            </div>


            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white z-20 '} id="nav-content">
                <ul class="list-reset dark:bg-slate-800 lg:flex flex-1 items-center px-4 md:px-0">
                    <li class="mr-6 my-2 md:my-0">
                    <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                            <i class="fas fa-home fa-fw mr-3 text-pink-600 dark:text-white"></i><span class="pb-1 md:pb-0 text-sm">Home</span>
                    </NavLink>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                    <NavLink href={route('pmr')} active={route().current('pmr')}>
                            <i class="fas fa-window-restore fa-fw mr-3 dark:text-white"></i><span class="pb-1 md:pb-0 text-sm">PMR</span>
                    </NavLink>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                    <NavLink href={route('admin.upload')} active={route().current('admin.upload')}>
                            <i class="fas fa-folder fa-fw mr-3 dark:text-white"></i><span class="pb-1 md:pb-0 text-sm">File Management</span>
                    </NavLink>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                    <NavLink href={route('users')} active={route().current('users')}>
                            <i class="fa fa-users fa-fw mr-3 dark:text-white"></i><span class="pb-1 md:pb-0 text-sm">Users</span>
                    </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    </nav>

            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
