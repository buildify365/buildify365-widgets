# buildify365-widgets

티스토리 블로그 시리즈 목차 위젯 — [buildify365](https://www.buildify365.com/ko)

## 파일 구조

```
buildify365-widgets/
├── series-nav.js          ← 렌더링 엔진 (모든 시리즈가 공유, 수정 불필요)
├── series/
│   ├── test.js       ← 시리즈 데이터 (이 파일만 수정)
│   └── 다른시리즈.js     ← 새 시리즈는 여기에 파일만 추가!
└── README.md
```

> **핵심:** `series-nav.js`는 한 번만 올리면 끝입니다.
> 새 시리즈를 만들 때는 `series/` 폴더에 데이터 파일(.js)만 추가하면 됩니다.

## 처음 세팅하기

1. 이 repo의 GitHub Pages를 활성화하세요 (Settings → Pages → main branch)
2. 티스토리 글에서 HTML 모드로 전환 후 아래 코드를 붙여넣으세요:

```html
<div id="snav-test"></div>
<script src="https://본인아이디.github.io/buildify365-widgets/series-nav.js"></script>
<script src="https://본인아이디.github.io/buildify365-widgets/series/test.js"></script>
```

3. 글을 추가/수정할 때는 `series/test.js` 파일만 수정하면 모든 글에 자동 반영됩니다!

## 새 시리즈 추가하기

1. [시리즈 목차 생성기](https://www.buildify365.com/ko)에서 새 시리즈를 만드세요
2. **시리즈 데이터 파일(.js)만 다운로드**해서 `series/` 폴더에 업로드
3. 렌더링 엔진(`series-nav.js`)은 이미 있으므로 다시 올릴 필요 없습니다!

---
powered by [buildify365](https://www.buildify365.com/ko)
