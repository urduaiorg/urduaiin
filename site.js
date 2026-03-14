document.documentElement.lang = "ur";
document.documentElement.dir = "ltr";

const navLinks = [
  { href: "/index.html", label: "ہوم" },
  { href: "/start-here.html", label: "یہاں سے شروع کریں" },
  { href: "/guides.html", label: "رہنمائی" },
  { href: "/tools.html", label: "ٹولز" },
  { href: "/about.html", label: "ہمارے بارے میں" },
];

const spotlightLinks = [
  { href: "/ai-basics.html", label: "اے آئی کی بنیادی باتیں" },
  { href: "/what-is-chatgpt.html", label: "چیٹ جی پی ٹی گائیڈ" },
  { href: "/teachers-guide.html", label: "اساتذہ" },
  { href: "/freelancers-guide.html", label: "فری لانسرز" },
  { href: "/free-tools.html", label: "مفت ٹولز" },
  { href: "/community.html", label: "کمیونٹی" },
];

const pages = {
  home: {
    type: "home",
    kicker: "بھارت کے لیے اردو فرسٹ اے آئی لرننگ",
    headline: "urduai.in ایسی جگہ ہو جہاں بھارتی اردو قارئین آسانی سے اے آئی سیکھ سکیں۔",
    summary:
      "یہ پائلٹ بھارتی اردو قارئین کے لیے بنایا گیا ہے تاکہ طلبہ، فری لانسرز، اساتذہ، اور موبائل فرسٹ صارفین اے آئی کو سادہ اردو میں سمجھ سکیں، صحیح ٹول چن سکیں، اور عملی طور پر استعمال کر سکیں۔",
    pills: ["بھارت فوکس", "اردو فرسٹ", "اے آئی گائیڈز", "تیز ویب سائٹ"],
    sections: [
      {
        title: "یہ پائلٹ کیا دکھاتا ہے",
        body:
          "یہ صرف نئی ڈیزائن مشق نہیں ہے۔ یہ ایک ایسی اردو فرسٹ ویب سائٹ کا نمونہ ہے جہاں مواد صاف ہو، مطالعہ آسان ہو، موبائل پر سب کچھ بہتر لگے، اور ہر صفحہ سیکھنے میں مدد کرے۔",
      },
      {
        title: "ٹیم کن چیزوں کو دیکھے",
        body:
          "کیا یہ برانڈ زیادہ مضبوط لگتا ہے؟ کیا اردو پڑھنا آسان ہے؟ کیا نئے مضامین شامل کرنا آسان ہوگا؟ اور کیا یہ موجودہ ورڈپریس سائٹ سے زیادہ واضح اور بہتر تجربہ دیتا ہے؟",
      },
    ],
    cards: [
      {
        href: "/start-here.html",
        tag: "آغاز",
        title: "یہاں سے شروع کریں",
        text: "ان لوگوں کے لیے جو اے آئی کے بارے میں سن چکے ہیں مگر سمجھ نہیں پا رہے کہ ابتدا کہاں سے کریں۔",
      },
      {
        href: "/guides.html",
        tag: "لائبریری",
        title: "رہنمائی",
        text: "تعلیم، کام، موبائل استعمال، تدریس، اور روزمرہ زندگی کے لیے موضوعاتی رہنمائی۔",
      },
      {
        href: "/tools.html",
        tag: "ٹولز",
        title: "اے آئی ٹولز",
        text: "چیٹ جی پی ٹی، جیمنی، کینوا اے آئی اور دوسرے اہم ٹولز کے لیے عملی صفحات۔",
      },
      {
        href: "/newsletter.html",
        tag: "اپ ڈیٹس",
        title: "نیوز لیٹر",
        text: "مضامین، ویڈیوز، ورکشاپس اور اہم اپ ڈیٹس کو ایک جگہ جوڑنے والا مستقل رابطہ۔",
      },
      {
        href: "/about.html",
        tag: "اعتماد",
        title: "urduai.in کے بارے میں",
        text: "ہم بھارت کے اردو قارئین کے لیے کیا بنا رہے ہیں، اور یہ AI literacy کے لیے کیوں ضروری ہے۔",
      },
      {
        href: "/community.html",
        tag: "کمیونٹی",
        title: "کمیونٹی",
        text: "ایسی جگہ جہاں سوال، سیکھنا، ورکشاپس اور مشترکہ گفتگو ایک دوسرے سے جڑ سکیں۔",
      },
    ],
    startHere: [
      "اگر آپ بالکل نئے ہیں تو پہلے اے آئی کی بنیادی باتیں پڑھیں۔",
      "اگر آپ طالب علم ہیں تو چیٹ جی پی ٹی اور طلبہ کے لیے اے آئی والے صفحات دیکھیں۔",
      "اگر آپ موبائل پر ہیں تو مفت ٹولز اور موبائل اے آئی پہلے کھولیں۔",
    ],
    featured: {
      href: "/what-is-chatgpt.html",
      tag: "بھارت کے قارئین کے لیے",
      title: "چیٹ جی پی ٹی کیا ہے؟ بھارتی اردو قارئین کے لیے ایک سادہ اور عملی رہنمائی",
      text: "زیادہ تر نئے قارئین کے لیے یہی سب سے اہم entry page ہوگا کیونکہ یہاں tool understanding، free vs paid فرق، mobile use، اور practical فائدہ تینوں واضح ہوتے ہیں۔",
    },
    news: [
      { href: "/newsletter.html", title: "ChatGPT Go کم قیمت AI access کو بھارت جیسے market میں زیادہ اہم بنا رہا ہے" },
      { href: "/gemini-tool.html", title: "Gemini تعلیم اور روزمرہ Google tools میں زیادہ تیزی سے شامل ہو رہا ہے" },
      { href: "/canva-tool.html", title: "Canva AI creators، طلبہ، اور small business users کے لیے practical choice بن رہا ہے" },
    ],
  },
};

function addStandardPage(key, headline, summary, cards) {
  pages[key] = {
    type: "standard",
    kicker: "اردو اے آئی",
    headline,
    summary,
    pills: ["آسان مطالعہ", "موبائل فرسٹ", "صاف ڈھانچہ"],
    sections: [
      {
        title: "یہ صفحہ کیوں ضروری ہے",
        body:
          "یہ صفحہ ۳۰ صفحات کے اس پائلٹ کا حصہ ہے۔ اس کا مقصد یہ دکھانا ہے کہ اردو اے آئی کی ویب سائٹ واضح مقصد، آسان ڈیزائن، اور مضبوط اندرونی لنکس کے ساتھ کیسے منظم ہو سکتی ہے۔",
      },
      {
        title: "ٹیم کیا دیکھے",
        body:
          "جب ٹیم یہ صفحہ دیکھے تو وہ یہ سوال کرے: کیا بات فوراً سمجھ آتی ہے؟ کیا پڑھنا آرام دہ ہے؟ اور کیا یہ صفحہ ایک بڑے، منظم اردو اے آئی سسٹم کا حصہ لگتا ہے؟",
      },
    ],
    cards,
  };
}

function addArticlePage(key, headline, summary, list) {
  pages[key] = {
    type: "article",
    kicker: "رہنمائی",
    headline,
    summary,
    pills: ["اردو فرسٹ", "آسان انداز", "مضمون ٹیمپلیٹ"],
    sections: [
      {
        title: "مختصر خلاصہ",
        body: summary,
      },
      {
        title: "قاری کو کیا ملنا چاہیے",
        body:
          "صاف وضاحت، یہ سمجھ کہ کیا چیز مفت ہے یا پیڈ، موبائل پر کتنی آسانی سے کام ہو سکتا ہے، اور آج ہی ایک عملی قدم کیا اٹھایا جا سکتا ہے۔",
      },
    ],
    list,
    facts: [
      "یہ صفحہ beginners کے لیے لکھا گیا ہے",
      "موبائل users کو ذہن میں رکھا گیا ہے",
      "اہم facts کو دوبارہ verify کرنا بہتر ہے",
    ],
  };
}

