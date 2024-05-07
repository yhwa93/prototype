'use client'

import { useLocale } from 'next-intl'
import { locales } from '@/i18n'
import { ChangeEvent, useTransition } from 'react'
import { usePathname, useRouter } from '@/navigation'

export default function LocaleSwitcher() {
  const router = useRouter()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <select defaultValue={locale} onChange={onSelectChange} disabled={isPending}>
      {locales.map((current) => (
        <option key={current} value={current}>
          {current}
        </option>
      ))}
    </select>
  )
}
