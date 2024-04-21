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
      <p>works</p>
      <p>projects</p>
      <div className="w-[768px]"></div>
    </main>
  );
}
