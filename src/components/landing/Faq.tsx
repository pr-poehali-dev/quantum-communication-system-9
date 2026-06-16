import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Как мы начнём работу?",
    answer:
      "Вы пишете мне, рассказываете о ролике и присылаете отснятый материал. Я уточняю детали, стиль и сроки, после чего приступаю к монтажу с промежуточными правками.",
  },
  {
    id: 2,
    question: "Сколько времени занимает монтаж?",
    answer:
      "Короткий рилс обычно готов за 1-2 дня, полноценный YouTube-ролик — за 3-7 дней. Точные сроки зависят от объёма материала и сложности.",
  },
  {
    id: 3,
    question: "В каких программах ты монтируешь?",
    answer:
      "Работаю в профессиональных редакторах для монтажа, цветокоррекции и моушн-графики. Под каждый проект подбираю подходящие инструменты.",
  },
  {
    id: 4,
    question: "Как передать видеофайлы?",
    answer:
      "Удобно прислать материал через облако (Google Drive, Яндекс.Диск) или мессенджер. Готовый ролик отдаю в нужном вам формате и разрешении.",
  },
  {
    id: 5,
    question: "Сколько правок входит в работу?",
    answer:
      "Обычно включаю 2-3 круга правок, чтобы довести ролик до идеала. Дополнительные правки обсуждаются отдельно.",
  },
  {
    id: 6,
    question: "Сколько стоит монтаж?",
    answer:
      "Стоимость зависит от типа и длительности ролика. Напишите мне детали проекта — и я назову точную цену под вашу задачу.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-600">
          Остались вопросы по монтажу? Здесь собраны ответы на самое частое — о сроках, файлах, правках и стоимости.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-200">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}