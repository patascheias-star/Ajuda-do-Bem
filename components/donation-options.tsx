"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, X } from "lucide-react"

const donationOptions = [
  { value: 25, url: "https://go.pepperpay.com.br/a4s0x" },
  { value: 50, url: "https://go.pepperpay.com.br/0rjry" },
  { value: 75, url: "https://go.pepperpay.com.br/orsax" },
  { value: 100, url: "https://go.pepperpay.com.br/8orfl", popular: true },
  { value: 150, url: "https://go.pepperpay.com.br/6mj7y" },
  { value: 250, url: "https://go.pepperpay.com.br/lse55" },
  { value: 500, url: "https://go.pepperpay.com.br/3b5of" },
  { value: 1000, url: "https://go.pepperpay.com.br/3sxmk" },
]

export function DonationOptions() {
  const [showUpsellModal, setShowUpsellModal] = useState(false)

  return (
    <section id="donation-options" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
          Projeto Ebenezer: sua contribuição ajuda a garantir alimento a quem necessita!
        </h2>

        <p className="text-center text-gray-600 mb-12 text-lg">Escolha um valor para doar:</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {donationOptions.map((option) => (
            <div key={option.value} className="relative">
              <Button
                onClick={() => window.open(option.url, "_blank")}
                className={`w-full h-20 text-xl font-bold ${
                  option.popular
                    ? "bg-green-600 hover:bg-green-700 text-white ring-2 ring-green-400 ring-offset-2"
                    : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300"
                }`}
              >
                <Heart className="mr-2 h-5 w-5" />
                R$ {option.value.toLocaleString("pt-BR")}
              </Button>
              {option.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  Mais escolhido
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          onClick={() => setShowUpsellModal(true)}
          className="bg-green-50 border border-green-200 rounded-lg p-8 text-center cursor-pointer hover:bg-green-100 transition-colors"
        >
          <p className="text-xl font-semibold text-gray-900 mb-4">
            Estenda a mão, porque a fé se revela em atos de amor.
          </p>
          <p className="text-gray-600">Sua doação é segura e fácil. Você receberá um comprovante por e-mail.</p>
        </div>
      </div>

      {showUpsellModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setShowUpsellModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-red-500" />
            </div>

            <p className="text-lg font-semibold text-gray-900 mb-2 text-center">
              Por apenas R$50 a mais, você pode ajudar significamente o projeto!
            </p>

            <p className="text-gray-600 mb-8 text-center">Considere doar R$150 e fazer ainda mais diferença.</p>

            <Link
              href="https://go.pepperpay.com.br/6mj7y"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-4"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 font-bold">
                SIM, QUERO DOAR R$150
              </Button>
            </Link>

            <Link
              href="https://go.pepperpay.com.br/8orfl"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-green-600 hover:text-green-700 font-semibold underline"
            >
              Quero continuar doando R$100
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
