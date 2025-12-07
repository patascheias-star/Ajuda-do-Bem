export function VideoSection() {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-3 md:px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
          Veja o Impacto
        </h2>

        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4_o29Yf8iao"
            title="Ajude a levar um prato de comida para quem mais precisa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <p className="text-center text-gray-600 text-sm md:text-base mt-3 md:mt-4">
          Ajude a levar um prato de comida para quem mais precisa
        </p>
      </div>
    </section>
  )
}
