import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        {/* Add your own SVG here */}
                        <span className="hidden font-bold sm:inline-block">GPT-3.5-turbo-16K</span>
                    </a>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {/* Add your own links here */}
                    </nav>
                </div>
                <button 
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors 
                    focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none 
                    ring-offset-background hover:text-accent-foreground h-10 py-2 mr-2 px-0 text-base 
                    hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 
                    md:hidden" 
                    type="button" 
                    aria-haspopup="dialog" 
                    aria-expanded="false" 
                    aria-controls="radix-:R15hja:" 
                    data-state="closed"
                >
                    {/* Add your own SVG here */}
                    <span className="sr-only">Toggle Menu</span>
                </button>
                <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
                <nav className="flex items-center space-x-1">
        <a target="_blank" rel="noreferrer" href="https://github.com/shadcn/ui" className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          <span className="sr-only">GitHub</span>
        </a>

        <a target="_blank" rel="noreferrer" href="https://twitter.com/skirano" className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          <span className="sr-only">Twitter</span>
        </a>

        <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0" 
          type="button" 
          id="radix-:Rtlhja:" 
          aria-haspopup="menu" 
          aria-expanded="false" 
          data-state="closed"
        >
          {/* Your SVG icons here */}
          <span className="sr-only">Toggle theme</span>
        </button>
      </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
