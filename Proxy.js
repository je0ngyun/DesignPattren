'use strict';
//실행시킬 클래스에 대한 객체가 들어갈 자리에 대리자 객체를 대신 투입

class IPreviewService {
  constructor(_title, _uri) {
    this.title = _title;
    this.uri = _uri;
  }
  showTitle() {
    console.log(this.title);
  }
}

class Proxy extends IPreviewService {
  constructor(title, uri) {
    super(title, uri);
  }
  showPreview() {
    if (this.PreviewService == undefined) {
      this.PreviewService = new PreviewService(this.title, this.uri);
      this.PreviewService.showPreview();
    }
  }
}

class PreviewService extends IPreviewService {
  constructor(title, uri) {
    super(title, uri);
  }
  showPreview() {
    console.log(`실제 서비스 객체 실행 - ${this.uri},${this.title}`);
  }
}

let preview = new Proxy('타이틀', 'URI');
preview.showTitle();
preview.showPreview();

//응용해보기 title,uri 캡슐화
const C_Proxy = function (_title, _uri) {
  let title;
  let uri;
  let PreviewService;
  class C_IPreviewService {
    constructor(_title, _uri) {
      title = _title;
      uri = _uri;
    }
    showTitle() {
      console.log(title);
    }
  }
  class C_PreviewService extends C_IPreviewService {
    showPreview() {
      console.log(`실제 서비스 객체 실행 - ${uri},${title}`);
    }
  }
  class C_Proxy extends C_IPreviewService {
    constructor(title, uri) {
      super(title, uri);
    }
    showPreview() {
      if (PreviewService == undefined) {
        PreviewService = new C_PreviewService(title, uri);
        PreviewService.showPreview();
        return;
      }
      PreviewService.showPreview();
    }
  }
  return new C_Proxy(_title, _uri);
};

//1과 2는 독립된 렉시컬 환경
let c_preview1 = new C_Proxy('1타이틀', '1URI');
c_preview1.showTitle();
c_preview1.showPreview();

let c_preview2 = new C_Proxy('2타이틀', '2URI');
c_preview2.showTitle();
c_preview2.showPreview();

c_preview1.showTitle();
c_preview1.showPreview();
