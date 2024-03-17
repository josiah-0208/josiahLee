import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Career() {
  const t = useTranslations('career');

  return (
    <main className="flex flex-col">
      <Link href="/">홈으로 가는 버튼</Link>
    </main>
  );
}
