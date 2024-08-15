import FooterComponent from "@/components/Footer";
import { Lamp, Lightbulb } from "@phosphor-icons/react/dist/ssr";

const Page = () => {
  return (
    <>
      <div className="w-full bg-color-primary py-4">
        <h1 className="text-xl font-bold text-center text-color-white">
          {" "}
          Group Details Page
        </h1>
      </div>
      <div className="flex flex-col space-y-4 p-8">
        <h1>
          The SSC Social Group Programs are all about promoting social
          communication skills, resilience, emotional regulation and confidence.
          Our term-time group program for 7-9 year olds is designed and run by
          speech pathologists, occupational therapists and supported by allied
          health assistants. This group program is perfect for primary school
          children who are working towards social awareness and social
          confidence goals who need the opportunity for supported interactions
          with peers in order to practise and generalise social interaction
          concepts.
        </h1>
        <h1>
          The SSC Social Group Programs are all about promoting social
          communication skills, resilience, emotional regulation and confidence.
          Our term-time group program for 7-9 year olds is designed and run by
          speech pathologists, occupational therapists and supported by allied
          health assistants. This group program is perfect for primary school
          children who are working towards social awareness and social
          confidence goals who need the opportunity for supported interactions
          with peers in order to practise and generalise social interaction
          concepts.
        </h1>
        <div class="max-w-lg mx-4 flex flex flex-row space-x-4 bg-white border border-gray-200 rounded-lg shadow-md shadow-color-primary p-8 mx-auto">
          <Lightbulb
            className="flex justify-center items-center my-auto text-color-secondary"
            size={48}
          />
          <div className="flex-1 flex-col space-y-4 text-sm md:text-md font-bold">
            <h1> 2024 Term 4 bookings now open!</h1>
            <h1> 10 weeks program</h1>
            <h1> Mondays 4.30pm - 5.30pm</h1>
            <h1>
              Monday the 14th October 2024 - Monday the 16th December 2024
            </h1>
          </div>
        </div>
        <div class="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md shadow-color-primary">
          <a href="#">
            <img
              class="rounded-full p-4"
              src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2022/05/7-9-group.jpg"
              alt=""
            />
          </a>
          <div class="p-8">
            <h1 className="text-2xl mb-4 px-2">
              Term Time 7-9 year Old Social Group Program Goals
            </h1>
            <h2 className="font-bold mb-2">
              Area of focus in this program will include :
            </h2>
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-color-primary dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Making and maintaining friendships</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-color-primary dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Initating and keeping a conversation going</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-color-primary dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Understanding and repairing conversations</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-color-primary dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>
                  Judging and appropriately responding to body language and
                  facial expressions
                </span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-color-primary dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Requesting clarification or help when needed </span>
              </li>
            </ul>
            <a
              href="#"
              class="mt-4 inline-flex items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-color-primary rounded-lg hover:bg-color-secondary"
            >
              New Client Enquiry Form
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default Page;
