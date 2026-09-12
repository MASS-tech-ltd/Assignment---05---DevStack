import footerlogo from './assets/logo-text.png'

const FooterSection = () => {
    return (
        <div className='mt-24 mb-10 lg:mt-60 lg:mb-16'>
            <footer className=" container mx-auto footer lg:flex lg:justify-between sm:footer-horizontal">
                <div>
                    <img className='mx-auto lg:mx-0' src={footerlogo} alt="Footer-Logo" />
                    <p className='text-center lg:text-left w-[384px] text-xm font-normal text-slate-500 mt-2 lg:mt-2.5 lg:mb-6 mb-3 '>
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>
                    <nav className='mx-auto lg:mx-0 mb-4 lg:mb-0 '>
                        <a className="link link-hover font-jakarta font-semibold text-xm text-slate-600">GitHub</a>
                        <a className="link link-hover font-jakarta font-semibold text-xm text-slate-600 mx-3.5">Twitter</a>
                        <a className="link link-hover font-jakarta font-semibold text-xm text-slate-600">LinkedIn</a>
                    </nav>
                </div>
                <div className='hidden lg:flex justify-between'>
                    <nav>
                        <h6 className="font-jakarta font-bold text-sm text-slate-900">PRODUCT</h6>
                        <a className="link link-hover block font-jakarta font-normal text-xm text-slate-500 mt-4">Home</a>
                        <a className="link link-hover block font-jakarta font-normal text-xm text-slate-500 my-2.5">Technologies</a>
                        <a className="link link-hover block font-jakarta font-normal text-xm text-slate-500">Projects</a>
                    </nav>
                    <nav className='lg:mx-48'>
                        <h6 className="font-jakarta font-bold text-sm text-slate-900">COMPANY</h6>
                        <a className="link link-hover block font-jakarta font-normal text-xm text-slate-500 mt-4">About</a>
                        <a className="link link-hover block font-jakarta font-normal text-xm text-slate-500 my-2.5">Contact</a>
                        <a className="link link-hover block font-jakarta font-normal text-xm text-slate-500">Careers</a>
                    </nav>
                    <nav>
                        <h6 className="font-jakarta font-bold text-sm text-slate-900">LEGAL</h6>
                        <a className="link link-hover block font-jakarta font-normal text-xm text-slate-500 mt-4 mb-2.5">Privacy Policy</a>
                        <a className="link link-hover block font-jakarta font-normal text-xm text-slate-500">Terms of Service</a>
                    </nav>
                </div>
            </footer>
            <div className='container mx-auto flex justify-between mt-6 lg:mt-22.5 px-6 lg:px-0'>
                <small className='font-jakarta font-normal text-xm text-slate-400'>© 2026 Dev Stack. All rights reserved.</small>
                <small>
                    <a className="link link-hover font-jakarta font-normal text-xm text-slate-400 mr-6">Privacy</a>
                    <a className="link link-hover font-jakarta font-normal text-xm text-slate-400">Terms</a>
                </small>
            </div>
        </div>
    );
};

export default FooterSection;