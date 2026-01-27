"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, X, Copy, Check } from "lucide-react"

const PIX_KEY = "d9c5fc90-38b2-4cf6-8873-2fa9be331143"

export function DonationOptions() {
  const [showPixModal, setShowPixModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showUpsellModal, setShowUpsellModal] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)

  const copyPixKey = () => {
    navigator.clipboard.writeText(PIX_KEY)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleUpsellConfirm = () => {
    setSelectedValue(150)
    setShowUpsellModal(false)
    setShowPixModal(true)
  }

  return (
    <section id="donation-options" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
          Projeto Ebenezer: sua contribuição ajuda a garantir alimento a quem necessita!
        </h2>

        <div
          onClick={() => setShowPixModal(true)}
          className="bg-green-50 border border-green-200 rounded-lg p-8 text-center cursor-pointer hover:bg-green-100 transition-colors"
        >
          <p className="text-xl font-semibold text-gray-900 mb-6">
            Estenda a mão, porque a fé se revela em atos de amor.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-xl py-6 px-8 font-bold w-full md:w-auto">
            <Heart className="mr-2 h-6 w-6" />
            Quero Ajudar
          </Button>
        </div>
      </div>

      {showPixModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowPixModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Doação via PIX</h3>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700 font-semibold mb-2">Use o QR Code do Pix para pagar</p>
              <p className="text-xs text-gray-600">Abra a app em que vai fazer a transferência, escanele a imagem!</p>
            </div>

            <div className="flex justify-center mb-6">
              <div className="border-4 border-purple-400 rounded-2xl p-4">
                <img
                  src="/qr-code.png"
                  alt="QR Code PIX"
                  width={260}
                  height={260}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-600 mb-2">Chave PIX (Aleatória)</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={PIX_KEY}
                  readOnly
                  className="flex-1 bg-white border border-yellow-300 rounded px-3 py-2 text-sm font-mono text-gray-900"
                />
                <button
                  onClick={copyPixKey}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-2 rounded font-bold transition-colors"
                >
                  {copied ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-3">Como fazer sua doação:</p>
              <ol className="text-sm text-gray-700 space-y-2">
                <li><strong>1.</strong> Abra seu banco ou app PIX</li>
                <li><strong>2.</strong> Selecione "Transferência PIX" ou escanele o QR Code</li>
                <li><strong>3.</strong> Digite o valor que deseja doar</li>
                <li><strong>4.</strong> Cole a chave PIX ou use o código</li>
                <li><strong>5.</strong> Confirme e conclua a transferência</li>
              </ol>
            </div>

            <Button
              onClick={() => setShowPixModal(false)}
              className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white text-lg py-6 font-bold"
            >
              Fechar
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