function addHubPage(key, headline, summary, cards) {
  pages[key] = {
    type: "hub",
    kicker: "مرکزی صفحہ",
    headline,
    summary,
    pills: ["موضوعاتی مرکز", "اندرونی لنکس", "منظم ساخت"],
    sections: [
      {
        title: "یہ صفحہ کیسے کام کرتا ہے",
        body:
          "اس طرح کے مرکزی صفحات مواد کو بہتر انداز میں منظم کرتے ہیں تاکہ قاری متعلقہ مضامین تک آسانی سے پہنچ سکے اور صرف مینیو پر انحصار نہ کرنا پڑے۔",
      },
    ],
    cards,
  };
}

addStandardPage(
  "about",
  "urduai.in کو بھارت کے لیے ایک سنجیدہ اردو فرسٹ اے آئی لرننگ برانڈ کے طور پر بنایا جا رہا ہے۔",
  "اس کی سمت واضح ہے: بھارتی اردو قارئین کے لیے اے آئی کو آسان، قابلِ عمل، اور روزمرہ زندگی سے جڑا ہوا بنانا۔",
  spotlightLinks.slice(0, 3)
);
addStandardPage(
  "contact",
  "شراکت داری، ورکشاپس، اسپانسرشپ، اور ادارتی تعاون کے لیے ایک واضح رابطہ صفحہ ہونا چاہیے۔",
  "یہ صفحہ دکھاتا ہے کہ اردو اے آئی پیشہ ورانہ رابطوں کے لیے بھی منظم اور بااعتماد نظر آ سکتا ہے۔",
  [
    { href: "/workshops.html", tag: "آفر", title: "ورکشاپس", text: "ٹریننگ اور سیشنز کے لیے سادہ صفحہ۔" },
    { href: "/community.html", tag: "لوگ", title: "کمیونٹی", text: "صرف ٹریفک نہیں، حقیقی گفتگو۔" },
    { href: "/about.html", tag: "اعتماد", title: "ہمارے بارے میں", text: "یہ پلیٹ فارم کون چلا رہا ہے۔" },
  ]
);
addStandardPage(
  "subscribe",
  "نیوز لیٹر کو پروڈکٹ کا حصہ محسوس ہونا چاہیے، صرف ایک پاپ اپ نہیں۔",
  "یہ صفحہ نیوز لیٹر کو ایک ایسی ہفتہ وار سہولت کے طور پر دکھاتا ہے جو اردو میں اے آئی سیکھنے والوں کے لیے مستقل فائدہ دے۔",
  [
    { href: "/newsletter.html", tag: "جھلک", title: "نیوز لیٹر", text: "لوگوں کو کیا ملے گا، یہ دکھائیں۔" },
    { href: "/videos.html", tag: "چینل", title: "ویڈیوز", text: "ویڈیو دیکھنے والوں کو سبسکرائبر بنائیں۔" },
    { href: "/community.html", tag: "رابطہ", title: "کمیونٹی", text: "لوگوں کو جڑے رہنے کی وجہ دیں۔" },
  ]
);
addHubPage(
  "start-here",
  "اگر آپ اے آئی کے بارے میں جاننا چاہتے ہیں مگر مشکل اصطلاحات اور پیچیدہ طریقے نہیں چاہتے، تو یہاں سے شروع کریں۔",
  "یہ صفحہ بالکل ابتدائی قارئین کو ویب سائٹ کے سب سے اہم پہلے پانچ صفحات تک لے جاتا ہے۔",
  [
    { href: "/ai-basics.html", tag: "مرحلہ ۱", title: "اے آئی کی بنیادیں", text: "پہلے سمجھیں کہ اے آئی اصل میں ہے کیا۔" },
    { href: "/what-is-chatgpt.html", tag: "مرحلہ ۲", title: "چیٹ جی پی ٹی کیا ہے؟", text: "وہ ٹول جس کے بارے میں سب سے زیادہ سوال ہوتے ہیں۔" },
    { href: "/free-tools.html", tag: "مرحلہ ۳", title: "مفت ٹولز", text: "بغیر خرچ کے کہاں سے آغاز کیا جا سکتا ہے۔" },
    { href: "/mobile-ai.html", tag: "مرحلہ ۴", title: "موبائل پر اے آئی", text: "زیادہ تر لوگ یہیں سے شروع کریں گے۔" },
    { href: "/ai-terms.html", tag: "مرحلہ ۵", title: "اہم اصطلاحات", text: "شروع میں زبان واضح کر لیں۔" },
  ]
);
addHubPage(
  "guides",
  "یہ رہنمائی صفحہ بھارتی اردو بولنے والے قارئین کے لیے ہے جو اے آئی کو امتحان، کام، روزگار، اور روزمرہ استعمال کے تناظر میں سمجھنا چاہتے ہیں۔",
  "یہاں وہ صفحات جمع کیے گئے ہیں جو urduai.in کو ایک مفید learning product بناتے ہیں، نہ کہ صرف ایک عام بلاگ۔",
  [
    { href: "/teachers-guide.html", tag: "رہنمائی", title: "اساتذہ", text: "تعلیم میں ذمہ دارانہ استعمال۔" },
    { href: "/students-guide.html", tag: "رہنمائی", title: "طلبہ", text: "پڑھائی میں مدد، شارٹ کٹ نہیں۔" },
    { href: "/freelancers-guide.html", tag: "رہنمائی", title: "فری لانسرز", text: "کام اور پیداواری صلاحیت کے لیے۔" },
    { href: "/small-business.html", tag: "رہنمائی", title: "چھوٹا کاروبار", text: "مارکیٹنگ اور روزمرہ آپریشنز۔" },
    { href: "/youtube-creators.html", tag: "رہنمائی", title: "یوٹیوب کری ایٹرز", text: "ٹائٹلز، اسکرپٹس اور پلاننگ۔" },
    { href: "/privacy-and-safety.html", tag: "رہنمائی", title: "پرائیویسی اور سیفٹی", text: "اے آئی کے محفوظ استعمال کی عادتیں۔" },
  ]
);
addHubPage(
  "tools",
  "ٹولز والے صفحات بھارتی صارفین کو یہ فیصلہ کرنے میں مدد دیں کہ کون سا ٹول واقعی useful ہے، کون سا صرف hype ہے، اور کون سا budget یا mobile کے لحاظ سے مناسب ہے۔",
  "یہ صفحہ ایک India-first editorial tool review model دکھاتا ہے جہاں free vs paid، mobile fit، اور practical use واضح ہو۔",
  [
    { href: "/chatgpt-tool.html", tag: "ٹول", title: "چیٹ جی پی ٹی", text: "عام استعمال، لکھائی اور آئیڈیاز کے لیے۔" },
    { href: "/gemini-tool.html", tag: "ٹول", title: "جیمنی", text: "گوگل سے جڑا اسسٹنٹ اور ریسرچ مددگار۔" },
    { href: "/canva-tool.html", tag: "ٹول", title: "کینوا اے آئی", text: "تیز ڈیزائن اور سوشل پوسٹس۔" },
    { href: "/midjourney-alternatives.html", tag: "موازنہ", title: "تصویری متبادل", text: "آسان اور کم پیچیدہ آپشنز۔" },
    { href: "/image-tools.html", tag: "رہنمائی", title: "امیج ٹولز", text: "تصاویر کہاں مفید ہیں اور کہاں نہیں۔" },
    { href: "/free-tools.html", tag: "فہرست", title: "مفت ٹولز", text: "نئے صارف کے لیے بہترین آغاز۔" },
  ]
);
addHubPage(
  "videos",
  "ویڈیوز کو اکیلے نہیں رہنا چاہیے۔ انہیں مضامین، سبسکرپشن، اور دوبارہ آنے والے قارئین سے جڑنا چاہیے۔",
  "یہ صفحہ دکھاتا ہے کہ یوٹیوب یا شارٹ ویڈیوز اردو اے آئی کے بڑے پبلشنگ سسٹم میں کیسے شامل ہو سکتی ہیں۔",
  [
    { href: "/newsletter.html", tag: "رابطہ", title: "نیوز لیٹر", text: "ویورز کو مستقل قارئین میں بدلیں۔" },
    { href: "/youtube-creators.html", tag: "رہنمائی", title: "کری ایٹرز گائیڈ", text: "کری ایٹرز کے ورک فلو میں اے آئی کی جگہ۔" },
    { href: "/what-is-chatgpt.html", tag: "مرکزی مضمون", title: "چیٹ جی پی ٹی", text: "ہر ویڈیو کے ساتھ ایک مضبوط مضمون۔" },
  ]
);
addStandardPage(
  "newsletter",
  "نیوز لیٹر وہ جگہ ہے جہاں اردو اے آئی صرف ایک وزٹ نہیں بلکہ ایک عادت بن سکتا ہے۔",
  "یہ صفحہ دکھاتا ہے کہ نیوز لیٹر کیسے مضامین، مختصر اپ ڈیٹس، ورکشاپس، اور کمیونٹی کو ایک ساتھ لا سکتا ہے۔",
  [
    { href: "/subscribe.html", tag: "دعوت", title: "سبسکرائب", text: "رجسٹریشن کے لیے سادہ صفحہ۔" },
    { href: "/community.html", tag: "وابستگی", title: "کمیونٹی", text: "لوگوں کو جڑے رہنے کی وجہ دیں۔" },
    { href: "/workshops.html", tag: "آفر", title: "ورکشاپس", text: "آئندہ سیشنز یا پارٹنر پروگرامز۔" },
  ]
);
addStandardPage(
  "workshops",
  "ورکشاپس بھی اسی ایکو سسٹم کا حصہ ہونی چاہئیں، الگ اور بے ربط نہیں۔",
  "یہ صفحہ آئندہ ٹریننگ، پارٹنر سیشنز، یا کمیونٹی لرننگ آفرز کے لیے ایک سادہ خاکہ ہے۔",
  [
    { href: "/contact.html", tag: "رابطہ", title: "کانٹیکٹ", text: "اسکولز، پارٹنرز اور اسپانسرز کے لیے۔" },
    { href: "/teachers-guide.html", tag: "سامعین", title: "اساتذہ", text: "ممکنہ ابتدائی سامعین۔" },
    { href: "/about.html", tag: "اعتماد", title: "ہمارے بارے میں", text: "ٹریننگ کون دے رہا ہے؟" },
  ]
);

