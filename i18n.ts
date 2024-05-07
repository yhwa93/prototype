import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { LOCALES } from '@/lib/types/Enums'

// Can be imported from a shared config
export const locales = [LOCALES.KO, LOCALES.EN, LOCALES.JA]

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
