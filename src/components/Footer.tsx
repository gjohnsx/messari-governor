import { SVGProps } from "react";
import clsx from "clsx";

const navigation = {
  data: [
    { name: "Watchlists", href: "#" },
    { name: "Screener", href: "#" },
    { name: "Charts", href: "#" },
  ],
  insights: [
    { name: "Research", href: "#" },
    { name: "Intel", href: "#" },
    { name: "Newsletter", href: "#" },
  ],
  plans: [
    { name: "Pro", href: "#" },
    { name: "Enterprise", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Engineering", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Status", href: "#" },
    { name: "Support", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-800 bg-messari-600"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <svg
            className="mx-auto md:mx-0"
              width="189"
              height="29"
              viewBox="0 0 189 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_799_19010)">
                <path
                  d="M0 0V28.9715L7.41691 21.5519V7.41691L0 0Z"
                  fill="white"
                />
                <path
                  d="M14.6045 14.6045L10.8975 10.8975V28.9715L18.3144 21.5518V10.8975L14.6045 14.6045Z"
                  fill="white"
                />
                <path
                  d="M21.795 7.41691V28.9715L29.2119 21.5519V0L21.795 7.41691Z"
                  fill="white"
                />
                <path
                  d="M50.9128 21.3584H53.8299V12.4415L57.5977 18.2563H57.6751L61.4816 12.3835V21.3612H64.4373V7.61019H61.2302L57.6751 13.4249L54.1199 7.61019H50.9128V21.3584V21.3584ZM76.3127 21.3584H86.6107V18.6679H79.2684V15.7812H85.6439V13.0907H79.2684V10.3007H86.514V7.61019H76.3127V21.3584ZM102.699 21.5545C105.616 21.5545 107.663 20.0214 107.663 17.2922V17.2536C107.663 14.8558 106.116 13.8559 103.373 13.1294C101.036 12.5216 100.456 12.2261 100.456 11.3228V11.2841C100.456 10.6156 101.055 10.0853 102.193 10.0853C103.331 10.0853 104.511 10.5963 105.71 11.4416L107.257 9.16263C105.884 8.04388 104.204 7.41406 102.235 7.41406C99.4722 7.41406 97.4999 9.06319 97.4999 11.5576V11.5963C97.4999 14.3255 99.2567 15.0934 101.983 15.8006C104.243 16.3889 104.707 16.784 104.707 17.5491V17.5878C104.707 18.3944 103.972 18.8833 102.757 18.8833C101.21 18.8833 99.9363 18.2342 98.7181 17.2149L96.9585 19.3557C98.5827 20.828 100.649 21.5545 102.696 21.5545M123.977 21.5545C126.894 21.5545 128.941 20.0214 128.941 17.2922V17.2536C128.941 14.8558 127.397 13.8559 124.651 13.1294C122.314 12.5216 121.734 12.2261 121.734 11.3228V11.2841C121.734 10.6156 122.333 10.0853 123.472 10.0853C124.61 10.0853 125.789 10.5963 126.988 11.4416L128.535 9.16263C127.162 8.04388 125.483 7.41406 123.51 7.41406C120.748 7.41406 118.778 9.06319 118.778 11.5576V11.5963C118.778 14.3255 120.535 15.0934 123.262 15.8006C125.521 16.3889 125.985 16.784 125.985 17.5491V17.5878C125.985 18.3944 125.25 18.8833 124.035 18.8833C122.488 18.8833 121.215 18.2342 119.996 17.2149L118.24 19.3557C119.864 20.828 121.93 21.5545 123.977 21.5545M138.714 21.3584H141.747L142.985 18.2756H148.703L149.94 21.3584H153.051L147.255 7.51074H144.512L138.717 21.3584H138.714ZM144.046 15.6044L145.841 11.146L147.637 15.6044H144.043H144.046ZM163.288 21.3584H166.263V16.958H168.6L171.498 21.3584H174.976L171.672 16.4469C173.39 15.7978 174.569 14.4028 174.569 12.1846V12.146C174.569 10.8504 174.163 9.76758 173.409 9.00241C172.52 8.09913 171.188 7.60743 169.467 7.60743H163.285V21.3556L163.288 21.3584ZM166.263 14.2868V10.3394H169.219C170.669 10.3394 171.556 11.0079 171.556 12.3034V12.3421C171.556 13.5023 170.724 14.2868 169.277 14.2868H166.263V14.2868ZM186.022 21.3584H188.997V7.61019H186.022V21.3584V21.3584Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_799_19010">
                  <rect width="189" height="28.9715" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="px-4 text-sm leading-6 text-center text-gray-400 md:px-0 md:text-left">
              We believe crypto is the technology of free people, free thinking,
              and free markets.
            </p>
            <div className="flex justify-center space-x-6 md:justify-start">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Data
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.data.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Insights
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.insights.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Plans
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.plans.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-16 border-t border-white/10 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Sign-up for our daily newsletter
            </h3>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border--500 focus:ring-messari-blue-light sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-messari-blue-light py-1.5 px-3 text-base font-semibold leading-7 text-white shadow-sm hover:bg-messari-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-messari-blue-light sm:text-sm sm:leading-6"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-3 md:order-2">
            {navigation.legal.map((item, itemIdx) => {
              return (
                <li key={item.name} className="flex items-center space-x-1">
                  <a
                    href={item.href}
                    className={clsx(
                      item.name !== "Status" ? "md:mr-2" : "",
                      "text-sm leading-6 text-gray-300 hover:text-white"
                    )}
                  >
                    {item.name}
                  </a>
                  {item.name === "Status" && (
                    <svg
                      className="w-2 h-2 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                  )}
                  {itemIdx !== navigation.legal.length - 1 && (
                    <svg
                      className="hidden w-1 h-1 text-gray-400 md:block"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                  )}
                </li>
              );
            })}
          </div>
          <p className="mt-8 text-xs leading-5 text-center text-gray-400 md:text-left md:order-1 md:mt-0">
            &copy; 2023 Messari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
