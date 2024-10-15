import 'animate.css';
import '@/app/globals.css';
import { Metadata } from 'next';
import { Alexandria } from 'next/font/google';
import React from 'react';
const alexandria = Alexandria({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  fallback: ['sans-serif'],
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: 'Excited',
  description: `تأسست شركتنا على قيم الابتكار، والإبداع، والتميز في تقديم خدمات متكاملة في تخطيط وتنفيذ الفعاليات. بفضل فريقنا المتخصص والشغوف، نحن ملتزمون بتحقيق رؤية عملائنا عبر تنظيم فعاليات تترك أثرًا لا يُنسى.
نحن نؤمن بأن الفعالية ليست مجرد حدث؛ بل هي تجربة متكاملة تبدأ بالتخطيط الدقيق وتنتهي بانطباعات دائمة لدى المشاركين. من هنا، نحرص على تقديم حلول مبتكرة تشمل كل جانب من جوانب الفعالية، من التخطيط الاستراتيجي إلى التنفيذ والإدارة، مرورًا بالدعم اللوجستي والتسويق. سواء كنت تسعى لتنظيم مؤتمر عالمي، أو حفل خاص، أو أي فعالية أخرى،نحن هنا لنقدم لك تجربة فريدة ترفع من مستوى توقعاتك.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body
        className={`dark overflow-x-hidden bg-background text-base font-normal text-foreground antialiased ${alexandria.className}`}
      >
        {children}
      </body>
    </html>
  );
}
