import {
  BrainIcon,
  BusIcon,
  CarIcon,
  CarTaxiFrontIcon,
  ChartLineIcon,
  DollarIcon,
  PlaneIcon,
  PrinterIcon,
  RibbonIcon,
  SecurityIcon,
  WaypointsIcon,
} from '@/components/shared/icons';
import { ReactNode } from 'react';
const ICON_SIZE = 36;
type Service = {
  id: number;
  title: string;
  icon: ReactNode;
  description: string;
};
export const EVENT_MANAGEMENT_SERVICES: Service[] = [
  {
    id: 1,
    title: 'التخطيـــط الاستراتيجي',
    icon: <ChartLineIcon size={ICON_SIZE} />,
    description:
      'نبدأ بتحليـــــــل متطلبــات الحــــــــــــدث وأهدافـــــــه والجمهــور المســـتهدف. وبناء عليه، نقــوم بوضــع استراتيجية شاملـــــة للمواعيـــــــــد والأهــــــــــداف والميزانية والتصميـــــم والتسويـــــــق وغيرها من العوامل المهمة.',
  },
  {
    id: 2,
    title: 'التصميم الإبداعي',
    icon: <BrainIcon size={ICON_SIZE} />,
    description:
      'بعد مشاركة الخطط والاستراتيجيات نبدأ في إعداد التصميمات الإبداعية للفعاليات باستخدام أحدث التقنيات وأكثر الخبراء إطلاعًا على أحدث الطرز التصميمية العالمية، وكيفية دمج تلك التحديثات مع ثقافة الفعالية أو الحدث.',
  },
  {
    id: 3,
    title: 'إدارة الموارد والميزانية',
    icon: <DollarIcon size={ICON_SIZE} />,
    description:
      'نحن ندير الميزانية المخصصة للحدث بعناية، ونقوم بتخطيط ومراقبة  التكاليف والنفقات بدقة. نحن نحرص على استخدام الموارد المتاحة بكفاءة وفعالية.',
  },
  {
    id: 4,
    title: 'التنسيق والتنظيم',
    icon: <WaypointsIcon size={ICON_SIZE} />,
    description:
      'نقوم في هذه المرحلة بإدارة جميـــع جوانب الحدث، بـــدءً من حجز الموقـــع وإدارة الموردين  وتنظيـــم جدول الفعاليات وإدارة البرامج والعروض الفرعية. نحن نعمل على توفري تجربة سلســـة  ومنسقة للمشاركين والحضور.',
  },
  {
    id: 5,
    title: 'الجودة والتفتيش',
    icon: <RibbonIcon size={ICON_SIZE} />,
    description:
      'نحـــن نضمن جودة عالية في جميع جوانب الحدث، بدءً من جودة الخدمات  وصولاً إلى جودة العروض والمحتـــــــــــوى المقـــــــــــدم. نقـــــــوم بالتفتيـــش الدوري وإدارة  المراجعات لضمان الجودة المطلوبة.',
  },
  {
    id: 6,
    title: 'السلامة والأمان',
    icon: <SecurityIcon size={ICON_SIZE} />,
    description:
      'نحن نولي أهمية كبرية لسلامة وأمان المشـــاركني والحضور. نحن نضمن تنفيذ  إجراءات السلامة المناســـبة، مبا في ذلك إدارة المخاطر وتوفري فرق الإسعافات الأولية والتأمني  اللازم.',
  },
];

const ICON_CLASSNAME =
  'size-[40px] text-primary duration-500 group-hover:scale-125';
export const LOGISTICS: Service[] = [
  {
    id: 1,
    title: 'خدمات الحجز والسفر',
    description: `نحن نوفر خدمات حجز الفنادق والسفر لضمان تجربة مريحة وسهلة للحضور.
حجز الفنادق 
 النقل والســـفر 
 ترتيبات إضافية
 الدعم اللوجستي`,
    icon: <PlaneIcon className={ICON_CLASSNAME} />,
  },
  {
    id: 2,
    title: 'المطبوعات',
    description: `ونوفر أيضاً جميع المطبوعات والهدايا اللازمة للفعاليات بأعلى جودة وبتصميم خبير يحافظ على هوية الفعالية ومظهرها اللائق.`,
    icon: <PrinterIcon className={ICON_CLASSNAME} />,
  },
  {
    id: 3,
    title: 'صف السيارات',
    description: `خدمة صف الســـيارات في الحدث تهدف إلى تســـهيل وتنظيم وصول الحضور بسياراتهم وتوفير  تجربة مريحة لهم
تخطيط وتنظيم المواقف
خدمات استلام وتسليم السيارات
تأمين وحامية السيارات
خدمات النقل الداخل`,
    icon: <CarIcon className={ICON_CLASSNAME} />,
  },
  {
    id: 4,
    title: ' المواصلات',
    description: `خدمة مخصصة لنقل الضيوف والحضور من وإلى الأماكن المحددة أثناء الفعاليات بمختلف أنواع الموصلات وفريق من السائقين المحترفين.`,
    icon: <CarTaxiFrontIcon className={ICON_CLASSNAME} />,
  },
  {
    id: 5,
    title: ' شحن اللوازم',
    description: `شحن وتوصيل لوازم الفعاليات المختلفة وضمان تنظيم عملية النقل بشكل سلس وسريع بسيارات الشحن المختلفة.`,
    icon: <BusIcon className={ICON_CLASSNAME} />,
  },
];