addArticlePage("ai-basics", "اے آئی کی بنیادی باتیں: یہ کیا ہے، کیا نہیں ہے، اور لوگ اس میں دلچسپی کیوں لیتے ہیں", "یہ مرکزی مضمون سادہ زبان میں اے آئی کا تعارف کراتا ہے اور پوری ویب سائٹ کے انداز کا رخ طے کرتا ہے۔", ["روزمرہ زندگی میں اے آئی کا مطلب", "آج لوگ کہاں کہاں اے آئی سے ملتے ہیں", "اردو میں وضاحت کیوں ضروری ہے", "اگلا آسان قدم کیا ہو سکتا ہے"]);
addArticlePage("what-is-chatgpt", "چیٹ جی پی ٹی کیا ہے؟ اردو بولنے والوں کے لیے ایک عملی ابتدائی رہنمائی", "یہ مضمون بغیر مبالغے کے چیٹ جی پی ٹی کو سمجھاتا ہے اور دکھاتا ہے کہ یہ کن کاموں میں مدد دے سکتا ہے۔", ["چیٹ جی پی ٹی کن کاموں میں اچھا ہے", "لوگ کہاں غلط سمجھتے ہیں", "مفت اور پیڈ فرق", "نئے صارف کے لیے موبائل حقیقت"]);
addArticlePage("prompting-in-urdu", "اردو میں پرامپٹنگ: بہتر سوال کیسے پوچھیں تاکہ بہتر جواب ملے", "اچھی پرامپٹنگ کی رہنمائی مثالوں، وضاحت، اور عملی انداز پر ہونی چاہیے، نہ کہ مشکل نظری بحث پر۔", ["سادہ پرامپٹ فارمولے", "اردو اور انگریزی کا امتزاج", "سیاق و سباق کیوں ضروری ہے", "مبہم سوالات سے کیسے بچیں"]);
addArticlePage("image-tools", "اے آئی امیج ٹولز: کہاں مفید ہیں اور کہاں نہیں", "یہ صفحہ امیج ٹولز کو کری ایٹرز اور اساتذہ کے لیے مددگار کے طور پر پیش کرتا ہے، نہ کہ صرف ایک فیشن کے طور پر۔", ["واقعی مفید استعمال", "ٹیمپلیٹ ڈیزائن بمقابلہ ہر بار نیا پوسٹر", "کاپی رائٹ اور حفاظتی پہلو", "ابتدائی صارف کے لیے بہتر متبادل"]);
addArticlePage("teachers-guide", "اساتذہ کے لیے اے آئی: مددگار استعمال، استاد کا متبادل نہیں", "اساتذہ والی رہنمائی ذمہ دارانہ، قابل عمل، اور تعلیمی ماحول کی حقیقت کے مطابق ہونی چاہیے۔", ["سبق کی منصوبہ بندی", "ورک شیٹس کی تیاری", "ترجمہ اور فرق کے مطابق مدد", "اخلاقیات اور جانچ"]);
addArticlePage("students-guide", "طلبہ کے لیے اے آئی: بہتر سیکھنے کے لیے استعمال کریں، سوچنا بند کرنے کے لیے نہیں", "یہ صفحہ اے آئی کو ایک مطالعاتی مددگار کے طور پر پیش کرتا ہے، نہ کہ شارٹ کٹ مشین کے طور پر۔", ["ریسرچ میں مدد", "مشکل موضوعات سمجھنا", "پریکٹس سوالات", "تعلیمی دیانت"]);
addArticlePage("freelancers-guide", "فری لانسرز کے لیے اے آئی: کام تیز کریں مگر آواز اپنی رکھیں", "یہ صفحہ پروپوزلز، ابتدائی ڈرافٹس، تحقیق، اور ورک فلو سپورٹ پر توجہ دیتا ہے۔", ["پروپوزل لکھنا", "ریسرچ اور آؤٹ لائن", "کلائنٹ کمیونیکیشن", "اصل پن اور نظر ثانی"]);
addArticlePage("small-business", "چھوٹے کاروبار کے لیے اے آئی: مارکیٹنگ، سپورٹ، اور مواد میں حقیقی فائدے", "یہ مضمون کارپوریٹ زبان کے بجائے زمینی حقیقت اور روزمرہ کاموں پر مبنی ہونا چاہیے۔", ["کیپشنز اور کاپی", "کسٹمر جوابات", "سادہ ڈیزائن مدد", "روزمرہ انتظامی نوٹس"]);
addArticlePage("mobile-ai", "موبائل پر اے آئی: اینڈرائیڈ صارفین کے لیے عملی رہنمائی", "موبائل فرسٹ مضمون ضروری ہے کیونکہ اردو اے آئی کے بہت سے قارئین آغاز موبائل سے ہی کریں گے۔", ["بہترین موبائل استعمال", "ڈیٹا بچانے کی عادتیں", "کون سی چیز ڈیسک ٹاپ پر بہتر ہے", "سادہ ورک فلو کیسے رکھیں"]);
addArticlePage("free-tools", "مفت اے آئی ٹولز: واقعی کیا چیز بغیر ادائیگی کے قابل استعمال ہے", "اس صفحے پر اخلاص سے بتایا جانا چاہیے کہ کون سے ٹولز مفت ہیں، کہاں رکاوٹ ہے، اور کون سا آغاز بہتر ہے۔", ["مفت پلانز اور محدودیاں", "کون سے ٹولز موبائل پر اچھے ہیں", "پیڈ ورژن کب ضروری ہوتا ہے", "ابتدا کہاں سے کریں"]);
addArticlePage("ai-terms", "اے آئی اصطلاحات: آسان اردو میں مختصر لغت", "یہ صفحہ پوری ویب سائٹ کو زیادہ دوستانہ بناتا ہے اور انگریزی ترجمہ نما انداز کو کم کرتا ہے۔", ["ماڈل", "پرامپٹ", "جنریٹو اے آئی", "آٹومیشن"]);
addArticlePage("privacy-and-safety", "پرائیویسی اور سیفٹی: اے آئی ٹولز میں کیا چیز شیئر نہیں کرنی چاہیے", "یہ صفحہ ڈرانے کے بجائے اعتماد پیدا کرے اور لوگوں کو محفوظ عادتیں سکھائے۔", ["حساس معلومات", "پبلک اور پرائیویٹ ٹولز", "جوابات کی جانچ", "صحت مند شک"]);
addArticlePage("whatsapp-ai", "واٹس ایپ اور اے آئی: کہاں مفید ہے، کہاں احتیاط ضروری ہے", "واٹس ایپ چونکہ عام استعمال کی ایپ ہے، اس لیے یہ مضمون بھی سادہ اور عملی ہونا چاہیے۔", ["عام واٹس ایپ استعمال", "حدود", "پرائیویسی نکات", "کب الگ ٹول بہتر ہے"]);
addArticlePage("youtube-creators", "یوٹیوب کری ایٹرز کے لیے اے آئی: رفتار بڑھائیں مگر اپنی آواز قائم رکھیں", "یہ صفحہ اردو اے آئی کی ویڈیو حکمت عملی اور کری ایٹر کمیونٹی دونوں سے فطری طور پر جڑتا ہے۔", ["موضوع تلاش کرنا", "ٹائٹل آئیڈیاز", "اسکرپٹ میں مدد", "تھمب نیل پلاننگ"]);
addArticlePage("chatgpt-tool", "چیٹ جی پی ٹی ریویو: اردو بولنے والوں کے لیے اس کی اصل جگہ کیا ہے", "اس صفحے میں فائدہ، حقیقت پسندی، اور رسائی سے متعلق سادہ معلومات ایک ساتھ ہونی چاہئیں۔", ["بہترین استعمال", "مفت اور پیڈ نوٹس", "موبائل پر استعمال", "عام غلطیاں"]);
addArticlePage("gemini-tool", "جیمنی ریویو: روزمرہ استعمال میں گوگل کا یہ اسسٹنٹ کہاں فائدہ دیتا ہے", "یہ صفحہ سرچ سے جڑی مدد اور عام اے آئی تجربے کے فرق کو واضح کرتا ہے۔", ["سرچ اور خلاصہ", "ڈرافٹنگ", "اکاؤنٹ ضروریات", "ابتدائی استعمال"]);
addArticlePage("canva-tool", "کینوا اے آئی ریویو: نان ڈیزائنرز کے لیے آسان بصری مواد", "یہ صفحہ بڑی ڈیزائن حکمت عملی کی حمایت کرتا ہے اور دکھاتا ہے کہ کئی کام ٹیمپلیٹ سے ہی ہو سکتے ہیں۔", ["سوشل پوسٹس", "پریزنٹیشنز", "برانڈ یکسانیت", "کب کسٹم ڈیزائن بہتر ہے"]);
addArticlePage("midjourney-alternatives", "مڈجرنی کے متبادل: ان لوگوں کے لیے آسان آپشنز جو تصویر سازی آزمانا چاہتے ہیں", "یہ موازنہ صفحہ ان لوگوں کے لیے مفید ہے جو دلچسپی رکھتے ہیں مگر پیچیدہ یا مہنگے ورک فلو میں نہیں جانا چاہتے۔", ["رسائی کی آسانی", "قیمت", "ٹیمپلیٹ میں فٹ ہونا", "ابتدائی صارف کے لیے موزونیت"]);
addStandardPage(
  "faq",
  "ایک مضبوط سوالات و جوابات صفحہ قارئین اور اندرونی ٹیم دونوں کی الجھن کم کرتا ہے۔",
  "یہ صفحہ عام سوالات کے جواب دیتا ہے کہ اردو اے آئی کیا ہے، یہ پائلٹ کیسے کام کرتا ہے، اور لوگ اس پلیٹ فارم سے کیا توقع رکھیں۔",
  [
    { href: "/about.html", tag: "پس منظر", title: "ہمارے بارے میں", text: "مشن اور سامعین۔" },
    { href: "/start-here.html", tag: "قارئین", title: "یہاں سے شروع کریں", text: "ابتدائی لوگوں کے لیے بہترین راستہ۔" },
    { href: "/contact.html", tag: "رابطہ", title: "کانٹیکٹ", text: "شراکت داری اور سوالات کے لیے۔" },
  ]
);
addStandardPage(
  "community",
  "کمیونٹی صرف فوٹر میں چھپا ہوا حصہ نہیں ہونی چاہیے بلکہ پورے برانڈ کا نمایاں جزو ہونی چاہیے۔",
  "یہ صفحہ اردو اے آئی کو ایسی جگہ کے طور پر پیش کرتا ہے جہاں لوگ سوال، گفتگو، ورکشاپس اور سیکھنے کے لیے بار بار آئیں۔",
  [
    { href: "/newsletter.html", tag: "رابطہ", title: "نیوز لیٹر", text: "قارئین کو مسلسل جوڑے رکھیں۔" },
    { href: "/workshops.html", tag: "ایونٹس", title: "ورکشاپس", text: "آئندہ سیشنز اور مشترکہ لرننگ۔" },
    { href: "/contact.html", tag: "شراکت", title: "کانٹیکٹ", text: "تعاون کے لیے راستہ کھولیں۔" },
  ]
);

