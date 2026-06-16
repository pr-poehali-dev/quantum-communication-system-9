import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Видеомонтаж,
            <span className="block text-[#7A7FEE]">который держит</span>
            внимание
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-600">
            Привет, я Nate — видеомонтажёр. Делаю динамичные ролики, рилсы и YouTube-видео: цветокоррекция, звук, графика и монтаж, которые удерживают зрителя до конца.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="#projects" className="btn-secondary text-black dark:text-white">
              Смотреть работы
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <img
            src="https://cdn.poehali.dev/projects/fa5e3117-862f-4fec-ba3c-dccb9fa61e48/bucket/d2698f42-7df9-48eb-a458-7a892b71f64a.jpeg"
            alt="Nate Logo"
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left mix-blend-multiply dark:mix-blend-screen"
          />
        </div>
      </div>
    </section>
  )
}