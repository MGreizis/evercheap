export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-secondary">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <a
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-tertiary lg:justify-start">
              <svg
                id="logo-55"
                width="168"
                height="41"
                viewBox="0 0 168 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M49.2775 28.9524H61.2295V25.3524H53.5255V11.7924H49.2775V28.9524Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M68.3107 26.5524C66.6067 26.5524 65.7187 25.0644 65.7187 22.8324C65.7187 20.6004 66.6067 19.0884 68.3107 19.0884C70.0147 19.0884 70.9267 20.6004 70.9267 22.8324C70.9267 25.0644 70.0147 26.5524 68.3107 26.5524ZM68.3347 29.3364C72.2947 29.3364 74.8867 26.5284 74.8867 22.8324C74.8867 19.1364 72.2947 16.3284 68.3347 16.3284C64.3987 16.3284 61.7587 19.1364 61.7587 22.8324C61.7587 26.5284 64.3987 29.3364 68.3347 29.3364Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M81.7411 33.2004C83.5651 33.2004 85.1731 32.7924 86.2531 31.8324C87.2371 30.9444 87.8851 29.6004 87.8851 27.7524V16.6644H84.1411V17.9844H84.0931C83.3731 16.9524 82.2691 16.3044 80.6371 16.3044C77.5891 16.3044 75.4771 18.8484 75.4771 22.4484C75.4771 26.2164 78.0451 28.2804 80.8051 28.2804C82.2931 28.2804 83.2291 27.6804 83.9491 26.8644H84.0451V28.0884C84.0451 29.5764 83.3491 30.4404 81.6931 30.4404C80.3971 30.4404 79.7491 29.8884 79.5331 29.2404H75.7411C76.1251 31.8084 78.3571 33.2004 81.7411 33.2004ZM81.7171 25.3764C80.2531 25.3764 79.2931 24.1764 79.2931 22.3284C79.2931 20.4564 80.2531 19.2564 81.7171 19.2564C83.3491 19.2564 84.2131 20.6484 84.2131 22.3044C84.2131 24.0324 83.4211 25.3764 81.7171 25.3764Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M95.5835 26.5524C93.8795 26.5524 92.9915 25.0644 92.9915 22.8324C92.9915 20.6004 93.8795 19.0884 95.5835 19.0884C97.2875 19.0884 98.1995 20.6004 98.1995 22.8324C98.1995 25.0644 97.2875 26.5524 95.5835 26.5524ZM95.6075 29.3364C99.5675 29.3364 102.159 26.5284 102.159 22.8324C102.159 19.1364 99.5675 16.3284 95.6075 16.3284C91.6715 16.3284 89.0315 19.1364 89.0315 22.8324C89.0315 26.5284 91.6715 29.3364 95.6075 29.3364Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M103.302 28.9524H107.214V16.6644H103.302V28.9524ZM103.302 14.9604H107.214V11.7924H103.302V14.9604Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M108.911 33.0084H112.823V27.6804H112.871C113.639 28.7124 114.767 29.3364 116.351 29.3364C119.567 29.3364 121.703 26.7924 121.703 22.8084C121.703 19.1124 119.711 16.3044 116.447 16.3044C114.767 16.3044 113.567 17.0484 112.727 18.1524H112.655V16.6644H108.911V33.0084ZM115.343 26.3124C113.663 26.3124 112.703 24.9444 112.703 22.9524C112.703 20.9604 113.567 19.4484 115.271 19.4484C116.951 19.4484 117.743 20.8404 117.743 22.9524C117.743 25.0404 116.831 26.3124 115.343 26.3124Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M128.072 29.3364C131.288 29.3364 133.664 27.9444 133.664 25.2564C133.664 22.1124 131.12 21.5604 128.96 21.2004C127.4 20.9124 126.008 20.7924 126.008 19.9284C126.008 19.1604 126.752 18.8004 127.712 18.8004C128.792 18.8004 129.536 19.1364 129.68 20.2404H133.28C133.088 17.8164 131.216 16.3044 127.736 16.3044C124.832 16.3044 122.432 17.6484 122.432 20.2404C122.432 23.1204 124.712 23.6964 126.848 24.0564C128.48 24.3444 129.968 24.4644 129.968 25.5684C129.968 26.3604 129.224 26.7924 128.048 26.7924C126.752 26.7924 125.936 26.1924 125.792 24.9684H122.096C122.216 27.6804 124.472 29.3364 128.072 29.3364Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M138.978 29.3124C140.682 29.3124 141.762 28.6404 142.65 27.4404H142.722V28.9524H146.466V16.6644H142.554V23.5284C142.554 24.9924 141.738 26.0004 140.394 26.0004C139.146 26.0004 138.546 25.2564 138.546 23.9124V16.6644H134.658V24.7284C134.658 27.4644 136.146 29.3124 138.978 29.3124Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M148.168 28.9524H152.08V22.0644C152.08 20.6004 152.8 19.5684 154.024 19.5684C155.2 19.5684 155.752 20.3364 155.752 21.6564V28.9524H159.664V22.0644C159.664 20.6004 160.36 19.5684 161.608 19.5684C162.784 19.5684 163.336 20.3364 163.336 21.6564V28.9524H167.248V20.9604C167.248 18.2004 165.856 16.3044 163.072 16.3044C161.488 16.3044 160.168 16.9764 159.208 18.4644H159.16C158.536 17.1444 157.312 16.3044 155.704 16.3044C153.928 16.3044 152.752 17.1444 151.984 18.4164H151.912V16.6644H148.168V28.9524Z"
                  className="cneutral"
                  fill="#F05D5E"
                ></path>{" "}
                <path
                  d="M25.4099 1.97689L21.4769 0.923031L18.1625 13.2926L15.1702 2.12527L11.2371 3.17913L14.4701 15.2446L6.41746 7.19201L3.53827 10.0712L12.371 18.904L1.37124 15.9566L0.317383 19.8896L12.336 23.11C12.1984 22.5165 12.1256 21.8981 12.1256 21.2627C12.1256 16.7651 15.7716 13.1191 20.2692 13.1191C24.7668 13.1191 28.4128 16.7651 28.4128 21.2627C28.4128 21.894 28.3409 22.5086 28.205 23.0986L39.1277 26.0253L40.1815 22.0923L28.1151 18.8591L39.1156 15.9115L38.0617 11.9785L25.9958 15.2115L34.0484 7.15895L31.1692 4.27976L22.459 12.99L25.4099 1.97689Z"
                  className="ccustom"
                  fill="#0F7173"
                ></path>{" "}
                <path
                  d="M28.1943 23.1444C27.8571 24.57 27.1452 25.8507 26.1684 26.8768L34.0814 34.7899L36.9606 31.9107L28.1943 23.1444Z"
                  className="ccustom"
                  fill="#0F7173"
                ></path>{" "}
                <path
                  d="M26.0884 26.9596C25.0998 27.9693 23.8505 28.7228 22.4495 29.1111L25.3289 39.8571L29.2619 38.8032L26.0884 26.9596Z"
                  className="ccustom"
                  fill="#0F7173"
                ></path>{" "}
                <path
                  d="M22.3026 29.1504C21.6526 29.3175 20.9713 29.4063 20.2692 29.4063C19.517 29.4063 18.7886 29.3043 18.0971 29.1134L15.2151 39.8692L19.1481 40.923L22.3026 29.1504Z"
                  className="ccustom"
                  fill="#0F7173"
                ></path>{" "}
                <path
                  d="M17.9581 29.0737C16.5785 28.6661 15.3514 27.903 14.383 26.8904L6.45052 34.8229L9.32971 37.7021L17.9581 29.0737Z"
                  className="ccustom"
                  fill="#0F7173"
                ></path>{" "}
                <path
                  d="M14.3168 26.8203C13.365 25.8013 12.6717 24.5377 12.3417 23.1341L1.38334 26.0704L2.43719 30.0034L14.3168 26.8203Z"
                  className="ccustom"
                  fill="#0F7173"
                ></path>{" "}
              </svg>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-primary lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
              <div className="mt-8 flex gap-6 text-primary sm:mt-0">
                <a
                  className="hover:opacity-75"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="hover:opacity-75"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>

                <a
                  className="hover:opacity-75"
                  href="https://github.com/MGreizis/evercheap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <p className="mt-12 text-center text-sm text-primary lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