pages["ai-basics"].sections = [
  {
    title: "اے آئی کو سادہ لفظوں میں کیسے سمجھیں",
    body:
      "اے آئی کو جادو سمجھنے کے بجائے ایک ایسے سسٹم کے طور پر دیکھنا بہتر ہے جو متن، تصویر، آواز، یا ڈیٹا میں پیٹرنز دیکھ کر کام کرتا ہے۔ عام صارف کے لیے اہم سوال یہ نہیں کہ ماڈل کیسے ٹرین ہوا، بلکہ یہ ہے کہ یہ روزمرہ کے کس کام میں واقعی مدد دیتا ہے۔",
  },
  {
    title: "آج کے بڑے استعمال",
    body:
      "٢٠٢٦ میں عام لوگ اے آئی کو زیادہ تر لکھنے، خلاصہ بنانے، ترجمہ، تصویری مدد، مطالعہ، سرچ، اور آفس/کری ایٹر ورک فلو میں دیکھ رہے ہیں۔ بہترین نتیجہ تب آتا ہے جب صارف واضح سوال پوچھے اور جواب کو دوبارہ جانچے۔",
  },
  {
    title: "اردو میں سیکھنا کیوں ضروری ہے",
    body:
      "اگر سارا تعارف صرف انگریزی اصطلاحات میں ہو تو نئے صارف کو لگتا ہے کہ اے آئی اس کے لیے نہیں ہے۔ اردو اے آئی کا اصل فرق یہ ہے کہ قاری اپنی زبان میں سوال سمجھے، مثال سمجھے، اور عملی اگلا قدم بھی اپنی زبان میں دیکھے۔",
  },
];
pages["ai-basics"].list = [
  "اے آئی کو ٹول سمجھیں، عقلِ کل نہیں",
  "جواب جتنا اہم ہے، سوال بھی اتنا ہی اہم ہے",
  "مفت اور پیڈ ٹولز میں فرق سمجھیں",
  "حساس معلومات کبھی بھی بلا سوچے سمجھے شیئر نہ کریں",
];

