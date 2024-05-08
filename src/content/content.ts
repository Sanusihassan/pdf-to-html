type tool_type = {
  PDF_to_HTML: {
    title: string;
    seoTitle: string;
    description: string;
    color: string;
    type: string;
    to: string;
    features: { title: string; description: string }[]
  }
}
export const tool: tool_type = {
  PDF_to_HTML: {
    title: "PDF to HTML",
    seoTitle: "Convert PDF to HTML Online - PDF to HTML Converter | PDFEquips",
    description: "Convert PDF files to HTML documents",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
    features: [
      {
        title: "Convert instantly, no sign-up required.",
        description: "No need to register or give us any information to change your PDF to HTML. Our converter is free for everyone and super fast"
      },
      {
        title: "Secure document management.",
        description: "Your downloads and generated files are processed with TLS encryption and are immediately deleted for added security Check our privacy policy for more information"
      },
      {
        title: "Cloud-based processing.",
        description: "One of the main advantages of our online service is that all PDF to HTML conversions are done in the cloud This means it won't slow down your computer, and you can use our service from anywhere and at any time"
      }
    ]
  },
};

// this is the updated object that i want, now i want you to translate this object with the same keys but just translate the string values to ar, es, fr, hi and zh respectivly
export const edit_page = {
  edit_page_titles: {
    pdf_to_html: "PDF to HTML options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    pdf_to_html: "Convert to HTML",
  },
  pages: "pages",
  page: "page",
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "pdf-to-html": [
      "PDF files have been converted to HTML!",
      "PDF file has been converted to HTML!",
    ],
  },

  btnText: {
    "pdf-to-html": [
      "Download Converted HTML files",
      "Download Converted HTML file",
    ],
  },

  backto: {
    "pdf-to-html": "Back To PDF to HTML",
  },
};

export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
  title: "Free Online PDF Tools"
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
};
