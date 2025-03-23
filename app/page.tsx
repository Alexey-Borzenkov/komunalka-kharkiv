async function getVersion() {
  try {
    const basePath = process.env.NODE_ENV === 'production' ? '/komunalka-kharkiv' : ''
    console.log('Fetching version from:', `${basePath}/version.txt`)
    
    const response = await fetch(`${basePath}/version.txt`, { 
      next: { revalidate: 0 },
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      console.error('Response not OK:', response.statusText)
      throw new Error(`Failed to fetch version: ${response.statusText}`)
    }

    const version = await response.text()
    const trimmedVersion = version.trim()
    console.log('Fetched version:', trimmedVersion)
    return trimmedVersion
  } catch (error) {
    console.error('Error fetching version:', error instanceof Error ? error.message : String(error))
    return 'latest'
  }
}

export default async function Home() {
  const version = await getVersion()
  const basePath = process.env.NODE_ENV === 'production' ? '/komunalka-kharkiv' : ''

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Комуналка Харків
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
            <div className="flex flex-col items-start gap-2">
              <a 
                href={`${basePath}/downloads/meter-reader-win-x64.zip`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Завантажити для Windows
              </a>
              <span className="text-sm text-gray-500">Версія {version}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}