pages["what-is-chatgpt"].summary =
  "اوپن اے آئی کے مطابق ChatGPT کے مفت ورژن میں محدود GPT-5 رسائی، ویب سرچ، فائل اپ لوڈ، وائس اور امیج ٹولز جیسی سہولیات حد کے ساتھ ملتی ہیں، جبکہ Plus پلان $20 ماہانہ ہے۔ بھارت میں ChatGPT adoption بہت تیزی سے بڑھا ہے، اس لیے یہ صفحہ بھارتی اردو قارئین کے لیے خاص اہمیت رکھتا ہے۔";
pages["what-is-chatgpt"].sections = [
  {
    title: "ChatGPT اصل میں کرتا کیا ہے",
    body:
      "یہ لکھنے، خلاصہ بنانے، سوال جواب، ابتدائی تحقیق، آئیڈیاز، ترجمہ، اور کبھی کبھی تصویر یا فائل کے ساتھ کام کرنے میں مدد دیتا ہے۔ یہ سرچ انجن کا مکمل متبادل نہیں، مگر صحیح سوال کے ساتھ ایک بہت مضبوط مددگار بن سکتا ہے۔",
  },
  {
    title: "مفت، Go، اور Plus میں فرق",
    body:
      "OpenAI کی Pricing اور Help Center کے مطابق مفت صارفین کو GPT-5 تک محدود رسائی، ویب سرچ، فائل اپ لوڈ، وائس اور امیج فیچرز حد کے ساتھ ملتے ہیں۔ ChatGPT Go جنوری 16، 2026 کو دنیا بھر میں متعارف ہوا اور امریکہ میں $8 ماہانہ بتایا گیا۔ Plus اب بھی $20 ماہانہ ہے اور زیادہ limits، advanced reasoning، deep research، image generation، voice اور custom GPTs جیسی سہولیات دیتا ہے۔",
  },
  {
    title: "اردو بولنے والے صارف کے لیے کہاں فائدہ ہے",
    body:
      "ابتدائی لکھائی، resume drafts، study notes، captions، خلاصہ، اور سادہ وضاحتوں میں ChatGPT کافی مددگار ہے۔ بھارتی طلبہ، job seekers، اور freelancers کے لیے یہ خاص طور پر useful ہو سکتا ہے، مگر ہر factual جواب کو دوبارہ جانچنا ضروری ہے۔",
  },
];
pages["what-is-chatgpt"].list = [
  "✅ مفت ورژن موجود ہے",
  "✅ موبائل ایپ دستیاب ہے",
  "✅ بھارتی beginners کے لیے strong entry tool",
  "⚠️ اہم facts دوبارہ verify کریں",
  "💰 Plus پلان: $20 ماہانہ",
];

pages["free-tools"].summary =
  "مفت اے آئی ٹولز موجود ہیں، لیکن ہر مفت ٹول ایک جیسا نہیں ہوتا۔ بھارتی users کے لیے اہم سوال یہ بھی ہے کہ کون سا ٹول mobile-friendly ہے، کون سا کم budget میں کام آتا ہے، اور کون سا واقعی beginners کے لیے مناسب ہے۔";
pages["free-tools"].sections = [
  {
    title: "ابتدا کے لیے تین آسان سمتیں",
    body:
      "عام بھارتی صارف کے لیے پہلی سطح پر ChatGPT Free، Gemini کی عام app access، اور Canva کے basic/free AI features اچھا آغاز ہو سکتے ہیں۔ مقصد یہ ہونا چاہیے کہ قاری ایک ساتھ دس ٹولز نہ آزمائے بلکہ دو یا تین مضبوط آپشنز سے کام شروع کرے۔",
  },
  {
    title: "مفت ہونے کا مطلب کیا نہیں ہے",
    body:
      "مفت کا مطلب unlimited نہیں ہوتا۔ اکثر مفت پلینز میں message limits، image generation limits، file upload restrictions، یا advanced models تک محدود رسائی ہوتی ہے۔ اس لیے Urdu AI پر ہر tool page میں واضح نوٹ ہونا چاہیے کہ مفت میں کیا واقعی ملتا ہے۔",
  },
  {
    title: "موبائل فرسٹ انتخاب",
    body:
      "اگر قاری Android پر ہے تو وہی tools ترجیح دیے جائیں جو app یا mobile web پر آرام سے چلیں۔ بھاری desktop-first tools شروع کے لیے مناسب نہیں ہوتے، چاہے وہ technically زیادہ طاقتور کیوں نہ ہوں۔",
  },
];
pages["free-tools"].list = [
  "ChatGPT Free: writing, search, files, voice کی محدود سہولت",
  "Gemini app: عام سوالات، search-linked مدد، اور منتخب advanced modes",
  "Canva free account: basic design workflow اور کچھ AI features limits کے ساتھ",
  "Claude Free: writing, analysis, web search جیسی محدود مگر مفید سہولتیں",
];

pages["gemini-tool"].summary =
  "Google کے حالیہ updates کے مطابق Gemini app اب Gemini 3 family اور Deep Think جیسے advanced reasoning modes کی طرف بڑھ چکی ہے۔ بھارت میں learning use cases اور Google ecosystem کی strong presence کی وجہ سے Gemini خاص اہمیت رکھتا ہے۔";
pages["gemini-tool"].sections = [
  {
    title: "Gemini کی اصل طاقت کہاں ہے",
    body:
      "Gemini ان صارفین کے لیے خاص طور پر مفید ہو سکتا ہے جو Google ecosystem میں رہتے ہیں۔ search-linked context، writing support، idea generation، اور multimodal capabilities اس کی نمایاں strengths ہیں۔",
  },
  {
    title: "Gemini 3 اور 3.1 کیوں اہم ہیں",
    body:
      "Google کے November 2025 اور February 2026 updates کے مطابق Gemini 3 family کو زیادہ intelligent multimodal model line کے طور پر پیش کیا گیا، جبکہ Gemini 3.1 کو complex problem solving کے لیے بہتر کیا گیا۔ اس سے یہ واضح ہوتا ہے کہ Gemini صرف casual chat tool نہیں بلکہ ایک تیزی سے evolve ہونے والا productivity اور reasoning ecosystem ہے۔",
  },
  {
    title: "Deep Think اور عام صارف کے لیے نوٹ",
    body:
      "Google نے Deep Think کو اپنے زیادہ advanced reasoning mode کے طور پر Google AI Ultra subscribers کے لیے نمایاں کیا۔ عام صارف کے لیے اہم بات یہ ہے کہ Gemini کی ہر capability سب کو ایک جیسی نہیں ملتی، اس لیے Urdu AI پر Gemini کو 'ایک tool' کے بجائے 'ایک evolving ecosystem' کے طور پر سمجھانا زیادہ درست ہوگا۔",
  },
];
pages["gemini-tool"].list = [
  "✅ Google ecosystem کے ساتھ اچھا fit",
  "✅ Gemini 3 / 3.1 reasoning direction",
  "⚠️ کچھ advanced features tier-specific ہیں",
  "⚠️ feature availability ملک اور plan کے حساب سے بدل سکتی ہے",
];

pages["chatgpt-tool"].summary =
  "ChatGPT ان صارفین کے لیے مضبوط tool ہے جو writing، learning، summaries، اور everyday productivity میں تیزی چاہتے ہیں۔ مگر plan choice اور fact-checking دونوں اہم ہیں۔";
