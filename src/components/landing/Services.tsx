import { Scissors, Palette, Music } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Монтаж видео",
    description: "Собираю отснятый материал в динамичный ролик с чётким ритмом и удержанием внимания.",
    icon: Scissors,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Цвет и графика",
    description: "Цветокоррекция, титры, переходы и моушн-графика для профессионального вида.",
    icon: Palette,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Звук и финал",
    description: "Чистка звука, музыка, синхронизация и финальный экспорт под любую платформу.",
    icon: Music,
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Что я делаю
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">с вашим видео</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Полный цикл постпродакшна — от черновой склейки до финального ролика. Беру на себя монтаж, цвет, звук и графику,
        чтобы вы получили готовое видео под ключ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}