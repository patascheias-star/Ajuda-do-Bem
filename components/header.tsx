import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Search } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/campanha-bem-logo.jpeg"
              alt="Campanha do BEM"
              width={140}
              height={60}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#ajudar" className="text-sm text-gray-700 hover:text-green-600">
              Como ajudar
            </Link>
            <Link href="#descubra" className="text-sm text-gray-700 hover:text-green-600">
              Descubra
            </Link>
            <Link href="#funciona" className="text-sm text-gray-700 hover:text-green-600">
              Como funciona
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              Minha conta
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white hidden md:inline-flex">Criar vaquinha</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
