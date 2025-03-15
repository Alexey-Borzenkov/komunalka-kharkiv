export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Komunalka Kharkiv
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Зручний інструмент для передачі показань лічильників комунальних послуг у Харкові
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Можливості
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Передача показань всіх лічильників в одному місці</li>
              <li>✓ Зберігання історії показань</li>
              <li>✓ Локальне зберігання даних</li>
              <li>✓ Простий та зручний інтерфейс</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Завантажити
            </h2>
            <p className="text-gray-600 mb-4">
              Завантажте додаток для Windows та почніть користуватися прямо зараз
            </p>
            <a 
              href="/downloads/meter-reader-win-x64.zip"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Завантажити для Windows
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}