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
    title: "PDF 转 HTML",
    seoTitle: "在线将 PDF 转换为 HTML - PDF 转 HTML 转换器 | PDFEquips",
    description: "将 PDF 文件转换为 HTML 文档",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
    features: [
      {
        title: "即时转换，无需注册。",
        description: "无需注册或提供任何信息即可将您的PDF转换为HTML。我们的转换器对所有人都是免费的，而且速度非常快。"
      },
      {
        title: "安全的文档管理。",
        description: "您的下载和生成的文件都经过TLS加密处理，立即删除以提高安全性。查看我们的隐私政策以获取更多信息。"
      },
      {
        title: "基于云的处理。",
        description: "我们在线服务的主要优势之一是所有的PDF到HTML转换都是在云端进行的。这意味着它不会减慢您的计算机，您可以随时随地使用我们的服务。"
      }
    ]

  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-html": ["PDF文件已转换为HTML！", "PDF文件已转换为HTML！"],
  },
  btnText: {
    "pdf-to-html": ["下载转换后的HTML文件", "下载转换后的HTML文件"],
  },
  backto: {
    "pdf-to-html": "返回PDF转HTML",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_html: "PDF 到 HTML 选项",
  },
  loader_text: "请稍候...",
  add_more_button: "添加更多文件",
  action_buttons: {
    pdf_to_html: "转换为HTML",
  },
  pages: "页",
  page: "页",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
  title: "免费在线PDF工具"
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};