pages["chatgpt-tool"].sections = [
  {
    title: "یہ tool کن لوگوں کے لیے بہتر ہے",
    body:
      "طلبہ، freelancers، teachers، content creators، اور small business users اس سے جلدی فائدہ اٹھا سکتے ہیں۔ resume drafting، caption ideas، research notes، اور email rewrites اس کے common use cases ہیں۔",
  },
  {
    title: "کیا paid plan ضروری ہے",
    body:
      "ہر کسی کے لیے نہیں۔ مفت plan سے بھی کافی سیکھا جا سکتا ہے۔ اگر روزانہ heavy use، long documents، advanced reasoning، deep research، یا زیادہ image/file usage چاہیے تو پھر Go یا Plus جیسے paid options پر غور کیا جا سکتا ہے۔",
  },
  {
    title: "اردو اے آئی کی editorial advice",
    body:
      "ChatGPT کو 'سوال پوچھنے کے آلے' کے طور پر پیش کریں، 'ہر جواب کے آخری authority' کے طور پر نہیں۔ یہی framing نئے صارف کے لیے سب سے محفوظ اور سب سے مفید ہے۔",
  },
];
pages["chatgpt-tool"].list = [
  "ابتدا: free tier کافی ہو سکتا ہے",
  "زیادہ استعمال: Go یا Plus دیکھیں",
  "تحقیق: جواب کے ساتھ source checking بھی کریں",
  "اردو: mixed Urdu + simple English prompts بھی کارآمد ہیں",
];

pages["canva-tool"].summary =
  "Canva کے مطابق Magic Studio اس کے AI tools کا مجموعہ ہے، اور مارچ 11، 2026 کو Canva نے Magic Layers نامی feature کا اعلان کیا جس سے flat images کو editable layered designs میں بدلا جا سکتا ہے۔";
pages["canva-tool"].sections = [
  {
    title: "Canva AI اردو اے آئی کے لیے کیوں اہم ہے",
    body:
      "کیونکہ ہر visual asset کے لیے الگ poster design ضروری نہیں۔ Canva غیر ڈیزائنرز کو social posts، simple covers، presentations، اور basic visual systems بنانے میں مدد دے سکتا ہے۔",
  },
  {
    title: "Magic Studio اور Magic Layers",
    body:
      "Canva کے official pages کے مطابق Magic Studio میں image، video، design generation اور دوسرے AI features شامل ہیں۔ مارچ 2026 میں Canva نے Magic Layers public beta کا اعلان کیا، جو static AI visuals کو editable layers میں بدلنے کی کوشش کرتا ہے تاکہ creator بعد میں design کو بہتر طریقے سے edit کر سکے۔",
  },
  {
    title: "عملی مشورہ",
    body:
      "Urdu AI کے لیے Canva کا بہترین استعمال custom poster factory بنانا نہیں، بلکہ ایک consistent template system بنانا ہے: article cover templates، social cards، thumbnail-safe layouts، اور featured image system۔",
  },
];
pages["canva-tool"].list = [
  "✅ beginners کے لیے آسان",
  "✅ template-based brand system کے لیے مفید",
  "⚠️ کچھ AI features paid tiers میں بہتر کھلتے ہیں",
  "⚠️ ہر asset کو over-design کرنے کی ضرورت نہیں",
];

pages["privacy-and-safety"].sections = [
  {
    title: "سب سے بنیادی اصول",
    body:
      "حساس معلومات جیسے CNIC نمبر، بینک تفصیل، passwords، confidential school/company documents، یا private client files کسی بھی AI tool میں بغیر سوچے paste نہیں کرنے چاہئیں۔",
  },
  {
    title: "جواب آیا تو بھی جانچ باقی ہے",
    body:
      "اے آئی اکثر پراعتماد انداز میں غلط بات بھی لکھ سکتا ہے۔ اس لیے facts، quotes، legal advice، medical information، اور statistics الگ source سے verify کرنا ضروری ہے۔",
  },
  {
    title: "اردو اے آئی کی readers policy",
    body:
      "ہر tool page پر کم از کم یہ تین چیزیں واضح ہونی چاہئیں: مفت یا paid، موبائل پر کام کرتا ہے یا نہیں، اور privacy risk کہاں ہو سکتا ہے۔ یہی عام قاری کے لیے سب سے قابلِ عمل safety guidance ہے۔",
  },
];
pages["privacy-and-safety"].list = [
  "حساس معلومات paste نہ کریں",
  "اہم حقائق verify کریں",
  "tool policy دیکھیں",
  "جواب پر اندھا اعتماد نہ کریں",
];

pages["newsletter"].headline = "اے آئی نیوز اور ہفتہ وار اپ ڈیٹس کو ایک ایسی شکل دی جا سکتی ہے جو قاری کے لیے واقعی مفید ہو۔";
pages["newsletter"].summary =
  "اس صفحے کو صرف signup page نہیں ہونا چاہیے۔ یہ Urdu AI کے لیے curated AI news, product updates, اور practical takeaways کا مرکز بن سکتا ہے۔";
pages["newsletter"].sections = [
  {
    title: "تازہ اپ ڈیٹ: ChatGPT Go اور اشتہارات کی آزمائش",
    body:
      "OpenAI نے 16 جنوری 2026 کو ChatGPT Go کو دنیا بھر میں متعارف کرایا اور بتایا کہ امریکہ میں یہ $8 ماہانہ ہوگا۔ اسی اعلان میں کمپنی نے یہ بھی کہا کہ وہ free tier اور Go میں امریکہ میں ads test کرنے کا ارادہ رکھتی ہے۔ Urdu AI کے لیے اس خبر کا مطلب یہ ہے کہ low-cost AI access اور ad-supported AI دونوں اب mainstream direction بن رہے ہیں۔",
  },
  {
    title: "تازہ اپ ڈیٹ: Canva Magic Layers",
    body:
      "Canva نے 11 مارچ 2026 کو Magic Layers کا اعلان کیا، جس کا مقصد flat AI images کو editable multi-layered designs میں بدلنا ہے۔ اگر یہ feature مضبوط بنتا ہے تو small creators اور non-designers کے لیے visual editing کافی آسان ہو سکتی ہے۔",
  },
  {
    title: "تازہ اپ ڈیٹ: Google Workspace میں Gemini",
    body:
      "10 مارچ 2026 کو Google نے اعلان کیا کہ Docs، Sheets، Slides، اور Drive میں Gemini کی نئی capabilities آ رہی ہیں۔ Urdu AI کے لیے اس خبر کا اہم مطلب یہ ہے کہ AI اب الگ app نہیں رہا بلکہ روزمرہ productivity tools کے اندر تیزی سے شامل ہو رہا ہے۔",
    },
];
pages["newsletter"].cards = [
  { href: "/what-is-chatgpt.html", tag: "ماڈل", title: "ChatGPT گائیڈ", text: "Go، Plus، اور عام استعمال کی سادہ وضاحت۔" },
  { href: "/gemini-tool.html", tag: "ماڈل", title: "Gemini گائیڈ", text: "Google ecosystem اور Gemini 3 کی سمت کو سمجھیں۔" },
  { href: "/canva-tool.html", tag: "ٹول", title: "Canva AI", text: "بصری workflow اور template-based design system." },
];

pages["students-guide"].sections = [
  {
    title: "بھارتی طلبہ کے لیے یہ موضوع کیوں اہم ہے",
    body:
      "بھارت میں ChatGPT اور Gemini کا استعمال تیزی سے بڑھ رہا ہے، خاص طور پر 18-24 عمر کے users میں۔ اسی لیے students-focused Urdu guidance ایک strong content opportunity بھی ہے اور practical ضرورت بھی۔",
  },
  {
    title: "مطالعہ میں کہاں فائدہ ہو سکتا ہے",
    body:
      "AI کو notes سمجھنے، difficult topics simplify کرنے، answer outlines بنانے، اور presentation prep کے لیے استعمال کیا جا سکتا ہے۔ لیکن assignment cheating یا blind copying کے لیے نہیں۔",
  },
  {
    title: "urduai.in کی approach",
    body:
      "یہ صفحہ AI کو student shortcut نہیں بلکہ study assistant کے طور پر frame کرتا ہے۔ یہی trust-building approach اس site کو باقی clickbait content سے مختلف بنائے گی۔",
  },
];
pages["students-guide"].list = [
  "امتحان کی تیاری میں خلاصہ اور revision help",
  "مشکل موضوعات کی آسان وضاحت",
  "presentation اور outline support",
  "academic honesty لازمی",
];

