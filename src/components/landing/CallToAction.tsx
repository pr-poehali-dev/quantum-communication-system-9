import ContactFormButton from "./ContactFormButton"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Нужен крутой <span className="text-[#7A7FEE] dark:text-[#7A7FEE]">монтаж</span> для вашего видео?
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Есть отснятый материал или идея ролика?
          </p>
          <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Напишите мне — обсудим формат, сроки и стиль. Сделаю монтаж, который зацепит вашу аудиторию.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://t.me/sheluvnate"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
              </svg>
              Telegram
            </a>
            <a
              href="https://instagram.com/sheluvnate"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-black dark:text-white flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center md:justify-center">
          <img
            src="https://cdn.poehali.dev/projects/fa5e3117-862f-4fec-ba3c-dccb9fa61e48/bucket/d2698f42-7df9-48eb-a458-7a892b71f64a.jpeg"
            alt="Nate Logo"
            className="w-2/3 h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
          />
        </div>
      </div>
    </section>
  )
}