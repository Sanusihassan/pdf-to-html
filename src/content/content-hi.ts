import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  PDF_to_HTML: {
    title: "PDF से HTML",
    seoTitle: "PDF से HTML ऑनलाइन - PDF से HTML कनवर्टर | PDFEquips",
    description: "PDF फ़ाइलें HTML दस्तावेज़ों में बदलें",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
    features: [
      {
        title: "तत्काल परिवर्तन, कोई साइन अप की आवश्यकता नहीं।",
        description: "अपने PDF को HTML में बदलने के लिए रजिस्टर करने या हमें कोई जानकारी नहीं देने की आवश्यकता नहीं है। हमारा कनवर्टर सभी के लिए मुफ्त है और बेहद तेज है।"
      },
      {
        title: "सुरक्षित दस्तावेज प्रबंधन।",
        description: "आपके डाउनलोड और उत्पन्न फ़ाइलें TLS एन्क्रिप्शन के साथ प्रोसेस की जाती हैं और अतिरिक्त सुरक्षा के लिए तुरंत हटा दी जाती हैं। अधिक जानकारी के लिए हमारी गोपनीयता नीति की जाँच करें।"
      },
      {
        title: "क्लाउड-आधारित प्रोसेसिंग।",
        description: "हमारी ऑनलाइन सेवा का एक मुख्य लाभ यह है कि सभी PDF से HTML परिवर्तन क्लाउड में किया जाता है। इसका मतलब है कि यह आपके कंप्यूटर को धीमा नहीं करेगा, और आप कहीं भी और कभी भी हमारी सेवा का उपयोग कर सकते हैं।"
      }
    ]

  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-html": [
      "PDF फ़ाइलें HTML में रूपांतरित की गईं!",
      "PDF फ़ाइल को HTML में रूपांतरित किया गया है!",
    ],
  },
  btnText: {
    "pdf-to-html": [
      "HTML में रूपांतरित की गई PDF फ़ाइलें डाउनलोड करें",
      "HTML में रूपांतरित की गई PDF फ़ाइल डाउनलोड करें",
    ],
  },
  backto: {
    "pdf-to-html": "PDF से HTML को वापस जाएं",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_html: "PDF से HTML विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    pdf_to_html: "HTML में परिवर्तित करें",
  },
  pages: "पृष्ठ",
  page: "पृष्ठ",
};
export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "शर्तें",
  privacy_policy: "गोपनीयता नीति",
  title: "मुफ्त ऑनलाइन PDF उपकरण"
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
};
