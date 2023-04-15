import { useEffect } from "react";
declare global {
  interface Window {
    DocsAPI?: any;
    DocEditor?: any;
  }
}
interface EmrConfig {
  id?: string
  documentServerUrl: string;
  onLoadComponentError?: any;
  document_fileType: string;
  document_title: string;
  documentType: string;
  editorConfig_lang?: string;
  onAppReady?: any;
  events_onDocumentStateChange?: any;
  events_onMetaChange?: any;
  events_onDocumentReady?: any;
  height: string | number;
  width: string | number;
  type: string | number;
}
let opt: EmrConfig = {
  documentServerUrl: 'http://localhost/', id: 'test', height: 900, width: 1600, document_fileType: 'docx',
  document_title: 'demo.docx', documentType: 'word', type: 'word', editorConfig_lang: 'zh',

};


const loadScript = async (url: string, id: string) => {
  return new Promise((resolve, reject) => {
    try {
      if (document.getElementById(id)) {
        if (window['DocsAPI']) return resolve(null);

        let intervalHandler = setInterval(() => {
          if (!window['DocsAPI']) return;

          clearInterval(intervalHandler);

          return resolve(null);
        }, 500);
      } else {
        const script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("id", id);

        script.onload = resolve;
        script.onerror = reject;

        script.src = url;
        script.async = true;

        document.body.appendChild(script);
      }
    } catch (e) {
      console.error(e);
    }
  });
};

const onError = (errorCode: number) => {
  let message;

  switch (errorCode) {
    case -2:
      message = "Error load DocsAPI from " + opt.documentServerUrl;
      break;
    case -3:
      message = "DocsAPI is not defined";
      break;
    default:
      message = "Unknown error loading component";
      errorCode = -1;
  }

  if (typeof opt.onLoadComponentError == "undefined") {
    console.error(message);
  } else {
    // onLoadComponentError(errorCode, message);
  }
}


const onLoad = () => {
  try {
    if (!window['DocsAPI']) onError(-3);
    if (window['DocEditor']?.instances[opt.id]) {
      console.log("Skip loading. Instance already exists", opt.id);
      return;
    }

    if (!window?.DocEditor?.instances) {
      window.DocEditor = { instances: {} };
    }

    let initConfig = Object.assign({
      document: {
        fileType: opt.document_fileType,
        title: opt.document_title,

      },
      documentType: opt.documentType,
      editorConfig: {
        lang: opt.editorConfig_lang,
      },
      events: {
        onAppReady: opt.onAppReady,
        onDocumentStateChange: opt.events_onDocumentStateChange,
        onMetaChange: opt.events_onMetaChange,
        onDocumentReady: opt.events_onDocumentReady,
        // onInfo: opt.events_onInfo,
        // onWarning: this.events_onWarning,
        // onError: this.events_onError,
        // onRequestSharingSettings: this.events_onRequestSharingSettings,
        // onRequestRename: this.events_onRequestRename,
        // onMakeActionLink: this.events_onMakeActionLink,
        // onRequestInsertImage: this.events_onRequestInsertImage,
        // onRequestSaveAs: this.events_onRequestSaveAs,
        // onRequestMailMergeRecipients: this.events_onRequestMailMergeRecipients,
        // onRequestCompareFile: this.events_onRequestCompareFile,
        // onRequestEditRights: this.events_onRequestEditRights,
        // onRequestHistory: this.events_onRequestHistory,
        // onRequestHistoryClose: this.events_onRequestHistoryClose,
        // onRequestHistoryData: this.events_onRequestHistoryData,
        // onRequestRestore: this.events_onRequestRestore
      },
      height: opt.height,
      type: opt.type,
      width: opt.width,
    }, {
      document: {
        // "url": "http://localhost/example/download?fileName=new.docx&useraddress=172.17.0.1",
        "url": "http://localhost/example/download?fileName=new%20(1).docx&useraddress=172.17.0.1",

        "key": "172.17.0.1new__1_.docx91681518270191",

        fileType: 'docx',
        title: opt.document_title,


      },
      editorConfig: {
        lang: 'zh',
        mode: "edit",
        user: {
          id: "uid-1",
          name: "John Smith",
        },
        plugins: {
          autostart:
            ['asc.{FFE1F462-1EA2-4391-990D-4CC849400058}'],
          pluginsData: [
            'http://localhost:5173/config.json'

          ]
        },
      },
    });
    debugger;
    const editor = window['DocsAPI'].DocEditor(opt.id, initConfig);
    window['editor'] = editor;
    window['DocEditor'].instances[opt.id] = editor;
  } catch (err: any) {
    console.error(err);
    // this.onError(-1);
  }
};


export default function Index() {

  let url = opt.documentServerUrl;
  if (!url.endsWith("/")) url += "/";

  const docApiUrl = `${opt.documentServerUrl}web-apps/apps/api/documents/api.js`;
  useEffect(() => {
    loadScript(docApiUrl, "onlyoffice-api-script")
      .then(() => onLoad())
      .catch((err) => {
        console.error(err);
      });

  }, [])


  return <div id={opt.id}></div>
}