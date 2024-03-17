import Image from 'next/image';

export default function About() {
  return (
    <main className="flex flex-col dark:bg-bgColor">
      <Image
        className="rounded-3xl"
        src={'/static/images/myProfile.jpg'}
        alt="profileImage"
        width={208}
        height={208}
      />
    </main>
  );
}
