'use server'
import MainPage from '@/app/[locale]/(root)/components/mainpage'

export interface IDummyData {
  title: string
  description: string
}

export default async function Home() {
  //데이터 받아서 컴포넌트에 props로 내리기
  const dummy_data: IDummyData[] = [
    {
      title: 'First Slide',
      description:
        "111Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      title: 'Second Slide',
      description:
        "222Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      title: 'Third Slide',
      description:
        "333Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
  ]

  return <MainPage data={dummy_data} />
}
