import {
  BrainIcon,
  BusIcon,
  CarIcon,
  CarTaxiFrontIcon,
  ChartLineIcon,
  CinemaIcon,
  ContestIcon,
  CookingIcon,
  DollarIcon,
  GamesIcon,
  PartyIcon,
  PlaneIcon,
  PrinterIcon,
  RibbonIcon,
  ScienceIcon,
  SecurityIcon,
  WaypointsIcon,
  HouseIcon,
  AiIcon,
  VisionIcon,
  ChartIcon,
  CameraIcon,
  PrivacyIcon,
} from '@/components/shared/icons';
import { InfoIcon, LucideIcon } from 'lucide-react';
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

export const VISIONS: { title: string; description: string }[] = [
  {
    title: 'التميز (Exellence)',
    description: 'تنظيم الأحداث والمؤتمرات من خلال تقديم تجارب مبهرة لا تُنسى.',
  },
  {
    title: 'المشاركة (Engagement)',
    description: 'طريقة تفاعلية تترك أثراً عميقاً وتحقق الأهداف المرجوة.',
  },
  {
    title: 'التمكين (Empowerment)',
    description:
      'تحقيق رؤية عملائنا وتحويلها إلى واقع ملموس عبر التخطيط والتنفيذ المتقن.',
  },
  {
    title: 'الكفاءة (Efficiency)',
    description:
      'تقديم خدماتنا بأعلى مستويات الكفاءة والاحترافية لتحقيق أعلى التوقعات الممكنة.',
  },
  {
    title: 'التطور (Evolution)',
    description: 'التحسين المستمر في الخدمات ومواكبة أفضل التقنيات والمستجدات',
  },
];

export const MANAGEMENT_SERVICES: {
  img: string;
  title: string;
  description: string;
}[] = [
  {
    img: '/1.webp',
    title: 'إدارة الحشود',
    description:
      'نوفر المنظــمين المــدربين على اســتخدام الأجهزة اللاسلكية و الأكــواد المعتمــدة  لاســتخدامها في تنظيم الحشود وإدارة المواقف المختلفة.',
  },
  {
    img: '/2.webp',
    title: 'تصميم الموقع',
    description:
      'لدينا خدمة مميزة في تصميم موقع الحدث وإضفاء هوية الحدث على كل تفاصيل التصميم ومراعاة تنسيق المساحات أماكن ومساحات العروض المرئية والأنظمة السمعية.',
  },
  {
    img: '/3.webp',
    title: 'الضيافة',
    description:
      ' نقـــوم بتخطيط قوائم الطعـــام وفقًا لاحتياجات الحدث وتفضيلات العـــملاء. يتم اختيار الأطباق  والمأكولات المناسبة للمناسبة ونوع الحدث. ثم نوفر فريق ضيافة محترف لتقديم خدمة عالية الجودة.',
  },
  {
    img: '/4.webp',
    title: 'تنظيم البرامج الفرعية',
    description:
      'نحن نقوم بتنظيم برامج وفعاليات فرعية مصاحبة للحدث أو  المعرض ، مثل المحـــاضرات وورش العمل والعروض التوضيحيــــــة والعـــروض الترفيهية. نهدف إلى توفير تجربـــة شاملة ومتنوعة للحضور.',
  },
];

export const ENTERTAINMENT_SERVICES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'العروض الحية',
    description: `موسيقى، عرض فلكوري ،
وفرق فنية.`,
    icon: PartyIcon,
  },
  {
    title: 'الألعاب التفاعلية',
    description: `واقع افتراضي، ألعاب إلكترونية`,
    icon: GamesIcon,
  },
  {
    title: 'الأنشطة العملية',
    description: `ورش عمل ترفيهية وتجارب تفاعلية`,
    icon: ScienceIcon,
  },
  {
    title: 'تجارب الطهي',
    description: `عروض طهي وتذوق أطعمة`,
    icon: CookingIcon,
  },
  {
    title: 'المسابقات والجوائز',
    description: `مسابقات ترفيهية مع جوائز`,
    icon: ContestIcon,
  },
  {
    title: 'الاستوديوهات المتنقلة',
    description: `مناطق للتصوير الفوتوغرافي والفيديو`,
    icon: CinemaIcon,
  },
  {
    title: 'مناطق الاستراحة',
    description: `مناطق استراحة مزودة
بألعاب أو أنشطة`,
    icon: HouseIcon,
  },
];

export const TECHNOLOGY_SERVICES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'الذكاء الاصطناعي',
    description: `روبوتات تفاعلية لتحسين تجربة
المشاركين`,
    icon: AiIcon,
  },
  {
    title: 'الواقع المعزز/ الافتراضي',
    description: `تجارب تفاعلية ونماذج ثلاثية الأبعاد
`,
    icon: VisionIcon,
  },
  {
    title: 'تحليلات البيانات',
    description: `تحسين الفعاليات عبر تحليل
بيانات الحضور`,
    icon: ChartIcon,
  },
  {
    title: 'تطبيقات الحدث',
    description: `معلومات وتحديثات حية`,
    icon: InfoIcon,
  },
  {
    title: 'التتبع والمراقبة',
    description: `متابعة حركة الزوار وتحليل سلوكهم`,
    icon: CameraIcon,
  },
  {
    title: 'الأمن الرقمي',
    description: `حماية البيانات والهوية`,
    icon: PrivacyIcon,
  },
];
