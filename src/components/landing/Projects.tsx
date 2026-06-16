import Icon from "@/components/ui/icon"

const videos = [
  {
    id: 1,
    title: "Работа 1",
    description: "Динамичный монтаж с цветокоррекцией и звуком. Загрузите сюда своё видео.",
    src: "",
  },
  {
    id: 2,
    title: "Работа 2",
    description: "Рилс / короткий вертикальный ролик. Загрузите сюда своё видео.",
    src: "",
  },
  {
    id: 3,
    title: "Работа 3",
    description: "YouTube-ролик с графикой и переходами. Загрузите сюда своё видео.",
    src: "",
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
        Подборка моих видеоработ — от вертикальных рилсов до полноценных YouTube-роликов. Каждый проект — это монтаж,
        звук, цвет и графика, собранные так, чтобы удерживать внимание зрителя.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: "9/16" }}>
              {video.src ? (
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
                  <div className="w-14 h-14 rounded-full bg-[#7A7FEE]/10 flex items-center justify-center">
                    <Icon name="Play" className="w-6 h-6 text-[#7A7FEE]" />
                  </div>
                  <span className="text-xs">Видео скоро здесь</span>
                </div>
              )}
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