import localFont from 'next/font/local'

const SUITv1 = localFont({
  src: [
    {
      path: '../../public/fonts/SUITv1/SUITv1-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SUITv1/SUITv1-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SUITv1/SUITv1-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SUITv1/SUITv1-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SUITv1/SUITv1-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const LocalFonts = {
  SUITv1,
}
