"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Eye,
  Phone,
  MapPin,
  Clock,
  Star,
  AlertTriangle,
  CheckCircle,
  Stethoscope,
  Zap,
  DollarSign,
  Users,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function OftalmologiaLP() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="bg-white shadow-sm border-b">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/atendja.png"
              alt="Atend Já Logo"
              width={120}
              height={40}
              className="h-14 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>(75) 3026-8494</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>Seg-Sáb: 7h às 19h</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section  className="text-white py-16 md:py-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #008B47 0%, #2EA55C 50%, #8dbf44 100%)`,
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#8DBF44]/10 text-[#fff] border-[#fff]/20">
                <AlertTriangle className="h-4 w-4 mr-1" />
                Não espere perder qualidade de vida!
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sua Visão Está <span className="text-[#fff]">Embaçada?</span> Não Deixe para Depois!
              </h1>

              <p className="text-xl text-white leading-relaxed">
                Na <strong>Atend Já</strong>, você faz consultas e exames oftalmológicos completos com preço acessível,
                <strong> sem plano de saúde</strong> e <strong>sem filas</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
               
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#008B47] text-[#008B47] hover:bg-[#fff]/50 text-lg px-8 py-4 font-bold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  AGENDAR CONSULTA
                </Button>
              </div>

              
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl">
                <img
                  src="/5.png?height=500&width=500"
                  alt="Médico oftalmologista realizando exame"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-[#008B47] text-white p-4 rounded-full">
                  <Eye className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Exames e Tratamentos */}
      <section id="servicos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cuide da Sua Visão com Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600">Exames completos com equipamentos de última geração</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow border-[#8DBF44]/20">
              <CardContent className="p-6 text-center">
                <div className="bg-[#8DBF44]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-[#008B47]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Consulta Oftalmológica Completa</h3>
                <p className="text-gray-600 text-sm mb-3">Teste de acuidade visual + fundo de olho</p>
              
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-[#8DBF44]/20">
              <CardContent className="p-6 text-center">
                <div className="bg-[#8DBF44]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-[#008B47]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mapeamento de Retina</h3>
                <p className="text-gray-600 text-sm mb-3">Detecta diabetes, glaucoma e degeneração macular</p>
            
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-[#8DBF44]/20">
              <CardContent className="p-6 text-center">
                <div className="bg-[#8DBF44]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-[#008B47]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Pressão Intraocular</h3>
                <p className="text-gray-600 text-sm mb-3">Prevenção de glaucoma</p>
               
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-[#8DBF44]/20">
              <CardContent className="p-6 text-center">
                <div className="bg-[#8DBF44]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#008B47]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Receituário para Óculos/Lentes</h3>
                <p className="text-gray-600 text-sm mb-3">Prescrição precisa em 15 minutos</p>
               
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#8DBF44]/10 border border-[#8DBF44]/20 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="h-6 w-6 text-[#008B47] mr-2" />
              <span className="font-semibold text-[#008B47]">Dor nos olhos ou visão turva?</span>
            </div>
            <Button className="bg-[#008B47] hover:bg-[#2EA55C] text-white font-bold">AGENDAR CONSULTA</Button>
          </div>
        </div>
      </section>

      {/* Sinais de Alerta */}
      <section className="py-16 bg-[#8DBF44]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Você Tem Algum Dessas Queixas?</h2>
            <p className="text-xl text-gray-600">Não ignore os sinais que seu corpo está dando</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <AlertTriangle className="h-6 w-6 text-[#008B47] mr-4 flex-shrink-0" />
              <span className="text-gray-800">Dificuldade para ler de perto ou de longe</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <AlertTriangle className="h-6 w-6 text-[#008B47] mr-4 flex-shrink-0" />
              <span className="text-gray-800">Dores de cabeça frequentes</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <AlertTriangle className="h-6 w-6 text-[#008B47] mr-4 flex-shrink-0" />
              <span className="text-gray-800">Olhos vermelhos ou secura constante</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <AlertTriangle className="h-6 w-6 text-[#008B47] mr-4 flex-shrink-0" />
              <span className="text-gray-800">Visão dupla ou flashes de luz</span>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-[#008B47] hover:bg-[#2EA55C] text-white text-lg px-8 py-4 font-bold">
             AGENDAR CONSULTA
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher a Atend Já para Sua Saúde Ocular?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#8DBF44]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-10 w-10 text-[#008B47]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Aparelhos de Última Geração</h3>
              <p className="text-gray-600">Tonômetro digital, autorefrator e lâmpada de fenda</p>
            </div>

            <div className="text-center">
              <div className="bg-[#8DBF44]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-[#008B47]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Resultados Imediatos</h3>
              <p className="text-gray-600">Laudo na hora para maioria dos exames</p>
            </div>

            <div className="text-center">
              <div className="bg-[#8DBF44]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-10 w-10 text-[#008B47]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Preços Acessíveis</h3>
              <p className="text-gray-600">Consulta + receituário por menos de R$ 200</p>
            </div>

            <div className="text-center">
              <div className="bg-[#8DBF44]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-[#008B47]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Oftalmologistas Experientes</h3>
              <p className="text-gray-600">Atendimento humanizado e detalhista</p>
            </div>
          </div>

         
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-[#8DBF44]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que dizem nossos pacientes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Paciente satisfeita"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Maria Silva</h4>
                    <div className="flex text-[#008B47]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Finalmente achei óculos que funcionam! O médico foi super atencioso e explicou tudo detalhadamente."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Paciente satisfeito"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">João Santos</h4>
                    <div className="flex text-[#008B47]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Descobri meu glaucoma cedo graças ao exame de pressão aqui. Salvaram minha visão!"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-white rounded-lg p-6">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <Users className="h-6 w-6 text-[#008B47] mr-2" />
                <span className="font-semibold">10+ anos de experiência</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-[#008B47] mr-2" />
                <span className="font-semibold">97% de satisfação em exames</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tire Suas Dúvidas Sobre Saúde Ocular</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Preciso de encaminhamento para consulta?</h3>
                <p className="text-gray-600">
                  Não! Agende diretamente conosco. Atendemos particular sem necessidade de plano de saúde.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">O exame de retina dói?</h3>
                <p className="text-gray-600">
                  É indolor e rápido (menos de 10 minutos). Utilizamos equipamentos modernos para seu conforto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Posso fazer exame se usar lente de contato?</h3>
                <p className="text-gray-600">
                  Sim, mas recomendamos vir sem lentes no dia do exame para resultados mais precisos.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#008B47] hover:bg-[#2EA55C] text-white text-lg px-8 py-4 font-bold">
              <Phone className="h-5 w-5 mr-2" />
             AGENDAR CONSULTA
            </Button>
          </div>
        </div>
      </section>

  {/* Footer */}
  <footer style={{ backgroundColor: "#3b3f3d" }} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/atendjabranco.png"
                  alt="Atend Já Logo"
                  width={120}
                  height={60}
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-white/70 mb-4">
              Cuidando da sua visão com tecnologia de ponta e preços acessíveis.
              </p>
            
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>(75) 3026-8494</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Rua Cícero Dantas, 221, Ponto Central</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Segunda a Sábado: 7h às 19h</span>
                </div>
              </div>
            </div>

           

            <div>
              <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
              <div className="flex items-center">
                <img
                  src="/logo02.png"
                  alt="HW Logo"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Atend Já - Todos os direitos reservados.</p>
            
          </div>
        </div>
      </footer>
    </div>
  )
}
