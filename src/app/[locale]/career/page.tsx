import Card from '@/components/career/Card';
import { useTranslations } from 'next-intl';
import mockData from '../../../data/mock.json';

export default function Career() {
  const t = useTranslations('career');
  const careerItems = mockData.careerItems;
  const projectItems = mockData.projectItems;

  return (
    <main className="flex flex-col">
      <p className="text-2xl">
        <strong>
          We will find a way,
          <br /> We always have
        </strong>
      </p>
      <p>career</p>
      <div className="w-[768px] flex justify-between flex-wrap">
        {careerItems.map((item) => (
          <Card cardItem={item} key={item.title} />
        ))}
      </div>
      <p>projects</p>
      <div className="w-[768px] flex justify-between flex-wrap">
        {projectItems.map((item) => (
          <Card cardItem={item} key={item.title} />
        ))}
      </div>
    </main>
  );
}
