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
    title: "PDF vers HTML",
    seoTitle:
      "Convertir PDF en HTML en ligne - Convertisseur PDF en HTML | PDFEquips",
    description: "Convertir des fichiers PDF en documents HTML",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
    features: [
      {
        title: "Conversion instantanée, aucun enregistrement requis.",
        description: "Pas besoin de vous inscrire ou de nous fournir des informations pour convertir votre PDF en HTML. Notre convertisseur est gratuit pour tout le monde et très rapide."
      },
      {
        title: "Gestion sécurisée des documents.",
        description: "Vos téléchargements et fichiers générés sont traités avec un chiffrement TLS et sont immédiatement supprimés pour une sécurité accrue. Consultez notre politique de confidentialité pour plus d'informations."
      },
      {
        title: "Traitement basé sur le cloud.",
        description: "L'un des principaux avantages de notre service en ligne est que toutes les conversions de PDF en HTML sont effectuées dans le cloud. Cela signifie que cela n'alourdira pas votre ordinateur et vous pouvez utiliser notre service de n'importe où et à tout moment."
      }
    ]
  },
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-html": [
      "Conversion de fichiers PDF en HTML réussie !",
      "Conversion de fichier PDF en HTML réussie !",
    ],
  },
  btnText: {
    "pdf-to-html": [
      "Télécharger les fichiers HTML convertis",
      "Télécharger le fichier HTML converti",
    ],
  },
  backto: {
    "pdf-to-html": "Retour à PDF vers HTML",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_html: "Options de conversion PDF en HTML",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    pdf_to_html: "Convertir en HTML",
  },
  pages: "pages",
  page: "page",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions",
  privacy_policy: "politique de confidentialité",
  title: "Outils PDF en ligne gratuits"
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};
