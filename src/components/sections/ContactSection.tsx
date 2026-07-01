import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Calendar } from 'lucide-react'
import { SectionLabel } from '@/components/common/SectionLabel'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/types'
import emailjs from '@emailjs/browser'

const SERVICE_ID     = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID    = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY     = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const lastSent = useRef(0)
  const [form, setForm] = useState<ContactForm>({
    name: '', email: '', subject: '', message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const now = Date.now()
    if (now - lastSent.current < 30_000) {
      setErrorMsg('Tunggu 30 detik sebelum mengirim lagi.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    setStatus('sending')
    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS credentials not configured — sending skipped')
        setStatus('sent')
        return
      }
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      lastSent.current = Date.now()
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setErrorMsg('Ada masalah teknis. Coba kirim langsung ke')
      setStatus('error')
    }
  }

  const inputClass = [
    'w-full px-4 py-3',
    'font-mono text-sm',
    'border-3 border-brutal-black bg-brutal-white',
    'placeholder:text-brutal-black/40',
    'focus:outline-none focus:border-brutal-blue focus:shadow-brutal-blue',
    'transition-shadow duration-100',
  ].join(' ')

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionLabel index="04" title="Get In Touch" accent="#FF3C3C" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border-3 border-brutal-black">
        <div className="lg:col-span-2 p-10 bg-brutal-black text-brutal-white border-b-3 lg:border-b-0 lg:border-r-3 border-brutal-black space-y-8">
          <div>
            <h3 className="font-display font-black text-display-md leading-none mb-4">
              Mari<br/>
              <span className="text-brutal-yellow">Berkolaborasi</span>
            </h3>
            <p className="font-sans text-sm text-brutal-white/70 leading-relaxed">
              Saya terbuka untuk proyek freelance, kerja sama jangka panjang, atau sekadar ngobrol tentang ide-ide gila kalian.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Mail size={16} />,     label: 'Email',    value: 'jonadalzam@gmail.com' },
              { icon: <MapPin size={16} />,   label: 'Lokasi',   value: 'Yogyakarta, Indonesia' },
              { icon: <Calendar size={16} />, label: 'Tersedia', value: 'Mulai Jan 2025' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 border-b border-brutal-white/20 pb-4 last:border-0">
                <span className="mt-0.5 text-brutal-yellow">{icon}</span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-brutal-white/60">{label}</p>
                  <p className="font-sans text-sm font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 p-10">
          {status === 'sent' ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 border-3 border-brutal-green p-8 shadow-brutal-lg"
            >
              <div className="text-6xl font-black text-brutal-green">✓</div>
              <h3 className="font-display font-black text-2xl">Pesan Terkirim!</h3>
              <p className="font-mono text-sm text-brutal-black/60">Saya akan membalas dalam 24–48 jam.</p>
            </motion.div>
          ) : status === 'error' ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 border-3 border-brutal-red p-8 shadow-brutal-lg"
            >
              <div className="text-6xl font-black text-brutal-red">✕</div>
              <h3 className="font-display font-black text-2xl">Gagal Mengirim!</h3>
              <p className="font-mono text-sm text-brutal-black/60">
                {errorMsg}{' '}
                {errorMsg.includes('teknis') && (
                  <a href="mailto:jonadalzam@gmail.com" className="underline decoration-2">jonadalzam@gmail.com</a>
                )}.
              </p>
              <button
                onClick={() => { setStatus('idle'); setErrorMsg('') }}
                className="btn-brutal bg-brutal-yellow"
              >
                Coba Lagi
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider">Nama</label>
                  <input name="name" value={form.name} onChange={handleChange}
                    required placeholder="Junadhan" className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="jonad@example.com" className={inputClass} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider">Subjek</label>
                <input name="subject" value={form.subject} onChange={handleChange}
                  required placeholder="Kolaborasi Project / Pertanyaan" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase tracking-wider">Pesan</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  required rows={6} placeholder="Ceritakan proyek atau idemu..."
                  className={inputClass + ' resize-none'} />
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                disabled={status === 'sending'}
                className="w-full sm:w-auto"
              >
                {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
                <Send size={18} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
