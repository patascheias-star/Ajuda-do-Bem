"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

const images = [
  "/momade-1.jpg",
  "/momade-2.jpg",
  "/momade-3.jpg",
  "/momade-4.jpg",
  "/momade-extra-5.jpg",
  "/momade-extra-6.png",
  "/momade-extra-7.jpg",
  "/momade-extra-8.jpg",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const scrollToDonations = () => {
    const donationsSection = document.getElementById("donation-options")
    if (donationsSection) {
      donationsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-3 py-6 md:py-12">
        <div className="flex flex-col gap-6 md:grid md:lg:grid-cols-2 md:gap-8 md:items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={images[currentImage] || "/placeholder.svg"}
              alt="Crianças recebendo alimentos"
              fill
              className="object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="inline-block bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <p className="text-sm text-green-700 font-semibold">Idealização: Jullia Marques, em apoio ao Projeto Ebenezer (Moamede01)</p>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
              AJUDE A LEVAR UM PRATO DE COMIDA PARA QUEM MAIS PRECISA
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Todos os dias, centenas de crianças órfãs e famílias em extrema vulnerabilidade enfrentam a fome como
              parte da rotina. Algumas passam o dia inteiro esperando por uma única refeição… e muitas vezes, essa
              refeição não vem.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <strong>O Projeto Ebenezer atua para mudar isso</strong> Com a sua ajuda, queremos preparar um almoço por
              semana para essas crianças e famílias que lutam para sobreviver. Pode parecer pouco para quem tem tudo,
              mas para elas, um prato de comida significa esperança, força e vida.
            </p>

            <Button
              onClick={scrollToDonations}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl py-6 md:py-7 font-bold rounded-xl shadow-lg"
            >
              <Heart className="mr-2 h-5 w-5 md:h-6 md:w-6" fill="currentColor" />
              Doar Agora
            </Button>

            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Arrecadado</p>
                  <p className="text-xl md:text-2xl font-bold text-green-600">R$ 925,00</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Meta</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">R$ 2.000,00</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
                  <div className="bg-green-600 h-2 md:h-3 rounded-full" style={{ width: "46%" }}></div>
                </div>
                <div className="flex justify-between text-xs md:text-sm text-gray-600">
                  <span>46% da meta atingida</span>
                  <span>38 doadores</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">38</p>
                  <p className="text-xs md:text-sm text-gray-600">Doadores</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-green-600">46%</p>
                  <p className="text-xs md:text-sm text-gray-600">Meta</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-orange-600">3</p>
                  <p className="text-xs md:text-sm text-gray-600">Dias restantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
