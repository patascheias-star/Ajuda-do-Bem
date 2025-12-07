import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Sobre Nós</h3>
            <p className="text-xs md:text-sm leading-relaxed">
              Trabalhamos para levar esperança e dignidade através de alimentos para famílias em situação de
              vulnerabilidade.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="#ajudar" className="hover:text-green-400">
                  Como ajudar
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-green-400">
                  Sobre o projeto
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-green-400">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#transparencia" className="hover:text-green-400">
                  Transparência
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Contato</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>Email: contato@projetoebenezer.com</li>
              <li>Projeto Ebenezer</li>
              <li>Moçambique</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Redes Sociais</h3>
            <div className="flex gap-3 md:gap-4">
              <Link href="#" className="hover:text-green-400">
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
              <Link href="#" className="hover:text-green-400">
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
              <Link href="#" className="hover:text-green-400">
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
              <Link href="#" className="hover:text-green-400">
                <Youtube className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm">
          <p>&copy; 2025 Projeto Ebenezer. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500">Feito com amor para transformar vidas através da fé e ação</p>
        </div>
      </div>
    </footer>
  )
}
