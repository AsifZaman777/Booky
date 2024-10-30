
const About = () => {
  return (
    <div id="about" className="mx-auto max-w-full p-6 text-neutral-200 bg-black">
      <h1 className="bg-gradient-to-br from-white to-green-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        About LankaBooky
      </h1>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-12 space-y-10">
        <li className="transition-colors duration-300 hover:text-green-400">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2011</time>
            <div className="text-2xl  font-mono">First Establishment</div>
            Booky was founded in 2011 with the goal of providing a platform to
            make hotel bookings easier and more accessible for everyone.
          </div>
          <hr />
        </li>
        
        <li className="transition-colors duration-300 hover:text-green-400">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2014</time>
            <div className="text-2xl font-mono">Major Milestone</div>
            In 2014, Booky reached a milestone of 1 million users and expanded
            services to cater to a global audience.
          </div>
          <hr />
        </li>

        <li className="transition-colors duration-300 hover:text-green-400">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2018</time>
            <div className="text-2xl font-mono">Enhanced Customer Satisfaction</div>
            In 2018, Booky introduced a feedback system to continuously enhance
            user experience, resulting in high customer satisfaction rates.
          </div>
          <hr />
        </li>

        <li className="transition-colors duration-300 hover:text-green-400">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2020</time>
            <div className="text-2xl font-mono">Adapting During COVID-19</div>
            During the pandemic, Booky pivoted to support safer, flexible
            booking options and partnered with hotels for secure travel
            solutions.
          </div>
          <hr />
        </li>

        <li className="transition-colors duration-300 hover:text-green-400">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024</time>
            <div className="text-2xl font-mono">Future Prospects</div>
            Booky is now positioned as a major player in the travel industry,
            continuing to innovate and expand in 2024 and beyond.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
