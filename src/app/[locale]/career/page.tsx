import Card from '@/components/career/Card';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Career() {
  const t = useTranslations('career');

  return (
    <main className="flex flex-col">
      <p className="text-2xl">
        <strong>
          We will find a way,
          <br /> We always have
        </strong>
      </p>
      <p>career</p>
      <div className="w-[768px] flex">
        <Card />
        <Card />
      </div>
      <p>projects</p>
    </main>
  );
}