pages["newsletter"].headline = "بھارتی اردو قارئین کے لیے اے آئی نیوز اور practical updates کو سادہ انداز میں دیا جا سکتا ہے۔";
pages["newsletter"].summary =
  "یہ صفحہ صرف signup page نہیں ہونا چاہیے۔ یہ urduai.in کے لیے India-relevant AI news, product updates, اور simple Urdu takeaways کا مرکز بن سکتا ہے۔";
pages["newsletter"].cards = [
  { href: "/what-is-chatgpt.html", tag: "ماڈل", title: "ChatGPT گائیڈ", text: "بھارتی users، free vs paid، اور beginners کے لیے واضح رہنمائی۔" },
  { href: "/students-guide.html", tag: "طلبہ", title: "AI for Students", text: "بھارتی طلبہ کے use cases اور study support." },
  { href: "/gemini-tool.html", tag: "ماڈل", title: "Gemini گائیڈ", text: "Google ecosystem اور India learning angle." },
];

function renderPills(pills) {
  return pills.map((pill) => `<span class="pill">${pill}</span>`).join("");
}

function renderHomeNews(items) {
  return `
    <div class="news-list">
      ${items
        .map(
          (item) => `
            <a class="news-item" href="${item.href}">
              <span class="news-dot"></span>
              <span>${item.title}</span>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFactList(items) {
  return `
    <div class="fact-list">
      ${items.map((item) => `<div class="fact-item">${item}</div>`).join("")}
    </div>
  `;
}

function renderHeroScene() {
  return `
    <div class="hero-scene" aria-hidden="true">
      <svg viewBox="0 0 560 360">
        <defs>
          <linearGradient id="sceneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0d5b52"></stop>
            <stop offset="100%" stop-color="#d39a2f"></stop>
          </linearGradient>
        </defs>
        <rect x="28" y="48" width="190" height="238" rx="28" fill="#f8f4eb" stroke="#dfe7e4"></rect>
        <rect x="54" y="84" width="140" height="18" rx="9" fill="#0d5b52" opacity="0.18"></rect>
        <rect x="54" y="120" width="108" height="12" rx="6" fill="#d39a2f" opacity="0.22"></rect>
        <rect x="54" y="146" width="122" height="12" rx="6" fill="#0d5b52" opacity="0.1"></rect>
        <rect x="54" y="188" width="76" height="76" rx="22" fill="url(#sceneGradient)" opacity="0.16"></rect>
        <path d="M272 90c32-30 66-44 106-44 43 0 70 26 104 26 24 0 43-8 66-24" fill="none" stroke="url(#sceneGradient)" stroke-width="16" stroke-linecap="round"></path>
        <circle cx="380" cy="186" r="88" fill="#f8f4eb" stroke="#dfe7e4"></circle>
        <circle cx="380" cy="186" r="46" fill="none" stroke="#0d5b52" stroke-width="12" opacity="0.18"></circle>
        <circle cx="380" cy="186" r="10" fill="#0d5b52"></circle>
        <rect x="284" y="246" width="212" height="76" rx="24" fill="#f8f4eb" stroke="#dfe7e4"></rect>
        <rect x="312" y="272" width="116" height="12" rx="6" fill="#0d5b52" opacity="0.16"></rect>
        <rect x="312" y="294" width="88" height="12" rx="6" fill="#d39a2f" opacity="0.24"></rect>
        <circle cx="506" cy="274" r="16" fill="#0d5b52"></circle>
      </svg>
    </div>
  `;
}

function renderVisualModules() {
  return `
    <div class="visual-module-grid">
      <article class="visual-module visual-module-cover">
        <div class="visual-copy">
          <span class="tag">نمونہ کور</span>
          <h3>گائیڈز کے لیے ایک ہی برانڈ سسٹم</h3>
          <p>ہر اہم مضمون کے لیے صاف اردو عنوان، ایک visual motif، اور consistent cover treatment۔</p>
        </div>
        <div class="cover-sample" aria-hidden="true">
          <div class="cover-chip">رہنمائی</div>
          <strong>چیٹ جی پی ٹی کیا ہے؟</strong>
          <span>اردو میں آسان تعارف</span>
        </div>
      </article>
      <article class="visual-module visual-module-icons">
        <div class="visual-copy">
          <span class="tag">فوری سمجھ</span>
          <h3>صفحے کے اندر visual breaks</h3>
          <p>badges، icons، comparison cards، اور quick facts boxes reading کو بہتر بناتے ہیں۔</p>
        </div>
        <div class="mini-badges" aria-hidden="true">
          <span class="mini-badge">مفت</span>
          <span class="mini-badge">موبائل</span>
          <span class="mini-badge">آسان</span>
        </div>
      </article>
    </div>
  `;
}

function renderArticleCover(page) {
  return `
    <section class="article-cover">
      <div class="article-cover-copy">
        <span class="tag">${page.kicker}</span>
        <h2>${page.headline}</h2>
        <p>${page.summary}</p>
      </div>
      <div class="article-cover-art" aria-hidden="true">
        <svg viewBox="0 0 340 220">
          <defs>
            <linearGradient id="coverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0d5b52"></stop>
              <stop offset="100%" stop-color="#d39a2f"></stop>
            </linearGradient>
          </defs>
          <rect x="30" y="24" width="280" height="172" rx="26" fill="#fff8ed" stroke="#e1e8e3"></rect>
          <path d="M62 150c34-42 72-66 118-66 48 0 72 30 108 30" fill="none" stroke="url(#coverGradient)" stroke-width="14" stroke-linecap="round"></path>
          <circle cx="108" cy="92" r="18" fill="#0d5b52" opacity="0.14"></circle>
          <circle cx="246" cy="138" r="15" fill="#d39a2f" opacity="0.24"></circle>
          <rect x="76" y="48" width="132" height="14" rx="7" fill="#0d5b52" opacity="0.14"></rect>
        </svg>
      </div>
    </section>
  `;
}

function renderIcon(kind = "spark") {
  const icons = {
    spark: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6l3.8 10.2L38 20l-10.2 3.8L24 34l-3.8-10.2L10 20l10.2-3.8L24 6z"></path>
      </svg>
    `,
    orbit: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="5"></circle>
        <path d="M8 24c0-7 7-13 16-13s16 6 16 13-7 13-16 13S8 31 8 24z"></path>
      </svg>
    `,
    wave: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M6 28c6 0 6-8 12-8s6 8 12 8 6-8 12-8"></path>
      </svg>
    `,
  };

  return `<span class="svg-badge">${icons[kind] || icons.spark}</span>`;
}

function renderCards(cards) {
  return cards
    .map(
      (card) => `
        <a class="card" href="${card.href}">
          <div class="card-top">
            ${renderIcon("orbit")}
            <span class="tag">${card.tag}</span>
          </div>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </a>
      `
    )
    .join("");
}

function renderSections(sections) {
  return sections
    .map(
      (section) => `
        <article class="section-card">
          <div class="section-card-top">
            ${renderIcon("wave")}
          </div>
          <h3>${section.title}</h3>
          <p>${section.body}</p>
        </article>
      `
    )
    .join("");
}

function renderArticleList(items) {
  return `
    <div class="article-list">
      ${items
        .map(
          (item, index) => `
            <article class="article-item">
              <span class="list-index">${index + 1}</span>
              <div>
                <div class="article-item-top">
                  ${renderIcon(index % 2 === 0 ? "spark" : "orbit")}
                </div>
                <h3>${item}</h3>
                <p>پروڈکشن ورژن میں یہی جگہ مکمل مضمون کے اس حصے کے لیے استعمال ہوگی۔</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div>
        <strong>urduai.in</strong>
        <p>بھارت کے لیے اردو فرسٹ اے آئی لرننگ پائلٹ۔</p>
      </div>
      <div class="footer-links">
        ${spotlightLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
      </div>
    </footer>
  `;
}

function renderHomePage(page) {
  return `
    <div class="page home-page">
      <header class="site-header">
        <a class="brand" href="/index.html">
          <span class="brand-mark">اے</span>
          <span class="brand-copy">
            <strong>urduai.in</strong>
            <small>بھارت کے لیے اردو فرسٹ اے آئی پلیٹ فارم</small>
          </span>
        </a>
        <nav class="site-nav">
          ${navLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
        </nav>
      </header>

      <main>
        <section class="hero hero-home">
          <div class="hero-copy">
            <div class="hero-project-banner" aria-hidden="true">
              <span>THIS IS</span>
              <span>AN URDU AI</span>
              <span>PROJECT</span>
            </div>
            <p class="eyebrow">${page.kicker}</p>
            <p class="hero-project-kicker">This is an Urdu AI Project</p>
            <h1>${page.headline}</h1>
            <p class="summary">${page.summary}</p>
            <div class="hero-actions">
              <a class="cta-primary" href="/start-here.html">یہاں سے شروع کریں</a>
              <a class="cta-secondary" href="${page.featured.href}">آج کی اہم گائیڈ</a>
            </div>
          </div>
          <aside class="hero-aside hero-learning">
            <p class="urdu-line">پہلے سمجھیں، پھر آزمائیں، پھر اپنے کام میں استعمال کریں</p>
            ${renderHeroScene()}
            <div class="start-box">
              <div class="start-box-head">
                ${renderIcon("spark")}
                <strong>نئے قاری کے لیے راستہ</strong>
              </div>
              <ul class="start-list">
                ${page.startHere.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </aside>
        </section>

        <section class="home-grid">
          <div class="main-column">
            <section class="feature-section feature-first">
              <div class="section-head">
                <p class="eyebrow">آج کی نمایاں چیز</p>
                <h2>سب سے پہلے کیا پڑھیں</h2>
              </div>
              <a class="featured-story" href="${page.featured.href}">
                <div class="featured-story-top">
                  ${renderIcon("orbit")}
                  <span class="tag">${page.featured.tag}</span>
                </div>
                <h3>${page.featured.title}</h3>
                <p>${page.featured.text}</p>
              </a>
            </section>

            <section class="feature-section">
              <div class="section-head">
                <p class="eyebrow">سیکھنے کے راستے</p>
                <h2>طلبہ، فری لانسرز، اور beginners کے لیے اہم صفحات</h2>
              </div>
              <div class="card-grid">${renderCards(page.cards.slice(0, 4))}</div>
            </section>

            <section class="feature-section">
              <div class="section-head">
                <p class="eyebrow">visual system</p>
                <h2>یہ سائٹ خالی نہیں، منظم محسوس ہونی چاہیے</h2>
              </div>
              ${renderVisualModules()}
            </section>

            <section class="feature-section">
              <div class="section-head">
                <p class="eyebrow">تازہ اپ ڈیٹس</p>
                <h2>اے آئی نیوز، آسان اردو میں</h2>
              </div>
              ${renderHomeNews(page.news)}
            </section>
          </div>

          <aside class="home-sidebar">
            <div class="sidebar-card spotlight-box">
              <span class="tag">شروع کرنے کے لیے</span>
              <h3>یہ 5 صفحات پہلے دیکھیں</h3>
              <div class="sidebar-links">
                ${spotlightLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
              </div>
            </div>
            <div class="sidebar-card newsletter-box">
              <span class="tag">ہفتہ وار اپ ڈیٹس</span>
              <h3>نیوز لیٹر کے ذریعے جڑے رہیں</h3>
              <p>ہر ہفتے سادہ اردو میں بھارت سے متعلق tools، models، اور اہم AI updates.</p>
              <a class="cta-primary cta-small" href="/subscribe.html">سبسکرائب کریں</a>
            </div>
          </aside>
        </section>
      </main>
      ${renderFooter()}
    </div>
  `;
}

function renderPage(page) {
  if (page.type === "home") {
    return renderHomePage(page);
  }

  const layoutClass = page.type === "article" ? "page article-page" : "page";
  const featureBlock =
    page.type === "article"
      ? renderArticleList(page.list)
      : `<div class="card-grid">${renderCards(page.cards || [])}</div>`;
  const bodyBlock =
    page.type === "article"
      ? `
        <section class="article-intro">
          <div class="article-intro-main">
            ${renderSections(page.sections)}
          </div>
          <aside class="article-facts">
            <div class="sidebar-card">
              <span class="tag">فوری رہنمائی</span>
              <h3>اس صفحے سے کیا ملے گا</h3>
              ${renderFactList(page.facts || [])}
            </div>
          </aside>
        </section>
      `
      : `
        <section class="body-grid">
          <div class="content-stack">
            ${renderSections(page.sections)}
          </div>
          <aside class="sidebar">
            <div class="sidebar-card">
              <span class="tag">نمایاں صفحات</span>
              <h3>اس پائلٹ کے اہم صفحات</h3>
              <div class="sidebar-links">
                ${spotlightLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
              </div>
            </div>
          </aside>
        </section>
      `;

  return `
    <div class="${layoutClass}">
      <header class="site-header">
        <a class="brand" href="/index.html">
          <span class="brand-mark">اے</span>
          <span class="brand-copy">
            <strong>urduai.in</strong>
            <small>بھارت کے لیے اردو فرسٹ اے آئی پلیٹ فارم</small>
          </span>
        </a>
        <nav class="site-nav">
          ${navLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
        </nav>
      </header>

      <main>
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow">${page.kicker}</p>
            <h1>${page.headline}</h1>
            <p class="summary">${page.summary}</p>
            <div class="pill-row">${renderPills(page.pills)}</div>
          </div>
          <aside class="hero-aside">
            <p class="urdu-line">اردو میں اے آئی کو سمجھنا آسان ہونا چاہیے</p>
            <div class="hero-art" aria-hidden="true">
              <svg viewBox="0 0 320 120">
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0d5b52"></stop>
                    <stop offset="100%" stop-color="#d39a2f"></stop>
                  </linearGradient>
                </defs>
                <path d="M18 72c38-34 78-50 122-50 38 0 66 18 90 18 23 0 44-8 72-28" fill="none" stroke="url(#heroGradient)" stroke-width="10" stroke-linecap="round"></path>
                <circle cx="72" cy="82" r="14" fill="#0d5b52" opacity="0.12"></circle>
                <circle cx="250" cy="42" r="10" fill="#d39a2f" opacity="0.24"></circle>
              </svg>
            </div>
            <div class="aside-card">
              <span>اس پائلٹ کا مقصد</span>
              <strong>آسان مطالعہ، واضح سیکھنا، اور منظم پبلشنگ</strong>
            </div>
            <div class="aside-card">
              <span>ٹیم کن چیزوں کو دیکھے</span>
              <strong>برانڈ، پڑھنے کا تجربہ، ساخت، اور مواد کی سمت</strong>
            </div>
          </aside>
        </section>

        ${page.type === "article" ? renderArticleCover(page) : ""}

        ${bodyBlock}

        <section class="feature-section">
          <div class="section-head">
            <p class="eyebrow">مزید دیکھیں</p>
            <h2>${page.type === "article" ? "مضمون کی ساخت کی جھلک" : "اس پائلٹ کے متعلقہ صفحات"}</h2>
          </div>
          ${featureBlock}
        </section>
      </main>
      ${renderFooter()}
    </div>
  `;
}

const pageKey = document.body.dataset.page;
const app = document.getElementById("app");
app.innerHTML = renderPage(pages[pageKey] || pages.home);
