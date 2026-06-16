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
          <div>
            <ContactFormButton />
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