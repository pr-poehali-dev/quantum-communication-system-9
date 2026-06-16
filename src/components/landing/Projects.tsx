const videos = [
  {
    id: 1,
    youtubeId: "8LCbv3aJXC4",
  },
  {
    id: 2,
    youtubeId: "WPV5zy6-Tao",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Мои последние
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">работы</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Подборка моих видеоработ — монтаж, звук, цвет и графика, собранные так, чтобы удерживать внимание зрителя.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="card overflow-hidden shadow-lg"
            style={{ width: "320px" }}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Заказать монтаж
        </a>
      </div>
    </section>
  )
}
