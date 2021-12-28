'use strict';
//전략패턴
//선택된 모드에따라서 실행되는 방식을 결정
//지정된 특정 메소드가 모듈화된 모드에 따라 다르게 실행

const SearchButton = (function () {
  let searchStrategy;
  const F = function () {};
  (function () {
    this.setStrategy = function (_searchStrategy) {
      searchStrategy = _searchStrategy;
    };
    this.onClick = function () {
      searchStrategy();
    };
  }.call(F.prototype));
  return F;
})();

const searchMap = function () {
  console.log('지도 검색');
};
const searchMusic = function () {
  console.log('음악검색');
};

const button = new SearchButton();
button.setStrategy(searchMap);
button.onClick();
button.setStrategy(searchMusic);
button.onClick();
